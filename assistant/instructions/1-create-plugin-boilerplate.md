# MemoryLaneNBack Plugin Boilerplate Setup Instructions

## 1. Install Dependencies

```bash
npm install
```

## 2. Build the Plugin

```bash
npm run build
```

- This will compile TypeScript and bundle files into the `dist/` folder.

## 3. Install in Obsidian

1. Open Obsidian
2. Go to **Settings → Community plugins → Disabled plugins**
3. Enable **Safe mode** if not already
4. Click **Browse**, then click **Open plugin folder**
5. Copy the entire plugin folder (containing `manifest.json`, `main.js`, `styles.css`) from `dist/` into the Obsidian plugins directory
6. Back in Obsidian, click **Reload plugins**

## 4. Test the Plugin

- In Obsidian, open Command Palette (Ctrl/Cmd+P)
- Run **Open MemoryLaneNBack**
- A new pane titled **MemoryLaneNBack** should appear in the workspace
