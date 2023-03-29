import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import Button from '../../components/Button';
import { Content } from '../../types/add';
import FormikInput from '../../components/Formik/FormikInput';
import FormikTextArea from '../../components/Formik/FormikTextArea';
import { MainGreen } from '../../const/styles';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
import { useCreatePost } from '../../hooks/add';
import { useNavigate } from 'react-router-dom';

const initialValues: Content = {
  title: '',
  description: '',
};

type FormikFormProps = {
  resetForm: () => void;
};
const validationSchema: Yup.ObjectSchema<Content> = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const AddContentForm = () => {
  const { mutateAsync: createPost } = useCreatePost();
  const navigate = useNavigate();

  const handleSubmit = (values: Content, { resetForm }: FormikFormProps) => {
    createPost(values)
      .then(() => {
        toast.success('Post created successfully');
        resetForm();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error('Session ended');
        }
        console.error('Failed to create post');
        toast.error('Failed to create post');
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {() => (
        <StyledFormContainer>
          <StyledForm>
            <FormikInput name="title" placeholder="Write title" />

            <InputRow>
              <FormikTextArea type="text" name="description" placeholder="Content description" />
            </InputRow>
            <InputRow>
              <Button type="submit" title="Submit" />
            </InputRow>
          </StyledForm>
        </StyledFormContainer>
      )}
    </Formik>
  );
};

export default AddContentForm;

const StyledFormContainer = styled.div`
  max-height: 500px;
  width: 400px;
  overflow-y: auto;
  border: 1px solid ${MainGreen};
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
