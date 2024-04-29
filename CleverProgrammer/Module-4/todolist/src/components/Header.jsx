import React from "react";
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <HeaderItem>
        <i className="fas fa-bars" />
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-border-all" />
        <span>Dashboard</span>
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>

      <Placeholder></Placeholder>

      <HeaderItem>          
        <Profile>
        <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aelHWPkXE0JGd0u8nrsmxYbBtcdOrBW2t5fOEUG8zpZNFnLbKl5IHvcuvcz7f_ilR1w&usqp=CAU" 
              alt="" 
            />
        </Profile>
      </HeaderItem>      
    </Wrapper>
  )
};

export default Header;


const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #20212d;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`
const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`

const Placeholder = styled.div`
  -webkit-flex: 1 1 0%;
  flex-grow : 1;
  flex-shrink : 1; 
  flex-basis : 0%;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
  }  
`
