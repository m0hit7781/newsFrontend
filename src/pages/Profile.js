import { useContext, useEffect, useState } from "react";
import "../App.css";
import { GloabalCtx } from "../GlobalCtx";
import {Redirect} from 'react-router-dom'
const Profile = () => {
  const [state] = useContext(GloabalCtx);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (state.data) {
      console.log(state);
      setIsAuth(state.data);
    }
  }, [state]);
  return (
    <>
    {console.log(state)}
      {isAuth ? (
        <div className="profilepage">
          <title>profile | {isAuth.firstName}</title>
          <div className="profiledata">
            <img src="" alt="" />
            <h3>{`${isAuth.firstName} ${isAuth.lastName}`}</h3>
            <p>Bio is here</p>
            <p>{isAuth.email}</p>
            <p>{isAuth.password}</p>
          </div>
        </div>
      ) : (
        // <Redirect to='/login'  />
        <h2>Login Required</h2>
      )}
    </>
  );
};

export default Profile;
