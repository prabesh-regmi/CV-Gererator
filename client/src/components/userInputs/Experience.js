import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Title from '../UI/DynamicFormTitle'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';

var multipleFormat = {};

const mystyle = {
  btn: {
    width: "60px",
    height: "60px",
    borderRadius: "60px",
    padding: "10px",
    border: "none",
    backgroundColor: "#31B0F8",
    color: "white"
  },
  btnDelete: {
    width: "40px",
    height: "40px",
    color: "#C34E31"

  },

  position: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }


}



export default function Experience(props) {

  function inputFieldHandler(event, index) {
    const { name, value } = event.target;
    const data = { ...props.cvFormValue }
    data.experiences[index][name] = value;
    props.setcvFormValue(() => data);
  }
  React.useEffect(() => {
    multipleFormat = { ...props.cvFormValue.experiences[0] };
  },[]);
  function removeHandler(index) {
    const data = { ...props.cvFormValue }
    data.experiences.splice(index, 1);
    props.setcvFormValue(() => data)
  }
  function addHandler() {
    const data = { ...props.cvFormValue }
    data.experiences = [...props.cvFormValue.experiences, multipleFormat];
    props.setcvFormValue(() => data)
  }

  return (
    <>
      {props.cvFormValue.experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <header style={{ display: "flex" }}>
                <Title title="Experience" />
                {index !== 0 && <IconButton style={{ float: "right", marginLeft: "auto" }} onClick={() => removeHandler(index)} aria-label="delete">

                  <DeleteIcon style={mystyle.btnDelete} />

                </IconButton>}

              </header>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id="company"
                    name='company'
                    value={experience.company}
                    label="Company"
                    placeholder='Facebook'
                    fullWidth
                    variant="standard"
                    onChange={event => inputFieldHandler(event, index)}

                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <TextField
                    required
                    id="from"
                    name="from"
                    label="From"
                    type="number"
                    placeholder='2005'
                    fullWidth
                    variant="standard"
                    value={experience.from}
                    onChange={event => inputFieldHandler(event, index)}
                  />
                </Grid>
                <Grid item xs={6} sm={3} >
                  <TextField
                    required
                    id="to"
                    name="to"
                    value={experience.to}
                    label="To"
                    type="number"
                    placeholder='2010'
                    fullWidth
                    variant="standard"
                    onChange={event => inputFieldHandler(event, index)}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    id="position"
                    name='position'
                    value={experience.position}
                    label="Position"
                    placeholder='Senior Interface Designer'
                    fullWidth
                    variant="standard"
                    onChange={event => inputFieldHandler(event, index)}

                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    id="jobDescription"
                    name='jobDescription'
                    value={experience.jobDescription}
                    label="Job Description"
                    fullWidth
                    variant="standard"
                    multiline
                    minRows={3}
                    onChange={event => inputFieldHandler(event, index)}
                  />
                </Grid>

              </Grid>

            </Paper>


            {index === props.cvFormValue.experiences.length - 1 &&
              <Grid style={mystyle.position}>
                <IconButton style={mystyle.btn} onClick={addHandler} variant="contained">

                  <AddButton />

                </IconButton>
              </Grid>
            }






          </React.Fragment>


        )
      })}
    </>
  )
}