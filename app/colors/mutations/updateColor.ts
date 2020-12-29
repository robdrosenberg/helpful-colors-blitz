import { Ctx } from "blitz"
import db, { Prisma } from "db"

type UpdateColorInput = Pick<Prisma.ColorUpdateArgs, "where" | "data">

export default async function updateColor({ where, data }: UpdateColorInput, ctx: Ctx) {
  ctx.session.authorize()

  const color = await db.color.update({ where, data })

  return color
}
