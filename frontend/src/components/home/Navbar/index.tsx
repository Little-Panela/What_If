import { useState } from 'react'
import { useRouter } from 'next/router'
import { Link as ScroolTo } from 'react-scroll'

import {
  ButtonLogin,
  Divider,
  Hamburger,
  Logo,
  Menu,
  NavbarContainer,
} from './styles'
import { Lightning } from '../../../assets/lightning'

import { useGoogleLogin } from '@react-oauth/google'

export function Navbar() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  function changeNavBarState() {
    setIsOpen((curr) => !curr)
  }

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => console.log(codeResponse),

    onError: (codeResponse) => console.log(codeResponse),
  })
  return (
    <NavbarContainer>
      <Logo>
        <h1>
          What <span>If</span>
        </h1>
        <Divider />
        <span>STRAWPOLL</span>
      </Logo>

      <Menu isOpen={isOpen} onClick={changeNavBarState}>
        <ScroolTo
          activeClass="activeHome"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}>
          Início
          <span />
        </ScroolTo>

        <ScroolTo activeClass="activeAbout" to="about" spy={true} smooth={true}>
          Sobre
          <span />
        </ScroolTo>

        <a onClick={() => router.push('/about')}>
          Criar pequisa
          <span />
        </a>
        <li>
          <ButtonLogin className="mobile" isOpen={isOpen} onClick={googleLogin}>
            <Lightning />
            <span>FAÇA LOGIN COM O GOOGLE</span>
          </ButtonLogin>
        </li>
      </Menu>
      <Hamburger isOpen={isOpen} onClick={changeNavBarState} />
      <ButtonLogin className="desktop" isOpen={isOpen} onClick={googleLogin}>
        <Lightning />
        <span>FAÇA LOGIN COM O GOOGLE</span>
      </ButtonLogin>
    </NavbarContainer>
  )
}
