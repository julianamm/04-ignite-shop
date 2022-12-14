import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { useKeenSlider } from 'keen-slider/react'
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"

import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(({ id, name, imageUrl, price }) => (
          <Link href={`/product/${id}`} key={id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={imageUrl} width={520} height={480} alt='' />

              <footer>
                <strong>{name}</strong>
                <span>{price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
