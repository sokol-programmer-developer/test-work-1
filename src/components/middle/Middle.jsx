import React from "react";
import { Link } from "react-router-dom";
import './Middle.css';

import { IconContext } from "react-icons";

import {MiddleData} from "./MiddleData";


const Middle = () => {

    return (
        <>
            <IconContext.Provider value={{ className: 'react-icons-middle' }}>
                <div className="middle">
                    <div className="middle-title">
                        <h2 className="middle-title-h2">
                            Блогеры
                        </h2>
                    </div>
                    <div className="middle-sort">
                        <h2 className="middle-sort_title"> Сортировка по:</h2>
                        <div className="middle-sort_one">
                            <form method="post">
                                <p className="middle-sort_p">
                                    <select name="select">
                                        <option selected disabled>Выберите площадку</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="Tik Tok">Tik Tok</option>
                                        <option value="Twitch">Twitch</option>
                                        <option value="Instagram">Instagram</option>
                                    </select>
                                </p>
                            </form>
                        </div>
                        <div className="middle-sort_two">
                            <form  method="post">
                                <p >
                                    <select  name="select">
                                        <option selected disabled>Выберите направление</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="Tik Tok">Tik Tok</option>
                                        <option value="Twitch">Twitch</option>
                                        <option value="Instagram">Instagram</option>
                                    </select>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="middle-desktop-states">
                        <div className="middle-desktop-item">
                            {MiddleData.map((  props   ) => {
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
            </IconContext.Provider>
        </>
    );
}
export default Middle;