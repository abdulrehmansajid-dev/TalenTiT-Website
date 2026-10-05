# Training Tasks Section Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Replace Open Roles with a tabbed 100-topic department training tasks section.

**Architecture:** New `TrainingTasks.jsx` component with static department/task data; swap into `App.jsx`; remove `Roles.jsx`.

**Tech Stack:** React, Tailwind, existing SectionHeader / site theme classes.

## Global Constraints
- Match existing navy/orange theme and section spacing (`site-container`, `site-section`).
- No new dependencies.
- Do not commit unless user asks.

---

### Task 1: Add TrainingTasks component
- [x] Create `src/components/TrainingTasks.jsx` with all 100 tasks grouped by department
- [x] Tab UI + numbered task list + intro/stats
- [x] Verify in browser on homepage

### Task 2: Wire App and remove Open Roles
- [x] Update `App.jsx` import/usage and route `/training-tasks`
- [x] Delete `src/components/Roles.jsx`
- [x] Confirm no remaining Roles references
