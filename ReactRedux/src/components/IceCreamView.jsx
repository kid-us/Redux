import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../store/features/iceCream";
import { useState } from "react";

const IceCreamView = () => {
  const { numOfIceCreams } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h3>Number IceCream of - {numOfIceCreams}</h3>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <input
        style={{ height: 32, padding: 2, textAlign: "center", marginRight: 20 }}
        name="restock_value"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={1}
      ></input>
      <button onClick={() => dispatch(restocked(parseFloat(value)))}>
        Restock IceCream
      </button>
    </div>
  );
};

export default IceCreamView;
