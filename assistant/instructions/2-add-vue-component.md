# 2. Add Vue Component

This guide describes how to install Vue 3 and configure the build, then test the new Vue component in Obsidian.

## 1. Install Dependencies

```bash
npm install --save-dev rollup-plugin-vue@^6.0.0 @rollup/plugin-node-resolve@^15.0.0 @rollup/plugin-commonjs@^24.0.0 vue@^3.2.0 @vue/compiler-sfc@^3.2.0
```

## 2. Build the Plugin

```bash
npm run build
```

Artifacts will be in the `dist/` folder (manifest.json, styles.css, and bundle files).

## 3. Test in Obsidian

1. Copy the entire plugin folder (including the `dist/` folder and `manifest.json`) to the Obsidian vault under `.obsidian/plugins/memory-lane-n-back`.
2. Reload Obsidian, then enable and load the plugin in Settings → Community Plugins.
3. Open the command palette (Ctrl/Cmd+P) and run **Open MemoryLaneNBack**.
4. You should see a **Memory Lane N-Back** button. Click it and check the developer console (View → Toggle Developer Tools) for the log message.
