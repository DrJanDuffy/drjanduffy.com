# PowerShell script to fix all apostrophes in single-quoted strings
# This will escape apostrophes in metadata and data structures

$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$patterns = @(
    @{ pattern = "DIDN'T"; replacement = "DIDN\'T" }
    @{ pattern = "didn't"; replacement = "didn\'t" }
    @{ pattern = "won't"; replacement = "won\'t" }
    @{ pattern = "can't"; replacement = "can\'t" }
    @{ pattern = "couldn't"; replacement = "couldn\'t" }
    @{ pattern = "That Didn't"; replacement = "That Didn\'t" }
    @{ pattern = "that didn't"; replacement = "that didn\'t" }
    @{ pattern = "That Won't"; replacement = "That Won\'t" }
    @{ pattern = "that won't"; replacement = "that won\'t" }
)

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($item in $patterns) {
        # Only replace in single-quoted strings (not in JSX attributes or double-quoted strings)
        # Look for pattern within single quotes
        $regex = "('([^']*?)" + [regex]::Escape($item.pattern) + "([^']*?)')"
        $matches = [regex]::Matches($content, $regex, 'IgnoreCase')
        
        if ($matches.Count -gt 0) {
            foreach ($match in $matches) {
                $fullMatch = $match.Value
                $replaced = $fullMatch -replace [regex]::Escape($item.pattern), $item.replacement
                $content = $content -replace [regex]::Escape($fullMatch), $replaced
                $fileReplacements++
                $totalReplacements++
            }
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements replacements" -ForegroundColor Green
        $filesChanged++
    }
}

Write-Host "`n=== APOSTROPHE FIX COMPLETE ===" -ForegroundColor Cyan
Write-Host "Files changed: $filesChanged" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Yellow

