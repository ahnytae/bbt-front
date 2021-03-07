import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

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
    <div>
      <h2>Login</h2>
      <form onSubmit={authCheck}>
        <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="PW" />
        <button type="submit">Login</button>
      </form>
      {data && <h1>SUCC</h1>}
    </div>
  );
};

export default SignIn;
