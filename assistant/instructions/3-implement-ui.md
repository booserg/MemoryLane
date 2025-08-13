# Dual N-Back UI Implementation Instructions

## Overview
This document provides instructions for the Dual N-Back UI implementation in the Obsidian plugin.

## Dependencies Installation
All required dependencies are already installed in the project:
- Vue 3 and Vue compiler
- Rollup and related plugins
- TypeScript support

If you need to reinstall dependencies:
```bash
npm install
```

## Building the Plugin

### Build for Production
```bash
npm run build
```

### Build for Development (with watch mode)
```bash
npm run dev
```

The build process compiles all source files into the `dist/` folder, which contains:
- `main.js` - The compiled plugin code
- `manifest.json` - Plugin manifest
- `styles.css` - Plugin styles
- Type definitions in the `types/` folder

## Testing in Obsidian

### 1. Install the Plugin
1. Copy the entire `dist/` folder contents to your Obsidian vault's `.obsidian/plugins/memory-lane-n-back/` directory
2. Enable the plugin in Obsidian Settings > Community Plugins

### 2. Open the Plugin View
1. Open the Command Palette (Ctrl/Cmd + P)
2. Run the command "Open MemoryLaneNBack"
3. The plugin view will open in the center pane

### 3. Testing the UI Components

#### Grid Display
- A 3×3 grid should appear with a black border (250×250 pixels)
- The grid should be centered in the plugin pane

#### Action Buttons
- Two buttons should appear below the grid: "Position" and "Sound"
- Clicking each button should log a message to the browser console:
  - Position button: "Position button clicked"
  - Sound button: "Sound button clicked"

#### Cell Marker API
- Open the browser developer console (F12)
- Test the setCell function by running:
  ```javascript
  setCell(0, 0)  // Mark top-left cell
  setCell(1, 1)  // Mark center cell
  setCell(2, 2)  // Mark bottom-right cell
  ```
- Only one cell should be marked at a time with a black circle
- Invalid coordinates (outside 0-2 range) should log an error message

## Testing Console Commands

### Valid setCell calls:
```javascript
setCell(0, 0)  // Top-left
setCell(0, 1)  // Top-center
setCell(0, 2)  // Top-right
setCell(1, 0)  // Middle-left
setCell(1, 1)  // Middle-center
setCell(1, 2)  // Middle-right
setCell(2, 0)  // Bottom-left
setCell(2, 1)  // Bottom-center
setCell(2, 2)  // Bottom-right
```

### Invalid setCell calls (should show error):
```javascript
setCell(-1, 0)  // Invalid row
setCell(0, 3)   // Invalid column
setCell(3, 3)   // Both invalid
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check that Node.js version is compatible (Node 14+)
- Clear build cache: `rm -rf dist/ && npm run build`

### Plugin Not Loading
- Verify the `dist/` folder contains all required files
- Check Obsidian console for error messages
- Ensure the plugin is enabled in Obsidian settings

### UI Not Displaying Correctly
- Check that `styles.css` is properly loaded
- Verify the Vue component is mounting correctly
- Check browser console for JavaScript errors

## Technical Notes

### Vue Integration
- Uses Vue 3 with TypeScript
- Component styles are in the global `styles.css` file
- The setCell method is exposed globally on the window object for console access

### Build Configuration
- Rollup is configured to handle Vue SFC (Single File Components)
- Styles are extracted to external CSS file
- TypeScript compilation is handled separately from Vue processing