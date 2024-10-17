import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './VideoCard.css';

function VideoCard({
    video,
    isFavorite,
    onToggle
}) {
    return (
        <div className="VideoCard">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="VideoImg" />
            </a>
            
            <div className="VideoInfo">
                <h2>{video.snippet.title}</h2>
            </div>   
            
            <button 
                className="LikeButton"
                onClick={() => onToggle(video)}
            >
                {isFavorite ? (
                    <FaHeart className="Corazoncito" />
                ) : (
                    <FaRegHeart className="Corazoncito--active" />
                )}
            </button>
        </div>
    );
}

export { VideoCard };
