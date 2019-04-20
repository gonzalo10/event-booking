import React, {Component} from 'react';
//import classes from './Users.css'
import User from  '../User/User';
import classes from './Filtered.css';


class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
            filtered: [],
		};
    }

    componentDidMount() {
        this.setState({
          filtered: this.props.users
        });
      }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
        filtered: nextProps.users
        });
    }

    handleChange=(e) =>{
		
        let currentList = [];

        let newList = [];
            
        if (e.target.value !== "") {

            currentList = this.props.users;
            newList = currentList.filter(item => {
                const nameLC = item.name.toLowerCase();
                const emailLC = item.email.toLowerCase();
                const phoneLC = item.phone.toLowerCase();
                
                const filter = e.target.value.toLowerCase();
                
                return nameLC.includes(filter) || emailLC.includes(filter)|| phoneLC.includes(filter);
            });

        } else {
        newList = this.props.users;
        }
        this.setState({
        filtered: newList
        });
    }


    render() {
        return (
            <div className={classes.Filtered}>
            <div className={classes.SearchBar}>
                <input type="text" className={classes.Filtered} onChange={this.handleChange} placeholder="Search..." />
            </div>    
                {this.state.filtered.slice(0,this.props.limit).map((user, index) => {
                            return (
                                    <div className={classes.Users} key={user._id}>
                                        <User 
                                            photo={user.picture}
                                            name={user.name}
                                            email = {user.email}
                                            phone = {user.phone}
                                            index={index}
                                            id={user._id}
                                            key = {user._id}
                                            users={user}
                                            edit={this.props.handleEditUser}
                                        /> 
                                    </div>
                                )
                            }   
                        )}
            </div>
        );
        
    }
    
};


export default Users;