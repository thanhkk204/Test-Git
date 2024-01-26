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
import Products from "./src/pages/Products.js";
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
router.on("/products", () => render(app, Products), {
  after() {
    const products = document.getElementById("products");
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data)=>{
      console.log(data.products)
      const HTMLcontent = data?.products.map((product) => {
        return `
      

      <div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="${product.thumbnail}" alt="${product.thumbnail}">
      <div class="caption">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>
      `;
      }).join(" ")
      console.log(HTMLcontent)
      products.innerHTML = HTMLcontent
    })

    .catch((err) => console.log(err))

  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
