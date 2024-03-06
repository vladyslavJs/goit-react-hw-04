import ImageCard from "../ImageCard/ImageCard";
import css from './ImegaGallery.module.css'

export const ImageGallery = ({ gallery, onOpen }) => {
  return (
    <ul className={css.containerGallery}>
      {gallery.map((item) => (
        <li key={item.id} className={css.galleryItems}>
          <ImageCard imageCard={item} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

