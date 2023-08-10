
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { MyModal } from './MyModal'
export const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <MyModal/>
    </ChakraProvider>
  )
}

export default App;