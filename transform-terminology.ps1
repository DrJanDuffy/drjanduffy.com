# PowerShell script to transform "expired listing" terminology to consumer-facing language
# Run this script to update all pages across the site

# Use ordered list of replacements (longer patterns first to avoid partial matches)
$replacements = @(
    # Specific phrases first (longer patterns)
    @{ Pattern = '47 expired Summerlin listings'; Replacement = '47 Summerlin sellers who couldn''t sell' },
    @{ Pattern = 'expired Summerlin listings'; Replacement = 'Summerlin homes that didn''t sell' },
    @{ Pattern = 'Expired Summerlin listings'; Replacement = 'Summerlin homes that didn''t sell' },
    @{ Pattern = 'expired Summerlin listing'; Replacement = 'Summerlin home that didn''t sell' },
    @{ Pattern = 'expired listing expert'; Replacement = 'failed listing specialist' },
    @{ Pattern = 'Expired Listing Expert'; Replacement = 'Failed Listing Specialist' },
    @{ Pattern = 'expired listing specialist'; Replacement = 'specialist in homes that didn''t sell' },
    @{ Pattern = 'expired listing services'; Replacement = 'failed listing solutions' },
    @{ Pattern = 'Expired Listing Services'; Replacement = 'Failed Listing Solutions' },
    @{ Pattern = 'expired listing service'; Replacement = 'failed listing solution' },
    @{ Pattern = 'expired listing costs'; Replacement = 'costs when your home won''t sell' },
    @{ Pattern = 'expired listing cost'; Replacement = 'cost when your home won''t sell' },
    @{ Pattern = 'expired listing stigma'; Replacement = 'stigma of unsold homes' },
    @{ Pattern = 'your listing expired'; Replacement = 'your home didn''t sell' },
    @{ Pattern = 'Your listing expired'; Replacement = 'Your home didn''t sell' },
    @{ Pattern = 'YOUR LISTING EXPIRED'; Replacement = 'YOUR HOME DIDN''T SELL' },
    @{ Pattern = 'If your listing expired'; Replacement = 'If your house didn''t sell' },
    @{ Pattern = 'If your listing expires'; Replacement = 'If your house doesn''t sell' },
    @{ Pattern = 'sell expired listings'; Replacement = 'sell homes that didn''t sell' },
    @{ Pattern = 'selling expired listings'; Replacement = 'selling homes that didn''t sell' },
    @{ Pattern = 'sells expired listings'; Replacement = 'sells homes that didn''t sell' },
    @{ Pattern = 'sold expired listings'; Replacement = 'sold homes that didn''t sell' },
    @{ Pattern = 'fix expired listings'; Replacement = 'fix homes that didn''t sell' },
    @{ Pattern = 'fixing expired listings'; Replacement = 'fixing homes that didn''t sell' },
    @{ Pattern = 'fixed expired listings'; Replacement = 'fixed homes that didn''t sell' },
    @{ Pattern = 'expired listings sold'; Replacement = 'homes that didn''t sell - now sold' },
    @{ Pattern = 'expired listings I''ve sold'; Replacement = 'homes I''ve sold' },
    @{ Pattern = 'from expired listings'; Replacement = 'from homes that didn''t sell' },
    @{ Pattern = 'listings expire'; Replacement = 'homes fail to sell' },
    @{ Pattern = 'listings expired'; Replacement = 'homes failed to sell' },
    @{ Pattern = 'listings expiring'; Replacement = 'homes failing to sell' },
    @{ Pattern = 'will expire'; Replacement = 'will fail to sell' },
    @{ Pattern = 'listing expired'; Replacement = 'home didn''t sell' },
    @{ Pattern = 'listing expires'; Replacement = 'home doesn''t sell' },
    @{ Pattern = 'expired sellers'; Replacement = 'frustrated sellers' },
    @{ Pattern = 'Expired sellers'; Replacement = 'Frustrated sellers' },
    @{ Pattern = 'expired seller'; Replacement = 'frustrated seller' },
    @{ Pattern = 'Expired Seller'; Replacement = 'Frustrated Seller' },
    
    # General patterns (shorter, after specific ones)
    @{ Pattern = 'EXPIRED LISTINGS'; Replacement = 'HOMES THAT DIDN''T SELL' },
    @{ Pattern = 'EXPIRED LISTING'; Replacement = 'HOME THAT DIDN''T SELL' },
    @{ Pattern = 'Expired Listings'; Replacement = 'Homes That Didn''t Sell' },
    @{ Pattern = 'Expired Listing'; Replacement = 'Home That Didn''t Sell' },
    @{ Pattern = 'expired listings'; Replacement = 'homes that didn''t sell' },
    @{ Pattern = 'expired listing'; Replacement = 'home that didn''t sell' }
)

# Get all TypeScript/TSX files in app directory
$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx","*.ts" -File

$totalReplacements = 0
$filesChanged = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($replacement in $replacements) {
        $pattern = [regex]::Escape($replacement.Pattern)
        $count = ([regex]::Matches($content, $pattern, 'IgnoreCase')).Count
        if ($count -gt 0) {
            $content = $content -replace $pattern, $replacement.Replacement
            $fileReplacements += $count
            $totalReplacements += $count
        }
    }
    
    if ($fileReplacements -gt 0) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements replacements" -ForegroundColor Green
        $filesChanged++
    }
}

Write-Host "`n=== TRANSFORMATION COMPLETE ===" -ForegroundColor Cyan
Write-Host "Files changed: $filesChanged" -ForegroundColor Yellow
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Yellow
Write-Host "`nPlease review changes and test the site." -ForegroundColor Green
