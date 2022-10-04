import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Slider } from "./components/Slider";
import { ThemeProvider } from "styled-components";

import { theme } from "./common/styles/theme";
import { Footer } from "./components/Footer";
import { Grid } from "./components/Grid";
import { Card } from "./components/Card";

import imgUrl from "./common/img/image_mockup_card.jpg"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Menu />
      </Header>
      <Slider numberOfSlides={1} hasZoom={true} hasEffect={true} />
      <Grid columns={3}>
        <Card
          title={"Adesivos Personalizados"}
          imgUrl={imgUrl}
        />
        <Card
          title={"Adesivos Personalizados"}
          imgUrl={imgUrl}
         />
        <Card
          title={"Adesivos Personalizados"}
          imgUrl={imgUrl}
        />
        <Card
          title={"Adesivos Personalizados"}
          imgUrl={imgUrl}
        />
        <Card
          title={"Adesivos Personalizados"}
          imgUrl={imgUrl}
        />
        <Card
          title={"Adesivos Personalizados"}
          imgUrl={imgUrl}
        />
      </Grid>

      <h1>
        De<span>Print</span> Project
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae
        provident temporibus culpa repellat delectus aperiam natus, magni ipsum
        id aut. Laudantium ea laboriosam impedit inventore adipisci, labore
        consequatur commodi!
      </p>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
