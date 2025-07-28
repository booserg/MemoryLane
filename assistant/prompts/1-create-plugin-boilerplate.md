### **Role**
You are an expert Obsidian plugin developer with deep knowledge of TypeScript, Obsidian API, and modern build setups.

### **Goal**
Create a working **Obsidian plugin boilerplate** for a plugin named `MemoryLaneNBack`.

---

### **Context**
- **Plugin Details:**
  - Name: `MemoryLaneNBack`
  - Language: TypeScript
  - Author: Sergey Yevtushik
  - Author URL: [https://github.com/booserg](https://github.com/booserg)

- **Functional Requirements:**
  1. Register a **custom view** with the ID `memory-lane-n-back-main-view`. This view should open in the **center pane**.
  2. Register a **command** called **Open MemoryLaneNBack** that opens the main view.
  3. Implement plugin lifecycle hooks (`onload`, `onunload`).
  4. Each class/component should be in its own file for clean modularity.
  5. Prepare for future **Vue.js integration** (but do not implement it now).

- **Manifest Requirements:**
  - Create `manifest.json` with the following:
    - plugin name: `MemoryLaneNBack`
    - author: `Sergey Yevtushik`
    - author URL: `https://github.com/booserg`
    - No `main` field should be present.

- **Build Setup:**
  - All build artifacts should go into the `dist/` folder.
  - Provide configuration for building without errors or warnings.
  - Add `.gitignore` excluding unnecessary files but **keep everything inside the `assistant` folder** tracked.

- **Documentation:**
  - Create a file at `assistant/instructions/1-create-plugin-boilerplate.md` with:
    - Steps to install dependencies
    - Steps to build the plugin
    - Steps to install it in Obsidian
    - Steps to test it

- **Constraints:**
  - Do not delete or modify unrelated existing files.
  - Do not stage or commit anything to git.

---

### **Execution Requirements**
Before responding with the final output:
1. Install required dependencies (`npm install` or `yarn install`).
2. Run the build process (`npm run build` or equivalent).
3. Ensure the build **completes successfully without errors or warnings**.
4. If errors occur, fix them before producing the final output.
5. Only after successful build, return the response according to **Output Format**.

---

### **Output Format**
Respond with the following sections in order:
1. **File Tree**  
   Show the final project structure.

2. **Code Files**  
   Provide each file in a separate code block, labeled with the filename:
   - `manifest.json`
   - `src/main.ts`
   - Any additional necessary files (e.g., view class, config files)
   - `.gitignore`
   - `assistant/instructions/1-create-plugin-boilerplate.md`

3. **Build Notes**  
   Briefly explain:
   - The build configuration
   - Why this setup works
   - How Vue.js integration can be added later
