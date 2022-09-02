import {consultarDatos } from "./promesas3.js";

consultarDatos().then(res=>console.log(res)).catch(err=>console.log(err))