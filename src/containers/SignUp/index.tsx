import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SIGNUP = gql`
  mutation createUser($id: String!, $pw: String!, $name: String!) {
    createUser(variables: { id: $id, pw: $pw, name: $name }) {
      userNo
      id
      pw
      name
    }
  }
`;

const SignUp: React.FC = (): any => {
  const [accountInfo, setAccountInfo] = useState({
    id: '',
    pw: '',
    name: '',
  });

  const [signup, { loading, data }] = useMutation(SIGNUP);

  if (loading) return 'Loading...';

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const authCheck = (e: any) => {
    const { id, pw, name } = accountInfo;
    e.preventDefault();
    signup({ variables: { id, pw, name } });

    if (data) alert('success!');
    else alert('fail!');
  };

  const { id, pw, name } = accountInfo;
  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <input name="id" value={id} type="text" placeholder="ID" onChange={onChange} />
        <input name="pw" value={pw} type="password" placeholder="PW" onChange={onChange} />
        <input name="name" value={name} type="text" placeholder="name" onChange={onChange} />
        <button onClick={(e) => authCheck(e)}>회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
