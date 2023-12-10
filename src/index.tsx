import { render } from "react-dom";
import "./styles.css";

import App from "./App";
import Root from "./Root";

const rootElement = document.getElementById("root");
render(<Root />, rootElement);
