import { router } from "./router";
import { useRoutes } from "react-router-dom";

function App() {
  return <div>{useRoutes(router)}</div>;
}

export default App;
