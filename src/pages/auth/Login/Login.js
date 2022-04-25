import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { useMutationAuth } from "service/auth";

const Login = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutationAuth({
    onError: ({ response }) => {
      const message = response.data.message;

      toast({
        title: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    },
    onSuccess: (data) => {
      localStorage.setItem("USER", data);

      window.location.reload();
    },
  });

  const onSubmit = async (data) => {
    await mutate(data);
  };

  return (
    <Flex height="100vh" width="100%" align="center" justify="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column">
          <Text
            fontWeight="bold"
            fontSize="1.5rem"
            mb="50px"
            textDecor="underline"
          >
            Sistema do Laboratório de Química
          </Text>

          <FormControl isInvalid={errors.username}>
            <FormLabel htmlFor="username">Usuário</FormLabel>
            <Input
              id="username"
              type="text"
              {...register("username", {
                required: "O nome de usuário é obrigatório!",
              })}
            />

            {errors.username && (
              <FormErrorMessage>{errors.username.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mt="30px" isInvalid={errors.password}>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              type="password"
              {...register("password", { required: "A senha é obrigatória" })}
            />

            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            mt="50px"
            type="submit"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
