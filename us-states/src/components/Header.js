import React from 'react'

function Header({name, age}) {
  console.log(name)
   return( <header>
      <p>Welcome {name}</p>
      <p>Your age is {age}</p>
    </header>
   )
}

export default Header