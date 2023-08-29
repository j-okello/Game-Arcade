import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";

const PlatformMenue = () => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Select Platform
      </MenuButton>
      <MenuList>
        {data.map((platorm) => (
          <MenuItem key={platorm.id}>{platorm.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenue;
