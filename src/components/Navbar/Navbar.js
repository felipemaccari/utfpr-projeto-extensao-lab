import { Link } from "react-router-dom";

import { Flex, Text, Button } from "@chakra-ui/react";

const menuItems = [
  { title: "Dashboard", link: "/" },
  { title: "Instuições", link: "/instituicoes" },
];

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
      <Text fontWeight="bold">UTFPR - Laboratório de Química</Text>

      <Flex>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <Button variant="ghost">{item.title}</Button>
          </Link>
        ))}
      </Flex>

      <Button>Sair</Button>
    </Flex>
  );
};

export default Navbar;
