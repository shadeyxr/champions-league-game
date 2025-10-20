import { useState, useEffect } from "react"

type Props = {
    Winner:string;
}

export function DisplayWinner({Winner}:Props){
    const [ShowWinner, setShowWinner] = useState(false)

    useEffect(()=>{
      if (Winner){
        setShowWinner(true)
        setTimeout(()=>{
          setShowWinner(false)
        },3000)
      }
    },[Winner])



    if (ShowWinner){return(
      <div className='flex fixed h-10 left-180 right-180 mt-50 bg-[#0E3AFF] justify-center items-center z-[9999] text-white'>
        <p>{Winner} wins</p>
      </div>
    )}
    
  }