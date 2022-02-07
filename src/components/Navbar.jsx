import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";

const Conatiner = styled.div`
height:60px;
${mobile({backgroundColor:"red"})}
`;

const Wrapper = styled.div`
 padding:10px 20px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 ${mobile({padding:"10px 0px"})};
 `;
const Left= styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
margin-bottom:50px;
${mobile({display:"none"})};

`;
const SearchConatiner= styled.div`
border:0.4px solid gray;
display:flex;
align-items:center;
margin-left:20px;
padding:5px;
margin-bottom:50px;
`;
const Input = styled.input`
border:none; 
${mobile({width:"50px"})};
`;
const Center= styled.div`
flex:1;
text-align:center;
 `;
const Logo = styled.h1`
font-weight:bold; 
${mobile({fontSize:"24px"})};
`;
const Right= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end; 
margin-bottom:40px;
${mobile({flex:2,justifyContent:"center"})};
`;

const Menu = styled.div`
font-size:20px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})};
`;

const Navbar = () => {
    return (
<Conatiner>
<Wrapper>
<Left>
<Language>ENGLISH</Language>
<SearchConatiner>
<Input placeholder="search"/>
<Search style ={{color:"crimson",fontSize:16}}/>
</SearchConatiner>
</Left>
<Center>
<Logo></Logo>
</Center>
 <Right>
<Menu>REGISTER</Menu>
<Menu> LOGIN</Menu>
<Menu>
<Badge badgeContent={4} color="primary">
<ShoppingCartOutlined/>
</Badge>
</Menu> 
</Right>
</Wrapper>
 </Conatiner>
);
};
export default Navbar;

