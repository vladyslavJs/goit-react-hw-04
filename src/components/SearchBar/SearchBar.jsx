import { Formik, Form, Field } from "formik";
import toast from 'react-hot-toast';

import { CiSearch } from "react-icons/ci";
import css from './SearchBar.module.css'
import { BiLogoMailchimp } from "react-icons/bi";

export const SearchBar = ({ onSubmit }) => {
  
    return (
      <header className={css.header}> 
        <Formik initialValues={{ searchQuery: '' }}
            onSubmit={(values, actions) => {
              onSubmit(values.searchQuery);
              if (values.searchQuery.trim() === '') {
                toast.error('Text input is required for image search.', {
                  style: {
                    background: '#fff',
                    color: '#808080',
                    padding: '6px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                  },
                });
              }
              actions.resetForm();
        }}>
          <Form className={css.form}><BiLogoMailchimp className={css.iconHeader} />
            <Field
            type="text"
            name="searchQuery" 
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.field}
            
            ></Field>
            <button className={css.button} type="submit"><CiSearch className={css.icon} /></button>
        </Form>
        </Formik>
    </header>
  );
}

export default SearchBar;