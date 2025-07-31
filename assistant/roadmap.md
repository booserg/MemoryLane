# ✅ Dual N-Back Obsidian Plugin Roadmap

---

## **Step 1: Create Plugin Boilerplate**
- **Goal:** Generate `manifest.json` and `main.ts` with basic plugin structure.
- **Focus:** Register custom view `"dual-n-back-view"`.

---

## **Step 2: Integrate Vue.js**
- **Goal:** Add Vue 3 support and a placeholder component.
- **Focus:** Mount Vue in custom view.

---

## **Step 3: Implement Visual Grid**
- **Goal:** Create a 3x3 grid UI.
- **Focus:** Highlight squares dynamically.
---

## **Step 4: Add N-Back Logic**
- **Goal:** Generate random visual sequences and handle user responses.
- **Focus:** Score updates and match logic for **visual only**.

---

## **Step 5: Add Game Loop**
- **Goal:** Implement automatic sequence progression.
- **Focus:** Start/Stop buttons and timing (e.g., 2s per stimulus).

---

## **Step 6: Add Audio Stimuli**
- **Goal:** Sync audio letters with visuals.
- **Focus:** Use `Audio()` API for playback.

---

## **Step 7: Add Match Scoring**
- **Goal:** Add buttons for Visual & Audio match.
- **Focus:** Correct/wrong scoring system.

---

## **Step 8: Add Persistent Storage**
- **Goal:** Save scores and settings in Obsidian vault.
- **Focus:** Use Obsidian `PluginData`.

---

## **Step 9: Add Settings Tab**
- **Goal:** Create UI for settings (N-level, speed).
- **Focus:** Register settings with Obsidian API.

---

## **Step 10: Polish & Package**
- **Goal:** Finalize code, add README, and prepare for distribution.
- **Focus:** Clean structure, optional logo, build ready.

---

### ✅ Workflow Tips
- Each step = **one prompt + one Git commit**.
- Start each prompt with a short recap.
- Use **Role / Instruction / Context / Output** format.
