import { FaArrowCircleDown } from "react-icons/fa";
import css from './LoadMoreBtn.module.css'

export const LoadMoreBtn = ({ onClick }) => {
    return (
        <button className={css.button} onClick={onClick}><FaArrowCircleDown /></button>
    )
}


export default LoadMoreBtn;
