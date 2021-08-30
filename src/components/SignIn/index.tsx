import { useAuth } from '../../hooks/useAuth';
import { useHistory } from "react-router-dom";

import logoImg from '../../assets/logo.jpg';

import googleIconImage from '../../assets/google-icon.svg';

import { Container, MainContent, Separator, ButtonGoogle, IconLogo } from './styles';

export function SignIn() {
  const { user, signInWithGoogle } = useAuth();
  const  history = useHistory()

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/dashboard");
  }

  return (
    <Container>
      <aside>
        <strong>Weather Finder</strong>
        <p>Find out temperature, conditions and more...</p>
      </aside>

      <main>
        <MainContent>
          <IconLogo>
            <img src={logoImg} alt="Imagens de climas" />
          </IconLogo>

          <Separator />

          <ButtonGoogle onClick={handleSignIn}>
            <img src={googleIconImage} alt="Logo do Google" />
            Login with Google
          </ButtonGoogle>
          
          <Separator />

        </MainContent>
      </main>
    </Container>   
  );
}