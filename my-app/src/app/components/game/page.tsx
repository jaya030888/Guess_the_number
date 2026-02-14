'use client'
import React, { useState } from 'react'
import Link from "next/link";

const Page = () => {

  const [Actual_Number_10, setActual_Number_10] = useState<number>(
  () => Math.floor(Math.random() * 10) + 1
);

  const [enteredNumber, setEnteredNumber] = useState<number|undefined>(undefined);

  const [show1, setShow1] = useState<boolean>(true)
  const [show2, setShow2] = useState<boolean>(false)
  const [show3, setShow3] = useState<boolean>(false)

  const [display_win,setdisplay_win] = useState<boolean>(false)
  const [display_try,setdisplay_try] = useState<boolean>(false)
  


  function hello1() {
    setShow1(true)
    setShow2(false)
    setShow3(false)
  }

  function hello2() {
    setShow1(false)
    setShow2(true)
    setShow3(false)
  }

  function hello3() {
    setShow1(false)
    setShow2(false)
    setShow3(true)
  }

  const [history, setHistory] = useState<string[]>([])
  

function confirm_3() {

    if (enteredNumber === undefined) {
    return;
  }

  let resultMessage:string = "";

  if (enteredNumber === Actual_Number_10) {
    setdisplay_win(true);
    setdisplay_try(false);
    resultMessage = "🎉 Correct!";
  }

   else {
    setdisplay_try(true);

    if(enteredNumber<Actual_Number_10){
      resultMessage = "Too Low!";
    }
    else{
      resultMessage = "Too High!";
    }
  }

    setHistory((prev) => [
    ...prev,
    `Try ${prev.length + 1}: ${enteredNumber} - ${resultMessage}`
  ]);
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.value === "") {
    setEnteredNumber(undefined);
  } else {
    setEnteredNumber(e.target.valueAsNumber);
  }
}









  return (
    <>
      <div className="flex justify-between m-10">
        <Link href="./level" className="text-5xl text-blue-500">
          ? Guess the Number
        </Link>

        <div className="space-x-4">
          <button onClick={hello1}>1-10</button>
          <button onClick={hello2}>1-100</button>
          <button onClick={hello3}>1-1000</button>
        </div>
      </div>

      

      {show1 && (
        <div>
        <div className='flex flex-col justify-center items-center' id='section1'>
          <h2>Guess a Number between 1 and 10</h2>
          <h2>You have 10 chances</h2>
        </div>

         <div className='flex justify-center m-10'>
      <p>
        <span>1</span>
        &lt;=
        <input value={enteredNumber}
          className="border border-black px-4 py-2 ml-2" 
          type="number"
          onChange={handleChange}
        />
        &lt;=
        <span>10</span>
      </p>

      </div>

      { display_win && (

      <div className="flex flex-col justify-center items-center m-10">
        <p>🎉</p>
      <p>You Got it</p>
      <p>{enteredNumber}</p>
      </div>)
}

      {(display_try) && (

      <div className="flex flex-col justify-center items-center m-10">
        <p>Try Again! 👍</p>
      </div>)
}
     
      

      <button onClick={confirm_3} className='flex justify-center m-auto border border-blue' type='submit'>Confirm</button>

      <h3 className='flex justify-center m-10'>Guess History</h3>


      <div className="mt-4 space-y-2">
  {history.map((item, index) => (
    <div
      key={index}
      className="p-3 bg-gray-100 rounded-md shadow-sm"
    >
      {item}
    </div>
  ))}
</div>
      



      <button className='flex justify-center m-auto border border-blue'>Restart Game</button>
  

        </div>
      )}


       </>
  )

}
export default Page