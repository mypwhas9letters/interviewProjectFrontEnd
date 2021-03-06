import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      zip: "",
      state: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const body = JSON.stringify(this.state)
    return fetch("https://sportsnewsback.herokuapp.com/users", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      .then(() => this.props.history.push("/success"))
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div className="pushFooterToTheBottom">
        <div className="ui container formMargin">
          <form onSubmit={this.onSubmit} className="ui form">
            <h1>Join Our Mailing List</h1>
            <div className="field">
              <label>First Name</label>
              <input onChange={this.onChange} type="text" name="first_name" placeholder="First Name" title="Please Enter Valid First Name (Characters Only)" pattern="[a-zA-Z]*" required/>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input onChange={this.onChange} type="text" name="last_name" title="Please Enter Valid Last Name (Characters, -, and ' Only)" placeholder="Last Name" pattern="[a-zA-Z'-]*" required/>
            </div>
            <div className="field">
              <label>Email</label>
              <input onChange={this.onChange} type="email" name="email" placeholder="Email Address" required/>
            </div>
            <div className="field">
              <label>Zip Code</label>
              <input onChange={this.onChange} type="text" name="zip" placeholder="Zip Code" title="Please Enter Valid US Zipcode" pattern="([0-9]{5,5})"/>
            </div>
            <div className="field">
              <label>State</label>
              <select onChange={this.onChange} name="state" className="ui fluid dropdown" required>
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <button type="submit" className="ui primary button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
