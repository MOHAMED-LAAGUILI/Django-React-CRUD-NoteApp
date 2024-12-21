import { quantum } from "ldrs";

function Loader() {
    quantum.register();

  return (
    <>
     <l-quantum size="45" speed="1.75" color="black"></l-quantum>
    </>
  )
}

export default Loader