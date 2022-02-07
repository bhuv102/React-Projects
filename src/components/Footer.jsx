import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})};

`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;

const Logo = styled.h1``;
const Des = styled.p`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display:flex;

`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`;
const Title = styled.h3`
margin-bottom:30px;

`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;


const ListItem= styled.li`
width:50%;
margin-bottom:10px;
`;

const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})};
`;

const ConatctItem = styled.div`
margin-bottom:20px;
display:flex;
align-item:center;
`;

const Payment = styled.img`
 width:100%;
`;
const Footer = () => {
    return (
 <Container>
<Left>
<Logo>BR</Logo>
<Des> I CAME, I SAW AND I CONQUERED!!
DONT GO THROUGH LIFE,GROW WITH LIFE!!
</Des>

<SocialContainer>
  <SocialIcon color="3B5999">
  <Facebook/>
   </SocialIcon>

   <SocialIcon color="E4405F">
  <Instagram/>
   </SocialIcon>

   <SocialIcon color="55ACEE">
  <Twitter/>
   </SocialIcon>

   <SocialIcon color="E60023">
  <Pinterest/>
   </SocialIcon>

</SocialContainer>
</Left>

<Center>
<Title>USEFULL LINKS</Title>
<List>
<ListItem>Home</ListItem>
<ListItem>Cart</ListItem>
<ListItem>Men`s Fashion</ListItem>
<ListItem>Women`s Fashion</ListItem>
<ListItem>Accessories</ListItem>
<ListItem>My Account</ListItem>
<ListItem>WishList</ListItem>
<ListItem>WishList</ListItem>
<ListItem>Terms And Conditions</ListItem>
</List>
</Center>
<Right>
 <Title>CONTACT</Title>
<ConatctItem> <Room style={{marginRight:"10px"}}/>
622 Dixie Path, South Tobinchester 98336
</ConatctItem>

<ConatctItem>
 <Phone style={{marginRight:"10px"}}/>
+1 9350-363840
</ConatctItem>

<ConatctItem>
<MailOutline style={{marginRight:"10px"}}/>
BR433@gmail.com
</ConatctItem>
<Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv2O82V5C_VFVE3EDWtiQTFtAcgTyk6RrEw&usqp=CAU"/>
</Right>
</Container>
)
}
export default Footer;
