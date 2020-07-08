import React,{Component} from 'react';
import {Card, Table,ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList,faEdit,faTimes,faSearch,faTrash,faFastBackward,faFastForward,faStepBackward,faStepForward} from '@fortawesome/free-solid-svg-icons';
import axios from'axios';
import MyToast from './MyToast';
import './Style.css';
import {Link} from 'react-router-dom';


export default class BookList extends Component{

constructor(props){
super(props);
this.state={

books:[],
search:'',
currentPage:1,
booksPerPage:4,
sortToggle: true
}
this.state.show= false;

}

componentDidMount(){
//axios.get("http://localhost:8080/books")
//.then(response => response.data )
//.then(data => this.setState({books : data}) )
this.findAllBooks(this.state.currentPage);
}
firstPage = () => {
let firstPage = 1;
if(this.state.currentPage > firstPage){
this.findAllBooks(firstPage);
}
}
prevPage = () => {
let prevPage = 1;
if(this.state.currentPage > prevPage){
this.findAllBooks(this.state.currentPage - prevPage)
}
}
lastPage = () => {
let condition =Math.ceil(this.state.totalElements/this.state.booksPerPage)
if(this.state.currentPage < condition){
this.findAllBooks(condition)
}
}

nextPage = () => {
if(this.state.currentPage < Math.ceil(this.state.totalElements/this.state.booksPerPage)){
this.findAllBooks(this.state.currentPage + 1);
}
}
changePage = (event) => {
let targetPage = parseInt(event.target.value)
this.findAllBooks(targetPage);
}
searchChange = (event) => {
this.setState({
[event.target.name]: event.target.value
})
}
searchData = () => {
fetch("http://localhost:8080/books/search/"+this.state.search+"?pageNumber="+this.state.currentPage +"&pageSize="+ this.state.booksPerPage + "&sortBy=boookid&sortDir=asc")
.then(response => response.json() )
.then(data => this.setState({books : data.content,
totalPages:data.totalPages,
totalElements:data.totalElements,
currentPage:data.number + 1
}) )
}
cancelSearch = ()=>{
this.setState({search:''});
this.findAllBooks(this.state.currentPage);

}
sortData = () => {
this.setState(state =>({
sortToggle:!state.sortToggle
}));
this.findAllBooks(this.state.currentPage);
}
findAllBooks = (currentPage) => {
currentPage -= 1;
let sortDir= this.state.sortToggle?"asc":"desc";
fetch("http://localhost:8080/books?pageNumber="+currentPage +"&pageSize="+ this.state.booksPerPage + "&sortBy=bookid&sortDir="+sortDir)
.then(response => response.json() )
.then(data => this.setState({books : data.content,
totalPages:data.totalPages,
totalElements:data.totalElements,
currentPage:data.number + 1
}) )
}

deleteBook = (bookid) => {
axios.delete("http://localhost:8080/book/"+bookid)
.then(response => {
if(response.data !=null){
this.setState({
    books: this.state.books.filter(book => book.bookid !== bookid )
});
 this.setState({"show":true});
 setTimeout(()=> this.setState({"show":false}), 3000 )
 }else
 {
 this.setState({"show":false});
 }
});
};

render(){
const {books,search,currentPage,booksPerPage,totalPages,totalElements} = this.state

return(
<div>
<div style={{"display": this.state.show ? "block" : "null" }}>
<MyToast show={this.state.show} message="Book Deleted Successfully" type= "danger"/>
</div>
<Card className={"border bg-dark text-white"}>
<Card.Header >
 <div style={{"float":"left"}}>
  <FontAwesomeIcon icon={faList} />
 </div>
 <div style={{"float":"right"}}>
    <InputGroup size="sm">
    <FormControl  className={"bg-dark text-white info-border"} name="search" value={search} onChange={this.searchChange}/>
    <InputGroup.Append>
     <ButtonGroup>
             <Button size="sm" variant="outline-info" type="button" onClick={this.searchData}> <FontAwesomeIcon icon={faSearch}/></Button>
             <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}> <FontAwesomeIcon icon={faTimes}/></Button>

         </ButtonGroup>

    </InputGroup.Append>
    </InputGroup>
  </div>
BookList </Card.Header>
<Card.Body>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>BookId</th>
      <th>Title</th>
      <th>Author</th>
      <th onClick={this.sortData}>Price <div className={this.state.sortToggle ? "arrow arrow-down": "arrow arrow-up"}  > </div></th>
      <th>Language</th>
      <th>Genre </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.books.length === 0 ?
    <tr align="center">
      <td colSpan="7">No Books Available</td>
    </tr> : this.state.books.map((book) => (
    <tr key= {book.bookid }>
     <td> {book.bookid} </td>
     <td> {book.title} </td>
     <td> {book.author} </td>
     <td> {book.price} </td>
     <td> {book.language} </td>
     <td>{book.genre} </td>
     <td>
     <ButtonGroup>
                      <Link to={"edit/"+book.bookid} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit}/></Link>{' '}
                <Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this,book.bookid)}> <FontAwesomeIcon icon={faTrash}/></Button>
     </ButtonGroup>
      </td>
     </tr>

    ) )}
  </tbody>
</Table>
</Card.Body>
{books.length ? <Card.Footer className={"margin-bottom"}>
  <div  style={{"float":"left", "font-size":"small" }} >
  Showing Page {currentPage} of {totalPages}
  </div>
  <div  style={{"float":"right"}}>
  <InputGroup size="sm">
<InputGroup.Prepend>
<Button type="button" variant="outline-info" disabled={currentPage===1 ? true : false}
onClick={this.firstPage}>
<FontAwesomeIcon icon={faFastBackward} />
</Button>
<Button type="button" variant="outline-info" disabled={currentPage===1 ? true : false}
onClick={this.prevPage}>
<FontAwesomeIcon icon={faStepBackward} />
</Button>
</InputGroup.Prepend>
<FormControl  className={"bg-dark page-num"} name="currentPage" value={currentPage}
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
  </Card.Footer > : null
  }
</Card>
</div>

);
}

}

