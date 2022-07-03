import instance from "./axios";

const getTopMusic = {
    getAll(){
        const url = `xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1`;
        return instance.get(url);
    }
}
export default getTopMusic;