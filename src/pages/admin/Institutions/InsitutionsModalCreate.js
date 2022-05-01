import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Flex,
  Input,
  Select,
} from "@chakra-ui/react";

import FormFieldCities from "components/FormFieldCities";

import { useForm, Controller } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutationCreateInstitution } from "service/institutions";

const InsitutionsModalCreate = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate, isLoading } = useMutationCreateInstitution({
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
    onSuccess: async () => {
      toast({
        title: "Instituição cadastrada com sucesso!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      await queryClient.refetchQueries(["queryListInstitutions"]);

      return;
    },
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastro de Instituição</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" my="30px">
              <FormControl isInvalid={errors.nome}>
                <FormLabel htmlFor="nome">Nome da Instituição</FormLabel>
                <Input
                  id="nome"
                  type="text"
                  placeholder="ex: UTFPR - Pato Branco"
                  {...register("nome", {
                    required: "O nome da instituição é obrigatório!",
                  })}
                />

                {errors.nome && (
                  <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.tipoInstituicao} mt="30px">
                <FormLabel htmlFor="tipoInstituicao">
                  Tipo da Instituição
                </FormLabel>

                <Select
                  id="tipoInstituicao"
                  placeholder="Selecione"
                  {...register("tipoInstituicao", {
                    required: "O tipo da instituição é obrigatório!",
                  })}
                >
                  <option value="Interna">Interna</option>
                  <option value="Externa">Externa</option>
                </Select>

                {errors.tipoInstituicao && (
                  <FormErrorMessage>
                    {errors.tipoInstituicao.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <Flex mt="30px">
                <Controller
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <FormFieldCities
                      errors={errors}
                      id="cidade"
                      label="Cidade da Instituição"
                      errorMessage="A cidade é obrigatória!"
                      {...rest}
                    />
                  )}
                  control={control}
                  name="cidade"
                />
              </Flex>

              <Flex justify="space-between" mt="30px">
                <Button
                  variant="ghost"
                  mt="50px"
                  onClick={onClose}
                  isDisabled={isLoading}
                >
                  Cancelar
                </Button>

                <Button
                  mt="50px"
                  type="submit"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                >
                  Salvar Instituição
                </Button>
              </Flex>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InsitutionsModalCreate;
