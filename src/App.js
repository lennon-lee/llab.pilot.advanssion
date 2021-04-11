import {
  Switch,
  Route
} from 'react-router-dom'
import { useMediaQuery } from "react-responsive";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main/Main';
import Headphones from './pages/headphones/Headphones';
import Earphones from './pages/earphones/Earphones';
import Speakers from './pages/speakers/Speakers';
import Explore from './pages/explore/Explore';

function App() {
  const isPC = useMediaQuery({
    query: "(min-width: 1280px)"
  });

  return (
    <div>
      <Header isPC={ isPC }></Header>
      <div>
        <Switch>
          <Route path="/headphones">
            <Headphones />
          </Route>
          <Route path="/earphones">
            <Earphones />
          </Route>
          <Route path="/Speakers">
            <Speakers />
          </Route>
          <Route path="/Explore">
            <Explore />
          </Route>
          <Route path="/">
            <Main isPC={ isPC } />
          </Route>
        </Switch>
      </div>
      <Footer isPC={ isPC }></Footer>
    </div>
  );
}

export default App;
