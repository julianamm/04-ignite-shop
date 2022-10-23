import { GetServerSideProps } from "next"
import Image from "next/future/image"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"

interface SuccessProps {
  costumerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  const { imageUrl, name } = product
  return (
    <>
      <SuccessContainer>
        <h1>Thank you for shopping with us!</h1>

        <ImageContainer>
          <Image src={imageUrl} width={120} height={110} alt="" />
        </ImageContainer>

        <p>
          Woohooo <strong>{costumerName}</strong>, your <strong>{name} shirt</strong> is own its way.
        </p>

        <Link href="/">
          Back to Shop
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const costumerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}