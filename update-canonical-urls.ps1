# PowerShell script to update all relative canonical URLs to absolute URLs
$baseUrl = 'https://www.drjanduffy.com'
$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx" -File

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
    $originalContent = $content
    $fileReplacements = 0
    
    # Pattern 1: canonical: '/path'
    $pattern1 = "canonical:\s*['`"]/([^'`"]+)['`"]"
    $matches1 = [regex]::Matches($content, $pattern1)
    
    foreach ($match in $matches1) {
        $path = $match.Groups[1].Value
        $fullUrl = "$baseUrl/$path"
        $replacement = "canonical: '$fullUrl'"
        $content = $content -replace [regex]::Escape($match.Value), $replacement
        $fileReplacements++
        $totalReplacements++
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements replacements" -ForegroundColor Green
        $filesChanged++
    }
}

Write-Host "`n=== CANONICAL URL UPDATE COMPLETE ===" -ForegroundColor Cyan
Write-Host "Files changed: $filesChanged" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Yellow

