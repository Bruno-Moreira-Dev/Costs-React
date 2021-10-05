import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/layout/Container/Container';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
          
          <Route path="/company">
            <Company />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/new-project">
            <NewProject />
          </Route>
        </Container>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
