import "./style.css";
import Navigo from "navigo";

const router = new Navigo("/");

const app = document.getElementById("app");
const HomePage = () => {
  // logic code
  return `
  <h2>HomePage</h2>
  `;
};

const AboutPage = () => {
  return `
  <h1>AboutPage<h1>
  `;
};

const render = (target, content) => {
  target.innerHTML = content();
};

router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.resolve();
