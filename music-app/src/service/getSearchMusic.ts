import axios from "axios";

const getSearchMusic = () => {
    // let headers = {
    //     'Access-Control-Allow-Origin': '*',        
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // }
    const config = {
        data: {
            'Access-Control-Allow-Origin': '*',        
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return axios.get(`http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=anh`,config)
}
export default getSearchMusic;