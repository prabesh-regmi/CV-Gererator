import * as React from 'react';
import ReactDom from 'react-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Title from '../UI/DynamicFormTitle'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';


const mystyle = {

  position: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  chooseImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    cursor: "grab"

  }


}
export default function BasicInfo(props) {
  const [selectedFile, setSelectedFile] = React.useState()
  const [preview, setPreview] = React.useState()

  // create a preview as a side effect, whenever selected file is changed
  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }

  function inputFildHandler(event) {
    const { name, value } = event.target;

    console.log(document.getElementById('email'));
    props.setcvFormValue(preValue => {
      return {
        ...preValue,
        [name]: value
      }
    });
  }
  function validataInput(event) {
    const { id, value } = event.target;
    if (value.length === 0) {
      console.log(ReactDom.findDOMNode(id));

    }
  }
 
  function formHandler(e){
    e.preventDefault();
   
  }

  return (
    <React.Fragment>
      <Title title="Basic Infomation" />
      <Grid container spacing={3}>

       
  
        <Grid item xs={12} >
          <Grid style={mystyle.position}>
            <Grid style={mystyle.position}>

              
              <label htmlFor="file-upload" className="custom-file-upload">
                <input id="file-upload" type="file" onChange={onSelectFile} style={{ display: "none" }} />

                {selectedFile ? <img src={preview} alt="No file" style={mystyle.chooseImg} /> :
                 <AccountCircleIcon style={mystyle.chooseImg} />}
              
              </label>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="fullName"
            name="name"
            value={props.cvFormValue.name}
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            style={{ fontSize: 20 }}
            onChange={inputFildHandler}
            onBlur={validataInput}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="Email"
            variant="standard"
            value={props.cvFormValue.email}
            onChange={inputFildHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            value={props.cvFormValue.phoneNumber}
            label="Phone Number"
            fullWidth
            autoComplete="phone number"
            variant="standard"
            onChange={inputFildHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="jobPosition"
            name="jobPosition"
            value={props.cvFormValue.jobPosition}
            label="Job Position"
            fullWidth
            autoComplete="Job Position"
            variant="standard"
            size="large"
            onChange={inputFildHandler}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="profile"
            name="profile"
            value={props.cvFormValue.profile}
            label="Profile Descreption"
            placeholder='Profile Descreption'
            fullWidth
            variant="standard"
            multiline
            minRows={4}
            onChange={inputFildHandler}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
