<#
create-new-repo.ps1

Usage: run this script to copy the current template into a new folder and initialize a fresh git repo.

It will:
- Copy the template to a new directory
- Remove `.git` from the copy
- Initialize a new git repo and make the first commit
- Create `.env` and `backend/.env` from examples if present

Safe: this script does NOT push anything to remote.
#>
param(
    [Parameter(Mandatory=$true)][string]$Destination
)

if (Test-Path $Destination) {
    Write-Host "Destination exists: $Destination" -ForegroundColor Yellow
    $confirm = Read-Host "Overwrite destination? Type 'yes' to continue"
    if ($confirm -ne 'yes') { Write-Host 'Aborted.'; exit 1 }
    Remove-Item -Recurse -Force $Destination
}

Write-Host "Copying template to $Destination..."
Copy-Item -Recurse -Force -Path (Get-Location).Path -Destination $Destination

Push-Location $Destination

if (Test-Path .git) {
    Write-Host 'Removing existing .git to create fresh repository...'
    Remove-Item -Recurse -Force .git
}

Write-Host 'Initializing new git repository...'
git init
git add .
git commit -m "Initial commit from template"

# Create .env files from examples if available
if (Test-Path "\.env.example") {
    Copy-Item ".env.example" ".env" -Force
}
if (Test-Path "backend\.env.example") {
    Copy-Item "backend\.env.example" "backend\.env" -Force
}

Write-Host "Template copy ready at: $Destination" -ForegroundColor Green
Write-Host "Next steps: edit .env and backend/.env with your credentials, then set a remote and push."
Pop-Location
