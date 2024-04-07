

import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddchartIcon from '@mui/icons-material/Addchart';

// icons
import EngineeringIcon from '@mui/icons-material/Engineering';


const stepz = [
    {
        "label": "Math Fundamentals",
        "description": "Mathematics is the foundation of all the key data science processes. It includes Statistics, Linear Algebra, Differential Calculus, Discrete Math, etc."
    },
    {
        "label": "Programming",
        "description": "Mastering a programming language related to Data Science is essential. Python, being widely used and easier to learn compared to R, is highly recommended for aspiring professionals in the field."
    },
    {
        "label": "SQL and Data Warehousing",
        "description": "Prioritizing the development of strong SQL skills and understanding Data Warehousing concepts is essential for avoiding underestimation and maximizing career potential."
    },
    {
        "label": "Data Analysis & Visualization",
        "description": "Data analysis in data science involves extracting valuable insights from diverse data sources through algorithmic processes, constituting the science of deriving meaningful information from raw data."
    },
    {
        "label": "Machine Learning Algorithms",
        "description": "Machine learning automates computer performance optimization by analyzing data to build decision-making models based on identified patterns, within artificial intelligence."
    },
    {
        "label": "Cloud-Based Deployment",
        "description": "Leveraging cloud-based machine learning platforms and APIs from various vendors enables easy deployment and analysis of massive-scale models, transforming the landscape of modern Data Science workloads."
    }
]



export default function VerticalLinearStepper() {
    const [steps, setStep] = useState([])


    useEffect(() => {
        fetch("http://127.0.0.1:8080/roadmap")
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
                // Handle the fetched data
                console.log(data);
                setStep(data)
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }, []);

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="holder">

            <div className="myMap" style={{ color: "black" }}>
                <Box sx={{ maxWidth: 400, borderRadius: '30px', padding: '10px' }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 5 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    <h3>
                                        {step.label}
                                    </h3>
                                </StepLabel>
                                <StepContent>
                                    <Typography sx={{ color: 'black' }}>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                disabled={index === 5}
                                                color='primary'
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - You&apos;re All Done !</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </div>

            <div className="showPoster">
                <AddchartIcon sx={{ fontSize: 160, color: 'white' }} />
                <p>
                    <span style={{ fontWeight: "bold", fontSize: 40 }}> RoadMap</span> <br />
                    <p>Imagine a roadmap is like a map for your project. It shows the big goals and the smaller steps you need to take to reach them.</p>
                    <ul>
                        <li><b>Roadmap = Project Map!</b>  See big goals &amp; smaller steps.</li>
                        <li><b>Chunk It Down!</b> Break big tasks into smaller, manageable ones.</li>
                        <li><b>Prioritize!</b> Focus on tasks most important for your goals.</li>
                        <li><b>Be Flexible!</b> Adjust the plan as needed for challenges or opportunities.</li>
                        <li><b>Review Regularly!</b> Stay on track by checking progress &amp; updating the roadmap.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}