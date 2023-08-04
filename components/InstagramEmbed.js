import { useEffect, useState } from 'react';
import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config();

const InstagramCarousel = ({ albumMedia }) => {
  return (
    <div>
      {albumMedia.map((item) => (
        <img
          key={item.id}
          src={item.media_url}
          alt="Instagram Media"
          style={{ width: '300px', height: '300px', objectFit: "cover" }}
        />
      ))}
    </div>
  );
};

const InstagramFeed = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,children{media_type,media_url,thumbnail_url}&access_token=${process.env.BASIC_DISPLAY_TOKEN}`
        );

        setPhotos(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
      }
    };

    fetchInstagramPhotos();
  }, []);

  return (
    <div>
      <h2>Instagram Feed</h2>
      {photos.map((photo) => (
        <div key={photo.id}>
        <h3>{photo.caption}</h3>
        {photo.media_type === 'CAROUSEL_ALBUM' ? (
          <InstagramCarousel albumMedia={photo.children.data} />
        ) : (
          <img
            src={photo.media_url}
            alt="Instagram Post"
            style={{ width: '300px', height: '300px', objectFit: "cover" }}
          />
        )}
      </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
