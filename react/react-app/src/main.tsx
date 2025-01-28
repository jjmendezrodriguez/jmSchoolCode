import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import './index.css' esta línea no es necesaria se usa si estas usando los estilos de index.css en tu proyecto.
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
