import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)),

url("https://media.glamour.com/photos/5696637feaefd309768dbb12/master/pass/fashion-2015-08-denim-river-2-main.jpg")center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`; 
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color:white;
${mobile({width:"75%"})};
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;
const Title = styled.h1`
font-size:24px;
font-weight:400;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
 font-sze:20px;
 margin:20px 0px;
`;
const Button = styled.button`
  width:40%;
  border:none;
  padding:15px 20px;
  background-color:teal;
  color:white;
  cursor:pointer;
`;

const Register = () => {
    return (
<Container>
<Wrapper>
<Title style ={{textAlign:"center"}}>CREATE AN ACCOUNT!</Title>
<Form>
<Input placeholder="Name"/>
<Input placeholder="Last name"/>
<Input placeholder="Username"/>
<Input placeholder="Email"/>
<Input placeholder="Password"/>
<Input placeholder="Confirm Password"/>
<Agreement>BY CREATING AN ACOOUNT,I CONTEST TO THE PROCESSING OF  MY PERSONAL
DATA IN ACCORDANCE WITH THE <b>PRIVACY POLICY</b>
</Agreement>
<Button>CREATE</Button>
</Form>
</Wrapper>
</Container>
);
};
export default Register;
