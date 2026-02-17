import React from 'react'
import Link from "next/link";

const Level = () => {
  return (
    <>
    <h1>Please select the difficulty level:</h1>
    <ol>
    <li>  <Link href="/components/game_Easy/game_Easy_10">        1. Easy (10 chances)   </Link>   </li>
    <li>  <Link href="/components/game_Medium/game_Medium_10">    2. Medium (5 chances)  </Link>   </li>
    <li>  <Link href="/components/game_Hard/game_Hard_10">        3. Hard (3 chances)    </Link>   </li>
    </ol>

    </>
    
  )
}

export default Level
