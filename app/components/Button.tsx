import styled from "@emotion/styled"

const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #363c3c;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  font-size: 1.8rem;
  color: #363c3c;
  margin: 1rem;
  cursor: pointer;
  font-family: "Source Serif Pro", serif;
  transition: background-color 150ms ease-in;

  :hover {
    color: #ffffff;
    background-color: #363c3c;
  }
  @media (min-width: 1400px) {
    width: 26rem;
    height: 6rem;
    font-size: 2.4rem;
  }
`

export default Button
