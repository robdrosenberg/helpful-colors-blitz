// import { Ctx } from "blitz"
import db, { Prisma } from "db"

type GetColorsInput = Pick<Prisma.FindManyColorArgs, "where" | "orderBy" | "skip" | "take">

export default async function getColors({ where, orderBy, skip = 0, take }: GetColorsInput) {
  const colors = await db.color.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.color.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const pageCount = Math.ceil(count / take!)
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    colors,
    nextPage,
    hasMore,
    count,
    pageCount,
  }
}
