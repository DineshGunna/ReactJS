import React from 'react';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import Welcome from './components/Welcome';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AddBook from './components/AddBook';
import BookList from './components/BookList'
import UserList from './components/UserList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
    <NavigationBar />
    <Container>
    <Row>
    <Col lg={12} className={"margin-top"}>
    <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/add" exact component={AddBook} />
    <Route path="/edit/:bookid" exact component={AddBook} />
    <Route path="/list" exact component={BookList} />
    <Route path="/user" exact component={UserList} />
    </Switch>
    </Col>
    </Row>
    </Container>
    <Footer className={"margin-top"} />

    </Router>
  );
}

export default App;
