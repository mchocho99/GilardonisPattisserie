import { Home } from "./views";
import { BottomNavigationBar, Header } from "./components";
import { LogoBig } from "./assets";

function App() {
  return (
    <>
      <Header image={LogoBig} />
      <Home />
      <BottomNavigationBar />
    </>
  );
}

export default App;
