import React, { Component } from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";
import fire from "../../../firebaseConfig";


class BusinessSignUp extends Component
{
  constructor(props)
  {
    super(props);
    this.signUp=this.signUp.bind(this);
    this.state={
      email: '',
      password: '',
      secondPassword: '',  // compare between the two passwords before sign up
      company_name: '',
      first_name: '',
      full_name: '',
      phone_number: '',
      jobs_length: '',
      error_msg: '',
      type: '',
    }
  }

  onOfferJobsChanged = (e) => {
    this.setState({
      jobs_length: e.currentTarget.value
    });
  }
  onSignUpBusiness=(e)=>{
    e.preventDefault();
    this.setState({
      email: this.email.value,
      password: this.password.value,
      secondPassword: this.secondPassword.value,  // compare between the two passwords before sign up
      company_name: this.business_name.value,
      first_name: this.first_name.value,
      full_name: this.last_name.value,
      phone_number: this.phone_number.value,
    }, () => {
      if(this.password.value !== this.secondPassword.value)
      {
        this.setState({error_msg: 'second password is incorrect '});
        return;
      }
      this.signUp(); //after all the input checks
    });
  }





  signUp(){
      fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
      var to_db={
        email: (this.state.email).toLocaleLowerCase(),
        first_name:this.state.first_name ,
        last_name: this.state.full_name,  
        phone_number: this.state.phone_number,
        jobs_length: this.state.jobs_length,
        type: 'business',
        company_name: this.state.company_name
      }
      const db = fire.database();
      db.ref("/business/business_list").push(to_db);
      this.props.clickConnectBusiness(to_db);
    }).catch((error)=>{ 
      console.log(error.message);                 //posting the error from firebase in english
      this.setState({error_msg: error.message});
      })
         
  }


  render() {
    return (
      <div className="SignUp">
        <form action="" method="post" onSubmit={this.onSignUpBusiness}>
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
              className="field"
              id="Sfirst_name"
              placeholder="שם פרטי"
              ref={(c) => this.first_name = c}
              type="text"
              tabIndex="1"
              required
            />
          </fieldset>
          
          <fieldset>
            <input
              className="field"
              id="Slast_name"
              placeholder="שם משפחה"
              ref={(c) => this.last_name = c}
              type="text"
              tabIndex="1"
              required
            />
          </fieldset>

          <fieldset>
            <input
              className="field"
              placeholder="שם העסק"
              ref={(c) => this.business_name = c}
              type="text"
              tabIndex="2"
              required
            />
          </fieldset>

          <fieldset>
            <input
              className="field"
              placeholder="טלפון"
              ref={(c) => this.phone_number = c}
              type="tel"
              tabIndex="3"
              required
            />
          </fieldset>

          <fieldset>
            <label id="radio_button_container">
              המשרות המוצעות:
              <br />
              <label className="radio_button">
                <input
                  type="radio"
                  id="short_term"
                  name="radAnswer"
                  value="טווח קצר"
                  onChange={this.onOfferJobsChanged}
                />
                טווח קצר
              </label>
              <label className="radio_button">
                <input 
                type="radio" 
                id="long_term" 
                name="radAnswer" 
                value="עבודה קבועה"
                onChange={this.onOfferJobsChanged}/>
                עבודה קבועה
              </label>
              <label className="radio_button">
                <input type="radio"
                 id="both"
                 name="radAnswer"
                 value="גם וגם"
                 onChange={this.onOfferJobsChanged}
                  />
                גם וגם
              </label>
            </label>
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
  };
}
export default BusinessSignUp;
