import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Welcome extends Component{

render()
{
return (
<div>
<Jumbotron className="bg-dark text-white"  >
        <h1>Welcome to BookStore</h1>
        <blockquote className="blockquote mb-0">
        <p>
         Books give a soul to the universe, wings to the mind, flight to the imagination, and life to everything.
        </p>
        <footer className="blockquote-footer">
            Donald Trump
        </footer>
        </blockquote>
      </Jumbotron>

</div>


 );

}
}