import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import Card from "./Card";

export const ShimmerCard = () => {
  return (
    <Card>
      <div className="flex flex-col ">
        <ShimmerThumbnail height={350} rounded />
        <ShimmerTitle line={1} variant="primary" className="-mt-3" />
        <ShimmerTitle line={1} variant="primary" className="-mt-3" />
      </div>
    </Card>
  );
};
