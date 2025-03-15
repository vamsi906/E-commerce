import React, { useContext } from 'react'
import { ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrums/Breadcrum';
import { Productdisplay } from '../components/Productdisplay/Productdisplay';
import { Descriptionbox } from '../components/DescriptionBox/Descriptionbox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox />
      <RelatedProducts />
    </div>
  )
}
