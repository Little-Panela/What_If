import { useEffect, useState } from "react";
import { Lightning } from "../../../assets/lightning";
import { ButtonLogin, Divider, Hamburger, Logo, Menu, NavbarContainer } from "./styles";
import { useGoogleLogin } from '@react-oauth/google';



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function changeNavBarState() {
    setIsOpen((curr) => !curr);
  }


const login = useGoogleLogin({
  onSuccess: codeResponse => console.log(codeResponse),
  flow: 'auth-code',
});

  return (
    <NavbarContainer>
      <Logo>
        <h1>What <span>If</span></h1>
        <Divider />
        <span>STRAWPOLL</span>
      </Logo>

      <Menu isOpen={isOpen} onClick={changeNavBarState}>
        <li className="active" >
          <a href="#" >Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Criar pequisa</a>
        </li>
      </Menu>
      <Hamburger isOpen={isOpen} onClick={changeNavBarState} />
      <ButtonLogin isOpen={isOpen} onClick={login}>
        <Lightning />
        <span>FAÇA LOGIN COM O GOOGLE</span>
      </ButtonLogin>
    </NavbarContainer>
  );
}
