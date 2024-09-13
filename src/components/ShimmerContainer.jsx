import { ShimmerCard } from "./ShimmerCard";

const ShimmerContainer = ({ length }) => {
  return (
    <>
      {Array.from({ length }).map((_, ind) => (
        <ShimmerCard key={ind} />
      ))}
    </>
  );
};

export default ShimmerContainer;
