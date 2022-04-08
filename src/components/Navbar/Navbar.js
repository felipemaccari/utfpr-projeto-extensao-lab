import { Flex, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      width="100%"
      height="80px"
      position="sticky"
      justify="space-between"
      p="20px"
      border="1px solid #ccc"
      align="center"
    >
      <Text fontWeight="bold">Star Wars Movies</Text>

      <Button>Sair</Button>
    </Flex>
  );
};

export default Navbar;
