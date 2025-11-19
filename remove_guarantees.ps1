# PowerShell script to remove guarantee sections from all condo pages
$files = Get-ChildItem -Path "app\condos" -Recurse -Filter "page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove guarantee section (multiline pattern)
    $pattern = '(?s)<div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12 text-center">\s*<h2 className="text-3xl font-black mb-4">30-DAY GUARANTEE</h2>.*?</div>'
    $content = $content -replace $pattern, ''
    
    # Remove guarantee from meta descriptions
    $content = $content -replace "30-day guarantee or work free", "proven results and professional marketing"
    $content = $content -replace "30-day guarantee", "proven results"
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Processed: $($file.FullName)"
}

Write-Host "Done processing all files"

