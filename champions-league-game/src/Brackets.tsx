export default function Brackets() {
  return (
    <div className="flex justify-center items-stretch gap-50 ">
      {/* Left side */}
      <div className="flex justify-start items-stretch gap-20 min-h-screen">
        {/* Round of 16 */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Round of 16</h2>
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

        {/* Quarter finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Quarter finals</h2>
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

        {/* Quarter finals */}
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-lg font-bold text-center text-white">Quarter finals</h2>
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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

          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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
          <div className="p-3 border rounded bg-gray-100 flex justify-center gap-4 w-32">
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