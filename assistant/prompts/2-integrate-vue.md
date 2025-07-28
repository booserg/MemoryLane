### **Role**
You are an expert Obsidian plugin developer with deep knowledge of Vue.js, TypeScript, Obsidian API, and modern build setups.

---

### **Goal**
Create a Vue.js component and embed it into the previously generated Obsidian view without breaking the existing codebase.

---

### **Context**
On the previous step, the boilerplate of a new Obsidian plugin with an empty view was generated.  
Now the view needs to be extended with Vue integration.

- **Feature Requirements:**
  1. Integrate Vue 3 into the existing Obsidian plugin build process using Rollup.
  2. Mount the Vue app inside the existing custom view container `memory-lane-n-back-main-view`.
  3. Create a new Vue component that:
     - Displays a button with text **"Memory Lane N-Back"**.
     - On click, logs `"memory-lane-n-back-main-view click"` to the browser console.
  4. Apply minimal styling (e.g., padding, border, and color for button).
  5. Preserve all existing files and add only what is necessary.

- **Build Setup:**
    - All build artifacts should go into the `dist/` folder.
    - Configure build for Vue 3 support (ensure dependencies are installed).
    - Keep `.gitignore` as before, tracking everything inside the `assistant` folder.

- **Documentation:**
    - Create a new file at `assistant/instructions/2-add-vue-component.md` with:
        - Steps to install new dependencies
        - Steps to build the plugin
        - Steps to test Vue component inside Obsidian

- **Constraints:**
    - Do not delete or modify unrelated files.
    - Do not stage or commit anything to git.

---

### **Execution Requirements**
Before responding with the final output:
1. Install all required dependencies (Vue 3, Vite if needed).
2. Run the build process (e.g., `npm run build` or equivalent).
3. Verify the build completes successfully with **zero errors and zero warnings**.
4. If issues occur, fix them and repeat steps 1–3 until successful.
5. Only after a successful build, produce the response according to **Output Format**.

---

### **Output Format**
Respond with the following sections in order:

1. **File Tree**
   - Show the final project structure.

2. **Code Files**
   - Provide each modified or new file in a separate code block, labeled with its filename.

3. **Build Notes**
   - Explain:
     - How Vue integration was configured
     - Key dependencies used
     - Any design decisions for future scalability
