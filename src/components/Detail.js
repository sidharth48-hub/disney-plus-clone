import React from 'react';
import styled from 'styled-components';

function Detail() {
  return( 
        <Container>
            <Background>
                <img src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            </Background>
            <ImgTitle>
                <img src="https://images.unsplash.com/photo-1643208589884-1aa3a8a67b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"/>
            </ImgTitle>
            <Controls>
                <Playbutton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </Playbutton>
                <Trailerbutton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </Trailerbutton>
                <Addbutton>
                    <span>+</span>
                </Addbutton>
                <Groupwatchbutton>
                     <img src="/images/group-icon.png"/>
                </Groupwatchbutton>
            </Controls>
            <Subtitle>
                2018 7m Family,Fantasy,Kids,Animation
            </Subtitle>
            <Description>
                 In previous versions of React Router you had to order your routes a certain way to get the right one to render when multiple routes matched an ambiguous URL. V6 is a lot smarter and will pick the most specific match so you don't have to worry about that anymore
            </Description>
        </Container>
  )    
}


export default Detail

const Container = styled.div`
   min-height: calc(100vh-70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;

`
const Background = styled.div`
   position: fixed;
   top:0;
   left:0;
   bottom:0;
   right:0;
   z-index: -1;
   opacity: 0.8;
   
   img
   {
       width: 100%;
       height:100%;
       object-fit: cover;
   }

`

const ImgTitle  = styled.div`
     height: 30vh;
     width: 35vw;
     min-height: 170px;
     min-width: 200px;

     img
     {
         width:100%;
         height: 100%;
         object-fit: contain;
     }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const Playbutton = styled.button`
   border-radius: 4px;
   font-size: 15px;
   display: flex;
   align-items: center;
   height: 56px;
   background: rgb(249,249,249);
   border: none;
   padding: 0px 24px;
   margin-right: 22px;
   letter-spacing: 1.8px;
   cursor: pointer;

   &:hover
   {
       background: rgb(198,198,198);
   }

`

const Trailerbutton = styled(Playbutton)`

    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    colr: rgb(249,249,249);
    text-transform: uppercase;
`
const Addbutton = styled.button`
     width: 44px;
     height: 44px;     
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 50%;
     border: 2px solid white;
     background-color: rgba(0,0,0,0.6);
     cursor: pointer;
     margin-right: 16px;

     span{
         font-size: 30px;
         color: white;
     }
`
const Groupwatchbutton = styled(Addbutton)`
    background: rgb(0,0,0);
`

const Subtitle = styled.div`
   color: rgb(249,249,249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
`

const Description = styled.div`
   line-height: 1.4;
   font-size: 20px;
   margin-top: 16px;
   color: rgb(249,249,249);
`