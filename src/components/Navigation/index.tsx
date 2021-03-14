import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Navigation = () => {
  const history = useHistory();
  const {pathname} = useLocation();
  const [tabValue, setTabValue] = useState<number>(0);

  // 
  useEffect(() => {
    if(pathname === '/home') {
      setTabValue(0)
    } else if (pathname === '/home/question' || pathname.split('/')[3]) {
      setTabValue(1)
    } else if (pathname === '/home/result') {
      setTabValue(2);
    }
  }, [pathname])

  const handleChange = (e: any, newValue: number) => {
    setTabValue(newValue);
    if(newValue === 0){
      history.push('/home')
    } else if (newValue === 1) {
      history.push('/home/question');
    } else if (newValue === 2) {
      history.push('/home/result')
    }
  }

  return (
    <Nav>
      <Paper>
        <Logo>
          <Link to="/home">BBT</Link>
        </Logo>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          style={{paddingLeft:'100px'}}
        >
          <Tab label="기출문제" />
          <Tab label="문제풀이" />
          <Tab label="결과보기" />
        </Tabs>
      </Paper>
    </Nav>
  )
}

export default Navigation;

const Nav = styled.div`
  position:relative;
`;

const Logo = styled.h1`
  display:flex;
  justify-items:center;
  align-items:center;
  position: absolute;
  left:24px;
  font-size:24px;
  height:100%;
`;
