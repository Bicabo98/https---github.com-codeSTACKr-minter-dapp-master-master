import React from'react'
import styled from'styled-components'
import Banner from './Banner'

const Section = styled.section`
min-height: 100vh;
width:100vw;
height:100vh;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display:flex;


flex-direction:column;
`


const Footer = () => {
    return(
        <Section>
            <Banner />
        </Section>
    )
}

export default Footer