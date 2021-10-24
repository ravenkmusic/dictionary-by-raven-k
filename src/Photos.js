import React from "react";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos);
        return (<div className="Photos">{props.photos.map(function(photo, index) {
            return (
                <img src={photo.src.landscape} alt="word" />
            );
        })}
        </div>
        );
    } else {
        return null;
    }
}