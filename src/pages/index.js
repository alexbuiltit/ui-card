import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Card from "../components/card/Card";
import Layout from "../components/layout/Layout";
const cardOneContent = {
  title: "This card doesn't have an image.",
  subTitle: "Last edited 2 days ago",
  text:
    "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content."
};
const cardTwoContent = {
  title: "Look at this dog!",
  subTitle: "Last edited 4 hours ago",
  image: "https://i.picsum.photos/id/237/500/360.jpg"
};
const cardThreeContent = {
  title: "Countdown Announcement - This has a really long title",
  subTitle: "Last edited 7 days ago",
  text:
    "A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.",
  image: "https://i.picsum.photos/id/243/500/360.jpg"
};

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Card
          title={cardTwoContent.title}
          subTitle={cardTwoContent.subTitle}
          text={cardTwoContent.text}
          image={cardTwoContent.image}
          showMenu
        />
        <Card
          title={cardThreeContent.title}
          subTitle={cardThreeContent.subTitle}
          text={cardThreeContent.text}
          image={cardThreeContent.image}
          showMenu
          showFav
        />
        <Card
          title={cardOneContent.title}
          subTitle={cardOneContent.subTitle}
          text={cardOneContent.text}
          image={cardOneContent.image}
          showMenu
          showFav
        />
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
