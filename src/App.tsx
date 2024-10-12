// import { useState } from 'react'
import './App.css'
import {Button} from "@/components/ui/button.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
      {/*<h1 className="text-4xl font-bold underline">*/}
      {/*    Hello world!*/}
      {/*</h1>*/}
          <Button
              variant="destructive">Click me
          </Button>
      </>
  )
}

export default App
