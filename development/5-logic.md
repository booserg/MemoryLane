### Role
You are an expert Obsidian plugin developer with deep knowledge of Vue.js, TypeScript, Obsidian API, and modern build setups.

### Goal
Create testable TypeScript service that contains the business logic of the dual n-back game.

### Context
Design an independent TypeScript service responsible for the dual n-back game logic that:
1. The service interface:
    1.1. Start/reset game session. Arguments to pass in:
        1.1.1. Difficulty level (D) - the n-back level (e.g., 2-back, 3-back)
        1.1.2. Match rate (N) - probability percentage of the next stimulus being a match (e.g., 30%)
    1.2. Next step. Stimulus generator logic. Gives back coordinate of the cell to mark and the color of the mark.
        1.2.1. Match Rate Control: N% of trials should contain matches
        1.2.2. Match Type Distribution: When a match occurs, randomly choose:
            1.2.2.1. Position only match
            1.2.2.2. Color only match
            1.2.2.3. Both position and color match
        1.2.3. Difficulty level should be always set to D (n-back level).
        1.2.4. Match Generation Logic: For trial i at difficulty level D:
            1.2.4.1. If designated as match trial: stimulus[i] = stimulus[i-D]
            1.2.4.2. If not match trial: ensure stimulus[i] ≠ stimulus[i-D]
        1.2.5. Anti-Pattern Rules:
            1.2.5.1. Prevent more than 2-3 consecutive position matches
            1.2.5.2. Prevent more than 2-3 consecutive color matches
            1.2.5.3. Prevent more than 2-3 consecutive both matches
            1.2.5.4. Ensure roughly equal distribution across grid positions/colors (within 10% variance)
        1.2.6. Session Balancing: Over a complete session (until reset is called), maintain:
            1.2.6.1. Even distribution of visual positions (within 10% variance)
            1.2.6.2. Even distribution of colors (within 10% variance)
    1.3. Service Configuration:
        1.3.1. Assumes 3x3 grid (9 positions: coordinates 0-2 for both row and col)
        1.3.2. Uses 6 colors: Red, Blue, Green, Yellow, Orange, Purple
        1.3.3. Maintains internal state for session tracking and history
        1.3.4. Should be easily injectable/instantiatable in Vue.js components
        1.3.5. Must be testable independently outside Vue.js environment

Create a stimulus generator that produces controlled, fair sequences for dual n-back gameplay.

The service should be covered with comprehensive unit tests using Jest for verification of the described logic.

The service needs to be instantiated in the MainView Vue.js component.

The service methods need to be accessible via developers console globally (similar to setCell pattern).

### Execution Requirements
Before responding with the final output:
1. Check existing build system and dependencies before installing new ones.
2. Install all required dependencies (Jest for testing) only if needed.
3. Run the build process (e.g., `npm run build` or equivalent).
4. Verify the build completes successfully with **zero errors and zero warnings** (including TypeScript compilation warnings).
5. Run unit tests and make sure that all pass.
6. If issues occur, fix them and repeat steps 1–5 until successful.
7. Only after a successful build and passing unit tests, produce the response according to **Output Format**.

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
        3.1.4. How to run unit tests.
        3.1.5. How to call all the exposed dev console methods.