'use client'
import React, { useState ,useEffect} from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

function restartGame() {
  router.push("../components/game_Easy")
}


  return (
    <>
      <div className="flex justify-between m-10">
        <Link href="./level" className="text-5xl text-blue-500">
          ? Guess the Number
        </Link>

        <div className="space-x-4">
          <Link href='./game_Easy_10'>1-10</Link>
          <Link href='./game_Easy_100'>1-100</Link>
          <Link href='./game_Easy_1000'>1-1000</Link>
        </div>
      </div>

      

       
        <div>
        <div className='flex flex-col justify-center items-center' id='section1'>
          <h2>Guess a Number between 1 and 10</h2>
          <h2>You have 10 chances</h2>
        </div>

         <div className='flex justify-center m-10'>
      <p>
        <span>1</span>
        &lt;=
        <input
          className="border border-black px-4 py-2 ml-2" 
          type="number"
        />
        &lt;=
        <span>10</span>
      </p>

      </div>

    <p className='flex justify-center'>You Lost</p>

    <br></br>
    <br></br>
      



      <button onClick={restartGame} className='flex justify-center m-auto border border-blue'>Restart Game</button>
  

        </div>
      )


       </>
  )

}
export default Page