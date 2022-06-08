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



export default function Education(props) {

    function inputFieldHandler(event, index) {
        const { name, value } = event.target;
        const data = { ...props.cvFormValue }
        data.universities[index][name] = value;
        props.setcvFormValue(() => data);
    }
    React.useEffect(() => {
        multipleFormat = { ...props.cvFormValue.universities[0] };
    }, []);
    function removeHandler(index) {
        const data = { ...props.cvFormValue }
        data.universities.splice(index, 1);
        props.setcvFormValue(() => data)
    }
    function addHandler() {
        const data = { ...props.cvFormValue }
        data.universities = [...props.cvFormValue.universities, multipleFormat];
        props.setcvFormValue(() => data)
    }

    return (
        <>
            {props.cvFormValue.universities.map((university, index) => {
                return (
                    <React.Fragment key={index}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <header style={{ display: "flex" }}>
                                <Title title="Education" />
                                {index !== 0 && <IconButton style={{ float: "right", marginLeft: "auto" }} onClick={() => removeHandler(index)} aria-label="delete">

                                    <DeleteIcon style={mystyle.btnDelete} />

                                </IconButton>}

                            </header>
                            <Grid container spacing={5} >
                                <Grid item xs={10}>
                                    <TextField
                                        required
                                        id="university"
                                        name='university'
                                        value={university.university}
                                        label="University"
                                        fullWidth
                                        variant="standard"
                                        onChange={event => inputFieldHandler(event, index)}
                                    />
                                </Grid>
                                <Grid item xs={10} >
                                    <TextField
                                        required
                                        id="address"
                                        name='address'
                                        value={university.address}
                                        label="Address"
                                        fullWidth
                                        variant="standard"
                                        onChange={event => inputFieldHandler(event, index)}

                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="gps"
                                        name='gpa'
                                        type="number"
                                        value={university.gpa}
                                        label="GPA"
                                        placeholder='3.4'
                                        fullWidth
                                        variant="standard"
                                        onChange={event => inputFieldHandler(event, index)}
                                    />
                                </Grid>


                            </Grid>

                        </Paper>

                        {index === props.cvFormValue.universities.length - 1 &&
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