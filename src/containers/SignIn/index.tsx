import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import styled from 'styled-components';

export const LOGIN = gql`
  query($id: String!) {
    user(id: $id) {
      id
    }
  }
`;

const SignIn: React.FC = (): any => {
  const [id, setId] = useState<string>('');

  // const {loading, data} = useQuery(LOGIN);
  const [auth, { loading, data }] = useLazyQuery(LOGIN);

  if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  const authCheck = (e: any) => {
    e.preventDefault();
    auth({ variables: { id } });
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
        {data && <h1>SUCC</h1>}
      </div>
    </LoginPage>
  );
};

export default SignIn;

const LoginPage = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  top:0;
  left:0;
  width: 100vw;
  height:100vh;
  .login-wrapper {
    width:768px;
    > h2 {
      text-align:center;
    }
  }
`;

const LoginForm = styled.form`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  > input {
    display:block;
    width: 300px;
  }
  > button {
    display:inline-block;
    width:300px;
  }
`;
