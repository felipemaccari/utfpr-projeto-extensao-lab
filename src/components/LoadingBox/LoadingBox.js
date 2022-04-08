import { Flex, Spinner } from "@chakra-ui/react";

const LoadingBox = () => {
  return (
    <Flex height="100vh" width="100%" align="center" justify="center">
      <Spinner />
    </Flex>
  );
};

export default LoadingBox;
