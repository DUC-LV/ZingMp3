import React from "react";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export interface DataSlider {
    image?: string;
    title?: string;
    key?: string;
    url?: string;
}
interface DataSlide {
    dataSlider?: DataSlider[];
    setting?: any;
    name?: string;
}
const SlideShow = (props: DataSlide) => {
    const { dataSlider, setting, name } = props;
    const router = useRouter();
    return (
        <div className="slide_show">
            <h2 className="slide_show_name">{name}</h2>
            <Slider {...setting}>
                {dataSlider?.map((item, index) => {
                    return (
                        <div
                            className="slide_show_item"
                            key={index}
                            onClick={() => {
                                router.push({
                                    pathname: "",
                                    query: {},
                                });
                            }}
                        >
                            <picture>
                                <img
                                    src={item?.image}
                                    className="slide_show_img"
                                />
                            </picture>
                            <p className="slide_show_title">{item.title}</p>
                        </div>
                    );
                })}
            </Slider>
            <style>{`
                .slide_show{
                    margin-top:40px;
                    width:94.5%;
                    margin-left:60px;
                }
                .slide_show_name{
                    color:white;
                }
                .slide_show_img{
                    height:210px;
                    width:280px;
                    cursor:pointer;
                    border-radius:10px;
                }
                .slide_show_title{
                    color:white;
                    cursor:pointer;
                }
                .slide_show_title:hover{
                    color:#28acf3
                }
            `}</style>
        </div>
    );
};
export default SlideShow;