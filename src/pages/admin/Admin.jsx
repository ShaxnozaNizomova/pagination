import React from "react";
import "./Admin.css";
import { useGetUsersQuery } from "../../context/api/userApi";
import { logout } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
const Admin = () => {
  const { data } = useGetUsersQuery({ limit: 100 });
  console.log(data?.data?.users);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="admin-container">
      <h2>User List</h2>
      <button onClick={handleLogout}>Log Out</button>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phones</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.users.map((user) => (
              <tr key={user.id}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.phones[0]}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
