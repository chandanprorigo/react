import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => {return state.cake.numOfCakes});
  const dispatch = useDispatch();
  console.log("numOfCakes", numOfCakes)
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}
export default CakeView