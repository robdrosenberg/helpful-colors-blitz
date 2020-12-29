import { Link, Image } from "blitz"
import styled from "@emotion/styled"

const NavBar = ({}) => {
  return (
    <NavContainer>
      <Nav>
        <Link href="/">
          <a>
            <Image src="/logo-symbol.png" width="53" height="53" />
          </a>
        </Link>
        <SearchInput placeholder="Search" />
      </Nav>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  background-color: #363c3c;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`

const Nav = styled.nav`
  margin: 0 2rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 500px) {
    height: 10rem;
    margin: 0 3rem;
  }
`

const SearchInput = styled.input`
  width: 15rem;
  height: 3rem;
  color: #363c3c;
  padding: 1.7rem 2.1rem;
  border-radius: 1rem;
  border: 1px solid #363c3c;
  font-size: 1.8rem;
  font-family: "Source Serif Pro", serif;
  @media (min-width: 500px) {
    width: 32rem;
    height: 6rem;
    padding: 1.7rem 2.1rem;
    font-size: 2.4rem;
  }
`

export default NavBar
