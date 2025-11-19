# PowerShell script to fix escaped apostrophes in string literals
# Replaces escaped contractions like didn\'t with spelled-out versions

$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$replacements = @(
    @{ pattern = "didn\\'t"; replacement = "did not" }
    @{ pattern = "DIDN\\'T"; replacement = "DID NOT" }
    @{ pattern = "won\\'t"; replacement = "will not" }
    @{ pattern = "WON\\'T"; replacement = "WILL NOT" }
    @{ pattern = "can\\'t"; replacement = "cannot" }
    @{ pattern = "CAN\\'T"; replacement = "CANNOT" }
    @{ pattern = "don\\'t"; replacement = "do not" }
    @{ pattern = "DON\\'T"; replacement = "DO NOT" }
    @{ pattern = "couldn\\'t"; replacement = "could not" }
    @{ pattern = "COULDN\\'T"; replacement = "COULD NOT" }
    @{ pattern = "isn\\'t"; replacement = "is not" }
    @{ pattern = "ISN\\'T"; replacement = "IS NOT" }
    @{ pattern = "aren\\'t"; replacement = "are not" }
    @{ pattern = "AREN\\'T"; replacement = "ARE NOT" }
    @{ pattern = "wasn\\'t"; replacement = "was not" }
    @{ pattern = "WASN\\'T"; replacement = "WAS NOT" }
    @{ pattern = "weren\\'t"; replacement = "were not" }
    @{ pattern = "WEREN\\'T"; replacement = "WERE NOT" }
    @{ pattern = "hasn\\'t"; replacement = "has not" }
    @{ pattern = "HASN\\'T"; replacement = "HAS NOT" }
    @{ pattern = "haven\\'t"; replacement = "have not" }
    @{ pattern = "HAVEN\\'T"; replacement = "HAVE NOT" }
    @{ pattern = "hadn\\'t"; replacement = "had not" }
    @{ pattern = "HADN\\'T"; replacement = "HAD NOT" }
    @{ pattern = "wouldn\\'t"; replacement = "would not" }
    @{ pattern = "WOULDN\\'T"; replacement = "WOULD NOT" }
    @{ pattern = "shouldn\\'t"; replacement = "should not" }
    @{ pattern = "SHOULDN\\'T"; replacement = "SHOULD NOT" }
    @{ pattern = "doesn\\'t"; replacement = "does not" }
    @{ pattern = "DOESN\\'T"; replacement = "DOES NOT" }
    # Special cases
    @{ pattern = "That Didn\\'t"; replacement = "That Did Not" }
    @{ pattern = "that didn\\'t"; replacement = "that did not" }
    @{ pattern = "That Won\\'t"; replacement = "That Will Not" }
    @{ pattern = "that won\\'t"; replacement = "that will not" }
    @{ pattern = "did not\\'t"; replacement = "did not" }  # Fix double replacements
    @{ pattern = "will not\\'t"; replacement = "will not" }
)

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($item in $replacements) {
        $count = ([regex]::Matches($content, [regex]::Escape($item.pattern))).Count
        if ($count -gt 0) {
            $content = $content -replace [regex]::Escape($item.pattern), $item.replacement
            $fileReplacements += $count
            $totalReplacements += $count
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $filesChanged++
        Write-Host "Fixed: $($file.Name) ($fileReplacements replacements)" -ForegroundColor Green
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "  Files changed: $filesChanged" -ForegroundColor White
Write-Host "  Total replacements: $totalReplacements" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan

