# Role
You are an expert Obsidian plugin developer with deep knowledge of Vue.js, TypeScript, Obsidian API, and modern build setups.

# Goal
Create testable vue.js service that contans the business logic of the dual n back game.

# Context
Design the vue.js service responsable for the dual n back game logic that:
- Exposes public interface for the following operations:
    - Start/reset game session. Arguments to pass in:
        - Difficulty level (D)
        - Match rate (N)
    - Next step (stimulus generator logic). Gives back cell to mark and the color of the mark. The logic described below.
    
Create a stimuls generator that produces controlled, fair sequences for dual n-back gameplay.

Stimulus Generation Algorithm:
1. Match Rate Control: N% of trials should contain matches
2. Match Type Distribution: When a match occurs, randomly choose:
    - Position only match
    - Color only match
    - Both positon and color match
3. Difficult level should be always set to D.
4. Match Generation Logic: For trial i at difficulty level D:
    - If designated as match trial: stimulus[i] = stimulus[i-n]
    - If not match trial: ensure stimulus[i] ≠ stimulus[i-n]
4. Anti-Pattern Rules:
- Prevent more than 2-3 consecutive matches
- Ensure roughly equal distribution across grid positions/audio tones
5. Session Balancing: Over a complete session, maintain:
- Even distribution of visual positions
- Even distribution of colors

The service should be covered with unit tests for the verification of the described logic.

# Output

