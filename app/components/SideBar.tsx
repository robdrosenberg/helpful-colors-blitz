import { Suspense } from "react"
import styled from "@emotion/styled"
import Button from "./Button"
import { Link, useQuery } from "blitz"
import getColorsInfo from "../colors/queries/getColorsInfo"

const SideMenu = ({}) => {
  const [{ colorGroups, count }] = useQuery(getColorsInfo, {})
  const min = 1
  const max = count
  const randomID = Math.floor(Math.random() * (max - min) + min)
  return (
    <div>
      <Link href={`/colors/${randomID}`}>
        <RandomButton>Random Color</RandomButton>
      </Link>
      <Colors>
        {colorGroups &&
          colorGroups.map((group) => {
            return (
              <li>
                <Link href={`/colors?colorGroup=${group.colorGroup}`}>
                  <a>{group.colorGroup}</a>
                </Link>
              </li>
            )
          })}
      </Colors>
    </div>
  )
}

const SideBar = () => {
  return (
    <SideContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <SideMenu />
      </Suspense>
    </SideContainer>
  )
}

const SideContainer = styled.div`
  background-color: #d6d8d8;
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #adadad;
  padding: 1rem;
  text-align: center;
  @media (min-width: 1400px) {
    padding: 8rem 3rem;
    text-align: left;
  }
`

const RandomButton = styled(Button)`
  margin: 0;
  @media (min-width: 1400px) {
    margin: 0 0 3.7rem 0;
  }
`

const Colors = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.8rem;
  color: #363c3c;
  margin: 1rem auto;
  li:not(:last-child) {
    margin: 0 3rem 0 0;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1400px) {
    display: block;
    font-size: 2.8rem;
    margin: 0;
    li:not(:last-child) {
      /* margin-bottom: 1.8rem;
      margin-right: 0; */
      margin: 0 0 1.8rem 0;
    }
  }
  /* ADD HOVER STATE */
`

export default SideBar
