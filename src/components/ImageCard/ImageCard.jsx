import css from './ImageCard.module.css'
import { FcLike } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { LuDownload } from "react-icons/lu";


export const ImageCard = ({
  onOpen,
  imageCard,
  imageCard: {
    likes,
    description,
    urls: { small },
    user: { last_name },
    links: { download },
  },
}) => {
  const handleDownloadClick = () => {
    window.open(download, "_blank");
  };

  return (
    <div>
      <img
        src={small}
        alt={description}
        onClick={() => onOpen(imageCard)}
        className={css.image}
      />
        <ul className={css.galleryStatistic}>
          <li className={css.li}>
            <p className={css.statistic}> <FcLike /><span>{likes}</span></p>
          </li>
          <li>
            <p className={css.statistic}> <FcBusinessman /><span>{last_name}</span></p>
          </li>
          <button onClick={handleDownloadClick} className={css.button}>Download <LuDownload/></button>
        </ul>
    </div>
  );
};

export default ImageCard;