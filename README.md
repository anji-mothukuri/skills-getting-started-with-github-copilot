
# Mergington High School Activities API & TypeScript Frontend

This project is a full-stack example featuring:
- A FastAPI backend for managing high school extracurricular activities
- A TypeScript/React frontend with reusable components and form validation

## Backend (FastAPI)

### Features
- View all available extracurricular activities
- Sign up for activities

### Getting Started
1. Install dependencies:
	```
	pip install -r requirements.txt
	```
2. Run the application:
	```
	python src/app.py
	```
3. Open your browser:
	- API docs: http://localhost:8000/docs
	- Redoc: http://localhost:8000/redoc
	- Main page: http://localhost:8000/static/index.html

### API Endpoints
| Method | Endpoint                                                          | Description                                                         |
| ------ | ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| GET    | `/activities`                                                     | Get all activities with their details and current participant count |
| POST   | `/activities/{activity_name}/signup?email=student@mergington.edu` | Sign up for an activity                                             |

## Frontend (TypeScript/React)

- All new code is written in TypeScript for type safety and maintainability.
- Components are in `src/components/`, types in `src/types/`, and utilities in `src/utils/`.
- Example components: `ProfileCard`, `LoginForm` (with validation).

### TypeScript Setup
- Configured with `tsconfig.json` (see project root)
- Compile with:
  ```
  npx tsc
  ```

## Project Structure

```
src/
  app.py         # FastAPI backend
  app.ts         # Example TypeScript logic
  components/    # React components (TypeScript)
  types/         # TypeScript type definitions
  utils/         # TypeScript utility functions
  styles/        # CSS styles
  static/        # Static assets (HTML, JS, CSS)
```

## Requirements
- Python 3.8+
- Node.js & npm (for frontend/TypeScript)

---
&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

