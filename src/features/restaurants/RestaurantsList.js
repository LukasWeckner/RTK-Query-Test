import { Link } from "react-router-dom";
import { useGetRestaurantsQuery } from "../api/apiSlice.js";
import { useState } from "react";
import { styled } from "styled-components";

function RestaurantsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 5;

  const {
    data: restaurants,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRestaurantsQuery();

  const startIndex = (currentPage - 1) * restaurantsPerPage;
  const endIndex = startIndex + restaurantsPerPage;

  const displayedRestaurants = restaurants?.slice(startIndex, endIndex);

  return (
    <>
      <h1>Lieferando</h1>

      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.toString()}</h2>}
      {isSuccess && (
        <>
          <ul>
            {displayedRestaurants?.map((restaurant) => {
              return (
                <StyledRestaurant key={restaurant.id}>
                  <p>{restaurant.name}</p>
                  <p>{`Rating: ${restaurant.rating}`}</p>
                  <Link to={`/restaurants/${restaurant.id}`}>
                    Go to restaurant
                  </Link>
                </StyledRestaurant>
              );
            })}
          </ul>

          <div>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= restaurants?.length}
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </>
  );
}

const StyledRestaurant = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
`;
export default RestaurantsList;
