import axios from 'axios'

const config = {
    baseURL: `https://api.spaceflightnewsapi.net/v3`,
}

export default axios.create(config)