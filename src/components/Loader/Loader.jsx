import { DNA } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={css.loader}>
      <DNA
        visible={true}
        type="ThreeDots"
        color="#36D7B7"
        height={80}
        width={80}    
      />
    </div>
  );
};

export default Loader;