import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ErrorComponent from '../../components/Error/ErrorComponent'
// import MediaCard from '../../components/Crads/MediaCard';
import axios from 'axios';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
      },
      progress: {
        margin: theme.spacing.unit * 2,
      },
});

export class CustomGenres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            genre:'',
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getGenres();
      }

    getGenres = () => {
        const token = 'BQDEIk9KvHUto2yQt9RYigi2JdWquTKbu-JOVzrvzYppSMbscx94ZfFiIBflkIzWsgTNduZ-B9PS_WCwAjYsfAkVM7aGypd4-FY6cm5a0ykNNBUpbnpNRsM8R95-TZVJOQPXqDkH3TTWMf5EznULK2uC-gPyrJpY7gCwC7lGNS_lHfamsQkjlL-n_0nEqw';
        
        const config = {
            headers: { 'Authorization': "Bearer " + token }
          }
        const endPoint = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'

        axios.get(endPoint, config)
            .then(result => this.setState({
                genres: result.data.genres,
                isLoading: false

            }))
            .catch(error => this.setState({
                error: true,
                isLoading: false
            }));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        const { classes } = this.props;
        const { genres, isLoading, error } = this.state;
        console.info('GENRES:', genres);
        return (    
            <React.Fragment>
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.genre}
                        onChange={this.handleChange}
                        displayEmpty
                        name="genre"
                        className={classes.selectEmpty}
                    >
                        {genres.map(genre => (
                            <MenuItem key={genre} value={genre}>{genre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {isLoading ? <CircularProgress className={classes.progress} /> : ''}
                { error ? <ErrorComponent />:''}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(CustomGenres)
