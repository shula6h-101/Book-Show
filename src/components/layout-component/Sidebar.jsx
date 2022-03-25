import {Box, CloseButton, Flex, Icon, Link, Text, useColorModeValue} from "@chakra-ui/react";
import NavLinks from "../../app-config/NavigationConfig";

const Sidebar = ({ onClose, routeInfo, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Miseru
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {NavLinks.map((link) => (
        <NavItem key={link.id} isSelected={link.id === routeInfo.id} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, isSelected, ...rest }) => {
  return (
    <Link
      href={path}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="2"
        mx="4"
        my='2'
        borderRadius="lg"
        role="group"
        cursor="pointer"
        __css={isSelected? {
          bg: 'cyan.600',
          color: 'white',
        }: {}}
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default Sidebar;
