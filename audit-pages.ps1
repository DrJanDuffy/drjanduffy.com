# Comprehensive page audit script
$results = @()

$pages = Get-ChildItem -Path app -Recurse -Filter 'page.tsx' | Where-Object { 
    $_.FullName -notmatch 'node_modules' -and 
    $_.FullName -notmatch 'layout' 
}

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw
    $relativePath = $page.FullName.Replace((Get-Location).Path + '\', '').Replace('\', '/')
    
    # Count headings
    $h1Count = ([regex]::Matches($content, '<h1[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    $h2Count = ([regex]::Matches($content, '<h2[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    $h3Count = ([regex]::Matches($content, '<h3[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    
    # Count words (approximate - remove HTML tags and count words)
    $textOnly = $content -replace '<[^>]+>', ' ' -replace '\s+', ' '
    $textOnly = $textOnly.Trim()
    $wordCount = ($textOnly -split '\s+').Count
    
    # Check for schemas
    $hasBreadcrumb = $content -match 'BreadcrumbSchema'
    $hasFAQ = $content -match 'FAQSchema'
    $hasService = $content -match 'ServiceSchema'
    
    $issues = @()
    if ($h1Count -ne 1) { $issues += "H1 count: $h1Count (should be 1)" }
    if ($h2Count -lt 3) { $issues += "H2 count: $h2Count (should be at least 3)" }
    if ($h3Count -lt 2) { $issues += "H3 count: $h3Count (should be at least 2)" }
    if ($wordCount -lt 1500) { $issues += "Word count: $wordCount (should be at least 1500)" }
    
    $schemaStatus = @()
    if ($hasBreadcrumb) { $schemaStatus += "Breadcrumb" }
    if ($hasFAQ) { $schemaStatus += "FAQ" }
    if ($hasService) { $schemaStatus += "Service" }
    if ($schemaStatus.Count -eq 0) { $issues += "No schema found" }
    
    $results += [PSCustomObject]@{
        Page = $relativePath
        H1 = $h1Count
        H2 = $h2Count
        H3 = $h3Count
        Words = $wordCount
        Schemas = ($schemaStatus -join ', ')
        Issues = ($issues -join '; ')
        Status = if ($issues.Count -eq 0) { "OK" } else { "NEEDS FIX" }
    }
}

# Display results
$results | Format-Table -AutoSize

# Summary
Write-Host "`n=== AUDIT SUMMARY ===" -ForegroundColor Cyan
$total = $results.Count
$ok = ($results | Where-Object { $_.Status -eq "OK" }).Count
$needsFix = ($results | Where-Object { $_.Status -eq "NEEDS FIX" }).Count

Write-Host "Total pages: $total" -ForegroundColor White
Write-Host "Pages OK: $ok" -ForegroundColor Green
Write-Host "Pages needing fixes: $needsFix" -ForegroundColor Red

# Export to CSV
$results | Export-Csv -Path "page-audit-results.csv" -NoTypeInformation
Write-Host "`nResults exported to page-audit-results.csv" -ForegroundColor Yellow

# Show pages that need fixes
Write-Host "`n=== PAGES NEEDING FIXES ===" -ForegroundColor Red
$results | Where-Object { $_.Status -eq "NEEDS FIX" } | ForEach-Object {
    Write-Host "$($_.Page): $($_.Issues)" -ForegroundColor Yellow
}

