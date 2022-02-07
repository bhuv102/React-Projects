import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Title = styled.h1`
margin:20px;

`;
const FliterContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const Fliter = styled.div`
margin:20px;
${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})};
`;

const FliterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({margin:"0px"})};
`;

const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})};
`;
const Option=styled.option``;

const ProductList = () => {
    return (
<Container>
<Navbar/>
<Anouncement/>
<Title>DRESS</Title>

<FliterContainer>

<Fliter>
<FliterText>Fliter Products:</FliterText>
<Select>

<Option disabled selected>
 COLOR
 </Option>
<Option>White</Option>
<Option>Red</Option>
<Option>Black</Option>
<Option>Blue</Option>
<Option>Yellow</Option>
<Option>Green</Option>
<Option>Crimson</Option>
<Option>Coral</Option>
</Select>

<Select>
<Option disabled selected>
 SIZE
 </Option>
 <Option>XS</Option>
<Option>S</Option>
<Option>M</Option>
<Option>L</Option>
<Option>XL</Option>
<Option>XXXL</Option>
</Select>
</Fliter>

<Fliter>
<FliterText>Sort Products:</FliterText>
<Select>
<Option selected>NEWEST</Option>
<Option>PRICE(asc)</Option>
<Option>PRICE(dec)</Option>
</Select>
</Fliter>

</FliterContainer>

<Products/>
<Newsletter/>
<Footer/>

</Container>
 );
};

export default ProductList;
