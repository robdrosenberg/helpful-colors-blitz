import styled from "@emotion/styled"
import getColors from "../colors/queries/getColors"
import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"

const ITEMS_PER_PAGE = 12

export const ColorsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ colors, hasMore, pageCount }] = usePaginatedQuery(getColors, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPage = (pageNum) => router.push({ query: { page: pageNum } })

  return (
    <div>
      <ColorGrid>
        {colors.map((color) => (
          <Link key={color.id} href={`/colors/${color.id}`}>
            <Color bgColor={color.colorValue}>
              <a>{color.colorValue}</a>
            </Color>
          </Link>
        ))}
      </ColorGrid>
      <PaginationContainer>
        {[...Array(pageCount)].map((e, pageNum) => {
          return (
            <PageSelect
              className={page === pageNum ? "active-page" : null}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum + 1}
            </PageSelect>
          )
        })}
      </PaginationContainer>
    </div>
  )
}

const ColorGrid = styled.div`
  margin: 8rem auto;
  display: grid;
  grid-template-columns: repeat(4, 22rem);
  grid-gap: 4rem 5.3rem;
  justify-content: center;
`

const PaginationContainer = styled.div`
  text-align: center;
  a:not(:last-child) {
    margin-right: 2.8rem;
  }
  margin: 0 0 6rem 0;
`

const PageSelect = styled.a`
  cursor: pointer;
  font-size: 2.4rem;
`

const Color = styled.div`
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

const Home: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ColorsList />
      </Suspense>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
