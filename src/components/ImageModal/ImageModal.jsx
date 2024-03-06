import Modal from 'react-modal';
import css from './ImageModal.module.css'
import { CiInstagram } from "react-icons/ci";

export const ImageModal = ({
    isOpen,
    onClose,
    content: { description, urls, user },
}) => {

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
                        <p>Location: {user.location}</p>
                        <p>Instagram: < CiInstagram className={css.icon} /> {user.instagram_username}</p>
                    </div>
                </>
            )};
      </Modal>
  );
}

export default ImageModal;
