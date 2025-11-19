# PowerShell script to update all 2025 references to 2026
# Also updates months appropriately (January 2025 -> January 2026, etc.)

$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$replacements = @{
    # Year updates
    '2025' = '2026'
    'January 2025' = 'January 2026'
    'February 2025' = 'February 2026'
    'March 2025' = 'March 2026'
    'April 2025' = 'April 2026'
    'May 2025' = 'May 2026'
    'June 2025' = 'June 2026'
    'July 2025' = 'July 2026'
    'August 2025' = 'August 2026'
    'September 2025' = 'September 2026'
    'October 2025' = 'October 2026'
    'November 2025' = 'November 2026'
    'December 2025' = 'December 2026'
    'Spring 2025' = 'Spring 2026'
    'Summer 2025' = 'Summer 2026'
    'Fall 2025' = 'Fall 2026'
    'Winter 2025' = 'Winter 2026'
    # Date updates
    '2025-01-15' = '2026-01-15'
    '2025-01-10' = '2026-01-10'
    '2025-01-05' = '2026-01-05'
    # Award updates (case-insensitive handled separately)
    'Failed Listing Specialist 2025' = 'Failed Listing Specialist 2026'
}

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
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
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements replacements" -ForegroundColor Green
        $filesChanged++
    }
}

Write-Host "`n=== 2026 UPDATE COMPLETE ===" -ForegroundColor Cyan
Write-Host "Files changed: $filesChanged" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Yellow

