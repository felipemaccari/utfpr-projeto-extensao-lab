import { Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex align="center" justify="center" height="calc(100vh - 80px)">
      <Flex direction="column" align="center">
        <Text fontWeight="bold" fontSize="20px">
          Bem vindo ao
        </Text>
        <Text fontWeight="bold" fontSize="25px">
          Sistema do Laboratório de Química
        </Text>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
