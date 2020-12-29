import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getColors from "app/colors/queries/getColors"

const ITEMS_PER_PAGE = 16

export const ColorsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ colors, hasMore }] = usePaginatedQuery(getColors, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })
  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Link href={`/colors/${color.id}`}>
              <a>{color.colorValue}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const ColorsPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/colors/new">
          <a>Create Color</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <ColorsList />
      </Suspense>
    </div>
  )
}

ColorsPage.getLayout = (page) => <Layout title={"Colors"}>{page}</Layout>

export default ColorsPage
