import FavoriteMomentComponent from './favoritemoment'
import { FavoriteMomentsDateString } from "../../lib/athletes"

const FavoriteMomentList: React.FC<{ favMoments: FavoriteMomentsDateString[] }> = ({ favMoments }) => {
  return (
    <div className="m-8">
      <h2 className="text-2xl">Favorite Moments</h2>
      <div className="flex flex-row">
        {typeof favMoments !== 'undefined' && favMoments.length > 0 ? (
          favMoments.map((moment) => (
            <FavoriteMomentComponent
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