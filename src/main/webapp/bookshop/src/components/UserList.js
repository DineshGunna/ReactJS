import React, {Component} from 'react';
import {Card, Table,Button,InputGroup,FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList,faFastBackward,faFastForward,faStepForward,faStepBackward} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Style.css';

export default class UserList extends Component {

constructor(props){
super(props);
this.state={

users:[],
currentPage:1,
usersPerPage:5
}
}

componentDidMount(){
axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
.then(response => response.data )
.then(data => this.setState({users : data}) )

}
changePage= (event) => {
if(event.target.value > 0){
this.setState({
[event.target.name]: parseInt(event.target.value)
})
}

}

firstPage = () => {
if(this.state.currentPage > 1){
this.setState({
currentPage:1
});
}
}
prevPage = () => {
if(this.state.currentPage > 1){
this.setState({
currentPage:this.state.currentPage -1
});
}
}
nextPage = () => {
if(this.state.currentPage < Math.ceil(this.state.users.length/this.state.usersPerPage)){
this.setState({
currentPage:this.state.currentPage + 1
});
}
}

lastPage = () => {
if(this.state.currentPage < Math.ceil(this.state.users.length/this.state.usersPerPage)){
this.setState({
currentPage:Math.ceil(this.state.users.length/this.state.usersPerPage)
});
}
}

render(){

const {users,currentPage,usersPerPage} = this.state ;
const lastIndex = currentPage * usersPerPage;
const firstIndex = lastIndex-usersPerPage;
const currentUsers = users.slice(firstIndex,lastIndex);
const totalPages = users.length/usersPerPage;

return(
<div>
<Card className={"border bg-dark text-white"}>
<Card.Header > <FontAwesomeIcon icon={faList} />UserList </Card.Header>
<Card.Body>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Created</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    {users.length === 0 ?
      <tr align="center">
        <td colSpan="5">No Users Available</td>
      </tr> : currentUsers.map((user) => (
      <tr key= {user.index}>
       <td> {user.first} {' '} {user.last} </td>
       <td> {user.email} </td>
       <td> {user.address} </td>
       <td> {user.created} </td>
       <td> {user.balance} </td>
       </tr>

      ) )}
    </tbody>
  </Table>
  </Card.Body>
  <Card.Footer className={"margin-bottom"}>
  <div  style={{"float":"left", "font-size":"small" }} >
  Showing Page {currentPage} of {totalPages}

  </div>
  <div  style={{"float":"right"}}>
  <InputGroup size="sm">
<InputGroup.Prepend>
<Button type="button" variant="outline-info" disabled={currentPage===1? true : false}
onClick={this.firstPage}>
<FontAwesomeIcon icon={faFastBackward} />
</Button>
<Button type="button" variant="outline-info" disabled={currentPage===1? true : false}
onClick={this.prevPage}>
<FontAwesomeIcon icon={faStepBackward} />
</Button>
</InputGroup.Prepend>
<FormControl className={"bg-dark page-num"} name="currentPage" value={currentPage}
onChange={this.changePage}/>
<InputGroup.Append>
<Button type="button" variant="outline-info" disabled={currentPage===totalPages ? true : false}
onClick={this.nextPage}>
<FontAwesomeIcon icon={faStepForward} />
</Button>
<Button type="button" variant="outline-info" disabled={currentPage===totalPages ? true : false}
onClick={this.lastPage}>
<FontAwesomeIcon icon={faFastForward} />
</Button>
</InputGroup.Append>
  </InputGroup>
    </div>
  </Card.Footer>
</Card>
</div>

)
}
}
