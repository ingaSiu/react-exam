import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import Button from '../../components/Button';
import FormikInput from '../../components/Formik/FormikInput';
import { MainGreen } from '../../const/styles';
import { User } from '../../types/user';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { useLogin } from '../../hooks/login';

const validationSchema: Yup.ObjectSchema<User> = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues: User = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const { mutateAsync: login } = useLogin();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (values: User) => {
    login(values)
      .then((response) => {
        setUser(response.token);
        toast.success('Successfully logged in!');
      })
      .catch(() => {
        toast.error('Failed to login:');
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {() => (
        <StyledForm>
          <InputRow>
            <InputRowItem>
              <FormikInput type="email" name="email" placeholder="Email" />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <InputRowItem>
              <FormikInput type="password" name="password" placeholder="Password" />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <Button type="submit" title="Submit" />
          </InputRow>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;

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
