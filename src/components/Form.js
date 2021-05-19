import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Form.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }));

const Form = () => {
    const classes = useStyles();
    return (
        <div className='form--container'>
            <div className='left--cont'>
                <div className='form--image'>
                    <div className='form--image--overlay'>
                        <h1 className='contact--header contact--animation'>Contact</h1>
                        <h5>Needing a quote?</h5>
                        <h5>Questions?</h5>
                        <h2>Ready to get started?</h2>
                        <hr></hr>
                        <hr></hr>
                        <p>604-657-1961</p>
                        <p>tge@gmail.com</p>
                        <br></br>
                        <br></br>
                        <div className='responsive--arrow'>
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='right--cont'>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <h2>Ready to start a project?</h2>
                    <h2 className='contact--header'>let's chat!</h2>
                    <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="Phone Number"
                    
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    
                    variant="outlined"
                    />
                   
                    <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    helperText="Some important text"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    variant="outlined"
                    />
                    <br></br>
                    <button  className='form--send--button'>
                        SEND
                    </button>
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default Form
