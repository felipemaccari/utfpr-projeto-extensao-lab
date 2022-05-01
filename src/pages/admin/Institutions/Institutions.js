import {
  Flex,
  Text,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import Container from "components/Container";
import { useQueryListInstitutions } from "service/institutions";

import InstitutionsTableActions from "./InstitutionsTableActions";
import InsitutionsModalCreate from "./InsitutionsModalCreate";

const Institutions = () => {
  const { data, isLoading } = useQueryListInstitutions();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <>
      <Flex
        direction="column"
        px="10%"
        pt="50px"
        minHeight="calc(100vh - 80px)"
      >
        <Text fontSize="25px" fontWeight="bold">
          Instituições
        </Text>

        <Button mt="50px" width="350px" onClick={onOpen}>
          Adicionar Instituição
        </Button>

        <Container my="18px" direction="column" flex={1} p="32px">
          <Text fontSize="20px" fontWeight="semiBold">
            Relação das instituições do sistema
          </Text>

          <Table variant="simple" mt="50px">
            <Thead>
              <Tr>
                <Th>
                  <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Instituição
                  </Text>
                </Th>

                <Th>
                  <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Tipo da Instituição
                  </Text>
                </Th>

                <Th>
                  <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Cidade
                  </Text>
                </Th>

                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((institution) => (
                <Tr
                  key={institution.id}
                  _hover={{ cursor: "pointer", background: "#eef" }}
                >
                  <Td>{institution.nome}</Td>
                  <Td>{institution.tipoInstituicao}</Td>
                  <Td>{institution.cidade.nome}</Td>
                  <Td isNumeric>
                    <InstitutionsTableActions institution={institution} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Container>
      </Flex>

      <InsitutionsModalCreate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Institutions;
