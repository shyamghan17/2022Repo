import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 8Cq2BcSw3L4gw-SN6bhAQn2bBKB-GiviLOD6JiZT4WkgY5VAvXlE0aelx-n0WYUDl4pGeq5_nzNVHGt-0dytqfyvRnxBnaeW7by7qo5TJpiIWjY4AfvNmE90D33EYXYx'
    }
})

// yelp.get('/search')