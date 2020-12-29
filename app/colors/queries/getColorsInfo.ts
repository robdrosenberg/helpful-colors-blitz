// import { Ctx } from "blitz"
import db, { Prisma } from "db"

type GetColorsInfoInput = Pick<Prisma.FindManyColorArgs, "where" | "orderBy" | "skip" | "take">

export default async function getColorsInfo({
  where,
  orderBy,
  skip = 0,
  take,
}: GetColorsInfoInput) {
  const colorGroups = await db.color.findMany({
    where,
    orderBy,
    skip,
    take,
    select: {
      colorGroup: true,
    },
    distinct: ["colorGroup"],
  })

  const count = await db.color.count()

  return {
    colorGroups,
    count,
  }
}
