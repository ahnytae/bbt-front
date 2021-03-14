import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../api/Login/Login';

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
