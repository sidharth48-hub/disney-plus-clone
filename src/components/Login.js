import React from 'react';
import styled from 'styled-components';

function Login() {
  return( 
        <Container>
            <CTA>
                <CTAlogoone src="/images/cta-logo-one.svg"/>
                <Signup>GET ALL THERE</Signup>
                <Description>
                       Disney+ is the dedicated streaming home for movies and shows from Disney, Pixar, Marvel, Star Wars, National Geographic, and more. ... Disney+ is available as part of a bundle offer in the U.S. 
                       that gives subscribers access to Disney+, Hulu, and ESPN+.
                </Description>
                <CTAlogotwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
  )    
}

export default Login

const Container = styled.div`
    
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
   overflow-x: hidden;
   display: flex;
   align-items: top;
   justify-content: center;

    &:before
   {
     background-position: top;
     background-size: cover;
     background-repeat: no-repeat;
     background-image : url("/images/login-background.jpg");
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     opacity: 0.7;
     z-index: -1; 
   }

`
const CTA = styled.div`
   max-width: 650px;
   padding: 80px 40px;
   width: 90%;
   display: flex;
   flex-direction: column;
   margin-top: 100px;
   align-items: center;
`

const CTAlogoone = styled.img`

`

const Signup =styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color:#f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover
    {
        background: #0483ee; 
    }
`
const Description = styled.p`
   font-size: 11px;
   letter-spacing: 1.5px;
   text-align: center;
   line-height: 1.5;

`
const CTAlogotwo = styled.img`
    width: 90%;
    
`