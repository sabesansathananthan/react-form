import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    axios
      .post("API_URI", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
    console.log(data);
  };

  render() {
    return (
      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Enter message"
          variant="outlined"
          multiline
          rowsMax={4}
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          required
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          required
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          value={this.state.subject}
          onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        <br />
        <div className="button--container">
          <button type="submit" className="button button-primary">
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}
