import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import Button from '../../components/Button';
import FormikInput from '../../components/Formik/FormikInput';
import { LOGIN_PATH } from '../../routes/const';
import { MainGreen } from '../../const/styles';
import { User } from '../../types/user';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/register';

const initialValues: User = {
  email: '',
  password: '',
};

const validationSchema: Yup.ObjectSchema<User> = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const RegisterForm = () => {
  const { mutateAsync: createUser } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = (values: User) => {
    toast('Registration successfull!');

    createUser(values)
      .then(() => {
        toast.success('Register successfully');
        navigate(LOGIN_PATH);
      })
      .catch(() => {
        console.error('Failed to register');
        toast.error('Failed to register');
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {() => (
        <StyledFormContainer>
          <StyledForm>
            <InputRow>
              <InputRowItem>
                <FormikInput type="email" name="email" placeholder="Your email address" />
              </InputRowItem>
            </InputRow>
            <InputRow>
              <InputRowItem>
                <FormikInput type="password" name="password" placeholder="Password" />
              </InputRowItem>
            </InputRow>
            <InputRow>
              <Button type="submit" title="Register" />
            </InputRow>
          </StyledForm>
        </StyledFormContainer>
      )}
    </Formik>
  );
};

export default RegisterForm;

const StyledFormContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
  border: 1px solid ${MainGreen};
  border-radius: 4px;
  width: 500px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const InputRowItem = styled.div`
  flex: 1;
`;
