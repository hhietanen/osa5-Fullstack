import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className="content">
      {blog.title} {blog.author}
    </div>
    <div className="likes">
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
)

//5.12 blogilistan testit, osa 1
//Tee testi, joka varmistaa, että komponentti renderöi 
//blogin titlen, authorin ja likejen määrän.
//Lisää komponenttiin tarvittaessa testausta
//helpottavia CSS-luokkia.
//
//5.13* blogilistan testit, osa 2
//Tee testi, joka varmistaa, että jos komponentin 
//like-nappia painetaan kahdesti, komponentin propsina 
//saamaa tapahtumankäsittelijäfunktiota kutsutaan kaksi kertaa.
//
//5.14* blogilistan testit, osa 3
//Tee oman sovelluksesi komponentille Blog testit,
//jotka varmistavat, että oletusarvoisesti blogista
//on näkyvissä ainoastaan nimi ja kirjoittaja, ja että
//klikkaamalla niitä saadaan näkyviin myös muut 
//osat blogin tiedoista.
//HUOM: tee testissä klikkaus ennen kuin haet tarkastettavan 
//elementin muuttujaan, eli tee komennot tässä järjestyksessä

export default SimpleBlog