# Thin Angular

Opinionated example of Angular architecture focusing on a separation of concerns. The application makes use of `ngrx`, `ngrx-forms`, and `ngrx/effects` to handle all state and business logic of the application. This leaves the UI components to display data and respond to changes in this state machine and fire actions to update the state

## Getting Started

```bash
# Clone this repository
git clone https://github.com/ShaunLloyd/thin-angular-example.git

# Move into the project directory
cd thin-angular-example

# Install dependencies
yarn

# Launch development server
yarn start
```

## Key Folders & Files

- **src/app/core/store**: Holds the core logic of the application's ngrx state

  - `*.actions.ts`: holds the actions and action types for a reducer module
  - `*.effects.ts`: Holds the ngrx effects class that handles the async side effects for a reducer module
  - `*.reducer.ts`: Holds the reducer function that describe the state and it's transformations for a reducer module
  - `*.selectors.ts`: Holds the memoized selector functions for a reducer module

- **src/app/components**: Holds common components used throughout the application
