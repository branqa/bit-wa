import React from "react";

const UsersList = props => {
  return <div className="row container">
      {props.users.map(item => (
        <div className=" col s4 m4 l4 card-panel" id="user">
          <div className="col s12 m12 l12">
            <img
              /* className="circle" */ className="responsive-img"
              src={item.picture.large}
              alt={item.name.first}
            />{" "}
            <br />
            {/* </div>
          <div className="col s12 m12 l12"> */}
            <span id="name">
              {/* name:  */}
              {item.name.first}
            </span>{" "}
            <br />
            <span>
              email:{item.email.split("").slice(0, 3).join("") +"..." + "@" +item.email.split("@").slice(1, 2)}
            </span>
            <br />
            <span>
              date of birth:
              {/* {Date(item.dob)} */}
              {item.dob.split(/\-|\s/).slice(0, 3).reverse().join("-")}
            </span>
          </div>
        </div>
      ))}
    </div>;
};

export default UsersList;
