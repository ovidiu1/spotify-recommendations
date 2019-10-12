import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const NotLoginComponent = props => {
    return (
        <div>
            <Typography component="div" style={{ padding: 8 * 3 }}>
             <Button
                    variant="contained"
                    color="secondary"
                    href="https://spotify-recommendations.herokuapp.com/login">
                    Login on Spotify
            </Button>
            </Typography>
        </div>
    )
}

export default NotLoginComponent
