import Image from 'next/image'
import { FavoriteMomentNoDateWithUser } from '@/lib/athletes'


type Props = {
  favMoment: FavoriteMomentNoDateWithUser
}

const FavoriteMoment = ({ favMoment }: Props) => {
  return (
    <div className="flex mx-2 p-2 bg-white bg-opacity-10 rounded-xl shadow-lg md:mx-3"
      style={{
        backdropFilter: 'blur(10px)',
      }}
    >

      <div className="p-2">
        <div className="">
          <Image
            src={favMoment.url}
            alt={favMoment.description}
            width={320}
            height={180}
            className="rounded"
          />
        </div>
        <div className="px-1">
          <span>{favMoment.description}</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <svg width="20" height="20" fill="#805ad5">
              <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <div className="ml-1">
              <span className="text-gray-700 truncate">(x) favorited this.</span>
            </div>
          </div>
          <div className="text-base font-normal mx-2 my-5 sm:mt-2 sm:mb-4">·</div>
          <div className="flex justify-evenly items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <span className="mr-2">{favMoment.User.name}</span>
            <div className="flex items-center mr-2">
              <Image
                src={favMoment.User.image} //TODO: Change
                alt={favMoment.User.name} // TODO: Change
                width={25}
                height={25}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoriteMoment