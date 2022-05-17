import React from'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'

const Section = styled.section`
width:100vw;
background-color:${props => props.theme.body};
`

const NavBar = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;

width:85%;
height:${props => props.theme.navHeight};
margin:0 auto;
`

const Menu = styled.ul`
display: flex;
justify-content:space-between;
align-items:center;
list_style:none;
`

const Menuitem = styled.li`
margin:0 1rem;
color:${props => props.theme.text};
cursor: pointer;

&::after{
    content:' ';
    display: block;
    width: 0%;
    height: 2px;
    background:${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`

const Navigation = () => {
    return(
        <Section>
            <NavBar>
                <Logo />
                <Menu>
                    <Menuitem>Home</Menuitem>
                    <Menuitem>About</Menuitem>
                    <Menuitem>Roadmap</Menuitem>
                    <Menuitem>Showcase</Menuitem>
                    <Menuitem>Team</Menuitem>
                    <Menuitem>Faq</Menuitem>
                </Menu>
                <Button text="Connect Wallet" link="https://google.com"/>
            </NavBar>
        </Section>
    )
}

export default Navigation