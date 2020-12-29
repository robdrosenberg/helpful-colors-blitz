import styled from "@emotion/styled"
import getColors from "../colors/queries/getColors"
import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import ColorGrid from "../colors/components/ColorGrid"
import Pagination from "../components/Pagination"

const ITEMS_PER_PAGE = 12

export const ColorsList = () => {
  const router = useRouter()
  const colorGroupFilter = router.query.colorGroup ? String(router.query.colorGroup) : undefined
  const page = Number(router.query.page) || 0
  const [{ colors, pageCount }] = usePaginatedQuery(getColors, {
    where: { colorGroup: colorGroupFilter },
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  return (
    <div>
      <ColorGrid colors={colors} />
      <Pagination colorGroupFilter={colorGroupFilter} page={page} pageCount={pageCount} />
    </div>
  )
}

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
