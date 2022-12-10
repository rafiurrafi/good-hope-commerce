import StarRatings from "react-star-ratings";

export const priceFilterService = [
  {
    id: "price-filter-1",
    value: 300,
    name: "100 - 300",
  },
  {
    id: "price-filter-2",
    value: 600,
    name: "301 - 600",
  },
  {
    id: "price-filter-3",
    value: 900,
    name: "601 - 900",
  },
  {
    id: "price-filter-4",
    value: 1200,
    name: "901 - 1200",
  },
  {
    id: "price-filter-5",
    value: 1500,
    name: "1201 - 1500",
  },
];
export const ratingFilterService = [
  {
    id: "rating-filter-1",
    value: 5,
    name: (
      <StarRatings
        rating={5}
        starDimension="10px"
        starSpacing="2px"
        starRatedColor="rgb(212,175,55)"
      />
    ),
  },
  {
    id: "rating-filter-2",
    value: 4,
    name: (
      <StarRatings
        rating={4}
        starDimension="10px"
        starSpacing="2px"
        starRatedColor="rgb(212,175,55)"
      />
    ),
  },
  {
    id: "rating-filter-3",
    value: 3,
    name: (
      <StarRatings
        rating={3}
        starDimension="10px"
        starSpacing="2px"
        starRatedColor="rgb(212,175,55)"
      />
    ),
  },
  {
    id: "rating-filter-4",
    value: 2,
    name: (
      <StarRatings
        rating={2}
        starDimension="10px"
        starSpacing="2px"
        starRatedColor="rgb(212,175,55)"
      />
    ),
  },
  {
    id: "rating-filter-5",
    value: 1,
    name: (
      <StarRatings
        rating={1}
        starDimension="10px"
        starSpacing="2px"
        starRatedColor="rgb(212,175,55)"
      />
    ),
  },
];
