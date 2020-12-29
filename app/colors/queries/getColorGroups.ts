// import { Ctx } from "blitz"
import db, { Prisma } from "db"

type GetColorGroupsInput = Pick<Prisma.FindManyColorArgs, "where" | "orderBy" | "skip" | "take">

export default async function getColors({ where, orderBy, skip = 0, take }: GetColorGroupsInput) {
  const colors = await db.color.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.color.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    colors,
    nextPage,
    hasMore,
    count,
  }
}
