import React, { useDebugValue, useState } from "react"

export default function UseDebugValue01() {
  const [b, setB] = useState(false);

  useDebugValue(b ? 'true' : 'false');

  return [b, setB]
}

// export default function App() {
//   useExampleHook()
//   return <div />
// }
