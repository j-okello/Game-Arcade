import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearchBox from "./InputSearchBox";
interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Img src={logo} boxSize="60px"></Img>
      <InputSearchBox onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
