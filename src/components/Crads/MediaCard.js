import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

const MediaCard = (props) => {
  const { classes, theme, tracks } = props;
  console.info("data from MediaCard", tracks);

  return (
    <React.Fragment>
      {props.tracks.map(track => (
        <Card key={track.id}className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {track.artists[0].name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {track.name}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={track.album.images[0].url}
            title="Live from space album cover"
          />
        </Card>
      ))}
    </React.Fragment>
  )
}
MediaCard.propTypes = {
  tracks: PropTypes.array
}

export default withStyles(styles)(MediaCard)

