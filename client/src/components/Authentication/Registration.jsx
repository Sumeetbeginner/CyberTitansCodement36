import React, { useState, useEffect } from 'react';
import './authentication.css';
import userPic from '../../assets/images/student.png';
import universityPic from '../../assets/images/university.png';
import { useNavigate } from 'react-router-dom'
import { auth, database } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set, } from 'firebase/database';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons

const Registration = () => {
    const [selectedInterests, setSelectedInterests] = React.useState([]);

    const handleInterestChange = (e) => {
        setSelectedInterests(e.value);
    };

    const [userType, setUserType] = useState('');
    const [noUserType, setNoUserType] = useState('');
    const [stepNo, setStepNo] = useState(1);

    // User Data
    const [userName, setUserName] = useState('')
    const [userInstitution, setUserInstitution] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userCurrYear, setUserCurrYear] = useState('')
    const [userInterest, setUserInterest] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    // Institution Data
    const [insName, setInsName] = useState('')
    const [insGrade, setInsGrade] = useState('')
    const [insLoc, setInsLoc] = useState('')
    const [insType, setInsType] = useState('')
    const [autonomousStatus, setAutonomousStatus] = useState('')
    const [insEmail, setInsEmail] = useState('')
    const [insPassword, setInsPassword] = useState('')


    const location = useNavigate()

    const handleRegistration = async () => {

        try {
            if (userType == "Student") {
                const userCredential = await

                    createUserWithEmailAndPassword(auth, userEmail, userPassword);
                const newUser = userCredential.user;

                const userRef = ref(database, 'student/' + newUser.uid);


                await set(userRef, {
                    userType: "student",
                    userName: userName,
                    userGender: userGender,
                    userCurrYear: userCurrYear,
                    userInstitution: userInstitution,
                    userInterest: JSON.stringify(selectedInterests),
                    userEmail: userEmail,
                    userHistory: "",
                    userWebData: ""
                });
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, insEmail, insPassword);
                const newUser = userCredential.user;

                const insRef = ref(database, 'institution/' + newUser.uid);


                await set(insRef, {
                    userType: "institution",
                    insName: insName,
                    insGrade: insGrade,
                    insLoc: insLoc,
                    insEmail: insEmail,
                    insType: insType,
                    insAutonomousStatus: autonomousStatus,
                    insHistory: "",
                    insWebData: ""
                });
            }

            alert('✅ Registered Successfully');
            location('/login');
        } catch (error) {
            alert('Registration error:', error.message);
            console.log(error);
        }
    };


    const changeUserType = (input, input2) => {
        setUserType(input);
        setNoUserType(input2)
    };


    const changePath = (path) => {
        location('/' + path)
    }

    const handleNext = () => {
        if (stepNo < 3) {
            setStepNo(stepNo + 1);
        }
    }
    const handlePrev = () => {
        if (stepNo > 1) {
            setStepNo(stepNo - 1);
        }
    }

    const renderContent = () => {

        switch (stepNo) {
            case 1:
                return (
                    <>
                        <h2 className='h11'>Select User Type</h2>

                        <div className='userL'>

                            <img onClick={() => changeUserType('Student', 'Institution')} id='Student' src={userPic} alt='User' />
                            <img onClick={() => changeUserType('Institution', 'Student')} id='Institution' src={universityPic} alt='Institution' />
                        </div>

                        <h3 id='userTypeD'></h3>


                    </>
                )

            case 2:
                if (userType === 'Student') {
                    return (
                        <>  <h2 className='stdH'>Personal Details</h2>

                            <input placeholder='Student Name' className='inp' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

                            <input value={userInstitution} onChange={(e) => setUserInstitution(e.target.value)} placeholder='Institution Name' className='inp' type="text" />

                            <select value={userGender} onChange={(e) => setUserGender(e.target.value)} className='slct' name="gender">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                            </select>

                            <select value={userCurrYear} onChange={(e) => setUserCurrYear(e.target.value)} name="selYear" className='slct' id="">
                                <option value="" disabled selected>Select Current Year</option>
                                <option value="first" >First</option>
                                <option value="second" >Second</option>
                                <option value="third" >Third</option>
                                <option value="four" >Four</option>
                            </select>

                            <MultiSelect
                            display='chip'
                            className='multiS'
                                value={selectedInterests}
                                options={[
                                    { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
                                    { label: 'Electrical', value: 'Electrical Engineering' },
                                    { label: 'Computer Science', value: 'Computer Science' },
                                    { label: 'Mechanical', value: 'Mechanical' },
                                    { label: 'Business', value: 'Business' },
                                    { label: 'Machine Learning', value: 'Machine Learning' },
                                    { label: 'Data Science', value: 'Data Science' },
                                    { label: 'Cyber Security', value: 'Cyber Security' },
                                 
                                ]}
                                onChange={handleInterestChange}
                                placeholder="Select Interests"
                            />
                        </>

                    );
                }
                else {
                    return (
                        <>
                            <h2 className='stdH'>Institution Details</h2>

                            <input value={insName} onChange={(e) => setInsName(e.target.value)} placeholder='Institution Name' className='inp' type="text" />

                            <input value={insGrade} onChange={(e) => setInsGrade(e.target.value)} placeholder='Institution Grade' className='inp' type="text" />


                            <input type="text" value={insLoc} onChange={(e) => setInsLoc(e.target.value)} placeholder='Institution Location' className='inp' />

                            <select value={insType} onChange={(e) => setInsType(e.target.value)} className='slct' name="gender">
                                <option value="" disabled selected>Select Institution Type</option>
                                <option value="engineering" >Engineering</option>
                                <option value="management" >Management</option>
                                <option value="medical" >Medical</option>
                                <option value="arts" >Arts</option>
                                <option value="science" >Science</option>
                                <option value="commerce" >Commerce</option>
                            </select>

                            <select value={autonomousStatus} onChange={(e) => setAutonomousStatus(e.target.value)} name="selInterest" className='slct' id="">
                                <option value="" disabled selected>Select Autonomous Status</option>
                                <option value="autonomous">Autonomous</option>
                                <option value="nonautonomous">Non Autonomous</option>


                            </select>

                        </>
                    )
                }

            case 3:
                if (userType === 'Student') {
                    return (
                        <>
                            <h2 className='step3h'>
                                Verification     </h2>
                            <input className='inp' type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder='Enter a Email ID' />

                            <input className='inp' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder='Create a Password' id="" />

                            <p className='uploadId'>Upload College ID</p>
                            <input className='inp' type="file" id="" />
                            
                            <div className="termsC">
                                <input type="checkbox" name="" id="" />
                                <p>I Agree to <a target='_blank' href="terms">Terms and Condition</a></p>
                            </div>
                            <button className='btnR' onClick={handleRegistration}>Register</button>



                        </>
                    );
                }
                else {
                    return (
                        <>
                            <h2 className='step3h'>
                                Verification     </h2>
                            <input className='inp' type="text" value={insEmail} onChange={(e) => setInsEmail(e.target.value)} placeholder='College Official Email ID' />

                            <input className='inp' value={insPassword} onChange={(e) => setInsPassword(e.target.value)} type="password" placeholder='Create a Password' id="" />

                            <p className='uploadId'>Upload College Document</p>
                            <input className='inp' type="file" id="" />
                            <button className='btnR' onClick={handleRegistration}>Register</button>


                        </>
                    )
                }
            default:
                return null;
        }
    }

    useEffect(() => {
        document.getElementById('userTypeD').innerHTML = userType;

        const element = document.getElementById(userType);
        const element2 = document.getElementById(noUserType)

        if (element) {
            element.style.backgroundColor = 'var(--material)';
            element2.style.backgroundColor = 'var(--light)'
        }
    }, [userType]);

    return (


        <div className='regBg'>
            <div className='regBox'>
                <div className='steps'>
                    <i className={`fa-solid fa-1${stepNo === 1 ? ' active' : ''}`} id='step1'></i>
                    <hr />
                    <i className={`fa-solid fa-2${stepNo === 2 ? ' active' : ''}`} id='step2'></i>
                    <hr />
                    <i className={`fa-solid fa-3${stepNo === 3 ? ' active' : ''}`} id='step3'></i>
                </div>

                {renderContent()}


                <div className='buttonNext'>
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>

                <p className='alreadyR'>Already Registered?<span onClick={() => changePath('login')}> Login</span> </p>
            </div>
        </div>
    );
};

export default Registration;