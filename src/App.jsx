import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div>
      <Header>
        <Menu />
      </Header>
      <h1>
        De<span>Print</span> Project
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae provident temporibus culpa repellat delectus aperiam natus, magni ipsum id aut. Laudantium ea laboriosam impedit inventore adipisci, labore consequatur commodi!</p>
    </div>
  );
}

export default App;
