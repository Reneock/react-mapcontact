import React, { Component } from 'react';

//map method is used when you already have data to fill a form

class Contacts extends Component {
  constructor(props) {
    super();
    this.state={
      contact:[
      {name:"Juliet", phone:"0244776231", email:"julie@gmail.com"},
      {name:"Sheila", phone:"0206531700", email:"shelly@gmail.com"}
    ]
    };
  }
  
  handleChange=(e)=>{
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    this.setState({[e.target.phone]: e.target.value});
    this.setState({[e.target.email]: e.target.value}); 

    console.log(this.state.name);
    console.log(this.state.phone);
    console.log(this.state.email);

  };

  handleSubmit=(e)=>{
    e.preventDefault();

    this.setState({contact:
      [...this.state.contact,
       {name:this.state.name, phone:this.state.phone, email:this.state.email},
      ],
    });
    this.setState({name:"", phone:"", email:""});
  };


  render() {
    return (
      <div className="container form-container sign-up-container">
        <form action="" id="form">
          <h1>Female Students Contact</h1>
          <label htmlFor="">Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} id="name"/>
          <br />
          <label htmlFor="">Phone</label>
          <input type="number" name='phone' value={this.state.phone} onChange={this.handleChange} id="phone"/>
          <br />
          <label htmlFor="">Email</label>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} id="email"/>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>


        
        {this.state.contact.map((contact, index) =>{
          return(
            <div className="term">
              <div key={index} className="sign-in-container">
                <h3>Name: {contact.name}</h3>
                <h3>Phone: {contact.phone}</h3>
                <h3>Email: {contact.email}</h3>
                
              </div>
            </div>
          );
        })}
       
      </div>
    );
  }
}

export default Contacts;
