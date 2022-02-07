import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
${mobile({padding:"10px"})};
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
`;

const TopButton =styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==="filled"&& "none"};
background-color:${props=>
props.type==="filled"? "black":"transparent"};

color:${props=>props.type==="filled"&& "white"};
`;
const TopTexts= styled.div`
${mobile({display:"none"})};


`;
const Toptext = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})};
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})};
`;
const ProductDetail = styled.div`
 flex:2;
 display:flex;
`;
const Img = styled.img`
 width:200px;
`;
const Details = styled.div`
 padding:20px;
 display:flex;
 flex-direction:column;
 justify-content:space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
` ;

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;

const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})};
`;

const ProductPrice = styled.div`
 font-size:30px;
 font-weight:200;
 ${mobile({marginBottom:"20px"})};
`;
const Hr =styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;

const SummaryTitle = styled.h1`
 font-weight:200;
`;
const SummaryItem = styled.div`
 margin:30px 0px;
 display:flex;
 justify-content:space-between;
 font-weight:${props=>props.type==="total" && "500"};
 font-size:${props=>props.type==="total" && "24px"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const Button = styled.button`
 width:100%;
 padding:10px;
 background-color:black;
 color:White;
 font-weight:600;
`;



const Cart = () => {
    return (
<Container>
<Navbar/>
<Anouncement/>
<Wrapper>
<Title>YOUR BAG!</Title>
<Top>
<TopButton>CONTINUE SHOPPING!</TopButton>
<TopTexts>

<Toptext>Shopping Bag(2)</Toptext>
<Toptext>Your Wishlist(0)</Toptext>
</TopTexts>

<TopButton type="filled"> CHECKOUT NOW!</TopButton>
</Top>
<Bottom>
<Info>
<Product>
<ProductDetail>
<Img src="https://media.istockphoto.com/photos/adidas-superstar-picture-id458068097?k=20&m=458068097&s=612x612&w=0&h=57J_lM_EMo1ddJZsWlbWgJMy5Nr9XlLMqRA4MpbRMX4="/>
<Details>
<ProductName><b>PRODUCT:</b>ADDIDAS SHOES!!</ProductName>
<ProductId><b>ID:</b>7589427483</ProductId>
<ProductColor color="black"/>
<ProductSize><b>SIZE:</b>37.5</ProductSize>
</Details>

</ProductDetail>
<PriceDetail>
<ProductAmountContainer>
<Add/>
<ProductAmount>2</ProductAmount>
<Remove/>
</ProductAmountContainer>
<ProductPrice>RS1300</ProductPrice>
</PriceDetail>
</Product>

<Hr/>
<Product>
<ProductDetail>
<Img src="https://ik.imagekit.io/xqgyjenzqsmnk/image/tr:h-600,w-565,cm-pad_resize/catalog/Alma-mater/Custom%20products/new/t-shirts%20(1).png"/>
<Details>
<ProductName><b>PRODUCT:</b> COTTON T-SHIRTS</ProductName>
<ProductId><b>ID:</b>7589427483</ProductId>
<ProductColor color="gray"/>
<ProductSize><b>SIZE:</b>MEDIUM</ProductSize>
</Details>
</ProductDetail>
<PriceDetail>
<ProductAmountContainer>
<Add/>
<ProductAmount>1</ProductAmount> 
<Remove/>
</ProductAmountContainer>
<ProductPrice>RS 1250</ProductPrice>
</PriceDetail>
</Product>
</Info>

<Summary>
<SummaryTitle>ORDER SUMMARY</SummaryTitle>
<SummaryItem>
 <SummaryText>SUB-TOTAL</SummaryText>
<SummaryPrice>RS 100</SummaryPrice>
</SummaryItem>

<SummaryItem>
 <SummaryText>ESTIMATED SHIPPING</SummaryText>
<SummaryPrice>RS 3.90</SummaryPrice>
</SummaryItem>

<SummaryItem>
 <SummaryText>SHIPPING-DISCOUNT</SummaryText>
<SummaryPrice>RS -5.90</SummaryPrice>
</SummaryItem>

<SummaryItem type="total">
 <SummaryText>TOTAL</SummaryText>
<SummaryPrice>RS 150</SummaryPrice>
</SummaryItem>
<Button>CHECKOUT</Button>

</Summary>
</Bottom>
</Wrapper>
<Footer/>
</Container>
);
};

export default Cart;
