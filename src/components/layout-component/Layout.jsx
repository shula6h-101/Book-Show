import React, {ReactNode} from 'react';
import {Box, Drawer, DrawerContent, useColorModeValue, useDisclosure,} from '@chakra-ui/react';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Utils from "../../utils";
import navTree from "../../app-config/NavigationConfig";

export default function Layout({children}: { children: ReactNode}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        routeInfo={Utils.getRouteInfo(navTree, window.location.pathname)}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Topbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

