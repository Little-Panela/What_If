import { useEffect, useState } from "react";
import { Lightning } from "../../../assets/lightning";
import { ButtonLogin, Divider, Hamburger, Logo, Menu, NavbarContainer } from "./styles";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function changeNavBarState() {
    setIsOpen((curr) => !curr);
  }

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
      <ButtonLogin isOpen={isOpen}>
        <Lightning />
        <span>FAÇA LOGIN</span>
      </ButtonLogin>
    </NavbarContainer>
  );
}
