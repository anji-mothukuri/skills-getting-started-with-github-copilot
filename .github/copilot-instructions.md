# Copilot Instructions for This Repository

## Code Style
- Use TypeScript for all new files
- Follow ESLint rules defined in .eslintrc
- Use functional components for React
- Prefer async/await over .then() chains

## Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for classes and React components
- Use SCREAMING_SNAKE_CASE for constants
- Prefix private methods with underscore

## Documentation
- All public functions must have JSDoc comments
- Include @param, @returns, and @throws tags
- Add usage examples for complex functions

## Error Handling
- Always use try-catch for async operations
- Log errors with context using our logger utility
- Return standardised error objects: { success: false, error: string, code: number }

## Security
- Never hardcode credentials or API keys
- Sanitise all user inputs
- Use parameterised queries for database operations