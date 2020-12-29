import React from "react"
import styled from "@emotion/styled"
import { useRouter } from "blitz"

interface ClassProps {
  className: any
}

const Pagination = ({ colorGroupFilter, page, pageCount }) => {
  const router = useRouter()
  const goToPage = (pageNum) =>
    colorGroupFilter
      ? router.push({ query: { colorGroup: colorGroupFilter, page: pageNum } })
      : router.push({ query: { page: pageNum } })
  return (
    <PaginationContainer>
      {[...Array(pageCount)].map((e, pageNum) => {
        return (
          <PageSelect
            className={page === pageNum ? "active-page" : ""}
            onClick={() => goToPage(pageNum)}
          >
            {pageNum + 1}
          </PageSelect>
        )
      })}
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  text-align: center;
  a:not(:last-child) {
    margin-right: 2.8rem;
  }
  margin: 0 0 6rem 0;
`

const PageSelect = styled.a<ClassProps>`
  cursor: pointer;
  font-size: 2.4rem;
`

export default Pagination
