import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Button } from './globalStyles';
import WalletLogo from '../images/walletLogo.svg';
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <StyledWelcome>
      <Wrapper>
        <WelcomeContent>
          <Title>Bienvenido a WalletApp</Title>
          <Paragragh>Pagar y transferir nunca habia sido tan facil.</Paragragh>
          <Picture src={WalletLogo} />
          <Button onClick={() => navigate('/login')}>Comenzar</Button>
        </WelcomeContent>
      </Wrapper>
    </StyledWelcome>
  );
};

const StyledWelcome = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;
const WelcomeContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Title = styled.h1`
  font: ${({ theme }) => theme.font.headline3};
  color: ${({ theme }) => theme.color.primary};
`;
const Paragragh = styled.p`
  font: ${({ theme }) => theme.font.body1Regular};
  padding-top: 1rem;
`;
const Picture = styled.img`
  width: 100%;
  margin: 5rem 0;
`;

export default Welcome;
