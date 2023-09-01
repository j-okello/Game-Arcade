import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const InputSearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={15}
        placeholder="Search Games..."
        variant={"filled"}
      ></Input>
    </InputGroup>
  );
};

export default InputSearchBox;
