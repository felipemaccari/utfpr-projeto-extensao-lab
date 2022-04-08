import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("USER", data);

    window.location.reload();
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

          <FormControl isInvalid={errors.login}>
            <FormLabel htmlFor="login">Login</FormLabel>
            <Input
              id="login"
              type="text"
              {...register("login", { required: "O login é obrigatório!" })}
            />

            {errors.login && (
              <FormErrorMessage>{errors.login.message}</FormErrorMessage>
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

          <Button mt="50px" type="submit">
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
