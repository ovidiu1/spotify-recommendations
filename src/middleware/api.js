import axios from "axios"
import { API } from '../actions/types';
import { accessDenied, apiError, apiStart, apiEnd } from "../actions/api";


const apiMiddleware = ({ dispatch }) => next => action => {
    const value = 'heavy-metal'
    const token = 'BQAAckMUFBaH7_iJL0VAlaop41FpLedxxyBJsbDRYE2mdJK8YSh2xJkOJq_Y0rWvE5hJbBF3Dt9ToUdXMhU4c5euYR034Ad6q6RIsjoIKLN0z0wfL9lF4-UC8uvpj8JwxZRfh10xn5JgHHSK4WdYgU3Lz6Hx89mthtDURLd3_RkF34U4Tb3C1MVlAKcKjtJEUso';
    const config = {
        headers: { 'Authorization': "Bearer " + token }
    }

    const endPoint = 'https://api.spotify.com/v1/recommendations';
    const limit = 18;
    let link = `${endPoint}?limit=${limit}&seed_genres=${value}`;

    axios.get(link, config)
        .then(result => this.setState({
            tracks: result.data.tracks,
            isLoading: false
        }))
        .catch(error => this.setState({
            error: true,
            isLoading: false
        }));
}