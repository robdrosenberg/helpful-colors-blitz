import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createColor from "app/colors/mutations/createColor"
import ColorForm from "app/colors/components/ColorForm"

const NewColorPage: BlitzPage = () => {
  const router = useRouter()
  const [createColorMutation] = useMutation(createColor)

  return (
    <div>
      <h1>Create New Color</h1>

      <ColorForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            const color = await createColorMutation({ data: { name: "MyName" } })
            alert("Success!" + JSON.stringify(color))
            router.push(`/colors/${color.id}`)
          } catch (error) {
            alert("Error creating color " + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/colors">
          <a>Colors</a>
        </Link>
      </p>
    </div>
  )
}

NewColorPage.getLayout = (page) => <Layout title={"Create New Color"}>{page}</Layout>

export default NewColorPage
