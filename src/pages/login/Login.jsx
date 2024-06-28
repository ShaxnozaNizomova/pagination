import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slices/authSlice";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [singIn, { isSuccess, data, isLoading, isError }] = useSignInMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("UserName");
    const password = data.get("password");
    if (password && username) {
      const user = {
        UserName: data.get("UserName"),
        password: data.get("password"),
      };
      singIn(user);
    } else {
      return alert("Enter username and password!");
    }
  };

  useEffect(() => {
    if (isError) {
      alert("Username or password are wrong");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      alert("Admin panel");
      navigate("/admin");
    }
  }, [isSuccess]);
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" name="UserName" />
        <input type="password" placeholder="Password" name="password" />
        <button> {isLoading ? "Loading..." : "Sign In"}</button>
      </form>
    </div>
  );
};

export default Login;
