import { Desktop, Mobile } from "./views";

import { useDeviceType } from "./hooks/useDeviceType";

import { DEVICES } from "./utils/consts";

function App() {
  const device = useDeviceType();

  return <>{device === DEVICES.DESKTOP ? <Desktop /> : <Mobile />}</>;
}

export default App;
