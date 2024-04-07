import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import './institute.css';
import appLogo from '../../assets/images/appLogo.png';
import { NavLink } from 'react-router-dom';

export default function Institute() {
  const [courseCost, setCourseCost] = useState(0);

  const handleRangeChange = (event) => {
    setCourseCost(event.target.value);
  };

  return (
    <div className='insi_wrapper'>
      <div id='sideBar'>
        <img className='image' src={appLogo} alt='' />

        <div className='menu'>
          <NavLink to='/' activeClassName='addbgcolor' exact>
            <div id='menuHome' onClick={() => handleClick('menuHome')} className='menuItem'>
              Home
            </div>
          </NavLink>

          <NavLink to='/dashboard' activeClassName='addbgcolor'>
            <div id='menuDashboard' onClick={() => handleClick('menuDashboard')} className='menuItem'>
              Dashboard
            </div>
          </NavLink>

          <NavLink to='/roadmap' activeClassName='addbgcolor'>
            <div onClick={() => handleClick('menuRoadmap')} className='menuItem' id='menuRoadmap'>
              Terms & Condn
            </div>
          </NavLink>
        </div>

        <div id='menuLast'>
          <i className='fa-solid fa-cog'></i>
          <i className='fa-solid fa-power-off'></i>
        </div>
      </div>

      <div className='insti_form'>
        <h2 className='uploadC'>Upload Courses</h2>

        <input type='text' placeholder='Course Name' />
        <input type='text' placeholder='Course Description' />
        <input type='text' placeholder='Course Category' />
        <input type='text' placeholder='Course Caption (If Available)' />
        <input type='text' placeholder='Course Difficulty' />
        <input type='text' placeholder='Enter Video Link' />
        <p>Course Material</p>
        <input type='file' placeholder='Course material' />
        <p>Course Thumbnail</p>
        <input type='file' placeholder='Course Thumbnail' />
        <input type='range' min={0} max={10000} step={500} value={courseCost} onChange={handleRangeChange} />
        <p>Cost of course: Rs.{courseCost}</p>
        <button>Submit</button>
      </div>
    </div>
  );
}
