import {Route, Switch} from "wouter";
import GlobalStyle from "./GlobalStyle";
import {Home, PokemonDetails} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pokemon/:name" component={PokemonDetails} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
