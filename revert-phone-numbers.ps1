# PowerShell script to revert phone numbers back to 702-500-1064
# Removes 702-222-1964 and reverts 702-500-1955 to 702-500-1064

$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$replacements = @{
    '702-500-1955' = '702-500-1064'
    '7025001955' = '7025001064'
    '\(702\) 500-1955' = '(702) 500-1064'
    'tel:7025001955' = 'tel:7025001064'
    'tel:702-500-1955' = 'tel:702-500-1064'
    '702-222-1964' = '702-500-1064'
    '7022221964' = '7025001064'
    '\(702\) 222-1964' = '(702) 500-1064'
    'tel:7022221964' = 'tel:7025001064'
    'tel:702-222-1964' = 'tel:702-500-1064'
    'Text: \(702\) 222-1964' = '(702) 500-1064'
    'Text 702-222-1964' = '702-500-1064'
    'TEXT: 702-222-1964' = '702-500-1064'
}

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($key in $replacements.Keys) {
        $pattern = [regex]::Escape($key)
        $matches = [regex]::Matches($content, $pattern, 'IgnoreCase')
        if ($matches.Count -gt 0) {
            $content = $content -replace $pattern, $replacements[$key]
            $fileReplacements += $matches.Count
            $totalReplacements += $matches.Count
        }
    }
    
    # Also handle text references like "Call 702-500-1955 or text 702-222-1964"
    $content = $content -replace 'Call 702-500-1955 or text 702-222-1964', 'Call 702-500-1064'
    $content = $content -replace 'Call 702-500-1955 or text 702-222-1964', 'Call 702-500-1064'
    $content = $content -replace '702-500-1955 or text 702-222-1964', '702-500-1064'
    $content = $content -replace '702-500-1955 or 702-222-1964', '702-500-1064'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements replacements" -ForegroundColor Green
        $filesChanged++
    }
}

Write-Host "`n=== PHONE NUMBER REVERT COMPLETE ===" -ForegroundColor Cyan
Write-Host "Files changed: $filesChanged" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Yellow

