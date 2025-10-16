import {useState, useEffect} from 'react'

export default function Brackets() {
  const teams = [
    "Liverpool",
    "Barcelona",
    "Arsenal",
    "Inter Milan",
    "Atlético Madrid",
    "Bayer Leverkusen",
    "Lille",
    "Aston Villa",
    "Borussia Dortmund",
    "Bayern Munich",
    "Benfica",
    "Club Brugge",
    "Feyenoord",
    "Paris Saint-Germain",
    "Real Madrid",
    "PSV Eindhoven"
  ];

  const [pairsLeft, setPairsLeft] = useState<[string, string][]>([]);
  const [pairsRight, setPairsRight] = useState<[string, string][]>([]);

  useEffect(()=>{
    const shuffled = [...teams].sort(()=> 0.5 - Math.random());
    const left: [string,string][] = [];
    const right: [string,string][] = [];
    for (let i = 0; i < 8; i+=2){
      left.push([shuffled[i], shuffled[i+1]])
    }
    for (let i = 8; i < 16; i+=2){
      right.push([shuffled[i], shuffled[i+1]])
    }

    setPairsLeft(left)
    setPairsRight(right)
    
  },[])

  return (
    <div className="flex justify-center items-stretch gap-50 ">
      {/* Left side */}
      <div className="flex justify-start items-stretch gap-20 min-h-screen">
        {/* Round of 16 */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Round of 16</h2>
          {pairsLeft.map(([team1, team2]: [string, string]) => {

            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32" key={`${team1}-${team2}`}>
                <div className="flex items-center" id={team1}>
                  <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                    <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                    <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quarter finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Quarter finals</h2>
          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
              </button>
            </div>
          </div>

          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
              </button>
            </div>
          </div>
        </div>

        {/* Semi finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Semi finals</h2>
          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*middle*/}

      <div className="flex justify-start items-stretch gap-20 min-h-screen">
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Final</h2>
          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
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
          {pairsRight.map(([team1, team2]: [string, string]) => {

            return (
              <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32" key={`${team1}-${team2}`}>
                <div className="flex items-center" id={team1}>
                  <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                    <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
                  </button>
                </div>
                <div className="flex items-center" id={team2}>
                  <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                    <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quarter finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Quarter finals</h2>
          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
              </button>
            </div>
          </div>

          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
              </button>
            </div>
          </div>
        </div>

        {/* Semi finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Semi finals</h2>
          <div className="p-3 border border-black rounded bg-gray-100 flex justify-center gap-4 w-32">
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./mancity-badge.png" className="w-8 h-8" alt="Manchester City Badge" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded">
                <img src="./barcelona-badge.png" className="w-8 h-8 mt-1" alt="Barcelona Badge" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}