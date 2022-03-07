import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


export default function Patient() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [patients, setPatients] = useState([])
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        const patient = { name, location }
        console.log(patient)
        fetch("http://localhost:8080/patient/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient)

        }).then(() => {
            console.log("New Patient added")
        })
    }



    useEffect(() => {
        fetch("http://localhost:8080/patient/getAll")
            .then(res => res.json())
            .then((result) => {
                setPatients(result);
            }
            )
    }, [])

    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>

                <h1 style={{ color: "blue" }}><u>Add Patient</u></h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Patient Name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Patient Location" variant="outlined" fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>

                </form>

            </Paper>


            <Paper elevation={3} style={paperStyle}>
                <h1>Patients</h1>

                {patients.map(patient => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={patient.id}>
                        Id:{patient.id}<br />
                        Name:{patient.name}<br />
                        Location:{patient.location}

                    </Paper>
                ))
                }

            </Paper>
        </Container>
    );
}
