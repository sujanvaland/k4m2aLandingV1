Write-Host "Fixing React Router DOM and dependency issues..." -ForegroundColor Green

Write-Host "Step 1: Stopping any running dev servers..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "Step 2: Removing node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules
    Write-Host "node_modules removed" -ForegroundColor Green
} else {
    Write-Host "node_modules not found, skipping..." -ForegroundColor Cyan
}

Write-Host "Step 3: Removing package-lock.json..." -ForegroundColor Yellow
if (Test-Path "package-lock.json") {
    Remove-Item package-lock.json
    Write-Host "package-lock.json removed" -ForegroundColor Green
} else {
    Write-Host "package-lock.json not found, skipping..." -ForegroundColor Cyan
}

Write-Host "Step 4: Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "Step 5: Installing dependencies with React Router DOM v6..." -ForegroundColor Yellow
npm install

Write-Host "Step 6: Verifying key dependencies..." -ForegroundColor Yellow
npm list react react-dom react-router-dom axios

Write-Host "Step 7: Starting development server..." -ForegroundColor Yellow
npm run dev

Read-Host "Press Enter to continue..."
