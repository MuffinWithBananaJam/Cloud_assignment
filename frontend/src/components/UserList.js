import React from 'react'
import APIService from './APIService'

function UserList(props) {

  const editUser = (user) => {
    props.editUser(user)
  }

  const deleteUser=(user)=>{
    APIService.deleteUser(user.id)
    .then(()=> props.deleteUser(user))
  }
  return (
    <div>
        {props.users && props.users.map(user =>{
        return(
        <div key = {user.id} class="user">
            <h2>User {user.id} Information:</h2>
            <h2>User Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Gender: {user.gender} </h2>
            <h2>Email: {user.email} </h2>

            <div className = "row">
              <div className = "col-md-1">
                <button className="btn btn-primary"
                onClick = {()=> editUser(user)}
                >Edit This User</button>
              </div>

              <div className = "col">
                  <button className="btn btn-danger"
                  onClick={()=> deleteUser(user)}
                  >Delete This User</button>
              </div>

            </div>

            
        </div>
        )
      })}
    </div>
  )
}

export default UserList
