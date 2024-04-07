import React from 'react';
import './dashCss.css'; 
import PieChart from './PieChart';


const Dashboard = () => {
    let currUserData = JSON.parse(localStorage.getItem('userData'))

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ]
        }]
      };
    return (
        <div className="main">
            <div className="title">
                <div className="title-text">
                    <h2>DASHBOARD</h2>
                </div>
            </div>

            <div className="content"
            >
                <div className="section1">
                    <div className="info-content">
                        <div className="name">
                            <p>Name : {currUserData.userName}</p>
                        </div>
                        <div className="gender">
                            <p>Gender : {currUserData.userGender}</p>
                        </div>
                        <div className="institution">
                            <p>Institution : {currUserData.userInstitution}</p>
                        </div>
                        <div className="interest">
                            <p>Interest : {currUserData.userInterest}</p>
                        </div>
                        <div className="email">
                            <p>Email : {currUserData.userEmail}</p>
                        </div>
                        <div className="purchase-History">
                            <p>Purchase History : </p>
                        </div>
                    </div>

                    <div className="chart-content">
                        <div className="chart-1">
                            <div className="title-1">
                            <PieChart data={data} />
                            </div>
                            <div className="chartjs-1">

                            </div>
                        </div>
                        <div className="chart-2">
                            <div className="title-2">
                            <PieChart data={data} />
                            </div>
                            <div className="chartjs-2">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section2">

                    <div className="web-info">
                        <div className="assesments-score">
                            <p>Assesments Score : </p>
                        </div>
                        <div className="watch-time">
                            <p>Watch Time : </p>
                        </div>
                        <div className="credits">
                            <p>Credits : </p>
                        </div>
                        <div className="premium-details">
                            <p>Premium Details : </p>
                        </div>
                    </div>

                    <div className="chart-content2">
                        <div className="chart-3">
                            <div className="title-1">
                                <p>CHART 3</p>
                            </div>
                            <div className="chartjs-1">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
