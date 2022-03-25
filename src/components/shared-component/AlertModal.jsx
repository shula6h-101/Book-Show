import {useRef} from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button, useDisclosure,
} from '@chakra-ui/react'

const AlertModal = (props) => {
  const {header, description, preClose} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  
  onOpen();
  
  const onCancel = () => {
    preClose();
    onClose();
  }
  
  return (
    <div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onCancel}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {header}
            </AlertDialogHeader>
            
            <AlertDialogBody>
              {description}
            </AlertDialogBody>
            
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCancel}>
                Okay!
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  )
};

export default AlertModal;
