import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import image_1 from '../../Assets/image_1.jpg'
import image_2 from '../../Assets/image_2.jpg'
import image_3 from '../../Assets/image_3.jpg'
import image_4 from '../../Assets/image_4.jpg'
import image_5 from '../../Assets/image_5.jpg'
import image_6 from '../../Assets/image_6.jpg'
import image_7 from '../../Assets/image_7.jpg'
import image_8 from '../../Assets/image_8.jpg'
import image_9 from '../../Assets/image_9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
   {
      // 1:14:40 -- 57:00
      id: 1,
      imgSrc: image_1,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities',
   },

   {
      id: 2,
      imgSrc: image_2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'Huayna Picchu is a moutain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular',
   },

   {
      id: 3,
      imgSrc: image_3,
      destTitle: 'Great Barrier Reef',
      location: 'Australia',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: `One of the most remarkable Australian natural gifts is the Great Barrier Reef.
      The hallmark of this place is 'lavish' and 'beauty'.
      Always interesting to be in this place. `,
   },

   {
      id: 4,
      imgSrc: image_4,
      destTitle: 'Cappadocia',
      location: 'Turkey',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      description: `According to the World Tourism Ranking, 45 Milion people visit turkey each year,
      and from that about 2 Milion come to visit Cappadocia. This place is known for its luxurious stays
      and adventurous activities.`,
   },

   {
      id: 5,
      imgSrc: image_5,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
      fees: '$1100',
      description: `A city in central Mexico, Guanajuato is known for its history of silver mining and
      colonial architecture. the houses in the city are very attractively painted with the most bright
      colors availiable. Always welcome.`,
   },

   {
      id: 6,
      imgSrc: image_6,
      destTitle: 'Cinque Terre',
      location: 'Italy',
      grade: 'CULTURAL RELAX',
      fees: '$840',
      description: `The vibrant hues of the houses are its benchmark and explain the beauty of ths place.
      Also, if you are a foodie and love seafood, you will be exhilarated with the choiceyou are about to
      get here. Happy exploring great food!`,
   },

   {
      id: 7,
      imgSrc: image_7,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'CULTURAL RELAX',
      fees: '$790',
      description: `Angkor wat represents the entire range of Khmer art from the 9th to the 15th century.
      This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays
      and adventurous activities.`,
   },

   {
      id: 8,
      imgSrc: image_8,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'CULTURAL RELAX',
      fees: '$900',
      description: `An immense mausoleum of white marble, build-in Agra by Mughal emperor Shah Jahan in memory
      of his wife Mumtaz, the mounment is breathtakingly beautiful. This place is known for its luxurious 
      and adventurous activities.`,
   },

   {
      id: 9,
      imgSrc: image_9,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'CULTURAL RELAX',
      fees: '$500',
      description: `Bali is an Indonesia Island and one of the best holiday destiantions in the Indonesian 
      archipelago. Bali is known for its volcanic mountains, history, art and culture, food temples and 
      beautiful sandy beaches.`,
   },
]

const Main = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <section className="main container section">
         <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
               Most visited destinations
            </h3>
         </div>

         <div className="secContent grid">
            {
               Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                  return (
                     <div data-aos="fade-up" key={id} className="singleDestination">
                        <div className="imageDiv">
                           <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                           <h4 className="destTitle">{destTitle}</h4>
                           <span className="continent flex">
                              <HiOutlineLocationMarker className="icon" />
                              <span className="name">{location}</span>
                           </span>

                           <div className="fees flex">
                              <div className="grade">
                                 <span>{grade}<small>+1</small></span>
                              </div>
                              <div className="price">
                                 <h5>{fees}</h5>
                              </div>
                           </div>

                           <div className="desc">
                              <p>{description}</p>
                           </div>

                           <button className="btn flex">
                              DETAILS <HiOutlineClipboardCheck className="icon" />
                           </button>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Main