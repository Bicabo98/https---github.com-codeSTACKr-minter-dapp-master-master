import React from'react'
import GIF from '../assets/Home Video.mp4'
import styled from 'styled-components'

const VivdeoContainer = styled.div`
width:100%;
video{
    width:100%;
    height:auto;
}
`
const CoverVideo = () => {
    return(
       <VivdeoContainer>
           <video src={GIF} type="video/mp4" autoPlay muted loop/>
        </VivdeoContainer>
    )
}

export default CoverVideo