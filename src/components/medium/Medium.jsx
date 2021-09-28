import React from  "react";
import "./../middle/Middle.css";
import './Medium.css';
import {MediumDataOne} from "./MediumDataOne";
import {MediumDataTwo} from "./MediumDataTwo";

import {Link} from "react-router-dom";
import { IconContext } from "react-icons";
import * as GrIcons from "react-icons/gr";

const Medium = () => {
    return (
        <>
            <div className="medium">
                <div className="medium-section">
                    {MediumDataOne.map((props) => {
                        return (
                            <div className="medium-subSection">
                                <IconContext.Provider value={{ className: "react-icons-medium-one" }}>
                                <div className="medium-contain">
                                    <div className="medium-box-one">
                                        <div className="medium-box-pic" >
                                            <img src={props.icon_avatar} className="medium-desktop-pic" alt="avatar"/>
                                        </div>
                                        <div className="medium-box-text">
                                            <div className="medium-box-title">
                                                <h2 className="medium-box-title-h2"> {props.title_name}</h2>
                                            </div>
                                            <div className="medium-box-container">
                                                <div className="medium-box-socialIcon">
                                                    <Link to='/' className="medium-social-icon-link" >
                                                        <div  className="medium-box-picIcon"> {props.mini_pic_youtube} </div>
                                                    </Link>
                                                    <div className="medium-box-info">
                                                        <h2 className="medium-box-number">
                                                            {props.number_youtube}
                                                        </h2>
                                                        <h3 className=" medium-box-caption">
                                                            {props.subtext}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="medium-box-socialIcon">
                                                    <Link to='/' className="medium-social-icon-link" >
                                                        <div  className="medium-box-picIcon"> {props.mini_pic_instagram} </div>
                                                    </Link>
                                                    <div className="medium-box-info">
                                                        <h2 className="medium-box-number">
                                                            {props.number_instagram}
                                                        </h2>
                                                        <h3 className=" medium-box-caption">
                                                            {props.subtext}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="medium-box-socialIcon">
                                                    <Link to='/' className="medium-social-icon-link" >
                                                        <div  className="medium-box-picIcon"> {props.mini_pic_facebook}</div>
                                                    </Link>
                                                    <div className="medium-box-info">
                                                        <h2 className="medium-box-number">
                                                            {props.number_facebook}
                                                        </h2>
                                                        <h3 className=" medium-box-caption">
                                                            {props.subtext}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="medium-box-paragraph">
                                                <h2 className="medium-box-paragraph-title">
                                                    {props.title_paragraph}
                                                </h2>
                                                <h3 className="medium-box-paragraph-main">
                                                    {props.paragraph}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </IconContext.Provider>

                                <IconContext.Provider value={{ className: "react-icons-medium-two" }}>
                                <div className="medium-section-picVideo">
                                    <div className="medium-section-picVideo-title">
                                        <h2  className="medium-section-picVideo-title-h2">
                                            Последние ролики
                                        </h2>
                                    </div>
                                    <div className="medium-contain-picVideo">
                                        <div className="medium-box-picVideo">
                                            <img src={props.picVideo_1} className="medium-picVideo" alt="picVideo_1"/>
                                            <div className="medium-picVideo-mediaPlayer">{props.icon_MediaPlayer}</div>
                                        </div>
                                        <div className="medium-box-picVideo">
                                            <img src={props.picVideo_2} className="medium-picVideo" alt="picVideo_2"/>
                                            <div className="medium-picVideo-mediaPlayer">{props.icon_MediaPlayer}</div>
                                        </div>
                                        <div className="medium-box-picVideo">
                                            <img src={props.picVideo_3} className="medium-picVideo" alt="picVideo_3"/>
                                            <div className="medium-picVideo-mediaPlayer">{props.icon_MediaPlayer}</div>
                                        </div>
                                        <div className="medium-box-picVideo">
                                            <img src={props.picVideo_4} className="medium-picVideo" alt="picVideo_4"/>
                                            <div className="medium-picVideo-mediaPlayer">{props.icon_MediaPlayer}</div>
                                        </div>
                                        <div className="medium-box-picVideo">
                                            <img src={props.picVideo_5} className="medium-picVideo" alt="picVideo_5"/>
                                            <div className="medium-picVideo-mediaPlayer">{props.icon_MediaPlayer}</div>
                                        </div>
                                        <div className="medium-box-picVideo">
                                            <img src={props.picVideo_6} className="medium-picVideo" alt="picVideo_6"/>
                                            <div className="medium-picVideo-mediaPlayer">{props.icon_MediaPlayer}</div>
                                        </div>
                                    </div>
                                </div>
                            </IconContext.Provider>


                                <div className="medium-contain">
                                    <div className="medium-section-slider">
                                        <div className="medium-section-slider-title">
                                            <h2  className="medium-section-slider-title-h2">
                                               Другие Блогеры
                                            </h2>
                                        </div>

                                        <IconContext.Provider value={{ className: "react-icons-middle" }}>
                                        <div className="medium-contain-slider">
                                            <div className="medium-box-slider">
                                                <div className="middle-desktop-states">
                                                    <div className="middle-desktop-item">
                                                        {MediumDataTwo.map((  props   ) => {
                                                            return (
                                                                <div key={props.id} className="middle-desktop-box">
                                                                    <Link to={props.path} className="middle-desktop-link">
                                                                        <div className="middle-desktop-subBox">
                                                                            <div className="middle-desktop-box-pic" >
                                                                                <img src={props.pic_avatar} className="middle-desktop-pic" alt="avatar"/>
                                                                            </div>
                                                                            <div className="middle-desktop-container-text">
                                                                                <h2 className="middle-desktop-h2-h2">
                                                                                    {props.title}
                                                                                </h2>
                                                                                <div className="middle-desktop-chapter">
                                                                                    <div className="middle-desktop-part">
                                                                                        {props.icon_instagram}
                                                                                        <h2 className="middle-desktop-icon-h2">
                                                                                            {props.number_instagram}
                                                                                        </h2>
                                                                                    </div>
                                                                                    <div className="middle-desktop-part">
                                                                                        {props.icon_youtube}
                                                                                        <h2 className="middle-desktop-icon-h2">
                                                                                            {props.number_youtube}
                                                                                        </h2>
                                                                                    </div>
                                                                                    <div className="middle-desktop-part">
                                                                                        {props.icon_facebook}
                                                                                        <h2 className="middle-desktop-icon-h2">
                                                                                            {props.number_facebook}
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </IconContext.Provider>

                                        <IconContext.Provider value={{ className: "react-icons-medium-three" }}>
                                            <div className="slider-button">
                                                <div className="slider-button-left">
                                                    <GrIcons.GrPrevious className="button-left"/>
                                                </div>
                                                <div className="slider-button-right">
                                                    <GrIcons.GrNext className="button-right"/>
                                                </div>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Medium;
