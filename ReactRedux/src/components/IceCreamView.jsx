import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../store/features/iceCream";

const IceCreamView = () => {
  const { numOfIceCreams } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number IceCream of - {numOfIceCreams}</h3>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock IceCream</button>
    </div>
  );
};

export default IceCreamView;
