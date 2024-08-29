import { Home } from "./views";
import { BottomNavigationBar, Desktop, Header } from "./components";
import { useDeviceType } from "./hooks/useDeviceType";
import { LogoBig } from "./assets";
import { DEVICES } from "./utils/consts";

function App() {
  const device = useDeviceType();

  return (
    <>
      {device === DEVICES.DESKTOP ? (
        <Desktop />
      ) : (
        <>
          <Header image={LogoBig} />
          <Home />
          <BottomNavigationBar />
        </>
      )}
    </>
  );
}

export default App;
