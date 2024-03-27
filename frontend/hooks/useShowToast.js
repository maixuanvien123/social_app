import { useToast } from '@chakra-ui/react';


const useShowToast = () => {
    const toast = useToast();
    const showToats = (title,description,status) =>{
    toast({
        title,
        description,
        status,
        duration:3000,
        isClosable:true,
    })
};
    return showToats;
};

export default useShowToast;
