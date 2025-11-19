# PowerShell script to replace contractions with spelled-out versions
# This ensures all apostrophes in displayed text are spelled out

$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$replacements = @(
    # Common contractions
    @{ pattern = "didn't"; replacement = "did not"; caseSensitive = $false }
    @{ pattern = "didn\\'t"; replacement = "did not"; caseSensitive = $false }
    @{ pattern = "DIDN'T"; replacement = "DID NOT"; caseSensitive = $true }
    @{ pattern = "DIDN\\'T"; replacement = "DID NOT"; caseSensitive = $true }
    
    @{ pattern = "won't"; replacement = "will not"; caseSensitive = $false }
    @{ pattern = "won\\'t"; replacement = "will not"; caseSensitive = $false }
    @{ pattern = "WON'T"; replacement = "WILL NOT"; caseSensitive = $true }
    @{ pattern = "WON\\'T"; replacement = "WILL NOT"; caseSensitive = $true }
    
    @{ pattern = "can't"; replacement = "cannot"; caseSensitive = $false }
    @{ pattern = "can\\'t"; replacement = "cannot"; caseSensitive = $false }
    @{ pattern = "CAN'T"; replacement = "CANNOT"; caseSensitive = $true }
    @{ pattern = "CAN\\'T"; replacement = "CANNOT"; caseSensitive = $true }
    
    @{ pattern = "don't"; replacement = "do not"; caseSensitive = $false }
    @{ pattern = "don\\'t"; replacement = "do not"; caseSensitive = $false }
    @{ pattern = "DON'T"; replacement = "DO NOT"; caseSensitive = $true }
    @{ pattern = "DON\\'T"; replacement = "DO NOT"; caseSensitive = $true }
    
    @{ pattern = "couldn't"; replacement = "could not"; caseSensitive = $false }
    @{ pattern = "couldn\\'t"; replacement = "could not"; caseSensitive = $false }
    @{ pattern = "COULDN'T"; replacement = "COULD NOT"; caseSensitive = $true }
    @{ pattern = "COULDN\\'T"; replacement = "COULD NOT"; caseSensitive = $true }
    
    @{ pattern = "isn't"; replacement = "is not"; caseSensitive = $false }
    @{ pattern = "isn\\'t"; replacement = "is not"; caseSensitive = $false }
    @{ pattern = "ISN'T"; replacement = "IS NOT"; caseSensitive = $true }
    @{ pattern = "ISN\\'T"; replacement = "IS NOT"; caseSensitive = $true }
    
    @{ pattern = "aren't"; replacement = "are not"; caseSensitive = $false }
    @{ pattern = "aren\\'t"; replacement = "are not"; caseSensitive = $false }
    @{ pattern = "AREN'T"; replacement = "ARE NOT"; caseSensitive = $true }
    @{ pattern = "AREN\\'T"; replacement = "ARE NOT"; caseSensitive = $true }
    
    @{ pattern = "wasn't"; replacement = "was not"; caseSensitive = $false }
    @{ pattern = "wasn\\'t"; replacement = "was not"; caseSensitive = $false }
    @{ pattern = "WASN'T"; replacement = "WAS NOT"; caseSensitive = $true }
    @{ pattern = "WASN\\'T"; replacement = "WAS NOT"; caseSensitive = $true }
    
    @{ pattern = "weren't"; replacement = "were not"; caseSensitive = $false }
    @{ pattern = "weren\\'t"; replacement = "were not"; caseSensitive = $false }
    @{ pattern = "WEREN'T"; replacement = "WERE NOT"; caseSensitive = $true }
    @{ pattern = "WEREN\\'T"; replacement = "WERE NOT"; caseSensitive = $true }
    
    @{ pattern = "hasn't"; replacement = "has not"; caseSensitive = $false }
    @{ pattern = "hasn\\'t"; replacement = "has not"; caseSensitive = $false }
    @{ pattern = "HASN'T"; replacement = "HAS NOT"; caseSensitive = $true }
    @{ pattern = "HASN\\'T"; replacement = "HAS NOT"; caseSensitive = $true }
    
    @{ pattern = "haven't"; replacement = "have not"; caseSensitive = $false }
    @{ pattern = "haven\\'t"; replacement = "have not"; caseSensitive = $false }
    @{ pattern = "HAVEN'T"; replacement = "HAVE NOT"; caseSensitive = $true }
    @{ pattern = "HAVEN\\'T"; replacement = "HAVE NOT"; caseSensitive = $true }
    
    @{ pattern = "hadn't"; replacement = "had not"; caseSensitive = $false }
    @{ pattern = "hadn\\'t"; replacement = "had not"; caseSensitive = $false }
    @{ pattern = "HADN'T"; replacement = "HAD NOT"; caseSensitive = $true }
    @{ pattern = "HADN\\'T"; replacement = "HAD NOT"; caseSensitive = $true }
    
    @{ pattern = "wouldn't"; replacement = "would not"; caseSensitive = $false }
    @{ pattern = "wouldn\\'t"; replacement = "would not"; caseSensitive = $false }
    @{ pattern = "WOULDN'T"; replacement = "WOULD NOT"; caseSensitive = $true }
    @{ pattern = "WOULDN\\'T"; replacement = "WOULD NOT"; caseSensitive = $true }
    
    @{ pattern = "shouldn't"; replacement = "should not"; caseSensitive = $false }
    @{ pattern = "shouldn\\'t"; replacement = "should not"; caseSensitive = $false }
    @{ pattern = "SHOULDN'T"; replacement = "SHOULD NOT"; caseSensitive = $true }
    @{ pattern = "SHOULDN\\'T"; replacement = "SHOULD NOT"; caseSensitive = $true }
    
    @{ pattern = "mustn't"; replacement = "must not"; caseSensitive = $false }
    @{ pattern = "mustn\\'t"; replacement = "must not"; caseSensitive = $false }
    @{ pattern = "MUSTN'T"; replacement = "MUST NOT"; caseSensitive = $true }
    @{ pattern = "MUSTN\\'T"; replacement = "MUST NOT"; caseSensitive = $true }
    
    @{ pattern = "doesn't"; replacement = "does not"; caseSensitive = $false }
    @{ pattern = "doesn\\'t"; replacement = "does not"; caseSensitive = $false }
    @{ pattern = "DOESN'T"; replacement = "DOES NOT"; caseSensitive = $true }
    @{ pattern = "DOESN\\'T"; replacement = "DOES NOT"; caseSensitive = $true }
    
    # Special cases for "That Didn't" etc.
    @{ pattern = "That Didn't"; replacement = "That Did Not"; caseSensitive = $true }
    @{ pattern = "That Didn\\'t"; replacement = "That Did Not"; caseSensitive = $true }
    @{ pattern = "that didn't"; replacement = "that did not"; caseSensitive = $true }
    @{ pattern = "that didn\\'t"; replacement = "that did not"; caseSensitive = $true }
    
    @{ pattern = "That Won't"; replacement = "That Will Not"; caseSensitive = $true }
    @{ pattern = "That Won\\'t"; replacement = "That Will Not"; caseSensitive = $true }
    @{ pattern = "that won't"; replacement = "that will not"; caseSensitive = $true }
    @{ pattern = "that won\\'t"; replacement = "that will not"; caseSensitive = $true }
)

$totalReplacements = 0
$filesChanged = 0
$changedFiles = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($item in $replacements) {
        $options = if ($item.caseSensitive) { 'None' } else { 'IgnoreCase' }
        $count = ([regex]::Matches($content, [regex]::Escape($item.pattern), $options)).Count
        
        if ($count -gt 0) {
            $content = $content -replace [regex]::Escape($item.pattern), $item.replacement
            $fileReplacements += $count
            $totalReplacements += $count
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $filesChanged++
        $changedFiles += $file.Name
        Write-Host "Updated: $($file.Name) ($fileReplacements replacements)" -ForegroundColor Green
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "  Files changed: $filesChanged" -ForegroundColor White
Write-Host "  Total replacements: $totalReplacements" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan

if ($changedFiles.Count -gt 0) {
    Write-Host "`nChanged files:" -ForegroundColor Yellow
    $changedFiles | ForEach-Object { Write-Host "  - $_" -ForegroundColor White }
}

