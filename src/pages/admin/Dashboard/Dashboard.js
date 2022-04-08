import { Flex, Text, Grid, GridItem, useToast } from "@chakra-ui/react";

import LoadingBox from "components/LoadingBox";

import { useQueryGetFilms } from "service/films";

const Dashboard = () => {
  const toast = useToast();

  const { data: films, isLoading } = useQueryGetFilms({
    onSuccess: () => {
      toast({
        title: "sucesso no fetch!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  if (isLoading) {
    return <LoadingBox />;
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} px="15%" py="50px">
      {films.map((film) => (
        <GridItem w="100%" key={film.episode_id} mt="30px">
          <Flex direction="column">
            <Text textAlign="center" fontWeight="bold" mb="20px">
              {film.title}
            </Text>

            <Text textAlign="justify">{film.opening_crawl}</Text>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Dashboard;
