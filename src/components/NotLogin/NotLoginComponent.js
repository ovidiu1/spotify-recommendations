import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NotLoginComponent = props => {
    return (
        <div>
            <Typography component="div" style={{ padding: 8 * 3 }}>
             <Button
                    variant="contained"
                    color="secondary"
                    href={process.env.REACT_APP_LOGIN_URL}>
                    Login on Spotify
            </Button>
            </Typography>
        </div>
    )
}

export default NotLoginComponent
