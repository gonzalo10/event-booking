import React from 'react';
import classes from './User.css';
//import Cog from '../../../assets/Images/cog.png'
import EditUser from '../EditUser/EditUser'


const user = (props) => {
    return(
        <div className={classes.User}>
            <img src={props.photo} alt="" />
            <p className={classes.Text}><strong>{props.name}</strong> </p>
            <p className={classes.Text}>{props.email}</p> 
            <p className={classes.Text}>{props.phone}</p>
            <EditUser index={props.index} handleEdit={props.edit} id={props.id} />
        </div>
    )
    
}
export default user;

 

