import { Image, ImageProps } from "@chakra-ui/image";
import BullsEye from "../assets/Emojis/bulls-eye.webp";
import Meh from "../assets/Emojis/meh.webp";
import ThumbsUp from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "Recomended", boxSize: "25px" },
    5: { src: BullsEye, alt: "Exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
