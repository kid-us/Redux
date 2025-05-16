import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ordered, restocked } from "../store/features/icecream/icecream";

const IceCreamView = () => {
  const { numOfIceCream } = useAppSelector((state) => state.iceCream);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(1);

  return (
    <div>
      <h3>Number of IceCream : {numOfIceCream} </h3>
      <button onClick={() => numOfIceCream > 0 && dispatch(ordered())}>
        Order Cake
      </button>
      <input
        style={{ height: 32, padding: 2, textAlign: "center", marginRight: 20 }}
        name="restock_value"
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        min={1}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
    </div>
  );
};

export default IceCreamView;
