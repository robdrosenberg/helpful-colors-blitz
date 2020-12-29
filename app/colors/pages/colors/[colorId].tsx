import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getColor from "app/colors/queries/getColor"
import deleteColor from "app/colors/mutations/deleteColor"
import styled from "@emotion/styled"
import tinycolor from "tinycolor2"
import Button from "../../../components/Button"

interface Props {
  bgColor: any
}

export const Color = () => {
  const router = useRouter()
  const colorId = useParam("colorId", "number")
  const [color] = useQuery(getColor, { where: { id: colorId } })
  const tintColors: string[] = []
  let percentage = 0
  for (let i = 0; i < 5; i++) {
    percentage = percentage + 6
    tintColors.push(tinycolor(color.colorValue).lighten(percentage).toString())
  }
  return (
    <div>
      <BigColorBox bgColor={color.colorValue}>
        <p>{color.colorValue}</p>
      </BigColorBox>
      <TintContainer>
        {tintColors &&
          tintColors.map((tint, index) => {
            return (
              <Tints key={index} bgColor={tint}>
                {" "}
                <p>{tint}</p>
              </Tints>
            )
          })}
      </TintContainer>
    </div>
  )
}

const DetailContainer = styled.div`
  margin: 10rem auto;
`

const BigColorBox = styled.div<Props>`
  width: 104rem;
  height: 69rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
  margin-bottom: 3rem;
  p {
    font-size: 4.8rem;
    padding: 3.9rem 4rem;
    vertical-align: middle;
    background-color: #fdfdfd;
    color: #363c3c;
    margin: 0;
    border-radius: 0 0 5px 5px;
  }
`

const TintContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Tints = styled.div<Props>`
  width: 17.5rem;
  height: 17.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
  p {
    font-size: 2.4rem;
    padding: 1.75rem 2.25rem;
    vertical-align: middle;
    background-color: #fdfdfd;
    color: #363c3c;
    margin: 0;
    border-radius: 0 0 5px 5px;
  }
`

const Clear = styled(Button)`
  margin: 4rem auto;
  display: block;
`

const ShowColorPage: BlitzPage = () => {
  return (
    <DetailContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Color />
      </Suspense>
      <Link href="/">
        <Clear>Clear</Clear>
      </Link>
    </DetailContainer>
  )
}

ShowColorPage.getLayout = (page) => <Layout title={"Color"}>{page}</Layout>

export default ShowColorPage
