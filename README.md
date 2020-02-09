# A versatile UI Card

## Setup

`npm i` will install appropriate node modules.
`npm run storybook` will run storybook.
`npm run dev` will run a nextjs web app with an example card component.

## Structure

### Components

All components are inside `src/components`, they all have their own folder to keep the structure tidy. Inside each component folder there are a number of files:

    - `ComponentName.js`: This is the component file
    - `ComponentName.styled.js`: This is the file that holds all the styles for the component, I have extracted the styles from the component file to make it easy to read.
    - `ComponentName.stories.js`: These are storybook files, they will generate stories that can bee seen when you `npm run storybook`

### Helpers

There are a couple of helpers that have been created in `src/helpers`, at the moment each helper function has its own file. If this was a larger project the file structure may change.

### Theme

I have created a theme object that uses styled-components `ThemeProvider` to allow my components access these values. This makes it easier to scale the application and introduce new components without repeating styles. There is also a global styles file which would have css resets etc in on a larger project.
