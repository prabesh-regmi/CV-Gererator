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



export default function Skills(props) {

  function inputFieldHandler(event, index) {
    const { name, value } = event.target;
    const data = { ...props.cvFormValue }
    data.skills[index][name] = value;
    props.setcvFormValue(() => data);
  }
  function inputTechnicalFieldHandler(event, index) {
    const { name, value } = event.target;
    const data = { ...props.cvFormValue }
    data.technicalSkills[index][name] = value;
    props.setcvFormValue(() => data);
  }
  React.useEffect(() => {
    multipleFormat = { ...props.cvFormValue.skills[0] };
  },[]);
  function removeHandler(index) {
    const data = { ...props.cvFormValue }
    data.skills.splice(index, 1);
    props.setcvFormValue(() => data)
  }
  function addHandler() {
    const data = { ...props.cvFormValue }
    data.skills = [...props.cvFormValue.skills, multipleFormat];
    props.setcvFormValue(() => data)
  }
  function removeTSkillHandler(index) {
    const data = { ...props.cvFormValue }
    data.technicalSkills.splice(index, 1);
    props.setcvFormValue(() => data)
  }
  function addTskillHandler() {
    const data = { ...props.cvFormValue }
    data.technicalSkills = [...props.cvFormValue.technicalSkills, multipleFormat];
    props.setcvFormValue(() => data)
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>

      <Grid item xs={7} >
            {props.cvFormValue.skills.map((skill, index) => {
              return (

                <React.Fragment key={index}>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <header style={{ display: "flex" }}>
                      <Title title="Skill" />
                      {index !== 0 && <IconButton style={{ float: "right", marginLeft: "auto" }} onClick={() => removeHandler(index)} aria-label="delete">

                        <DeleteIcon style={mystyle.btnDelete} />

                      </IconButton>}

                    </header>
                    <Grid container spacing={3} >
                      <Grid item xs={12} >
                        <TextField
                          required
                          id="skillsTitle"
                          name='skillsTitle'
                          value={skill.skillsTitle}
                          label="Title"
                          placeholder='Backend Developer'
                          fullWidth
                          variant="standard"
                          onChange={event => inputFieldHandler(event, index)}

                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="skillsdescription"
                          name='skillsdescription'
                          value={skill.skillsdescription}
                          label="Description"
                          fullWidth
                          variant="standard"
                          multiline
                          minRows={3}
                          onChange={event => inputFieldHandler(event, index)}
                        />
                      </Grid>

                    </Grid>

                  </Paper>


                  {
                    index === props.cvFormValue.skills.length - 1 &&
                    <Grid style={mystyle.position}>
                      <IconButton style={mystyle.btn} onClick={addHandler} variant="contained">

                        <AddButton />

                      </IconButton>
                    </Grid>
                  }
                </React.Fragment>
              )
            })}
          </Grid>

          <Grid item xs={5} >
            {props.cvFormValue.technicalSkills.map((technicalSkill, index) => {
              return (

                <React.Fragment key={index}>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <header style={{ display: "flex" }}>
                      <Title title="Technical Skill" />
                      {index !== 0 && <IconButton style={{ float: "right", marginLeft: "auto" }} onClick={() => removeTSkillHandler(index)} aria-label="delete">

                        <DeleteIcon style={mystyle.btnDelete} />

                      </IconButton>}

                    </header>
                    <Grid container spacing={3} >
                      <Grid item xs={12} >
                        <TextField
                          required
                          id="technicalSkill"
                          name='technicalSkill'
                          value={technicalSkill.technicalSkill}
                          label="Technical Skill"
                          placeholder='PHP'
                          fullWidth
                          variant="standard"
                          onChange={event => inputTechnicalFieldHandler(event, index)}

                        />
                      </Grid>
                    </Grid>

                  </Paper>


                  {
                    index === props.cvFormValue.technicalSkills.length - 1 &&
                    <Grid style={mystyle.position}>
                      <IconButton style={mystyle.btn} onClick={addTskillHandler} variant="contained">

                        <AddButton />

                      </IconButton>
                    </Grid>
                  }
                </React.Fragment>
              )
            })}
          </Grid>

      </Grid>
    </React.Fragment>
     
    )
}