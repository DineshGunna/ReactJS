import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave,faPlusSquare,faUndo,faEdit,faList} from '@fortawesome/free-solid-svg-icons';
import {Card, Form, Button,Col} from 'react-bootstrap';
import axios from 'axios';
import MyToast from './MyToast';
export default class AddBook extends Component{

constructor(props){
super(props)
this.state= this.initialState;
this.state={
show:false,
languages:[],
genres:[]
};
}

initialState = {
bookid:'',title:'',author:'',price:'',language:'',genre:''
}
componentDidMount(){
    const bookId= this.props.match.params.bookid;
    if(bookId){
        this.findBookById(bookId);
    }
    this.findAllLanguages();
    this.findAllGenre();

}

findAllLanguages = ()=> {
axios.get("http://localhost:8080/book/languages")
.then(response => response.data)
.then((data) => {
this.setState({
languages:[{value:'',display:'Select Language'}]
.concat(data.map(language => {
return {value:language,display:language}
}))
});
});
};

findAllGenre = ()=> {
axios.get("http://localhost:8080/book/genre")
.then(response => response.data)
.then((data) => {
this.setState({
genres:[{value:'',display:'Select Genre'}]
.concat(data.map(genre => {
return {value:genre,display:genre}
}))
});
});
};

findBookById = bookId =>{fetch("http://localhost:8080/book/"+bookId)
        .then(response => response.json())
        .then(book => {
         if(book)
         {
              this.setState({
                    bookid: book.bookid,
                    title: book.title,
                    author: book.author,
                    price:book.price,
                    language:book.language,
                    genre:book.genre
                    });
                    }
       })
        .catch(error => {
                  console.log("Error-" + error);
        });
}

//findBookById = bookId =>{axios.get("http://localhost:8080/book/"+bookId)
//        .then(response => {
//            if(response.data != null){
//            this.setState({
//            bookid: response.data.bookid,
//            title: response.data.title,
//            author: response.data.author,
//            price: response.data.price,
//            language: response.data.language
//            });
//            }
//        }). catch(error => {
//                  console.log("Error-" + error);
//        });
//}

bookChange= event => {
this.setState({
[event.target.name]: event.target.value
});

}
resetBook = event =>{
this.setState(this.initialState);
}
//updateBook = event => {
//const book = {
// bookid:this.state.bookid,
// title:this.state.title,
// author:this.state.author,
// price:this.state.price,
// language:this.state.language
//
//}
// axios.put("http://localhost:8080/books",book)
// .then(response => {
// if(response.data != null ){
// this.setState({"show":true,"method":"put" })
// setTimeout(()=> this.setState({"show":false}), 3000 )
// setTimeout(()=> this.bookList(), 3000 )
//
// }else
// {
// this.setState({"show":false});
// }
// } )
//
//}
updateBook = event => {
const book = {
 bookid:this.state.bookid,
 title:this.state.title,
 author:this.state.author,
 price:this.state.price,
 language:this.state.language,
 genre:this.state.genre

}
const headers = new Headers();
headers.append('Content-Type','application/json');

 fetch("http://localhost:8080/books",{
 method:'PUT',
 body:JSON.stringify(book),
 headers
 })
 .then(response => response.json())
.then(book =>{
               if(book ){
               this.setState({"show":true,"method":"put" })
               setTimeout(()=> this.setState({"show":false}), 3000 )
               setTimeout(()=> this.bookList(), 3000 )
               }else
               {
               this.setState({"show":false});
               }
               })
}

//submitHandler = event => {
//event.preventDefault();
//const book = {
// bookid:this.state.bookid,
// title:this.state.title,
// author:this.state.author,
// price:this.state.price,
// language:this.state.language
//
//}
// axios.post("http://localhost:8080/books",book)
// .then(response => {
// if(response.data != null ){
// this.setState({"show":true,"method":"post" })
// setTimeout(()=> this.setState({"show":false}), 3000 )
// setTimeout(()=> this.bookList(), 3000 )
//
// }else
// {
// this.setState({"show":false});
// }
// } )
//this.setState(this.initialState);
//}

submitHandler = event => {
event.preventDefault();
const book = {
 bookid:this.state.bookid,
 title:this.state.title,
 author:this.state.author,
 price:this.state.price,
 language:this.state.language,
 genre:this.state.genre
}
const headers = new Headers();
headers.append('Content-Type','application/json');
 fetch("http://localhost:8080/books",{
 method:'POST',
 body: JSON.stringify(book),
 headers
 })
 .then(response => response.json())
 .then( book => {
  if(book ){
  this.setState({"show":true,"method":"post" })
  setTimeout(()=> this.setState({"show":false}), 3000 )
  setTimeout(()=> this.bookList(), 3000 )

  }else
  {
  this.setState({"show":false});
  }
 })

this.setState(this.initialState);
}

bookList = () => {
return this.props.history.push("/list");
}

render(){
const {bookid,title,author,price,language,genre} = this.state;
return(
<div>
<div style={{"display": this.state.show ? "block" : "null" }}>
<MyToast show={this.state.show } message={this.state.method === "put" ? "Book Updated Successfully" : "Book Saved Successfully" }type="success"/>
</div>

<Card className={"border bg-dark text-white"} >
<Card.Header ><FontAwesomeIcon icon={ this.state.bookid ? faEdit:faPlusSquare} />{this.state.bookid ? "UpdateBook": "AddBook"} </Card.Header>
<Form onSubmit={ this.state.bookid ? this.updateBook : this.submitHandler} onReset={this.resetBook} id="bookFormId">
<Card.Body>
<Form.Row>
  <Form.Group as={Col}>
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" required className={"bg-dark text-white"}
      name="title" value={title} onChange={this.bookChange} />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Author</Form.Label>
      <Form.Control type="text" placeholder="Enter author" required className={"bg-dark text-white"}
      name="author" value={author} onChange={this.bookChange} />
       </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col}>
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" className={"bg-dark text-white"}
        required name="price" value={price} onChange={this.bookChange}/>
      </Form.Group>
        <Form.Group as={Col}>
                <Form.Label>Language</Form.Label>
                <Form.Control as="select" custom required className={"bg-dark text-white"}
                name="language" value={language} onChange={this.bookChange}>
                {this.state.languages.map(language =>
                     <option key={language.value} value={language.value}> {language.display}</option>
                            )}
                 </Form.Control>
              </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Genre</Form.Label>
                  <Form.Control as="select" custom required className={"bg-dark text-white"}
                  name="genre" value={genre} onChange={this.bookChange}>
                  {this.state.genres.map(genre =>
                                       <option key={genre.value} value={genre.value}> {genre.display}</option>
                                              )}
                                   </Form.Control>

                </Form.Group>
    </Form.Row>
  </Card.Body>
<Card.Footer style={{"text-align": "right"}}>
<Button size="sm" variant="success" type="submit"> <FontAwesomeIcon icon={faSave} />{this.state.bookid ? "Update": "Save"}</Button> {'   '}
<Button size="sm" variant="primary" type="reset"> <FontAwesomeIcon icon={faUndo} />Reset</Button>{'   '}
<Button size="sm" variant="info" type="button" onClick={this.bookList.bind()}> <FontAwesomeIcon icon={faList} />BookList</Button>
</Card.Footer>
</Form>
</Card>
 </div>
);
}

}