import css from './ErrorMessage.module.css'
import { RiSignalWifiErrorFill } from "react-icons/ri";

export const ErrorMessage = () => {
    return (
        <div className={css.error}>
            <p>Sorry, something wrond, plase restart page...<RiSignalWifiErrorFill /></p>
        </div>
    )
}

export default ErrorMessage;