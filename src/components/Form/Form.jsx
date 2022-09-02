import { Formik, ErrorMessage } from 'formik';
import { FcSearch } from 'react-icons/fc';
import {
  FormSearch,
  ButtonForm,
  InputSearch,
} from '../../components/Form/Form.styled';

let initialValues = {
  searchData: '',
};

export const Form = ({ onSearch }) => {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSearch}>
        <FormSearch>
          <ButtonForm type="submit">
            <FcSearch style={{ width: '25px', height: '25px' }} />
          </ButtonForm>
          <InputSearch
            name="searchData"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchData" />
        </FormSearch>
      </Formik>
    </>
  );
};
