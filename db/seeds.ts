import db from "./index"

import { literal } from "zod"
import tinycolor from "tinycolor2"
import { hashPassword } from "app/auth/auth-utils"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  // Create a an increasing hue, sat or lumin color 16 times and add the color hex value and group to the DB
  let colors: string[] = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "gray"]
  let hue = 0
  let sat = 100
  let lumin = 50
  let counter = 0
  let colorName = ""
  for (let i = 0; i < colors.length; i++) {
    colorName = colors[i]
    counter = 0
    switch (colorName) {
      case "red":
        hue = 0
        sat = 100
        lumin = 50
        while (counter < 16) {
          console.log(counter, hue)
          if (hue > 15 && hue < 340) {
            hue = 340
          }
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          hue = hue + 2
          counter++
        }
        break
      case "orange":
        hue = 20
        sat = 100
        lumin = 50
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          hue = hue + 1
          counter++
        }
        break
      case "yellow":
        hue = 46
        sat = 100
        lumin = 50
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          hue = hue + 1
          counter++
        }
        break
      case "green":
        hue = 80
        sat = 100
        lumin = 50
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          hue = hue + 3
          counter++
        }
        break
      case "blue":
        hue = 190
        sat = 100
        lumin = 50
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          hue = hue + 3
          counter++
        }
        break
      case "purple":
        hue = 270
        sat = 100
        lumin = 50
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          hue = hue + 1
          counter++
        }
        break
      case "brown":
        hue = 35
        sat = 40
        lumin = 30
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          sat = sat + 2
          counter++
        }
        break
      case "gray":
        hue = 0
        sat = 0
        lumin = 30
        while (counter < 16) {
          await db.color.create({
            data: {
              colorValue: tinycolor({ h: hue, s: sat, l: lumin }).toHexString(),
              colorGroup: colorName,
            },
          })
          lumin = lumin + 1
          counter++
        }
    }
  }
}

export default seed
