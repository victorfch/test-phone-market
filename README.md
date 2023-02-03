# Getting Started with Vite

This project was bootstrapped with Vite.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Notes

The api's are not available from 01/02/2023 to 03/02/2023, in order to provide a solution I have created a json file to simulate the fetch.

## Architecture

To store the data in this project I have used the architecture provided by the Redux pattern, where I have a global storage, all the components can access this data without the need to pass it from parent to child. Even the method it gives us to update the data, using the reducer, seemed to me to be the right one, as I can define there the internal operation to update and the person can call it when needed without thinking about how the data has to be stored.

## File structure

The project is divided into the following folders:

### Services

The internal files are the ones that are in charge of calling the backend.

### Hooks

The internal hooks are in charge of removing logic used in various places.

### Pages

Are the pages seen by the user.

### Components

These are divided in folders that simulate the pages where they are used, in case there are common components we move them to a common place. That is, under the home folder will be all those components used in the home page.

### Reducer

Here I keep both the main reducer and the phone reducer, the filtered phones and the shopping cart.
