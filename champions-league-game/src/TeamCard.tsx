interface TeamCardProps {
  team:string;
  onClick: ()=>void;
}

export function TeamCard({ team, onClick } : TeamCardProps ) {
  return (
    <button
      className="focus:outline-none hover:scale-110 hover:bg-gray-200 transition-transform duration-200 rounded"
      onClick={onClick}
    >
      {team ? (
        <img src={`${team}.png`} className="w-8 h-8 object-contain" />
      ) : (
        <img src={`website-image.png`} className="w-8 h-8 object-contain" />
      )}
    </button>
  )
}