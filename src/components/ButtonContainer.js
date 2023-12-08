import React, { useState } from 'react'
import ButtonList from './ButtonList'

const ButtonContainer = () => {
  const [buttons, setButtons] = useState([
    "All", "Music", "Gaming", "Cricket", "Sports", "Web Development", "Vlogs", "Podcast", "Shows",
    "All", "Music", "Gaming", "Cricket", "Sports", "Web Development", "Vlogs", "Podcast", "Shows"
  ])
  return (

    <div className="button-parent w-full overflow-x-scroll button-scroll">
      <div className="button-container w-max py-5   ">


        {
          buttons.map((name, id) => {
            return (
              <ButtonList key={id} name={name} />
            )
          })
        }


      </div>
    </div>
  )
}

export default ButtonContainer