import { FaArrowCircleDown } from "react-icons/fa";
import css from './ButtonLoadMore.module.css'

export const ButtonLoadMore = ({ onClick }) => {
    return (
        <button className={css.button} onClick={onClick}><FaArrowCircleDown /></button>
    )
}


export default ButtonLoadMore;
