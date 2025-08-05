Write-Host "Comprehensive React Application Fix Script" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# Function to fix srcSet attributes in a file
function Fix-SrcSetInFile {
    param(
        [string]$FilePath
    )
    
    if (Test-Path $FilePath) {
        Write-Host "Fixing srcSet in: $FilePath" -ForegroundColor Yellow
        
        # Read the file content
        $content = Get-Content $FilePath -Raw
        
        # Fix multi-line srcSet attributes by removing extra whitespace and newlines
        $content = $content -replace 'srcSet="\s*\n\s*([^"]*)\s*\n\s*"', 'srcSet="$1"'
        $content = $content -replace 'srcSet="([^"]*?)\s{2,}([^"]*)"', 'srcSet="$1 $2"'
        
        # Write back to file
        Set-Content $FilePath -Value $content -NoNewline
        Write-Host "Fixed: $FilePath" -ForegroundColor Green
    }
}

Write-Host "Step 1: Stopping any running processes..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "Step 2: Fixing srcSet attributes in components..." -ForegroundColor Yellow
$componentFiles = @(
    "src/components/Header.jsx",
    "src/components/Footer.jsx", 
    "src/components/Home.jsx",
    "src/components/Manifesto.jsx",
    "src/components/Research.jsx",
    "src/components/ThankYou.jsx",
    "src/components/RequestInvite.jsx",
    "src/components/RequestInviteCreator.jsx"
)

foreach ($file in $componentFiles) {
    Fix-SrcSetInFile -FilePath $file
}

Write-Host "Step 3: Removing problematic dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules
    Write-Host "node_modules removed" -ForegroundColor Green
}

if (Test-Path "package-lock.json") {
    Remove-Item package-lock.json
    Write-Host "package-lock.json removed" -ForegroundColor Green
}

Write-Host "Step 4: Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "Step 5: Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "Step 6: Verifying installations..." -ForegroundColor Yellow
Write-Host "React versions:" -ForegroundColor Cyan
npm list react react-dom react-router-dom

Write-Host "Step 7: Starting development server..." -ForegroundColor Yellow
Write-Host "If you see any remaining errors, press Ctrl+C and run this script again." -ForegroundColor Yellow
npm run dev
