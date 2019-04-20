import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import classes from './AddUser.css';

class AddUser extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      if(this.Name.value && this.Email.value){
        this.setState({ show: false });
      }
    }
    handleCancel=() => {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    handleSubmit=(event) => {
      if(!this.Name.value){
        alert("Sorry, Name field is required");
      }
      if(!this.Email.value){
        alert("Sorry, Email field is required");
      }
      else{
        this.props.handleAddUser(this.Name.value,this.Email.value,this.Phone.value);
      }
      event.preventDefault();
    }
  
    render() {
      return (
        <div className={classes.AddUser}>
          <Button bsSize="large" onClick={this.handleShow}>
            Add New User
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <div className={classes.Form}>
                <label>
                  Name:
                  <input type="text" ref={(input) => this.Name = input} />
                </label>
                <label>
                  email:
                  <input type="text" ref={(input) => this.Email = input} />
                </label>
                <label>
                  Phone:
                  <input type="text" ref={(input) => this.Phone = input} />
                </label>
              </div>
              <div className={classes.Close}>
                <Button onClick={this.handleCancel}>Close</Button>
                <Button type="submit" value="Submit" onClick={this.handleClose}>Submit</Button>
              </div>
            </form>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

export default AddUser;