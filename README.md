// README.md
# E-recruitment Exam portal App

## Project Structure
- `src/main/` - Electron Main Process files
- `src/renderer/` - React Frontend
- `dist/` - Build output
- `package.json` - Project dependencies and scripts
- `electron-builder.json` - Configuration for building distributable
- `tsconfig.json` - TypeScript configuration

## Running the App
1. Install dependencies:
   ```sh
   npm install
   ```
    # Note: Please use 20.18.0 or above as node version

2. Start development mode:
   ```sh
   npm start
   ```
   This will run both the React app and Electron simultaneously.

## Building for Production
1. Build the React frontend:
   ```sh
   npm run build
   ```
2. Package the Electron app:
   ```sh
   npm run electron:package
   ```
   This will generate an installer based on your OS.

## Deployment with GitLab CI/CD
1. Push code to GitLab.
2. The CI/CD pipeline will build and release a new version.
3. The installed app will detect updates and prompt users to update automatically.

## Auto-Update System
The app checks for updates automatically. When an update is available:
- It downloads in the background.
- The user is notified when it's ready to install.
- The app restarts to apply the update.
