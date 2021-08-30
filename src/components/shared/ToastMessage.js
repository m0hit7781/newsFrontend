import { createStandaloneToast } from "@chakra-ui/react"
import Button from './Button';

const ToastMessage = ( title, description, status ) => {
const toast = createStandaloneToast();
// const customToast = createStandaloneToast({ theme: yourCustomTheme })
toast({
    title: title,
    description: description,
    status,
    duration: 5000,
    isClosable: true,
  })
};

export default ToastMessage;
