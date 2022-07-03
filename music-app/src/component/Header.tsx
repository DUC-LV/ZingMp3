import React from "react";
import {
    AiOutlineHome,
    AiOutlineCompass,
    AiOutlineHeart,
    AiOutlineSearch,
} from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { GiConcentrationOrb } from "react-icons/gi";
const Header = () => {
    return (
        <div className="header_container">
            <picture>
                <img 
                    src="https://cdn.tgdd.vn/hoi-dap/564322/Thumbnail/h%C3%ACnh-n%E1%BB%81n-zing-mp3%20(1).jpg"
                    className="header_img"
                />
            </picture>
            {/* <div className="header_login">
                <p className="header_title1">Đăng nhập</p>
                <p className="a">|</p>
                <p className="header_title2">Đăng kí</p>
            </div> */}
            <div className="header_menu">
                {/* <p>
                    <AiOutlineSearch
                        style={{
                            position: "relative",
                            top: "2.5px",
                            right: "10px",
                            color: "green",
                        }}
                    />
                    Tìm Kiếm
                </p> */}
                <p>
                    <AiOutlineHome
                        style={{
                            position: "relative",
                            top: "2px",
                            right: "10px",
                            color: "blue",
                        }}
                    />
                    Trang Chủ
                </p>
                <p>
                    <AiOutlineCompass
                        style={{
                            position: "relative",
                            top: "2.5px",
                            right: "10px",
                            color: "orange",
                        }}
                    />
                    Khám Phá
                </p>
                <p>
                    <BsHeadphones
                        style={{
                            position: "relative",
                            top: "2.5px",
                            right: "10px",
                            color: "#f86b40",
                        }}
                    />
                    Nghe Gì Hôm Nay
                </p>
                <p>
                    <FiBarChart2
                        style={{
                            position: "relative",
                            top: "2.5px",
                            right: "10px",
                            color: "#ae5ca6",
                        }}
                    />
                    BXH NCT
                </p>
                <p>
                    <AiOutlineHeart
                        style={{
                            position: "relative",
                            top: "2.5px",
                            right: "10px",
                            color: "#f44336",
                        }}
                    />
                    Music 4U
                </p>
            </div>
            <div className="footer">
                <GiConcentrationOrb style={{ color: "#ae5ca6" }} />
            </div>
            <style>{`
                .header_container{
                    width:200px;
                    height:100%;
                    position:fixed;
                    left:0;
                    background:#231b2e;
                }
                .header_img{
                    width:140px;
                    height:50px;
                    margin-left:26px;
                    margin-top:20px;
                    border-radius:10px;
                }
                .header_login{
                    display:flex;
                    margin-left:25px;
                    cursor:pointer;
                    color:white;
                }
                .header_title1:hover{
                    color:#2daaed;
                }
                .header_menu{
                    margin-left:35px;
                    cursor:pointer;
                    color:white;
                    margin-top:80px;
                }
                p:hover{
                    color:#2daaed;
                    border-left:1px solid #231b2e;
                }
                .footer{
                    margin-left:80px;
                    margin-top:350px;
                }
            `}</style>
        </div>
    );
};
export default Header;