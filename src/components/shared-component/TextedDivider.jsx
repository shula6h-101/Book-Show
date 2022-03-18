import {Badge, Divider, HStack} from "@chakra-ui/react";

const TextedDivider = (props) => {
  return (
    <HStack justifyContent={'center'}>
      <Divider w={'xs'}/>
      <Badge colorScheme={'green'}>₹ {props.price}</Badge>
      <Divider w={'xs'}/>
    </HStack>
  );
};

export default TextedDivider;
