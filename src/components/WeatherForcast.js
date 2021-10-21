import React from "react";

const WeatherForcast = (props) => {
    
    return (
        <section>
            <div className="weather">
                <img src={props.img} alt="Img Broken"/>
                <p><span>conditions:</span>{props.conditions}</p>
                <p><span>time:</span>{props.time}</p>
            </div>
        </section>
    );
};

export default WeatherForcast;