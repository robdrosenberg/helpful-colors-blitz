import { ReactNode } from "react"
import { Head } from "blitz"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import styled from "@emotion/styled"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "helpful-colors-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <MainGrid>
        <SideBar />
        <Container>{children}</Container>
      </MainGrid>
    </>
  )
}

const Container = styled.div`
  margin: 0 auto;
`

const MainGrid = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 160px 1fr;
  @media (min-width: 1400px){
    grid-template-columns: 320px 1fr;
    grid-template-rows: 1fr;
  } */
  display: flex;
  height: 100%;
  flex-direction: column;
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`

export default Layout
