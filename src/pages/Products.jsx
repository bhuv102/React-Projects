import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {mobile} from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({flexDirection:"column",padding:"10px"})};

`;
const ImgContainer = styled.div`
flex:1;
`;
const Img = styled.img`
width:100%;
height:90vh;
obejct-fit:cover;
${mobile({height:"40px"})};
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})};
`;
const Title = styled.h1`
font-weight:200;
 
`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;
const FliterContainer= styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%"})};
`;
const Fliter = styled.div`
display:flex;
align-items:center;
`;
const FliterTitle= styled.span`
font-size:20px;
font-weight:200;
`;
const FliterColor= styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;
const FliterSize= styled.select`
margin-left:10px;
padding:8px;
`;
const FliterSizeOption= styled.option``;

const AddContainer= styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({width:"100%"})};

`;
const AmountContainer= styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount= styled.span`
 width:30px;
 height:30px;
 border-radius:10px;
 border:1px solid teal;
 display:flex;
 align-items:center;
 justify-content:center;
 margin:0px 5px;
`;
const Button= styled.button`
  padding:15px;
  border:1px soild coral;
  background-color:white;
  cursor:pointer;
  font-weight:200;
   &:hover{
       background-color:lightblue;
   }
 `;

const Products = () => {
    return (
  <Container>
  <Navbar/>
 <Anouncement/>
<Wrapper>
 <ImgContainer>
 <Img src="https://378022-1184341-raikfcquaxqncofqfm.stackpathdns.com/media/catalog/product/cache/0a727dd2e0a45cdfc82e01aae0d95d43/i/m/img_2780.jpg"/>
 </ImgContainer>

 <InfoContainer>
 <Title>DENIM JEANS</Title>
<Desc>WE WORK TOGETHER TO DESIGN ,CREATE AND PRODUCE WORK THAT WE ARE PROUD OF FOR! 
FOLKS THAT  WE BELIVE IN!!
</Desc>
<Price>RS 1400</Price>

<FliterContainer>
<Fliter>
<FliterTitle>COLOR</FliterTitle>
<FliterColor color="black"/>
<FliterColor color="darkblue"/>
<FliterColor color="gray"/>
</Fliter>

 <Fliter>
 <FliterTitle>SIZE</FliterTitle>
<FliterSize>
<FliterSizeOption>XS</FliterSizeOption>
<FliterSizeOption>S</FliterSizeOption>
<FliterSizeOption>M</FliterSizeOption>
<FliterSizeOption>L</FliterSizeOption>
<FliterSizeOption>XL</FliterSizeOption>
<FliterSizeOption>XXXL</FliterSizeOption>
</FliterSize>
</Fliter>
</FliterContainer>

<AddContainer>
<AmountContainer>
<Remove/>
<Amount>1</Amount>
<Add/>
</AmountContainer>

<Button>ADD TO CART!</Button>

</AddContainer>
</InfoContainer>
 </Wrapper>
 <Newsletter/>
 <Footer/>
 </Container>
);
};
export default Products;
