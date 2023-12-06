import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <ToastContainer
      style={{ width: "fit-content" }}
      theme="colored"
      position={"top-right"}
      autoClose={5000}
      limit={8}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
    />
  </BrowserRouter>
);
