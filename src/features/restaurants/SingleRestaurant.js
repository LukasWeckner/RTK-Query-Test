import { useGetSingleRestaurantQuery } from "../api/apiSlice.js";
import { useParams, Link } from "react-router-dom";

function SingleRestaurant() {
  const { restaurantId } = useParams();
  const { data: restaurant, isSuccess } =
    useGetSingleRestaurantQuery(restaurantId);

  return (
    <>
      {isSuccess && (
        <div>
          <h2>{restaurant.name}</h2>
          <Link to={"/restaurants"}>Back to restaurants</Link>
          <p>{`Cuisine: ${restaurant.cuisine}`}</p>
          <h3>Dishes:</h3>
          <ul>
            {restaurant.dishes.map((dish) => (
              <li key={dish.id}>
                <p>{dish.name}</p>
                <p>{dish.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SingleRestaurant;
