import router from "./shared/v1/router";
import logo from "../beurzen.png";
import favicon from "../favicon.ico";
import { login } from "./shared/v1/services/formsService";

const headerTemplate = require("ejs-compiled-loader!./shared/v1/components/header/template.ejs");
const formTemplate = require("ejs-compiled-loader!./shared/v1/components/form/template.ejs");

const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", favicon);
document.head.appendChild(tabIcon);

const headerData = {
  data: {
    img: {
      src: logo,
    },
    itemList: [
      { name: "Participación", href: "/v1/?item=0" },
      { name: "Valor de la Cuenta", href: "/v1/?item=1" },
    ],
  },
};

document.body.innerHTML += headerTemplate(headerData);
const headerBrand = document.getElementById("header-brand");
headerBrand.addEventListener("click", router.toRoot);

const submitLoginAndRedirect = async (event) => {
  const loginSuccess = await login(event);
  if (!loginSuccess) router.toError();
  router.toMain();
};

document.body.innerHTML += formTemplate({
  submitFunction: submitLoginAndRedirect,
});
const loginForm = document.getElementById("login-form");
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitLoginAndRedirect.bind(loginForm));
