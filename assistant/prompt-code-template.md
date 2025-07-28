### **Role**
# Describe who the model should act as.
# This sets the "persona" and expertise level for the model.
# Example: "You are an expert full-stack developer skilled in TypeScript and Node.js."

[ROLE_DESCRIPTION]

---

### **Goal**
# Define the single primary objective of this prompt in one clear sentence.
# Keep it outcome-based, not action-based.
# Example: "Create a REST API for user authentication."

[PRIMARY_GOAL]

---

### **Context**
# Provide necessary background and details about the environment, constraints, and expectations.
# Use sub-sections for clarity.

- **Feature Requirements:**
  # List the functional requirements here as bullet points.
  # Example:
  # - Implement POST /login and POST /register endpoints.
  # - Use JWT for authentication.
  # - Persist user data in PostgreSQL.
  [ADD_YOUR_FEATURE_REQUIREMENTS]

- **Build Setup:**
  # Mention how the build process should be structured.
  # Example:
  # - Use npm scripts for build and start commands.
  # - Output compiled code to /dist directory.
  [ADD_BUILD_SETUP_DETAILS]

- **Documentation:**
  # Explain what documentation should be generated.
  # Example:
  # - Provide README.md with setup instructions.
  # - Include usage examples for API endpoints.
  [ADD_DOCUMENTATION_REQUIREMENTS]

- **Constraints:**
  # Specify limitations or rules the model must follow.
  # Example:
  # - Do not modify unrelated files.
  # - Avoid committing changes to git.
  [ADD_CONSTRAINTS]

---

### **Execution Requirements**
# This section is critical for Codex CLI because it enforces verification before output.
# List the exact steps the model should perform before producing the final answer.
# These steps should include installation, building, testing, and error handling.

Before responding with the final output:
1. Install all required dependencies.
2. Run the build process (e.g., `npm run build` or equivalent).
3. Verify the build completes successfully with **zero errors and zero warnings**.
4. If issues occur, fix them and repeat steps 1–3 until successful.
5. Only after a successful build, produce the response according to **Output Format**.

---

### **Output Format**
# This section guarantees a predictable structure in the response.
# Explicitly list what the final output must include and in what order.
# Example:
Respond with the following sections in order:

1. **File Tree**
   - Show the final project structure.

2. **Code Files**
   - Provide each file in a separate code block, labeled with its filename.
   - Example:
     ```typescript
     // src/index.ts
     console.log('Hello World');
     ```

3. **Build Notes**
   - Briefly explain:
     - How the build process works
     - Key dependencies used
     - Any decisions that impact future extensibility
