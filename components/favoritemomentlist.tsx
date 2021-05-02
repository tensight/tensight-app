import FavoriteMoment from '@/components/favoritemoment'
import FavoriteMomentFrame from '@/components/favoritemomentframe'
import { FavoriteMomentNoDateWithUser } from '@/lib/athletes'

type Props = { 
  favMoments: FavoriteMomentNoDateWithUser[]
}

const FavoriteMomentList = ({ favMoments }: Props) => {
  return (
    <div className="m-8">
      <h2 className="mb-4 text-2xl">Favorite Moments</h2>
      <div className="flex flex-row">
        {typeof favMoments !== 'undefined' && favMoments.length > 0 ? (
          favMoments.map((moment) => (
            <FavoriteMoment
              key={moment.id}
              favMoment={moment}
            />
          ))
        ) : ''}
        <FavoriteMomentFrame text={frameText(favMoments)} />
      </div>
    </div>
  )
}

const frameText = (favMoments) => {
  return favMoments.length === 0
    ? 'Be the first to submit a favorite moment!'
    : 'Share your own favorite moment!'
}

export default FavoriteMomentList