type Props = {
  text: string
}

const FavoriteMomentFrame = ({text}: Props) => {
  return (
    <a href="#">
      <div className="flex items-center justify-center w-[264px] h-[230px] mx-2 p-2 bg-white bg-opacity-10 rounded-xl shadow-lg md:mx-3 transition duration-500 ease-in-out hover:shadow-2xl motion-reduce:transform-none"
        style={{
          backdropFilter: 'blur(10px)',
        }}
      >
        <p className="text-center text-sm">{text}</p>
      </div>
    </a>
  )
}

export default FavoriteMomentFrame