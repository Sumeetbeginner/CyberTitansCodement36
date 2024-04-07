import React, { useState, useEffect } from 'react'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import Chip from '@mui/material/Chip';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';

// import Navbar from './Navbar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'



import ReactPlayer from 'react-player';
// import myvideo from '../assets/myvideo.mp4'
// import mybird from '../assets/bird.mp4'

import { useParams, useLocation } from 'react-router-dom'

export default function LearnBoard(props) {

    const location = useNavigate()
    const [que, setQue] = useState('')
    const [ans, setAns] = useState('')
    const [userinput, setUserinput] = useState('')
    const { type } = useParams()
    const stateParamsval = useLocation().state.url
    const stateContent = useLocation().state.content
    const stateInfo = useLocation().state.info
    const stateName = useLocation().state.name

    const [apiData, setApiData] = useState(null);

    const [showSummary, setShowSummary] = useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/summary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "document": stateContent,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setApiData(data);
            // console.log(apiData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();



    const fetch1 = (query) => {
        // console.log(query);
        setQue(query)
        setAns('...')
        fetch('http://127.0.0.1:8080/qna', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the appropriate content type
            },
            body: JSON.stringify({
                'question': query,
                // 'context' : 'sahil lives in amravati',
                'context': stateInfo,
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setAns(data)

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }


    useEffect(() => {

        // console.log(query);

        fetch('http://127.0.0.1:8080/generatequestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the appropriate content type
            },
            body: JSON.stringify({
                'sentence': stateContent,
                // 'context' : 'sahil lives in amravati'
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert("✅ Assessment Ready!")
                localStorage.setItem("assessmentData", JSON.stringify(data));

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });



    }, [])


    // console.log(useLocation().state.content);

    return (
        <div className="outer">
            {
                showSummary && <div onClick={() => { setShowSummary(false) }} className='summaryDisplay'><h2>Summary</h2><div>{apiData}</div></div>
            }
            <div id="posAbsTimeLine">

                <div className='timeLine'>
                    <div className="timeC">0:00</div>
                    <div className="timeN">Intro</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">0:37</div>
                    <div className="timeN">Why learn this</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">1:05</div>
                    <div className="timeN">Time complexity</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">4:10</div>
                    <div className="timeN">Array</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">5:33</div>
                    <div className="timeN">Binary Trees</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">6:55</div>
                    <div className="timeN">Heap Trees</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">7:54</div>
                    <div className="timeN">Stack Trees</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">9:13</div>
                    <div className="timeN">Graphs</div>
                </div>
                <div className='timeLine'>
                    <div className="timeC">12:05</div>
                    <div className="timeN">Hash Maps</div>
                </div>

            </div>
            <div className='mainScreen'>
                <div className='tile1'>
                    <div style={{ borderRadius: '15px', overflow: 'hidden', marginTop: 10, width: 700, height: 500 }}>
                        <ReactPlayer 
                            url={stateParamsval}
                            controls={true}
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className='options'>
                        <PollOutlinedIcon onClick={() => location('/assessment')}  sx={{ fontSize: 40, color: 'green', cursor: 'pointer' }} />
                        <SummarizeOutlinedIcon onClick={() => { setShowSummary(true) }} sx={{ fontSize: 40, color: 'green', cursor: 'pointer' }} />
                        <h3>{stateName}</h3>
                    </div>
                </div>
                <div className='tile2'>
                    <CollectionsBookmarkIcon sx={{ fontSize: 60, paddingBottom: "15px", paddingTop: "15px", color: 'brown' }} />
                    <div className='myDescHolder'>
                        <List sx={{ width: '100%', maxWidth: 360, color: 'white' }}>
                            <ListItem alignItems="flex-start" >
                                <ListItemAvatar>
                                    <Avatar sx={{ background: "green" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="white"
                                            >
                                                Ali Connors  — I'll be in your neighborhood doing errands this…
                                            </Typography >

                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar sx={{ background: "orange" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="white"
                                            >
                                                to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this…"
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar sx={{ background: "blue" }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Oui Oui"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="white"
                                            >
                                                Sandra Adams — Do you have Paris recommendations? Have you ever…'
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </div>
                    <div className='chips-ui'>
                        <Chip icon={<ScienceIcon />} label="Science" color='warning' variant='outlined' />
                        <Chip icon={<SchoolIcon />} label="Tech" color='success' variant='outlined' />
                    </div>
                </div>
            </div>
            <div className='helpSection'>
                <div className='msgScreen'>
                    <div className='sample'>
                        <div className="sample_flex">
                            <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40, color: 'green', cursor: 'pointer' }} />
                            <h3>{que ? que : 'How May I Help You ..?'}</h3>
                        </div>
                        <p>{ans ? ans : ''}</p>

                    </div>
                </div>

                <div className='msgSend'>
                    <input onChange={(e) => { setUserinput(e.target.value) }} type="text" placeholder='Type a message...' />
                    <button onClick={() => { fetch1(userinput) }}>Ask</button>
                </div>
            </div>

        </div>


    )
}
