import logo from "./logo.svg";
import "./App.css";
import Router from "./Page_router/Router";
import PageLink from "./Page_router/Page_link";

function App() {
  return (
    <div className="App">
      <PageLink />
      <Router />
    </div>
  );
}

export default App;
