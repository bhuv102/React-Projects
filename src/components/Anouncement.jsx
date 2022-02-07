import styled from "styled-components";

const Conatiner = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
  
`

const Anouncement = () => {
    return (
        <Conatiner>
       Super Deal! Free Shipping On Orders Above Rs 999
        </Conatiner>
    )
}

export default Anouncement;
