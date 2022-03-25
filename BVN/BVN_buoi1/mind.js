import { Home } from "./compoinents/home.js";


const app =  document.getElementById('app');
const home = new Home();

app.appendChild(home.render());
