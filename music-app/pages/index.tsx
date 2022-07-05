import React, { useEffect, useState, useCallback } from "react";
import { FaTshirt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsArrowBarUp } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import {
    AiOutlineSetting,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from "react-icons/ai";
import Slide from "../src/container/Slide";
import SlideShow from "../src/container/SlideShow";
import ListMusicHome from "../src/container/ListMusicHome";
const Home = () => {
    const { getHome, getChart, getSong } = require("nhaccuatui-api-full");
    const [dataSlide, setDataSlide] = useState<Array<object>>();
    const [dataTopicEvent, setDataTopicEvent] = useState<Array<any>>();
    const [dataNewRelease, setDataNewRelease] = useState<Array<object>>();
    const [dataTop100, setDataTop100] = useState<Array<object>>();
    const [dataListMusicHome, setDataListMusicHome] = useState<Array<object>>();
    useEffect(() => {
        getHome().then((res: any) => {
            console.log(res);
            setDataSlide(res.showcase);
            setDataTopicEvent(res.topicEvent);
            setDataNewRelease(res.newRelease?.song);
            setDataTop100(res.top100);
            setDataListMusicHome(res.song);
        });
        // getChart().then((res: any) => {});
        // getSong("EdENCgJm9dAa").then((res: any) => {
        //     // console.log(res);
        // });
    }, []);
    return (
        <div className="index">
            <div className="index_header">
                <div className="icon">
                    <AiOutlineArrowLeft
                        style={{
                            color: "white",
                            height: "20px",
                            width: "60px",
                            position: "relative",
                            top: "25px",
                            left: "20px",
                            cursor: "pointer",
                        }}
                    />
                    <AiOutlineArrowRight
                        style={{
                            color: "white",
                            height: "20px",
                            width: "60px",
                            position: "relative",
                            top: "25px",
                            cursor: "pointer",
                        }}
                    />
                </div>
                <input
                    className="index_header_input"
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                <div className="index_header_icon">
                    <h5 className="box_icon box1">
                        <FaTshirt
                            style={{
                                height: "20px",
                                width: "20px",
                                position: "relative",
                                left: "9px",
                                top: "9px",
                                color: "#be6059",
                            }}
                        />
                    </h5>
                    <h5 className="box_icon box2">
                        <IoDiamondOutline
                            style={{
                                height: "20px",
                                width: "20px",
                                position: "relative",
                                left: "9px",
                                top: "9px",
                                color: "white",
                            }}
                        />
                    </h5>
                    <h5 className="box_icon box3">
                        <BsArrowBarUp
                            style={{
                                height: "20px",
                                width: "20px",
                                position: "relative",
                                left: "9px",
                                top: "9px",
                                color: "white",
                            }}
                        />
                    </h5>
                    <h5 className="box_icon box4">
                        <AiOutlineSetting
                            style={{
                                height: "20px",
                                width: "20px",
                                position: "relative",
                                left: "9px",
                                top: "9px",
                                color: "white",
                            }}
                        />
                    </h5>
                    <h5 className="box_icon box5">
                        <MdPeopleAlt
                            style={{
                                height: "20px",
                                width: "20px",
                                position: "relative",
                                left: "9px",
                                top: "9px",
                                color: "white",
                            }}
                        />
                    </h5>
                </div>
            </div>
            <Slide
                dataSlider={dataSlide?.map((item: any) => {
                    return {
                        image: item.imageUrl,
                        title: item.title,
                        key: item.key,
                        url: item.url,
                    };
                })}
            />
            <SlideShow
                name={dataTopicEvent?.[0].groupName}
                dataSlider={dataTopicEvent?.[0]?.listPlaylist.map(
                    (item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    }
                )}
                setting={{
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }}
            />
            <SlideShow
                name={dataTopicEvent?.[1].groupName}
                dataSlider={dataTopicEvent?.[1]?.listPlaylist.map(
                    (item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    }
                )}
                setting={{
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }}
            />
            <SlideShow
                name={dataTopicEvent?.[2].groupName}
                dataSlider={dataTopicEvent?.[2]?.listPlaylist.map(
                    (item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            url: item.url,
                        };
                    }
                )}
                setting={{
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }}
            />
            <SlideShow
                name="Mới Phát Hành"
                dataSlider={dataNewRelease?.map((item: any) => {
                    return {
                        image: item.thumbnail,
                        title: item.title,
                        key: item.key,
                        url: item.url,
                    };
                })}
                setting={{
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }}
            />
            <SlideShow
                name="Top 100"
                dataSlider={dataTop100?.map((item: any) => {
                    return {
                        image: item.thumbnail,
                        title: item.title,
                        key: item.key,
                        url: item.url,
                    };
                })}
                setting={{
                    infinite: true,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }}
            />
            <ListMusicHome
                dataListMusicHome1={dataListMusicHome
                    ?.slice(0, 5)
                    ?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            artists: item.artists?.[0].name,
                            duration: item.duration,
                        };
                    })}
                dataListMusicHome2={dataListMusicHome
                    ?.slice(5, 10)
                    ?.map((item: any) => {
                        return {
                            image: item.thumbnail,
                            title: item.title,
                            key: item.key,
                            artists: item.artists?.[0].name,
                            duration: item.duration,
                        };
                    })}
                name="Bài Hát"
            />
            <style>{`
                .index{
                    margin-left:250px;
                }
                .index_header{
                    display:flex;
                    justify-content: space-between;
                }
                .index_header_icon{
                    display:flex;
                }
                .box_icon{
                    height:40px;
                    width:40px;
                    border-radius:50%;
                    background:#2e2739;
                    cursor:pointer;
                    position:relative;
                    bottom:12px;
                }
                .box5{
                    margin-right:60px;
                }
                .box4{
                    margin-right:10px;
                }
                .box3{
                    margin-right:10px;
                }
                .box2{
                    margin-right:10px;
                }
                .box1{
                    margin-right:10px;
                }
                .index_header_input{
                    width:540px;
                    height:40px;
                    border-radius:10px;
                    outline:none;
                    background:#2e2739;
                    border:none;
                    margin-top:15px;
                    display:fixed;
                    text-align:center;
                    top:0px;
                }
                input{
                    color: white;
                }
                ::placeholder{
                    color:white;
                    text-align:center;
                }
            `}</style>
        </div>
    );
};

export default Home;