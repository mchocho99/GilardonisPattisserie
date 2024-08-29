import { useState, useEffect } from "react";
import { DEVICES } from "../utils/consts";

export const useDeviceType = () => {
  const [device, setDevice] = useState(DEVICES.DESKTOP);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (width <= 768 && isTouch) {
      setDevice(DEVICES.MOBILE);
    } else if (width > 768 && width <= 1024 && height <= 1366 && isTouch) {
      setDevice(DEVICES.TABLET);
    } else {
      setDevice(DEVICES.DESKTOP);
    }
  }, []);

  return device;
};
