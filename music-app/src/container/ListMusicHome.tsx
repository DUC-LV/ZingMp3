import React from "react";
import { VscDebugStart } from "react-icons/vsc";
export interface Data {
    image?: string;
    title?: string;
    key?: string;
    artists?: string;
    duration?: string;
}
interface DataListMusicHome {
    dataListMusicHome1?: Data[];
    dataListMusicHome2?: Data[];
    name?: string;
}
const ListMusicHome = ({
    dataListMusicHome1,
    dataListMusicHome2,
    name,
}: DataListMusicHome) => {
    console.log(dataListMusicHome2);
    return (
        <>
            <h2 className="list_music_home_title">{name}</h2>
            <div className="list_music_home">
                <div className="list_music_home_left">
                    {dataListMusicHome1?.map((item: any, index: any) => {
                        return (
                            <>
                                <div
                                    className="list_music_home_left_box"
                                    key={index}
                                >
                                    <img
                                        src={item.image}
                                        className="list_music_home_left_box_img"
                                    />
                                    <div className="list_music_home_left_box_box">
                                        <p className="list_music_home_left_box_box_title">
                                            {item.title}
                                        </p>
                                        <p className="list_music_home_left_box_box_artist">
                                            {item.artists}
                                        </p>
                                        <p className="a">
                                            <VscDebugStart />
                                            {item.duration}
                                        </p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="list_music_home_right">
                    {dataListMusicHome2?.map((item: any, index: any) => {
                        return (
                            <>
                                <div
                                    className="list_music_home_left_box"
                                    key={index}
                                >
                                    <img
                                        src={item.image}
                                        className="list_music_home_left_box_img"
                                    />
                                    <div className="list_music_home_left_box_box">
                                        <p className="list_music_home_left_box_box_title">
                                            {item.title}
                                        </p>
                                        <p className="list_music_home_left_box_box_artist">
                                            {item.artists}
                                        </p>
                                        <p className="a">
                                            <VscDebugStart />
                                            {item.duration}
                                        </p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <style>{`
                .list_music_home_title{
                    color:white;
                    margin-left:60px;
                    margin-top:40px;
                }
                .list_music_home,.list_music_home_left_box{
                    display:flex;
                }
                .list_music_home_left_box{
                    border-radius:8px;
                    margin-top:10px;
                }
                .list_music_home_left_box{
                    height:120px;
                    width:710px;
                    background:#202a34;
                }
                .list_music_home_left_box_img{
                    height:100px;
                    width:100px;
                    border-radius:8px;
                    margin-top:10px;
                    margin-left:20px;
                    cursor:pointer;
                }
                .list_music_home{
                    margin-left:60px;
                }
                .list_music_home_left_box_box{
                    color:white;
                    margin-left:80px;
                    margin-top:20px;
                }
                .list_music_home_right{
                    margin-left:100px;
                }
                .a{
                    position:relative;
                    left:400px;
                    bottom:50px;
                    color:white;
                    cursor:pointer;
                }
                
            `}</style>
            </div>
        </>
    );
};
export default ListMusicHome;