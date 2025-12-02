# Store Template - Instructions

This repository has been neutralized to serve as a blank store template.

What was done:
- `backend/data/products.json` emptied
- `.env` and `backend/.env` replaced with placeholder values
- `Navbar` and `Empresa` now use an inline `PlaceholderLogo` component
- `make-template.ps1` created to remove uploads and image assets when you're ready

To finish cleaning (destructive) run:

```powershell
cd path\to\this\repo
.\make-template.ps1
```

After running the script, verify and then initialize a new git repo:

```powershell
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "Initial template"
```

Branding steps:
- Replace `src/componentes/PlaceholderLogo.jsx` with your logo or update Navbar/Empresa to import a logo file.
- Fill `.env` and `backend/.env` with production values.
- Add products via Admin or by editing `backend/data/products.json`.

If you want to create a fresh repository from this template, you can use the included `create-new-repo.ps1` helper:

```powershell
# Example: create a new project in ../MyStore
.\create-new-repo.ps1 ..\MyStore
```

The script will copy the template, remove the `.git` folder, initialize a new repo, and create `.env` files from the `.env.example` files if present.
