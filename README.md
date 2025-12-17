## Technical Decisions

- Nuxt 3 + TypeScript for scalability and strong typing
- Pinia as the global state management solution
- Tailwind CSS for utility-first styling
- ESLint to enforce consistent code quality, formatting, and best practices across the codebase
- Heroicons for a consistent, lightweight icon system integrated with Vue components
- Focused E2E tests, prioritizing real user flows over excessive test coverage


## Available Scripts

npm run dev        # Run the app in development mode
npm run build      # Build for production
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
npm run cy:open    # Open Cypress UI
npm run test:e2e   # Run Cypress in terminal


## Data persistence

When the user completes the form:

- All collected answers are stored in a centralized Pinia store
- Based on the conditional logic described above, the final user data is persisted in the corresponding JSON file:
  - `GrupoA.json` if Question 6 was part of the flow
  - `GrupoB.json` otherwise

This ensures that the user’s data remains consistent and correctly categorized after the form submission.


## Future Improvements

Given more time, the following areas could be further improved:

- **Custom components complexity**  
  Refactor and generalize complex custom components (such as the autocomplete and form controls) to improve reusability, testability, and separation of concerns.

- **Architecture and scalability**  
  Improve the overall application architecture by introducing clearer domain boundaries, more granular stores, and stronger abstraction layers to better support future feature growth.
