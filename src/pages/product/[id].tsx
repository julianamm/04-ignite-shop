import Image from "next/future/image"
import Head from "next/head"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {

  const isCreatingCheckoutSession = () => {}
  const handleBuyButton = () => {}

  return (
    <>
      <Head>
        <title>{`product.name`} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src="product.imageUrl" width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{`product.name`}</h1>
          <span>{`product.price`}</span>

          <p>{`product.description`}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
            Buy now
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
  
}
