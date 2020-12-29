import { NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetColorCountInput = Pick<Prisma.FindManyColorArgs, "where">

export default async function getColorCount({ where }: GetColorCountInput) {
  const colorCount = await db.color.count()

  if (!colorCount) throw new NotFoundError()

  return colorCount
}
