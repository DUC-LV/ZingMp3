import instance from "./axios";

const getDeatailMusic = {
    getAll(){
        const url = `https://mp3.zing.vn/xhr/media/get-source?type=audio&key=kmJHTZHNCVaSmSuymyFHLH`;
        return instance.get(url);
    }
}
export default getDeatailMusic;