import React, { useState, useEffect, useCallback } from "react";
import getRecommendMusic from "../src/service/getRecommendMusic";
import getTopMusic from "../src/service/getTopMusic";
import getSearchMusic from "../src/service/getSearchMusic";
import getDeatailMusic from "../src/service/getDetailMusic";
const Home = () => {
    const [id, setId] = useState([])
    useEffect(() => {
        getSearchMusic()
            .then((res) => {
                console.log(res)
            })
        getDeatailMusic.getAll()
            .then((res) => {
                console.log(res)
            })
    },[])
    return (
        <div className="index">
            <style>{`
                .index{
                    margin-left:200px;
                }
            `}</style>
        </div>
    )
}
export default Home;
