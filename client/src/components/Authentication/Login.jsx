import React, { useState } from 'react';
import './authentication.css';
import { useNavigate } from 'react-router-dom';
import appLogo from '../../assets/images/irislight.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { auth } from '../../firebase.js';

const Login = () => {
  const [userType, setUserType] = useState('Student');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const location = useNavigate();

  const changePath = (path) => {
    location('/' + path);
  };

  const fetchUserData = async (category, userId) => {
    try {

      console.log('Category:', category);
      console.log('UserId:', userId);

      const userRef = ref(getDatabase(), `${category}/${userId}`);
      console.log('User Reference:', userRef);

      const snapshot = await get(userRef);
      console.log('Snapshot:', snapshot.val());

      if (snapshot.exists()) {
        const userData = snapshot.val();
        localStorage.setItem('userType', userType);
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('✅ Login Successful');
        if(userType === 'Student'){
          location('/')
        }
        else{
          location('/institute')
        }
      } else {
        console.error('User data not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
      const user = userCredential.user;
      console.log('User:', user);
  
      if (userType === 'Student' || userType === 'Institution') {
        const category = (userType === 'Student') ? 'student' : 'institution';
        const userId = user.uid; 
        console.log('Authenticated User UID:', userId);
        fetchUserData(category, userId);
      } else {
        console.error('Invalid user type');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Login error:', error.message);
    }
  };
  
  return (
    <div className='regBg'>
      <div className="regBox">
        <h2 className='loginH'>Login</h2>
        <img className='appL' src={appLogo} alt="" />
        <select className='slct' value={userType} onChange={(e) => setUserType(e.target.value)} name="userType" id="" defaultValue="default">
          <option value="default" disabled>Select User Type</option>
          <option value="Student">Student</option>
          <option value="Institution">Institution</option>
        </select>
        <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" placeholder='Enter Registered Email ID' className='inp' />
        <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder='Enter Password' className='inp' />
        <button onClick={handleLogin} className='btn'>Login</button>
        <p className='alreadyR'>Not a User?<span onClick={() => changePath('registration')}> Register</span> </p>
      </div>
    </div>
  );
};

export default Login;