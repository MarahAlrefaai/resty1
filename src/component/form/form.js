import React from "react";
import "./form.scss";
import { useState } from 'react';
function Form(props) {
    //---------------------------------
    const [url, setUrl] = useState();
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState();
  const handleMethod = (event) => {
    event.preventDefault();
    // let elems = document.querySelectorAll('span');
    // elems.forEach(elem => elem.style.backgroundColor = "rgb(175, 176, 182)");
    // document.getElementById(`${event.target.id}`).style.backgroundColor = "white";
    setMethod(event.target.id);
  }
  const handleBody = (event) => {
    event.preventDefault();
    let newBody = event.target.value;
    setBody(newBody);
  }
  const handleURL = (event) => {
    event.preventDefault();
    let newURL = event.target.value;
    setUrl(newURL);
  }
  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: null
    };
    if (body) formData.body = body;
    props.handleApiCall(formData);
  }
  //-----------------------------------------
    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <div className="request">
                <input className="input" type="text" name="url" placeholder="http://api.url.here"  onChange={handleURL}/>
               
                <button className= "send" type="submit"  onClick={!props.isloading ? props.handleClick : null}> {method} </button>
            </div>
            <div className="methods">
                <button className="method" id="GET" name ="GET" onClick={handleMethod}>GET</button>
                <button className="method" id="POST" name = "POST" onClick={handleMethod}>POST</button>
                <button className="method" id="PUT" name = "PUT" onClick={handleMethod}>PUT</button>
                <button  className="method" id="DELETE" name = "DELETE" onClick={handleMethod}>DELETE</button>

                <textarea name="body"    onChange={handleBody}              
                id="textdata"
                defaultValue="{}"
                />
            </div>
        </form>
    )
}
export default Form;