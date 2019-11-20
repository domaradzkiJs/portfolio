import React from 'react';
import '../../index.scss';

/* const Form = ({passStyle}) => (
    
    <div className="form" style={{display:`${passStyle}`}}> 

        <div className="cross">
            <div className="lineCross"></div>
            <div className="lineCross"></div>
        </div>
        <form>

        </form>
    </div>
)

export default Form;

import React from "react"; */

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      yes:true,
      show:"none"
    };
  }



  handleClick=()=> (
      this.setState({yes: !this.state.yes})
  ) 
  
  render() {
    const { status } = this.state;
    return (
    <div className="form" style={ this.state.yes ? {display:this.props.passStyle} : {display:this.state.show} }> 

        
        <div className="cross" onClick={this.handleClick}>
            <div className="lineCross"></div>
            <div className="lineCross"></div>
        </div>

        <form
            onSubmit={this.submitForm}
            action="https://formspree.io/myyyobby"
            method="POST"
        >
        
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Message:</label>
            <textarea type="text" name="message" style={{height:"330px"}}/>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}