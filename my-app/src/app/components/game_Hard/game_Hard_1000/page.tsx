'use client'
import React, { useState ,useEffect} from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {

  const [Actual_Number, setActual_Number] = useState<number>(
  () => Math.floor(Math.random() * 1000) + 1
);


  const [enteredNumber, setEnteredNumber] = useState<number|undefined>(undefined);

  const [chances,setChances] = useState<number>(3)


  const [display_win,setdisplay_win] = useState<boolean>(false)
  const [display_try,setdisplay_try] = useState<boolean>(false)
  const [lost,setLost] = useState<boolean>(false)
  


  const [history, setHistory] = useState<string[]>([])

  
  const router = useRouter();

useEffect(() => {
  if (chances === 0) {
    setLost(true)
    router.push("../lost");
  }
}, [chances])


function restartGame() {
  setActual_Number(Math.floor(Math.random() * 1000) + 1)
  setEnteredNumber(undefined)
  setChances(5)
  setdisplay_win(false)
  setdisplay_try(false)
  setLost(false)
  setHistory([])
}

  

function confirm_3() {

  setChances(chances-1)

    if (enteredNumber === undefined) {
    return;
  }

  let resultMessage:string = "";

  if (enteredNumber === Actual_Number) {
    setdisplay_win(true);
    setdisplay_try(false);
    resultMessage = "🎉 Correct!";
  }

   else {
    setdisplay_try(true);

    if(enteredNumber<Actual_Number){
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
        <Link href="../level" className="text-5xl text-blue-500">
          ? Guess the Number
        </Link>

        <div className="space-x-4">
          <Link href='./game_Hard_10'>1-10</Link>
          <Link href='./game_Hard_100'>1-100</Link>
          <Link href='./game_Hard_1000'>1-1000</Link>
        </div>
      </div>

      

       
        <div>
        <div className='flex flex-col justify-center items-center' id='section1'>
          <h2>Guess a Number between 1 and 1000</h2>
          <h2>You have 3 chances</h2>
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
        <span>1000</span>
      </p>

      </div>

    { display_win && !lost && (

      <div className="flex flex-col justify-center items-center m-10">
        <p>🎉</p>
      <p>You Got it</p>
      <p>{enteredNumber}</p>
      </div>)
}

      {(display_try) &&  (!lost) && (

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
      



      <button onClick={restartGame} className='flex justify-center m-auto border border-blue'>Restart Game</button>
  

        </div>
      


       </>
  )

}
export default Page