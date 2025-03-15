import React from 'react'
import { Hero } from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewLetter/NewsLetter'
import { Footer } from '../components/Footer/Footer'

export const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}
