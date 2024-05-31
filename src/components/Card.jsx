function Card({ children }) {
  return (
    <div className="w-[15rem] height-[15rem] m-2 h-fit-content flex-shrink-0">
      {children}
    </div>
  );
}

export default Card;
