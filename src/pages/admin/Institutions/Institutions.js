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
} from "@chakra-ui/react";

import Container from "components/Container";
import InstitutionsTableActions from "./InstitutionsTableActions";
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
                <Td>{institution.cidade.nome}</Td>
                <Td isNumeric>
                  <InstitutionsTableActions />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Flex>
  );
};

export default Institutions;
