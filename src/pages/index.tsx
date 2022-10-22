import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home"

import shirt1 from '../assets/shirt_01.png' 
import shirt2 from '../assets/shirt_02.png' 
import shirt3 from '../assets/shirt_03.png' 
import shirt4 from '../assets/shirt_04.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$79.99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$79.99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$79.99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$79.99</span>
        </footer>
      </Product>
  </HomeContainer>
  )
}
