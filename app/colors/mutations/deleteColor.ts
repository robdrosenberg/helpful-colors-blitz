import { Ctx } from "blitz"
import db, { Prisma } from "db"

type DeleteColorInput = Pick<Prisma.ColorDeleteArgs, "where">

export default async function deleteColor({ where }: DeleteColorInput, ctx: Ctx) {
  ctx.session.authorize()

  const color = await db.color.delete({ where })

  return color
}
