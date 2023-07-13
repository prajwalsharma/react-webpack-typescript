import "./styles.css";
import LogoPNG from "./assets/logo.png";
import LogoSVG from "./assets/logo.svg";
import { Counter } from "./components/Counter";

export const App = () => (
  <>
    <h1>Hello, World!!</h1>
    <img src={LogoPNG} height={"200px"} width={"200px"} />
    <img src={LogoSVG} height={"200px"} width={"200px"} />
    <p>Mode: {process.env.NODE_ENV}</p>
    <Counter />
  </>
);
