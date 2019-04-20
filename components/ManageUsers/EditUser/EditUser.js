import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import classes from './EditUser.css';
import Cog from '../../../assets/Images/cog.png'

class EditUser extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    handleSubmit=(event) => {
      this.props.handleEdit(this.Name.value, this.Email.value, this.Phone.value, this.props.index,this.props.id);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <img className={classes.Cog} onClick={this.handleShow} src={Cog} alt="COG"/>
  
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
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
                            <Button onClick={this.handleClose}>Close</Button>
                            <Button type="submit" value="Submit" onClick={this.handleClose}>Create</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
      );
    }
  }

export default EditUser;
