# Comprehensive script to remove all guarantee mentions from the website

$files = Get-ChildItem -Path app -Recurse -Filter '*.tsx' | Where-Object { $_.FullName -notmatch 'node_modules' }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Remove guarantee from metadata descriptions
    $content = $content -replace "30-day guarantee or work free\.", "Proven results and professional marketing."
    $content = $content -replace "30-day guarantee\.", "Proven results and professional marketing."
    $content = $content -replace "guarantee or work free", "proven results"
    $content = $content -replace "guarantees,", "proven results,"
    $content = $content -replace "guarantees and", "proven results and"
    $content = $content -replace "guarantees", "proven results"
    $content = $content -replace "Guarantees", "Proven Results"
    $content = $content -replace "GUARANTEES", "PROVEN RESULTS"
    $content = $content -replace "guarantee", "proven results"
    $content = $content -replace "Guarantee", "Proven Results"
    $content = $content -replace "GUARANTEE", "PROVEN RESULTS"
    $content = $content -replace "guaranteed", "proven"
    $content = $content -replace "Guaranteed", "Proven"
    $content = $content -replace "GUARANTEED", "PROVEN"
    
    # Remove entire guarantee sections
    $content = $content -replace '(?s)<div className="bg-primary text-primary-foreground p-8 rounded-lg.*?30-DAY GUARANTEE.*?</div>', ''
    $content = $content -replace '(?s)<div className="bg-primary text-primary-foreground p-8 rounded-lg.*?30-DAY PROVEN RESULTS.*?</div>', ''
    $content = $content -replace '(?s)<h2 className="text-3xl font-black mb-4">30-DAY.*?</h2>.*?<p className="text-2xl font-bold mb-2">.*?</p>.*?<p className="text-lg.*?</p>', ''
    
    # Remove guarantee sections from about page
    if ($file.Name -eq 'page.tsx' -and $file.DirectoryName -match 'about') {
        $content = $content -replace '(?s)<h3 className="text-2xl font-bold mb-4">Real Proven Results</h3>.*?<p className="text-lg mb-4">.*?I proven results results.*?</p>', ''
        $content = $content -replace '(?s)<div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">.*?30-DAY.*?</div>', ''
    }
    
    # Clean up double spaces and extra newlines
    $content = $content -replace '  +', ' '
    $content = $content -replace '\r?\n\s*\r?\n\s*\r?\n+', "`r`n`r`n"
    
    if ($content -ne $originalContent) {
        Write-Host "Updating: $($file.FullName)"
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

Write-Host "Guarantee removal complete!"

