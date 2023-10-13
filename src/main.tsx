import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { store } from "store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StyleProvider hashPriority="high">
      <ToastContainer position="top-right" />
      <Provider store={store}>
        <App />
      </Provider>
    </StyleProvider>
  </BrowserRouter>
);
