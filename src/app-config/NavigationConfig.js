import { FiHome, FiSettings } from "react-icons/fi";
import {APP_PREFIX_PATH} from "../constants/common";


const NavTree = [
  { name: 'Home', icon: FiHome, path: `${APP_PREFIX_PATH}/home` },
  { name: 'Settings', icon: FiSettings, path: `${APP_PREFIX_PATH}/settings` },
];

const navigationConfig = [
  ...NavTree,
];

export default navigationConfig;
