import React from 'react'
import './Descriptionbox.css'

export const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is a digital platform that enables businesses to sell products and services online, 
               providing customers with a seamless shopping experience. It includes features like product catalogs, secure
            payment gateways, user-friendly navigation, personalized recommendations, and order tracking. With responsive
             design and mobile compatibility, e-commerce websites ensure accessibility across devices. Advanced functionalities
              like AI-driven search, chatbots, and data analytics enhance customer engagement and sales. Whether for small businesses
               or large enterprises, a well-optimized e-commerce site streamlines operations, improves efficiency, and expands market 
               reach, making it an essential tool in today's digital economy.
            </p>
            <p>
            E-commerce websites also support multiple payment methods, including credit cards, digital wallets, and UPI, ensuring convenience for customers. Integration with logistics services enables smooth order fulfillment, enhancing the overall shopping experience.
            </p>
        </div>
    </div>
  )
}
