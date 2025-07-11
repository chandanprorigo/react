import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => {return state.icecream.numOfIcecreams});
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of ice cream - {numOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
                <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}
export default IcecreamView