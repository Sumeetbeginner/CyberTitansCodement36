import React, { useState } from 'react'
// import { addDataToDatabase } from './database'; 

export default function Clubs() {

    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)

    return (
        <div id="inChat">
            <div id="list">
                <div className="inList">
                    {/* <h2 className="ti">
                        <img
                            className="backHome"
                            src="https://cdn-icons-png.flaticon.com/128/9332/9332031.png"
                            height="25px"
                            width="25px"
                            alt=""
                        />{" "}
                        Back
                    </h2> */}
                    <div className="specs">
                        <h3 className="sel">
                            options{" "}
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/9058/9058776.png"
                                height="20px"
                                width="20px"
                                style={{filter: 'invert(100%)'}}
                                alt=""
                                onClick="openHome()"
                            />
                        </h3>
                        <div className="write">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
                                width="25px"
                                height="25px"
                                style={{filter: 'invert(100%)'}}
                                alt=""
                            />
                        </div>
                        <div className="fav">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/2550/2550223.png"
                                width="25px"
                                height="25px"
                                style={{filter: 'invert(100%)'}}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="searchIn">
                        <input type="text" placeholder="Search" />
                        <img
                            id="magicSearch"
                            src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png"
                            height="20px"
                            style={{filter: 'invert(100%)'}}
                            alt=""
                        />
                    </div>
                    <div id="breakThrough" style={{ color: 'black' }}>
                        <div className="card" onClick={() => {
                            setOne(true)
                            setTwo(false)
                        }}>
                            <div className="dp">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/4140/4140040.png"
                                    height="60px"
                                    width="60px"
                                    alt=""
                                />
                            </div>
                            <div className="textPatch">
                                <h4 id="">AI Counsellor</h4>
                                <p>...</p>
                            </div>
                            <div className="detailsz">
                                <p>17:06</p>
                                {/* <p className="tip">5</p> */}
                            </div>
                        </div>
                        <div className="card" onClick={() => {
                            setOne(false)
                            setTwo(true)
                        }}>
                            <div className="dp">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
                                    height="60px"
                                    width="60px"
                                    alt=""
                                />
                            </div>
                            <div className="textPatch">
                                <h4 id="">Coding Club</h4>
                                <p>Hi, whats goin on?</p>
                            </div>
                            <div className="detailsz">
                                <p>7:06</p>
                                <p className="tip">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ************************************************************** */}
            <div id="msg-win">
                {one && <InMsg />}
                {two && <InMsg2 title={'Coding Club'} dp={'https://cdn-icons-png.flaticon.com/128/236/236832.png'} />}
            </div>
        </div>

    )
}

function InMsg() {
    const fetch2 = (sentiment) => {
        fetch('http://127.0.0.1:8080/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the appropriate content type
            },
            body: JSON.stringify({
                'text': sentiment,
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setmymsg((prevMessages) => [
                    ...prevMessages,
                    { pos: 'left', message: data }
                ]);

                setMsgcache('')
                setTyping(false)
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }


    // const []
    const [typing, setTyping] = useState(false)
    const [mymsg, setmymsg] = useState([{ pos: '', message: '' }])
    const [msgcache, setMsgcache] = useState('')
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTyping(true)
            setmymsg((prevMessages) => [
                ...prevMessages,
                { pos: 'right', message: msgcache }
            ]);
            fetch2(msgcache)

        }
    };
    return (
        <div className="inMsg-win">
            <div className="headWidget">
                <div className="profilePic">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4140/4140040.png"
                        width="60px"
                        height="60px"
                        alt=""
                    />
                </div>
                <div className="userName" style={{ color: 'black' }}>
                    <h3>AI Counsellor</h3>
                    <p>{typing ? "Typing..." : "Online"}</p>
                </div>
                <div className="contactOpt">
                    <img
                        onClick={(e) => { window.open('http://localhost:3040/', '_blank') }}
                        id="videoCall"
                        src="https://cdn-icons-png.flaticon.com/128/3747/3747177.png"
                        width="25px"
                        height="25px"
                        style={{filter: 'invert(100%)'}}
                        alt=""
                    />
                    <img
                        id="voiceCall"
                        src="https://cdn-icons-png.flaticon.com/128/1959/1959251.png"
                        width="25px"
                        height="25px"
                        style={{filter: 'invert(100%)'}}
                        alt=""
                    />
                    <img
                        id="moreOptions"
                        src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                        width="25px"
                        height="25px"
                        style={{filter: 'invert(100%)'}}
                        alt=""
                    />
                </div>
            </div>
            <div className="msg-screen">
                {
                    mymsg.map((msg, id) => (
                        <div key={id} className={msg.pos}>{msg.message}</div>
                    ))
                }
                {/* <div className="right">Hi !</div>
                        <div className="left">Hey !</div>
                        <div className="right">Hi !</div> */}
            </div>
            <div className="editor">
                <div className="emoticons">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1023/1023656.png"
                        height="35px"
                        width="35px"
                        style={{filter: 'invert(100%)'}}
                        alt=""
                    />
                </div>
                <div className="inputField">
                    <input value={msgcache} onKeyDown={handleKeyDown} onChange={(e) => { setMsgcache(e.target.value) }} type="text" placeholder="Type your message here..." />
                </div>
                <div className="attachments">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2356/2356589.png"
                        width="25px"
                        height="25px"
                        style={{filter: 'invert(100%)'}}
                        alt=""
                    />
                </div>
                <div className="mic">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4675/4675109.png"
                        height="25px"
                        width="25px"
                        style={{filter: 'invert(100%)'}}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

function InMsg2(props) {
    
   

    // const fetch2 = (sentiment) => {
    //     fetch('http://127.0.0.1:8080/sentiment', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json', // Set the appropriate content type
    //         },
    //         body: JSON.stringify({
    //             'text': sentiment,
    //         })
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setmymsg((prevMessages) => [
    //                 ...prevMessages,
    //                 { pos: 'left', message: data }
    //             ]);

    //             setMsgcache('')
    //             setTyping(false)
    //         })
    //         .catch(error => {
    //             console.error('Fetch error:', error);
    //         });

    // }


    // const []
    const [typing, setTyping] = useState(false)
    const [mymsg, setmymsg] = useState([{ pos: '', message: '' }])
    const [msgcache, setMsgcache] = useState('')
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTyping(true)
            setmymsg((prevMessages) => [
                ...prevMessages,
                { pos: 'right', message: msgcache }
            ]);
            // addDataToDatabase('/chat/messages',{ text: msgcache });
            // fetch2(msgcache)

        }
    };

    // useEffect(() => {
    //     const unsubscribe = getDataFromDatabase('/chat/messages', (data) => {
    //       setmymsg((prevMessages) => [
    //         ...prevMessages,
    //         { pos: 'left', message: data },
    //       ]);
    //     });
      
    //     // Cleanup function to unsubscribe from the listener when the component unmounts
    //     return () => {
    //       unsubscribe(); // Unsubscribe from the database listener
    //     };
    //   }, []);
    return (
        <div className="inMsg-win">
            <div className="headWidget">
                <div className="profilePic">
                    <img
                        src={props.dp}
                        width="60px"
                        height="60px"
                        alt=""
                    />
                </div>
                <div className="userName" style={{ color: 'black' }}>
                    <h3>{props.title}</h3>
                    <p>{typing ? "Typing..." : "Online"}</p>
                </div>
                <div className="contactOpt">
                    <img
                        // onClick={(e) => { window.open('http://localhost:3040/', '_blank') }}
                        id="videoCall"
                        src="https://cdn-icons-png.flaticon.com/128/3747/3747177.png"
                        width="25px"
                        height="25px"
                        alt=""
                    />
                    <img
                        id="voiceCall"
                        src="https://cdn-icons-png.flaticon.com/128/1959/1959251.png"
                        width="25px"
                        height="25px"
                        alt=""
                    />
                    <img
                        id="moreOptions"
                        src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                        width="25px"
                        height="25px"
                        alt=""
                    />
                </div>
            </div>
            <div className="msg-screen">
                {
                    mymsg.map((msg, id) => (
                        <div key={id} className={msg.pos}>{msg.message}</div>
                    ))
                }
                {/* <div className="right">Hi !</div>
            <div className="left">Hey !</div>
            <div className="right">Hi !</div> */}
            </div>
            <div className="editor">
                <div className="emoticons">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1023/1023656.png"
                        height="35px"
                        width="35px"
                        alt=""
                    />
                </div>
                <div className="inputField">
                    <input value={msgcache} onKeyDown={handleKeyDown} onChange={(e) => { setMsgcache(e.target.value) }} type="text" placeholder="Type your message here..." />
                </div>
                <div className="attachments">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2356/2356589.png"
                        width="25px"
                        height="25px"
                        alt=""
                    />
                </div>
                <div className="mic">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4675/4675109.png"
                        height="25px"
                        width="25px"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
