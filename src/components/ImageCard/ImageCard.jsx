import css from './ImageCard.module.css'
import { FcLike } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { LuDownload } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";


export const ImageCard = ({
  onOpen,
  imageCard,
  imageCard: {
    likes,
    description,
    urls: { small },
    user: { last_name, instagram_username },
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
      <div >
        <ul className={css.galleryStatistic}>
          <li>
            <p className={css.statistic}> <FcLike /><span>{likes}</span></p>
          </li>
          <li>
            <p className={css.statistic}> <FcBusinessman /><span>{last_name}</span></p>
          </li>
          <li>
            <p className={css.statistic}> <CiInstagram /><span className={css.span}>{instagram_username}</span></p>
          </li>
          <button onClick={handleDownloadClick} className={css.button}><LuDownload/></button>
        </ul>
        
        {/* <div >
          <p>
            Likes: <span>{likes}</span>
          </p>
          <p>
            Author: <span>{last_name}</span>
          </p>    
        </div> */}
        {/* <button onClick={handleDownloadClick}>Download</button> */}
      </div>
    </div>
  );
};

export default ImageCard;