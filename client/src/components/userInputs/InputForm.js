import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education'
import Review from './Review'
import axios from 'axios';
const cvInputFormat = {
  "name": "",
  "jobPosition": "",
  "email": "",
  "phoneNumber": "",
  "profile": "",
  "skills": [
    {
      "skillsTitle": "",
      "skillsdescription": ""
    }
  ],
  "technicalSkills": [
    {
      "technicalSkill": ""
    }
  ],
  "experiences": [
    {
      "company": "",
      "from": "",
      "to": "",
      "positon": "",
      "jobDescription": ""
    }
  ],
  "universities": [
    {
      "university": "",
      "address": "",
      "gpa": ""
    }
  ]

}
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

export default function InputForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [cvFormValue, setcvFormValue] = React.useState(cvInputFormat);
  const steps = ['Basic Info', 'Skills', 'Experience', 'Education', 'Review'];

  React.useEffect(()=>{

    const fetchData = () => {
      console.log("i am here")
      return axios.get("http://localhost:4000/")
            .then((response) => console.log(response.data));}
        fetchData();
  },[]);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicInfo cvFormValue={cvFormValue} setcvFormValue={setcvFormValue} />;
      case 1:
        return <Skills cvFormValue={cvFormValue} setcvFormValue={setcvFormValue} />;
      case 2:
        return <Experience cvFormValue={cvFormValue} setcvFormValue={setcvFormValue} />;
      case 3:
        return <Education cvFormValue={cvFormValue} setcvFormValue={setcvFormValue} />;
      case 4:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  var jsonData = {
    "users": [
        {
            "name": "alan", 
            "age": 23,
            "username": "aturing"
        },
        {
            "name": "john", 
            "age": 29,
            "username": "__john__"
        }
    ]
  }

  const handleNext = () => {
    if (activeStep === 3) {

    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmit = (event) => {
    console.log(cvFormValue);

    axios.post('http://localhost:4000/', cvFormValue)
        .then(response => console.log(response.data));



    // fetch('http://localhost:4000/', {
    //   method: 'POST',
    //   // We convert the React state to JSON and send it as the POST body
    //   body: cvFormValue
    // }).then(function (response) {
    //   console.log(response)
    //   return response.json();
    // });
    event.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Fill Out The Form
          </Typography>
          <div>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 3 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={activeStep === steps.length - 2 ? handleSubmit : handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Download' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
