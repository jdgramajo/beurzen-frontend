import router from "./shared/v1/router";
import logo from "../beurzen.png";
import favicon from "../favicon.ico";

const headerTemplate = require("ejs-compiled-loader!./shared/v1/components/header/template.ejs");

// TODO: Change file.
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
