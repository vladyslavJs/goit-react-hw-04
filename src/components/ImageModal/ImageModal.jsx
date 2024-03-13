import Modal from 'react-modal';
import css from './ImageModal.module.css'
import { CiInstagram } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { LuDownload } from "react-icons/lu";

export const ImageModal = ({
    isOpen,
    onClose,
    content: { description, urls, user, likes, download, last_name },
}) => {
    // ------------
    const handleDownloadClick = () => {
    window.open(download, "_blank");
  };

    Modal.setAppElement("#root");


    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
        >
            {isOpen && (
                <>
                    <img className={css.image} src={urls.regular} alt={description} />
                    <div className={css.title}>
                        <p>Author: {user.last_name}</p>
                        <p>Location: {user.location}</p>
                        <p>Instagram: < CiInstagram className={css.icon} /> {user.instagram_username}</p>
                        <p>Like {likes} < FcLike /></p>
                        <button onClick={handleDownloadClick} className={css.button}>Download <LuDownload/></button>
                        
                    </div>
                </>
            )};
      </Modal>
  );
}

export default ImageModal;
