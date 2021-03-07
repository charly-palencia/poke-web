import {Route, Switch} from "wouter";
import GlobalStyle from "./GlobalStyle";
import {Home} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
