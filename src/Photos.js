import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos);
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                    return (
                        <div className="image">
                            <img src={photo.src.landscape} key={index} alt="keyword" className="img-fluid" /><p>
                            <div className="credit">Photography by
                             <a href={photo.photographer_url}>{" "}{photo.photographer}
                             </a>
                             </div>
                             </p>
                             </div>
                    );
                    })}
                </div>
            </div>
                    );
                } else {
                    return null;
                }
            }