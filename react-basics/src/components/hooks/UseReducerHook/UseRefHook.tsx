import { useRef } from "react"

const UseRefHook = () => {
    console.log("UseRefHook")
      const divRef =  useRef<HTMLInputElement>(null)
    const changeColor = () => {
        if(divRef.current)
            divRef.current.style.backgroundColor = "lightblue" 
    }
  return (
  
    <div>
        <button onClick={changeColor}>change color</button>
        <div ref={divRef}>Change this </div>
    </div>
  )
}
export default UseRefHook