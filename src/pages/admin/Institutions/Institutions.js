import {
  Flex,
  Text,
  Spinner,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

import Container from "components/Container";
import { useQueryListInstitutions } from "service/institutions";

const Institutions = () => {
  const { data, isLoading } = useQueryListInstitutions();

  if (isLoading) {
    return (
      <Flex flex={1} direction="column" align="center" justify="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary"
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <Flex direction="column" px="10%" pt="50px" minHeight="calc(100vh - 80px)">
      <Text fontSize="25px" fontWeight="bold">
        Instituições
      </Text>

      <Container my="25px" direction="column" flex={1} p="32px">
        <Text fontSize="20px" fontWeight="semiBold">
          Relação das instituições do sistema
        </Text>

        <Flex direction="column" mt="30px">
          {data.map((institution) => (
            <>
              <Flex
                key={institution.id}
                justify="space-between"
                align="center"
                py="10px"
                px="20px"
                flex={1}
                _hover={{ cursor: "pointer", background: "#eef" }}
              >
                <Text fontWeight="semiBold" fontSize="20px">
                  {institution.nome}
                </Text>

                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<BiDotsVerticalRounded size={20} />}
                    variant="ghost"
                  />

                  <MenuList>
                    <MenuItem>Editar</MenuItem>
                    <MenuItem color="red">Remover</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              <Divider />
            </>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Institutions;
