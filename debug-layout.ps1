Write-Host "Testing Header and Footer Display Issue..." -ForegroundColor Green

Write-Host "Step 1: Checking if components exist..." -ForegroundColor Yellow
$headerExists = Test-Path "src/components/Header.jsx"
$footerExists = Test-Path "src/components/Footer.jsx"
$layoutExists = Test-Path "src/components/Layout.jsx"

Write-Host "Header.jsx exists: $headerExists" -ForegroundColor $(if($headerExists){"Green"}else{"Red"})
Write-Host "Footer.jsx exists: $footerExists" -ForegroundColor $(if($footerExists){"Green"}else{"Red"})
Write-Host "Layout.jsx exists: $layoutExists" -ForegroundColor $(if($layoutExists){"Green"}else{"Red"})

if (-not ($headerExists -and $footerExists -and $layoutExists)) {
    Write-Host "Missing component files! Please check your file structure." -ForegroundColor Red
    exit
}

Write-Host "Step 2: Starting development server with debug logging..." -ForegroundColor Yellow
Write-Host "Check the browser console for 'Layout Debug:' messages to see why Header/Footer are not showing." -ForegroundColor Cyan
Write-Host "The debug info will show which conditions are preventing Header/Footer from rendering." -ForegroundColor Cyan

npm run dev
