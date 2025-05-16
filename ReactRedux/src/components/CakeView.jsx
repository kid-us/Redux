import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../store/features/cake";

const CakeView = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={() => numOfCakes > 0 && dispatch(ordered())}>
        Order Cake
      </button>
      <button onClick={() => dispatch(restocked(5))}>Restock 5 Cakes</button>
    </div>
  );
};

export default CakeView;
