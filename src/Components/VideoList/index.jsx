import React from "react";
import './VideoList.css';
import axios from 'axios';
import { VideoCard } from "../VideoCard";

function VideoList({
    ApiVideos,
    SetApiVideo
}) {
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(null); 

    // Recuperar los favoritos almacenados en localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteVideos')) || [];

    // Función para alternar favoritos
    const toggleFav = (video) => {
        const updatedVideos = ApiVideos.map(v =>
            v.id.videoId === video.id.videoId
                ? { ...v, isFavorite: !v.isFavorite }
                : v
        );
        SetApiVideo(updatedVideos);

        // Obtener los videos marcados como favoritos
        const favoriteVideos = updatedVideos.filter(v => v.isFavorite);

        // Guardar los videos favoritos actualizados en localStorage
        localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos));
    };

    React.useEffect(() => {
        const fetchVideos = async () => {
            const options = {
                method: 'GET',
                url: 'https://youtube-v31.p.rapidapi.com/search',
                params: {
                    channelId: 'UCi8e0iOVk1fEOogdfu4YgfA',
                    part: 'snippet,id',
                    order: 'date',
                    maxResults: '12'
                },
                headers: {
                    'x-rapidapi-key': '3fe29af790msh4d366a072ab2b82p19f2ffjsn191f4e9c6c7f',
                    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
                }
            };

            try {
                const response = await axios.request(options);
                const videosAddFavProp = response.data.items.map(video => ({
                    ...video,
                    // Verificar si el video ya está en favoritos en localStorage y establecer isFavorite a true o false
                    isFavorite: storedFavorites.some(fav => fav.id.videoId === video.id.videoId)
                }));
                SetApiVideo(videosAddFavProp); // Actualizar los videos con la propiedad isFavorite
                setLoading(false);
            } catch (error) {
                setError('You have an error: ' + error.message);
                setLoading(false);
            }
        };

        fetchVideos();
    }, [SetApiVideo]);

    if (loading) return <p>LOADING...</p>;
    if (error) return <p>Error fetching videos: {error.message}</p>;

    return (
        <div className="VideoList">
            {ApiVideos.map(video => (
                <VideoCard
                    key={video.id.videoId}
                    video={video} 
                    isFavorite={video.isFavorite} // Pasamos la propiedad isFavorite para reflejar los cambios en la UI
                    onToggle={() => toggleFav(video)}  // Pasamos el objeto video completo
                />
            ))}
        </div>
    );
}

export { VideoList };
