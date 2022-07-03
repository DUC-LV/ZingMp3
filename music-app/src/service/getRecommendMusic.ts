import instance from "./axios";

const getRecommendMusic = {
    getAll(id:string){
        const url = `xhr/recommend?type=audio&id=${id}`;
        return instance.get(url);
    }
}
export default getRecommendMusic;