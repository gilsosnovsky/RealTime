
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import fire from "../../../firebaseConfig";

class EmployeeSignUp extends Component{

  constructor(props) {
    super(props);
    this.signUp=this.signUp.bind(this);
    this.state={
      email: '',
      first_name: '',
      last_name: '',  
      phone_number: '',
      birth_date: '',
      address: '',
      favorite_jobs: '',
      type:'',
      about_me: '',
      password: '',
      secondPassword: '',  // compare between the two passwords before sign up
      error_msg: ''
    }
  }

  

  onSignUpEmployee=(e)=>{
    e.preventDefault();
    this.setState({
      email: this.email.value,
      password: this.password.value,
      secondPassword: this.secondPassword.value,  // compare between the two passwords before sign up
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      phone_number: this.phone_number.value,
      birth_date: this.birth_date.value,
      address: this.adress.value,
      favorite_jobs: this.favorite_job.value,
      about_me: this.about_me.value
    }, () => {
      if(this.password.value !== this.secondPassword.value)
      {
        this.setState({error_msg: 'second password wrong'}); // need more checks for the input
        return;
      }
      this.signUp();
    });
  }

  signUp(){
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
      const db = fire.database();
      var to_db={
        email: this.state.email,
        first_name:this.state.first_name ,
        last_name: this.state.last_name,  
        phone_number: this.state.phone_number,
        birth_date: this.state.birth_date,
        address: this.state.address,
        favorite_jobs: this.state.favorite_jobs,
        type: 'employee',
        about_me: this.state.about_me,
      }
      db.ref("/employees/employees_list").push(to_db);
    }).catch((error)=>{ 
      console.log(error.message);                 //posting the error from firebase in english
      this.setState({error_msg: error.message});
      })
         
  }

  


  render(){
    return (
      <div class="SignUp">
        <form action="" method="post" onSubmit={this.onSignUpEmployee}>
        <div id="signUpContainer">
          <div id="signUpTitle">הרשמה</div>
          <fieldset>
            <input
              className="field"
              placeholder="אימייל"
              ref={(c) => this.email = c}
              type="email"
              tabIndex="2"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              className="field"
              placeholder="סיסמא"
              ref={(c) => this.password = c}
              type="password"
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="field"
              placeholder="חזור על הסיסמא"
              ref={(c) => this.secondPassword = c}
              type="password"
              tabIndex="2"
              required
            />
          </fieldset>
          <br/>
          <fieldset>
            <input
              class="field"
              id="Sfirstname"
              placeholder="שם פרטי"
              ref={(c) => this.first_name=c}
              type="text"
              tabIndex="1"
              required

            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              id="Slastname"
              placeholder="שם משפחה"
              ref={(c) => this.last_name = c}
              type="text"
              tabIndex="1"
              required
          
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="טלפון"
              ref={(c) => this.phone_number = c}
              type="tel"
              tabIndex="3"
              required
            />
          </fieldset>
          <label id="birthdate_title">תאריך לידה:</label>
          <fieldset>
            <input
              class="field"
              placeholder="תאריך לידה"
              ref={(c) => this.birth_date = c}
              type="date"
              tabIndex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              class="field"
              placeholder="כתובת מלאה"
              ref={(c) => this.adress = c}
              type="text"
              tabIndex="2"
              required
            />
          </fieldset>

          <fieldset>
            <input
              class="field"
              placeholder="תחומי עבודה מועדפים"
              ref={(c) => this.favorite_job = c}
              type="text"
              tabIndex="2"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              class="field"
              placeholder="קצת על עצמי"
              ref={(c) => this.about_me = c}
              tabIndex="4"
            ></textarea>
          </fieldset>

          <fieldset>
            <button
             id="signUpButton" 
             name="submit"
            type="submit"
            data-submit="...Sending">הרשם
            </button>
          </fieldset>
          <h5>{this.state.error_msg}</h5>
        </div>
        </form>
      </div>
    );
  }
}
export default EmployeeSignUp;
