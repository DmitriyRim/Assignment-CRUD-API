# Assignment-CRUD-API


This project uses `Prettier`, `ESLint`, and `Webpack` to ensure code quality and efficient builds. Below are the available commands and how to use them.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/project-name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd project-name
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

### Format Code with Prettier

You can use Prettier to automatically format the code:

```bash
npm run prettier
```
This command will format all files inside the src directory and ensure consistent code styling.

### Lint Code with ESLint
To check your code for errors and enforce coding standards, use the following command:

```bash
npm run lint
```

This will run ESLint on all .ts files in the src directory.

### Start Production Build
To bundle your project and start it in production mode:

```bash
npm run start:prod
```
This command will run Webpack in production mode, generating the build in the dist folder, and then start the application using Node.js.

### Webpack Development Build
To start Webpack in development mode with Nodemon (which automatically restarts the server on file changes):
```bash
npm run webpack:dev
```
This command will run the application from the src/index.ts file and automatically refresh the server during development.