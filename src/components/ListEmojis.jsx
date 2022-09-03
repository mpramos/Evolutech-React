import React from 'react'

const ListEmojis = () => {
    const listEmojis=['😀','😎','😁']
    const parrafosEmojis=[]

    listEmojis.forEach(element=>{
        parrafosEmojis.push(<h1 key={element}>{element}</h1>)
    }) // <p>😀</p>, <p>😎'</p>,<p>'😁'</p>
  return (
    <>
        {parrafosEmojis}
    </>
  )
}

export default ListEmojis