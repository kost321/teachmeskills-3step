import React from "react";
import "./UserAutorization.css";

const UserAuthorization = () => {
  return (
    <div className="container__autorization">
      <div className="user__authorization">
        <div className="container__user-form">
          <div className="block__user-form">
            <div className="autorization__item">Email</div>
            <input type="text" className="user__input" placeholder="Your email" />
          </div>
          <div className="block__user-form">
            <div className="autorization__item">Password</div>
            <input type="text" className="user__input" placeholder="Your password" />
          </div>
          <div className='autorization__item item__password'>Forgot password?</div>
        </div>
        <button className="btn">Sign In</button>
        <div>Don’t have an account?<a href="" className="url__sign-up">Sign Up</a></div>
        
      </div>
    </div>
  );
};

export default UserAuthorization;
