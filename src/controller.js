import router from "./shared/v1/router";
import logo from "../427x320.png";

const headerTemplate = require("ejs-compiled-loader!./shared/v1/components/header/template.ejs");

// TODO: Change file.
const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", logo);
document.head.appendChild(tabIcon);

const headerData = {
  data: {
    router,
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
