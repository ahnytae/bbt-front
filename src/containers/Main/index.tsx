import React from 'react';

interface Prop {
  loginState: boolean;
}

const MainContainer: React.FC<Prop> = ({ loginState }: Prop) => {
  console.log('main login state: ', loginState);

  return <div>Hello world!</div>;
};

export default MainContainer;
