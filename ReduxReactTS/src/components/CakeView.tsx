import { ordered, restocked } from "../store/features/cake/cake";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CakeView = () => {
  const { numOfCakes } = useAppSelector((state) => state.cake);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>Number of Cakes : {numOfCakes} </h3>
      <button onClick={() => numOfCakes > 0 && dispatch(ordered())}>
        Order Cake
      </button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;
