# make-template.ps1
# Run this script from the project root to finish cleaning the repo and remove brand assets/uploads.
Write-Host "This script will remove uploads, brand images and reset product data."
$confirm = Read-Host "Type YES to continue"
if ($confirm -ne 'YES') { Write-Host "Aborted"; exit 1 }

# Remove uploads
$paths = @('.\uploads', '.\backend\uploads')
foreach ($p in $paths) {
  if (Test-Path $p) {
    Get-ChildItem -Path $p -Recurse -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Cleaned $p"
  }
}

# Empty products.json
if (Test-Path '.\backend\data\products.json') {
  Set-Content -Path '.\backend\data\products.json' -Value '[]'
  Write-Host 'backend/data/products.json emptied'
}

# Remove brand images under src/pics
$picFiles = @(
  '.\src\pics\fondo.jpg', '.\src\pics\fotopro.jpeg', '.\src\pics\fotopro2.jpeg',
  '.\src\pics\l1.png', '.\src\pics\l2.png', '.\src\pics\logoo.png', '.\src\pics\lorang5.jpeg',
  '.\src\pics\lorangvid.mp4', '.\src\pics\persona1.jpeg', '.\src\pics\persona2.jpeg', '.\src\pics\persona3.jpeg',
  '.\src\pics\skate-video.mp4'
)
foreach ($f in $picFiles) {
  if (Test-Path $f) { Remove-Item -Force $f; Write-Host "Removed $f" }
}

# Remove nested pic sets
$nested = Get-ChildItem -Path .\src\pics -Recurse -Include *.jpeg,*.jpg,*.png,*.mp4 -File -ErrorAction SilentlyContinue
foreach ($n in $nested) {
  if ($n.FullName -notlike '*placeholder*') { Remove-Item -Force $n.FullName -ErrorAction SilentlyContinue; Write-Host "Removed $($n.FullName)" }
}

Write-Host "Template cleanup complete. Verify and git init if you want a fresh repo."
