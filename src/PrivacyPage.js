import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 3rem;
  margin-top: 1rem;
`;

const Description = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1rem;
`;

export default function PrivacyPage(){
  return(
    <Container>
      <Header>Privacy Policy</Header>
      <Header>Personal data</Header>
      <Description>
        Flowify had never collected and will never collect any personal data, browsing history etc.
      </Description>

      <Description>
        In future Flowify may collect browser version, platform name, display settings and user's filter settings (except website list or any other data which can help identify user). This information is needed for decision on implementing new features, removing unused features or suggesting default settings for new users. It will happen only with your permission.
      </Description>

      <Header>
      Third party services
      </Header>

      <Description>
        Flowify uses Chrome (Chromium) or WebExtensions Storage Sync API for storing user's settings and browser's Web Storage API (localStorage) for storing user's Developer Tools fixes.
      </Description>
    </Container>
    

    
  );
}