# Script to add Dr. Jan Duffy headshot image
# Usage: Place the image file in the project root, then run this script

$sourceFile = "Dr Duffy Blue_Headshot Enhanced 180 Size.jpg"
$targetDir = "public\images\team"
$targetFile = "$targetDir\las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg"

# Check if source file exists in current directory
if (Test-Path $sourceFile) {
    Write-Host "Found source file: $sourceFile" -ForegroundColor Green
    
    # Create target directory if it doesn't exist
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        Write-Host "Created directory: $targetDir" -ForegroundColor Yellow
    }
    
    # Copy file to target location with proper name
    Copy-Item -Path $sourceFile -Destination $targetFile -Force
    Write-Host "Copied to: $targetFile" -ForegroundColor Green
    Write-Host "`nFile is ready! You can now commit it with:" -ForegroundColor Cyan
    Write-Host "  git add public/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg" -ForegroundColor White
    Write-Host "  git commit -m 'Add Dr. Jan Duffy headshot image'" -ForegroundColor White
    Write-Host "  git push" -ForegroundColor White
} else {
    Write-Host "Source file not found: $sourceFile" -ForegroundColor Red
    Write-Host "`nPlease place the image file in the project root directory, then run this script again." -ForegroundColor Yellow
    Write-Host "Or provide the full path to the image file." -ForegroundColor Yellow
}

