import { BottomNavigationBar, Header } from "./components";
import { Home } from "./views";

function App() {
  return (
    <>
      <div className="top-notch-background" />
      <Header />
      <Home />
      <BottomNavigationBar />
    </>
  );
}

export default App;
