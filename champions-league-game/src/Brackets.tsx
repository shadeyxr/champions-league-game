import { useState, useEffect } from 'react'

export default function Brackets() {
  const teams = [
    "Liverpool",
    "Barcelona",
    "Arsenal",
    "Inter-Milan",
    "Atletico-Madrid",
    "Bayer-Leverkusen",
    "Lille",
    "Aston-Villa",
    "Borussia-Dortmund",
    "Bayern-Munich",
    "Benfica",
    "Club-Brugge",
    "Feyenoord",
    "Paris-Saint-Germain",
    "Real-Madrid",
    "PSV-Eindhoven"
  ];

  const [pairsLeft, setPairsLeft] = useState<[string, string][]>([]);
  const [pairsRight, setPairsRight] = useState<[string, string][]>([]);
  const [QFTeamsLeft, setQFTeamsLeft] = useState<[string, string][]>([['', ''], ['', '']]);
  const [QFTeamsRight, setQFTeamsRight] = useState<[string, string][]>([['', ''], ['', '']]);
  const [SFTeamsLeft, setSFTeamsLeft] = useState<[string, string][]>([['', '']]);
  const [SFTeamsRight, setSFTeamsRight] = useState<[string, string][]>([['', '']]);

  useEffect(() => {
    const shuffled = [...teams].sort(() => 0.5 - Math.random());
    const left: [string, string][] = [];
    const right: [string, string][] = [];
    for (let i = 0; i < 8; i += 2) {
      left.push([shuffled[i], shuffled[i + 1]])
    }
    for (let i = 8; i < 16; i += 2) {
      right.push([shuffled[i], shuffled[i + 1]])
    }

    setPairsLeft(left)
    setPairsRight(right)

  }, [])


  function SelectWinnerQF(side: string, index: number, team: string) {
    if (side === 'left') {
      if (index === 0) {
        setQFTeamsLeft(
          [
            [team, QFTeamsLeft[0][1]]
            , [QFTeamsLeft[1][0], QFTeamsLeft[1][1]]
          ])
      }
      else if (index === 1) {
        setQFTeamsLeft(
          [[QFTeamsLeft[0][0], team], [QFTeamsLeft[1][0], QFTeamsLeft[1][1]]])
      }
      else if (index === 2) {
        setQFTeamsLeft(
          [[QFTeamsLeft[0][0], QFTeamsLeft[0][1]], [team, QFTeamsLeft[1][1]]])
      }
      else if (index === 3) {
        setQFTeamsLeft(
          [[QFTeamsLeft[0][0], QFTeamsLeft[0][1]], [QFTeamsLeft[1][0], team]])
      }
    }
    else if (side === 'right') {
      if (index === 0) {
        setQFTeamsRight(
          [
            [team, QFTeamsRight[0][1]]
            , [QFTeamsRight[1][0], QFTeamsRight[1][1]]
          ])
      }
      else if (index === 1) {
        setQFTeamsRight(
          [[QFTeamsRight[0][0], team], [QFTeamsRight[1][0], QFTeamsRight[1][1]]])
      }
      else if (index === 2) {
        setQFTeamsRight(
          [[QFTeamsRight[0][0], QFTeamsRight[0][1]], [team, QFTeamsRight[1][1]]])
      }
      else if (index === 3) {
        setQFTeamsRight(
          [[QFTeamsRight[0][0], QFTeamsRight[0][1]], [QFTeamsRight[1][0], team]])
      }
    }
  }

  function SelectWinnerSemi(side: string, index:number, team: string){
    if (side === 'left'){
      if (index === 0){
        setSFTeamsLeft([[team,SFTeamsLeft[0][1]]])
      }
      else if (index === 1){
        setSFTeamsLeft([[SFTeamsLeft[0][0],team]])
      }
    }
    else if (side === 'right'){
      if (index === 0){
        setSFTeamsRight([[team,SFTeamsRight[0][1]]])
      }
      else if (index === 1){
        setSFTeamsRight([[SFTeamsRight[0][0],team]])
      }
    }
  }


  return (
    <div className="flex justify-center items-stretch gap-50 ">
      {/* Left side */}
      <div className="flex justify-start items-stretch gap-20 min-h-screen">
        {/* Round of 16 */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Round of 16</h2>
          {pairsLeft.map(([team1, team2]: [string, string], index) => {

            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16" key={`${team1}-${team2}`}>
                <div className="flex items-center" id={team1}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerQF('left', index, team1)
                    }}>
                    <img src={`${team1}.png`} className="w-8 h-8 object-contain" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerQF('left', index, team2)
                    }}>
                    <img src={`${team2}.png`} className="w-8 h-8 object-contain" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quarter finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Quarter finals</h2>

          {QFTeamsLeft.map(([team1, team2]: [string, string],index) => {
            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16" key={`QF-left-${index}`}>
                <div className="flex items-center" id={team1}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerSemi('left',index,team1)
                    }}>
                    <img src={`${team1}.png`} className="w-8 h-8 object-contain" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerSemi('left',index,team2)
                    }}>
                    <img src={`${team2}.png`} className="w-8 h-8  object-contain" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Semi finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Semi finals</h2>

          {SFTeamsLeft.map(([team1, team2], index)=>{
            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16" key={`SF-left-${index}`}>
                <div className="flex items-center" id={team1}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {

                    }}>
                    <img src={`${team1}.png`} className="w-8 h-8 object-contain" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {

                    }}>
                    <img src={`${team2}.png`} className="w-8 h-8  object-contain" />
                  </button>
                </div>
              </div>
            )
          })} 
        </div>
      </div>

      {/*middle*/}

      <div className="flex justify-start items-stretch gap-20 min-h-screen">
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Final</h2>
          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8 object-contain" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8  object-contain" alt="Barcelona Badge" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-row-reverse justify-end items-stretch gap-20 min-h-screen">
        {/* Round of 16 */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Round of 16</h2>
          {pairsRight.map(([team1, team2]: [string, string], index) => {

            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16" key={`${team1}-${team2}`}>
                <div className="flex items-center" id={team1}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerQF('right', index, team1)
                    }}>
                    <img src={`${team1}.png`} className="w-8 h-8 object-contain" alt="Manchester City Badge" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerQF('right', index, team2)
                    }}>
                    <img src={`${team2}.png`} className="w-8 h-8  object-contain" alt="Barcelona Badge" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quarter finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Quarter finals</h2>
          {QFTeamsRight.map(([team1, team2]: [string, string], index) => {
            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16" key={`QF-right-${index}`}>
                <div className="flex items-center" id={team1}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerSemi('right',index,team1)
                    }}>
                    <img src={`${team1}.png`} className="w-8 h-8 object-contain" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {
                      SelectWinnerSemi('right',index,team2)
                    }}>
                    <img src={`${team2}.png`} className="w-8 h-8  object-contain" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Semi finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Semi finals</h2>
          {SFTeamsRight.map(([team1, team2], index)=>{
            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32 h-16" key={`SF-right-${index}`}>
                <div className="flex items-center" id={team1}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {

                    }}>
                    <img src={`${team1}.png`} className="w-8 h-8 object-contain" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button
                    className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
                    onClick={() => {

                    }}>
                    <img src={`${team2}.png`} className="w-8 h-8  object-contain" />
                  </button>
                </div>
              </div>
            )
          })} 
        </div>
      </div>
    </div>
  );
}