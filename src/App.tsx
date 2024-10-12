// import { useState } from 'react'
import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
      {/*<h1 className="text-4xl font-bold underline">*/}
      {/*    Hello world!*/}
      {/*</h1>*/}
      {/*    <Button*/}
      {/*        variant="default">Click me*/}
      {/*    </Button>*/}

          <Drawer>
              <DrawerTrigger asChild>
                  <Button
                      variant="default">Open Drawer
                  </Button>
              </DrawerTrigger>
              <DrawerContent>
                  <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription>This action cannot be undone.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
      </>
  )
}

export default App
