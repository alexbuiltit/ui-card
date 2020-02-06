import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Card from "../components/";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card />
    </ThemeProvider>
  );
};

export default Index;
