import FavoriteMoment from '@/components/favoritemoment'
import { FavoriteMomentNoDateWithUser } from '@/lib/athletes'

type Props = { 
  favMoments: FavoriteMomentNoDateWithUser[]
}

const FavoriteMomentList = ({ favMoments }: Props) => {
  return (
    <div className="m-8">
      <h2 className="text-2xl">Favorite Moments</h2>
      <div className="flex flex-row">
        {typeof favMoments !== 'undefined' && favMoments.length > 0 ? (
          favMoments.map((moment) => (
            <FavoriteMoment
              key={moment.id}
              favMoment={moment}
            />
          ))
        ) : <p>Add your own favorite moment</p>}
      </div>
    </div>
  )
}

export default FavoriteMomentList