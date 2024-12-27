import React, { useState, useEffect } from 'react';
import "./userProfile.scss";
import { useAuth } from '../../context/auth-context';

const UserProfile = () => {
  // Define user data state
  
  const {userName, mobile} = useAuth();
  const [userData, setUserData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
  });

  // Simulate fetching user data from an API or context
  useEffect(() => {
    // In a real application, you would fetch user data here
    // For this example, we'll set some sample data
    setUserData({
      name: "Guest",
      mobileNumber:"9999999999",
      email: 'johndoe@example.com',
    });
  }, [userName, mobile]);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-details">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
