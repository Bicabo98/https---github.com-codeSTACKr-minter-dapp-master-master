import React, { useLayoutEffect } from'react'
import styled from 'styled-components'
import Accordion from '../Accrodion';
import { useRef } from'react'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.carouselColor};
width:fit-content;
`;

const Container = styled.div`
width:75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content:center;
`

const Box = styled.div`
width: 45%;

`

const Faq = () => {

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;

        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end:'bottom top',
            pin:true,
            pinSpacing:false,
            scrub:true,
            
        })

        return () => {
            ScrollTrigger.kill();
        };

    },[])
    
    return(
        <Section ref={ref}>
            <Title>
                faq
            </Title>
            <Container>
                <Box>
                    <Accordion title="What is this?">
                        Just a demo test.
                    </Accordion>
                    <Accordion title="What is this?">
                        Just a demo test.
                    </Accordion>
                    <Accordion title="What is this?">
                        Just a demo test.
                    </Accordion>
                </Box>
                <Box>
                <Accordion title="What is this?">
                        Just a demo test.
                    </Accordion>
                    <Accordion title="What is this?">
                        Just a demo test.
                    </Accordion>
                    <Accordion title="What is this?">
                        Just a demo test.
                    </Accordion>

                </Box>
            </Container>
        </Section>
    )
}

export default Faq