import { Formik, Form, Field } from "formik";

import { CiSearch } from "react-icons/ci";
import css from './SearchBar.module.css'

export default function SearchBar({ onSubmit }) {
    return (
      <header>
        <Formik initialValues={{ searchQuery: '' }}
            onSubmit={(values, actions) => {
                onSubmit(values.searchQuery);
                actions.resetForm();
        }}>
        <Form className={css.form}>
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
