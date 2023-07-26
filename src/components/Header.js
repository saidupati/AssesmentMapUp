import React, { useState } from 'react';
import { Layout, Button, Modal, Form, Input } from 'antd';

const { Header } = Layout;

const HeaderSection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = () => {
    // Check if the user details are stored in localStorage (Signup details)
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (storedUserDetails) {
      // Simulate login by checking the stored signup details
      const { username, password } = storedUserDetails;

      // Get user input for username and password (Not secure, for demonstration purposes only)
      const inputUsername = prompt('Enter your username:');
      const inputPassword = prompt('Enter your password:');

      if (inputUsername === username && inputPassword === password) {
        setIsAuthenticated(true);
        setUserDetails(storedUserDetails);
        setProfileModalOpen(false); // Close the profile modal after successful login
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } else {
      alert('No user details found. Please signup first.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
  };

  const handleProfileClick = () => {
    // Open the profile modal only if the user is authenticated
    if (isAuthenticated) {
      setProfileModalOpen(true);
    } else {
      handleLogin(); // If not authenticated, show login prompt first
    }
  };

  const handleProfileModalClose = () => {
    setProfileModalOpen(false);
  };

  const handleSignupModalClose = () => {
    setSignupModalOpen(false);
  };

  const handleSignup = (values) => {
    // Implement your user registration logic here
    // For demonstration purposes, we'll store the user details in localStorage

    const { name, address, password } = values;
    const username = name.toLowerCase().replace(/\s+/g, ''); // Generate a simple username based on name

    const userDetails = {
      name,
      address,
      username,
      password,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Close the signup modal and log the user in automatically
    setSignupModalOpen(false);
    setIsAuthenticated(true);
    setUserDetails(userDetails);
  };

  const SignupForm = () => {
    const onFinish = (values) => {
      handleSignup(values);
    };

    return (
      <Form onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter your address' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Header style={{ background: '#f0f2f5', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, fontSize: '50px', fontWeight: 'bold', color: '#1890ff' }}>
        {/* Your app logo or title goes here */}
        Map Login 
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isAuthenticated ? (
          <Button type="primary" onClick={handleProfileClick} style={{ marginRight: '50px' }}>
            Profile
          </Button>
        ) : (
          <>
            <Button type="primary" onClick={() => setSignupModalOpen(true)} style={{ marginRight: '50px' }}>
              Signup
            </Button>
            <Button onClick={handleLogin}>Login</Button>
          </>
        )}
        {isAuthenticated && (
          <Button onClick={handleLogout} style={{ marginLeft: '50px' }}>
            Logout
          </Button>
        )}
      </div>
      <Modal
        title="Signup"
        visible={isSignupModalOpen}
        onCancel={handleSignupModalClose}
        footer={null}
        style={{ borderRadius: '10px' }}
      >
        <SignupForm />
      </Modal>
      <Modal
        title="Profile"
        visible={isProfileModalOpen}
        onCancel={handleProfileModalClose}
        footer={null}
        style={{ borderRadius: '10px' }}
      >
        {userDetails && (
          <div>
            <p>Name: {userDetails.name}</p>
            <p>Address: {userDetails.address}</p>
          </div>
        )}
      </Modal>
    </Header>
  );
};

export default HeaderSection;
