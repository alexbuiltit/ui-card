import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import GlobalStyles from "../src/theme/GlobalStyles";

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));
addDecorator(withKnobs, {
  knobs: {
    timestamps: true,
    escapeHTML: true
  }
});
addDecorator(withA11y);

addParameters({
  options: {
    name: "Versatile UI Card",
    addonPanelInRight: false,
    hierarchyRootSeparator: /\|/,
    sortStoriesByKind: true
  }
});

const req = require.context("../src/", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
