# PowerShell script to update phone numbers and statistics sitewide
# Updates 702-500-1064 to 702-500-1955
# Updates statistics to 500+ families and $127M+

$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$phoneReplacements = @{
    '702-500-1064' = '702-500-1955'
    '7025001064' = '7025001955'
    '\(702\) 500-1064' = '(702) 500-1955'
    'tel:7025001064' = 'tel:7025001955'
    'tel:702-500-1064' = 'tel:702-500-1955'
}

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($key in $phoneReplacements.Keys) {
        $pattern = [regex]::Escape($key)
        $matches = [regex]::Matches($content, $pattern, 'IgnoreCase')
        if ($matches.Count -gt 0) {
            $content = $content -replace $pattern, $phoneReplacements[$key]
            $fileReplacements += $matches.Count
            $totalReplacements += $matches.Count
        }
    }
    
    if ($fileReplacements -gt 0) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements phone replacements" -ForegroundColor Green
        $filesChanged++
    }
}

Write-Host "`n=== PHONE NUMBER UPDATE COMPLETE ===" -ForegroundColor Cyan
Write-Host "Files changed: $filesChanged" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Yellow

