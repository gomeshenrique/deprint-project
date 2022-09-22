import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Slider } from "./components/Slider";
import { ThemeProvider } from "styled-components";

import { theme } from "./common/styles/theme";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Menu />
      </Header>
      <Slider numberOfSlides={1} hasZoom={true} hasEffect={true} />
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
