# MemoryLane N-Back Plugin for Obsidian

A dual n-back memory training plugin for Obsidian featuring a 3x3 grid interface with Vue.js integration.

## Quick Start

### Installation
1. Install dependencies: `npm install`
2. Build the plugin: `npm run build` (or `npm run dev` for development)
3. Copy `dist/` contents to `.obsidian/plugins/memory-lane-n-back/` in your vault
4. Enable plugin in Obsidian Settings ’ Community Plugins

### Usage
- Open Command Palette (Ctrl/Cmd+P)
- Run "Open MemoryLaneNBack"
- Interact with the 3x3 grid and action buttons (Position/Sound)
- Test cell marking via console: `setCell(row, col)` (coordinates 0-2)

## Development

Built with Vue 3, TypeScript, and Rollup. Features a responsive grid interface with programmatic cell control and action button interactions.