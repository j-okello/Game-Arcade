import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    globe: BsGlobe2,
    nintendo: SiNintendo,
    iphone: MdPhoneIphone,
  };
  return (
    <div>
      <HStack marginY={3}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
