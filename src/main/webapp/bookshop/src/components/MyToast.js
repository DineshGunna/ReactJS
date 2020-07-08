import React,{Component} from 'react';
import{Toast} from 'react-bootstrap';

export default class MyToast extends Component{

render(){
const toastCss = {
position:'fixed',
top:'10px',
right:'10px',
zIndex:'1'
}

return(
<div style={toastCss}>
<Toast className={`border text-white ${this.props.type === "success" ? "border-success bg-success" : "border-danger bg-danger" } `} show={this.props.show}>
<Toast.Header className={`text-white ${this.props.type === "success" ? "bg-success" : "bg-danger" }`} closeButton={false}>
<strong> Success </strong>
</Toast.Header>
<Toast.Body>
{this.props.message}
</Toast.Body>
</Toast>
</div>



)

}


}