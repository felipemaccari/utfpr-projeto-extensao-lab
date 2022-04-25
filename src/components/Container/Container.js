import { Flex } from "@chakra-ui/react";

const Container = ({ children, ...props }) => {
  return (
    <Flex
      border="1px solid #dfe0eb"
      background="white"
      borderRadius="8px"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Container;
