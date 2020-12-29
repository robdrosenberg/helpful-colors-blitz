import { Ctx } from "blitz"
import db, { Prisma } from "db"

type CreateColorInput = Pick<Prisma.ColorCreateArgs, "data">
export default async function createColor({ data }: CreateColorInput, ctx: Ctx) {
  ctx.session.authorize()

  const color = await db.color.create({ data })

  return color
}
