import React, { useEffect, useState } from 'react';
import appLogo from '../../assets/images/appLogo.png';
// import { getCurrentUserData } from '../services/authService';
// import { auth } from '../firebase';
// import { onAuthStateChanged } from 'firebase/auth';
import { useParams, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './home.css';

// import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Navbar = () => {

//   useEffect(() => {
//     const auth = getAuth();

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//         setUser(user);

//         if (user === null) {
     
//             history('/registration');
//         }
//     });
//     return () => unsubscribe();
// }, [history]);

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState("menuHome");

  const location = useLocation();
  const { paramName1, paramName2 } = useParams();

  let fireData = JSON.parse(localStorage.getItem('userData'))
  let fireName = fireData.userName

  const handleClick = (clickedElementId) => {
    localStorage.setItem("CurrId", clickedElementId);
    setCurrent(clickedElementId);
  };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const fetchUserData = async () => {
//           try {
//             const currentUserData = await getCurrentUserData();
//             setUserData(currentUserData);
//           } catch (error) {
//             console.error('Error fetching user data:', error.message);
//             setError(error.message);
//           } finally {
//             setIsLoading(false);
//           }
//         };

//         fetchUserData();
//       } else {
//         setIsLoading(false);
//         console.warn('User is not authenticated.');
//       }
//     });

//     return () => {
//       unsubscribe(); // Cleanup the subscription
//     };
//   }, []);

  return (
    <div>
      <div id='sideBar'>
      <img className='image' src={appLogo} alt="" />
        {/*
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {userData && ( */}
          <p id='userName'>{"Hello, " + fireName}</p>
        {/* )} */}

        <div className="menu">
          <NavLink to="/" activeClassName='addbgcolor' exact>
            <div id='menuHome' onClick={() => handleClick('menuHome')} className={`menuItem ${current === 'menuHome' ? 'addbgcolor' : ''}`}>Home</div>
          </NavLink>

          <NavLink to="/dashboard" activeClassName='addbgcolor'>
            <div id='menuDashboard' onClick={() => handleClick('menuDashboard')} className={`menuItem ${current === 'menuDashboard' ? 'addbgcolor' : ''}`}>Dashboard</div>
          </NavLink>


          <NavLink to="/roadmap" activeClassName='addbgcolor'>
            <div onClick={() => handleClick('menuRoadmap')} className={`menuItem ${current === 'menuRoadmap' ? 'addbgcolor' : ''}`} id='menuRoadmap'>Roadmap</div>
          </NavLink>

          <NavLink to="/clubs" activeClassName='addbgcolor'>
            <div onClick={() => handleClick('menuClubs')} className={`menuItem ${current === 'menuClubs' ? 'addbgcolor' : ''}`}>Interaction</div>
          </NavLink>
          
          {/* <NavLink to="/assessment" activeClassName='addbgcolor'>
            <div id='menuAssessment' onClick={() => handleClick('menuAssessment')} className={`menuItem ${current === 'menuAssessment' ? 'addbgcolor' : ''}`}>Assessment</div>
          </NavLink> */}

          <NavLink to="/labs" activeClassName='addbgcolor'>
            <div id='menuAssessment' onClick={() => handleClick('labs')} className={`menuItem ${current === 'menuAssessment' ? 'addbgcolor' : ''}`}>Labs</div>
          </NavLink>

          {/* <NavLink to="/councelling" activeClassName='addbgcolor'>
            <div id='menuCounseling' onClick={() => handleClick('menuCounseling')} className={`menuItem ${current === 'menuCounseling' ? 'addbgcolor' : ''}`}>Counseling</div>
          </NavLink> */}
        </div>

        <div id="menuLast">
          <i className="fa-solid fa-cog"></i>
          <i className="fa-solid fa-power-off"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
