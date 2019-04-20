import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import AddUser from './AddUser/AddUser';
import LoadMore from './LoadMore/LoadMore';
import Filtered from './Users/Filtered';
import classes from './ManageUsers.css';

class ManageUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
          users: [
            {
                _id: "5c0f8d2fe0b284c01aee2b74",
                picture: "http://placehold.it/32x32",
                name: "Mendoza Colon",
                email: "mendozacolon@bostonic.com",
                phone: "+1 (927) 472-2719",
                role: "User"
              },
              {
                _id: "5c0f8d2f54dacb3403114b48",
                picture: "http://placehold.it/32x32",
                name: "Lilian Wagner",
                email: "lilianwagner@bostonic.com",
                phone: "+1 (942) 597-3937",
                role: "Administrator"
              },
              {
                _id: "5c0f8d2fc3ffe899712d1db5",
                picture: "http://placehold.it/32x32",
                name: "Valdez Massey",
                email: "valdezmassey@bostonic.com",
                phone: "+1 (940) 432-3669",
                role: "User"
              },
              {
                _id: "5c0f8d2f529c55389da1d152",
                picture: "http://placehold.it/32x32",
                name: "Casey Schroeder",
                email: "caseyschroeder@bostonic.com",
                phone: "+1 (856) 459-2906",
                role: "User"
              },
              {
                _id: "5c0f8d2fb1b0477a1a993e68",
                picture: "http://placehold.it/32x32",
                name: "Arnold Marquez",
                email: "arnoldmarquez@bostonic.com",
                phone: "+1 (838) 515-3711",
                role: "Administrator"
              },
              {
                _id: "5c0f8d2feb70b264e4b5b6f5",
                picture: "http://placehold.it/32x32",
                name: "Wynn Hebert",
                email: "wynnhebert@bostonic.com",
                phone: "+1 (944) 522-3264",
                role: "Administrator"
              },
              {
                _id: "5c0f8d2f345ccb53e56b79a9",
                picture: "http://placehold.it/32x32",
                name: "Arlene Nguyen",
                email: "arlenenguyen@bostonic.com",
                phone: "+1 (894) 411-2789",
                role: "Administrator"
              }
          ],
          userSearch:[],
          list: ["Go to the store", "Wash the dishes", "Learn some code"],
          usersLimit: 3,
        };
      }


      loadMoreHandler= () => {
        this.setState((prevState) => {
            return{usersLimit: prevState.usersLimit + 3};
        })
      };
      
      AddUser= (name,email,phone) =>{
        console.log(name,email,phone);
        const size = this.state.users.length
        const newElement = {
            _id: "5c0f8d2fe0b284c01aee2b" + Math.random().toString() + size.toString(),
            picture: "http://placehold.it/32x32",
            name: name,
            email: email,
            phone: phone,
            role: "User"
          }
        this.setState({ 
            users:[...this.state.users, newElement ]
          })
      }

      EditUser=(name,email,phone,index,id)=> {
        console.log(name,email,phone,index);
        let newArr = [...this.state.users];
        let contador = 0;
        let posicion = 0;
        newArr.map((item) => {
          console.log(item._id);
          if(item._id === id){
            console.log(contador)
            posicion = contador ;
          }
          contador ++
          return posicion;
        })
        console.log(posicion);
        if(name !== newArr[posicion].name && name) {
          newArr[posicion].name = name;
        } if(email !== newArr[posicion].email && email) {
          newArr[posicion].email = email;
        }if(phone !== newArr[posicion].phone && phone) {
          newArr[posicion].phone = phone;
        }
        console.log(newArr)
        this.setState({users:newArr});  
      }

    render(){
        return(
            <Aux className={classes.ManageUsers}>
                <AddUser 
                  handleAddUser={this.AddUser} 
                  addUser={this.state.users} />


                <Filtered 
                  key={this.state._id} 
                  limit = {this.state.usersLimit} 
                  users={this.state.users}
                  handleEditUser={this.EditUser} 
                  />

                <LoadMore load={this.loadMoreHandler} />
            </Aux>
        );
    }
}

export default  ManageUsers;