import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { SIGNIN } from '../../api/Login/Login';

const SignIn: React.FC = (): any => {
  const [id, setId] = useState<string>('');
  const [auth, { loading, data }] = useLazyQuery(SIGNIN);

  const history = useHistory();
  if (loading) return 'Loading...';

  const authCheck = (e: any) => {
    e.preventDefault();
    auth({ variables: { id } });

    if (data) {
      history.push('/home');
    }
  };

  return (
    <LoginPage>
      <div className="login-wrapper">
        <h2>Login</h2>
        <LoginForm onSubmit={authCheck}>
          <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
          <input type="password" placeholder="PW" />
          <button type="submit">Login</button>
        </LoginForm>
      </div>
    </LoginPage>
  );
};

export default SignIn;

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .login-wrapper {
    width: 768px;
    > h2 {
      text-align: center;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > input {
    display: block;
    width: 300px;
  }
  > button {
    display: inline-block;
    width: 300px;
  }
`;
