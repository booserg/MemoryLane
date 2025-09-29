### Role
You are an expert Obsidian plugin developer with deep knowledge of Vue.js, TypeScript, Obsidian API, and modern build setups.

### Goal
Prepare existing UI for use two different visual stimulus and manual triggering of the next game step.

### Context
In previous steps we created a simple UI for the dual n back game as a obsidian plugin.
The current goal is to update existing UI of the game to support two visual stimulus:
1. Positional (cell in the grid)
2. Color (Red, Blue, Green, Yellow, Orange, Purple)

Reasoning:
1. Psychological Advantages:
    1.1. Less cognitive interference: Color processed in different visual pathway than spatial location
    1.2. Faster recognition: Color detection is more automatic than shape identification
    1.3. Reduced visual clutter: Cleaner interface than symbols inside circles
2. Professional Relevance for Programming:
    2.1. Syntax highlighting: Tracking code meaning by color while navigating file structure
    2.2. IDE themes: Managing multiple colored elements (errors, warnings, keywords)
    2.3. Git diffs: Following red/green changes while tracking line positions
    2.4. Status indicators: Monitoring colored badges/icons across interface panels
3. Cognitive Processing:
    3.1. Spatial channel: "Where" - grid position
    3.2. Feature channel: "What" - color attribute
    3.3. Less competition: Color and position use somewhat separate visual processing streams
4. Implementation Benefits:
    4.1. Accessibility: Can add high contrast mode
    4.2. Scalability: Easy to expand color palette
    4.3. Performance: No complex symbol rendering
5. Suggested Color Set:
    5.1. High contrast: Red, Blue, Green, Yellow, Orange, Purple
    5.2. Ensure colorblind accessibility with distinct hues

UI needs to be updated with the following:
1. Sound button needs to be renamed to Color. 
    1.1. The log message into the dev console needs to be changed accordingly.
2. Reset button needs to be added to the same line of buttons.
    2.1. The log message similar to the rest of buttons needs to be written to the dev console.
    2.2. Reset functionality should only clear the grid visually (remove current mark) without any game logic.
3. Next step button needs to be added to the same line of buttons.
    3.1. The log message similar to the rest of buttons needs to be written to the dev console.
4. All buttons should be lined up in one row from left to right: Reset, Position, Color, Next Step. 
5. The mark needs be able to change its color on request. 
    5.1. SetColor method needs to be added that can be called from dev tools console similarly to setCell method.
        5.1.1. The method accepts a string (case-insensitive)
            5.1.1.1. Possible string values: Red, Blue, Green, Yellow, Orange, Purple (any case variation should work)
            5.1.1.2. If the passed string has unknown value then the value needs to be fully ignored.
            5.1.1.3. If the passed value is accepted then the mark needs to change its color correspondingly to the accepted value.
            5.1.1.4. The mark color should persist when moving to different cells.
            5.1.1.5. Use console.error for invalid inputs following the same pattern as setCell method.
            5.1.1.6. Map color names to standard CSS colors allowing for variations.

### Execution Requirements
Before responding with the final output:
1. Check the existing build system and verify current dependencies before installing any new ones.
2. Install all required dependencies (Vue 3 and Rollup plugins for Vue) only if needed.
3. Run the build process (e.g., `npm run build` or equivalent).
4. Verify the build completes successfully with **zero errors and zero warnings** (including TypeScript compilation warnings).
5. If issues occur, fix them and repeat steps 1–4 until successful.
6. Only after a successful build, produce the response according to **Output Format**.

### Output format
1. File Tree
    1.1. Show the final project structure.
2. Code Files
    2.1. Provide each modified or new file in a separate code block, labeled with its filename.
3. Build Notes
    3.1. Explain:
        3.1.1. Key dependencies used.
        3.1.2. Any design decisions for future scalability.
        3.1.3. How to build the entire project.
        3.1.4. How to call all the exposed to dev console methods.