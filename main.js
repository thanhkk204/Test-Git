import "./node_modules/bootstrap/dist/js/bootstrap.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navigo from "navigo";
import { render } from "./src/utils/common.js";
import SignUp from "./src/pages/SignUp.js";
import HomePage from "./src/pages/HomePage.js";
import AboutPage from "./src/pages/AboutPage.js";
import NotFoundPage from "./src/pages/NotFoundPage.js";
import register from "./src/components/Register.js";
import SignIn from "./src/pages/SignIn.js";
import CheckLogin from "./src/components/CheckLogin.js";
const app = document.getElementById("app");
const router = new Navigo("/", { linksSelector: "a" });
router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUp), {
  after() {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});
router.on("/signIn", () => render(app, SignIn), {
  after() {
    const btnLognIn = document.getElementById("btnLognIn");
    btnLognIn.onclick = CheckLogin;
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
