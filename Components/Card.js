import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className = "div--image">
                <img className = "card--image" src={props.imageUrl}/>
            </div>
            <div className = "div--content">
                <div className = "line1">
                    <img className = "card--location--image" src="./Images/location.png"/>
                    <h2 className = "card--location--country">{props.location}</h2>
                    <h4 className = "card--location--google"><a href={props.googleMapsUrl}> View on Google Maps </a></h4>
                </div>
                <h1 className = "card--location--place"> {props.title} </h1>
                <h5 className = "card--location--date"> {props.startDate} - {props.endDate} </h5>
                <p className = "card--location--description">{props.description}</p>
            </div>
        </div>
    )
}