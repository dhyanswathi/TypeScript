# TypeScript
# TypesScript with React AddOn

## Task
The task is to create a basic React application for random users. You'll be working towards the `https://randomuser.me/api/` api that will return a random user (you can fetch directly from your frontend this time).

- The UI should display at least the users `address`, `age` and `name`.
- It should also be possible to change the name through a form input (but you don't have to make a post request, just simply update the name in the UI.)
  - in other words, make it possible to change the state of the name field.
- For each new load of the application, a new user should appear.

## Goal
The goal of this lab is to get familiar with TypeScript in React. Make sure to read the documentation to get to know the pre-existing types supplied by React. The lab is quite basic so practice applying TypeScript as much as possible, including `useState`, `useEffect`, `props` to mention a few.


# About TypeScript
...

## Create React Application with Typescript
```
npx create-react-app <app-name> --template typescript
npx gitignore node 
npm i typescript ts-node mocha
npm i @tsconfig/node16 @types/mocha @types/node
```
  
## Within tsconfig.json file, add this additional content to it:
```
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },

  "include": ["src"],
  "exclude": ["node_modules"],
}
```

## Finally, update the script section in the package.json to this:
```
"scripts": {
  "build": "tsc",
  "dev": "ts-node src/index.ts",
  "test": "mocha -r ts-node/register src/**/*.test.ts"
},
```

# Linting for TypeScript
```
npm i eslint-config-salt-typescript
```

## in the root location, add a file called .eslintrc with the following content:
```
{
  "extends": "salt-typescript",
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "rules": {
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "": "never"
      }
    ]
  }
}
```

## add this new script in the package.json file
```
"lint": "eslint ./src/**/*.ts"
```

## run lint
```
npm run lint
or
npm run lint -- --fix
```
