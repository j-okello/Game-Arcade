import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearchBox from "./InputSearchBox";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Img src={logo} boxSize="60px"></Img>
      <InputSearchBox />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
