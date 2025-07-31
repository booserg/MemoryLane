# MemoryLaneNBack Plugin Setup Instructions

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Plugin
```bash
npm run build
```

### 3. Install in Obsidian

#### Option A: Development Installation
1. Copy the entire project folder to your Obsidian vault's `.obsidian/plugins/` directory
2. Rename the folder to `memory-lane-n-back`
3. Restart Obsidian
4. Go to Settings → Community Plugins → Installed Plugins
5. Enable "MemoryLaneNBack"

#### Option B: Manual Installation
1. Copy these files to `.obsidian/plugins/memory-lane-n-back/`:
   - `manifest.json`
   - `dist/main.js`
2. Restart Obsidian
3. Enable the plugin in Settings

### 4. Test the Plugin

1. Open Obsidian
2. Use Command Palette (Ctrl/Cmd + P)
3. Search for "Open MemoryLaneNBack"
4. Execute the command
5. A new tab should open with the title "MemoryLane N-Back Game"
6. You should see a placeholder message indicating successful plugin load

## Development Commands

- `npm run dev` - Start development build with file watching
- `npm run build` - Production build
- `npm run version` - Bump version (updates manifest.json and versions.json)

## Project Structure

```
MemoryLane/
├── manifest.json           # Plugin metadata
├── package.json           # Node.js dependencies
├── tsconfig.json          # TypeScript configuration
├── esbuild.config.mjs     # Build configuration
├── versions.json          # Version compatibility
├── src/
│   ├── main.ts           # Main plugin class
│   └── MemoryLaneNBackView.ts  # Custom view implementation
├── dist/
│   └── main.js           # Built plugin file
└── assistant/
    └── instructions/     # Documentation
```

## Next Steps

This boilerplate provides:
- ✅ Plugin lifecycle management (onload/onunload)
- ✅ Custom view registration
- ✅ Command registration
- ✅ TypeScript build setup
- ✅ Clean modular architecture

Ready for Vue.js integration in the next step!