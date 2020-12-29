import React from "react"
import { Link } from "blitz"
import styled from "@emotion/styled"

interface BGProps {
  bgColor: any
}

const ColorGrid = ({ colors }) => {
  return (
    <ColorsContainer>
      {colors.map((color) => (
        <Link key={color.id} href={`/colors/${color.id}`}>
          <Color bgColor={color.colorValue}>
            <a>{color.colorValue}</a>
          </Color>
        </Link>
      ))}
    </ColorsContainer>
  )
}

const ColorsContainer = styled.div`
  margin: 8rem auto;
  display: grid;
  grid-template-columns: repeat(4, 22rem);
  grid-gap: 4rem 5.3rem;
  justify-content: center;
`

const Color = styled.div<BGProps>`
  width: 22rem;
  height: 26.1rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
  cursor: pointer;
  transition: box-shadow 300ms ease-out;
  :hover {
    box-shadow: 7px 7px 25px rgba(0, 0, 0, 0.25);
  }
  a {
    font-size: 2.4rem;
    padding: 1.4rem 2.3rem;
    vertical-align: middle;
    background-color: #fdfdfd;
    margin: 0;
    border-radius: 0 0 5px 5px;
  }
`

export default ColorGrid
