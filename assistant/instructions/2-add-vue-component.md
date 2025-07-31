# Vue.js Integration Instructions

## Dependencies Installed
- `vue@^3.5.18` - Vue 3 framework for reactive UI components

## Build Configuration
- Enhanced `esbuild.config.mjs` with Vue support (using render functions instead of SFC)
- Added Vue plugin to handle component compilation
- Build artifacts go to `dist/` folder as before

## Implementation Details
- Vue app is mounted directly in the existing `MemoryLaneNBackView.onOpen()` method
- Uses Vue 3 render functions with `h()` for component creation
- Button component includes:
  - Click handler that logs "memory-lane-n-back-main-view click"
  - Inline styling (green background, white text, padding, border-radius)
  - Button text: "Memory Lane N-Back"

## Build Steps
1. Install dependencies: `npm install` (already done)
2. Build plugin: `npm run build`
3. Build outputs to `dist/main.js`

## Testing in Obsidian
1. Copy the entire plugin folder to your Obsidian vault's `.obsidian/plugins/` directory
2. Enable the plugin in Obsidian Settings → Community Plugins
3. Use Command Palette (Ctrl/Cmd+P) → "Open MemoryLaneNBack" to open the view
4. Click the green "Memory Lane N-Back" button
5. Check browser console (F12) for the log message "memory-lane-n-back-main-view click"

## File Structure
```
src/
├── main.ts                    # Plugin entry point
├── MemoryLaneNBackView.ts     # View with Vue integration
esbuild.config.mjs             # Build configuration with Vue support
package.json                   # Updated with Vue dependency
```

## Notes
- Vue integration uses render functions for better esbuild compatibility
- No separate component files needed for this simple implementation
- Future components can be added as separate files if needed