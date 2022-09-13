import { Divider, FooterContainer, Link, TextField } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <Divider />
      <TextField>
        <p>© 2022 What If - Todos os direitos reservados</p>
        <p>
          <span>Made with ♡ by </span>
          <Link
            rel="noreferrer noopener"
            href="https://github.com/ryanolivrdev">
            Ryan Oliveira
          </Link>
          <span> and </span>
          <Link
            rel="noreferrer noopener"
            href="https://github.com/FabioNeves00">
            Fabio Neves
          </Link>
        </p>
      </TextField>
    </FooterContainer>
  )
}
