import { NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetColorInput = Pick<Prisma.FindFirstColorArgs, "where">

export default async function getColor({ where }: GetColorInput) {
  // ctx.session.authorize()

  const color = await db.color.findFirst({ where })

  if (!color) throw new NotFoundError()

  return color
}
