import React from 'react'
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from '../../components/Crads/MediaCard';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const TabContainer = (props) => {

  return (
    <React.Fragment>
     <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
    <MediaCard />
    </React.Fragment>
  );
}
TabContainer.propTypes = {

};

export default withStyles(styles)(TabContainer);