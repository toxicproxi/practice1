import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    FormLabel,
    FormControl,
    Stack,
    Select,
    FormErrorMessage,
    FormHelperText,
 
  } from '@chakra-ui/react'

import React, { 
  useState, 
  useRef
} from 'react'

export const MyModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [input, setInput] = useState('')
    const [_input1, setInput1] = useState('')

    const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => setInput(e.target.value)
    const handleInputChange1 = (e: { target: { value: React.SetStateAction<string> } }) => setInput1(e.target.value)

    const isError = input === '' 
    const _isError = _input1 === ''

    const [size,setSize] = React.useState('xl') 

    const handleSizeClick = (newSize: string) => { 
      setSize(newSize)
      onOpen()
    }
    const sizes = ['xl']
    

    return (
        <>
        {sizes.map((size)=>(<Button onClick={() =>handleSizeClick(size)} key={size} m={4}>{`Open Modal`}</Button>))}
          
          <Modal size={size} isOpen={isOpen} onClose={onClose}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}>

              <ModalOverlay/>
              <ModalContent>
              <ModalHeader>Создание расчета</ModalHeader>
              <ModalCloseButton />


               <ModalBody>
                <FormControl isInvalid={isError}>
                    <FormLabel  fontWeight='light' fontSize={13}>Название расчета</FormLabel>
                    <Input type='text' value={input} onChange={handleInputChange} placeholder='Добавьте название расчета'/>
                    {!isError ?(
                  <FormHelperText fontSize={12}>
                    </FormHelperText>
                    ) : (
                    <FormErrorMessage fontSize={12}>Обязательное поле для заполнения</FormErrorMessage>
                    )}
                </FormControl>
                                                    
                <FormControl isInvalid={_isError} mt={4}>
                    <FormLabel fontWeight='light' fontSize={13}>Описание</FormLabel>
                    <Input type='text' value={_input1} onChange={handleInputChange1} placeholder='Опишите ваш расчет'/>
                    {!_isError ?(
                      <FormHelperText fontSize={12}>
                      </FormHelperText>
                    ):( 

                      <FormErrorMessage fontSize={12}>Обязательное поле для заполнения</FormErrorMessage>
                    )}
                </FormControl>

               <FormControl mt={4}>
                    <FormLabel fontWeight='light' fontSize={13}>Проект/Задача</FormLabel>
                    <Stack spacing={3}>
                      <Select variant='filled' placeholder='Выберите проект'>
                        <option value='option21'>Название</option>
                        <option value='option22'>Название</option>
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel fontWeight='light' fontSize={13}>Шаблоны</FormLabel>
                    <Select>
                      <option value='option2'>Аэродинамика</option>
                      <option value='option3'>Течение капель</option>
                      <option value='option3'>Обледенение</option>
                    </Select>
                </FormControl>

                </ModalBody>

              <ModalFooter>
                <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>
                  Создать
                </Button>
              </ModalFooter>
            </ModalContent> 
            
                </Modal>

            
        </>
      )
    }
