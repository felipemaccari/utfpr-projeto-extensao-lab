import React, { useCallback } from "react";

import styled from "@emotion/styled";

import {
  Input,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";

import Downshift from "downshift";

import { useQueryListCities } from "service/cities";

const FormFieldCitiesList = styled.ul`
  max-height: 250px;
  overflow-y: scroll;
  width: ${({ isOpen }) => (isOpen ? "100%" : 0)};
`;

const FormFieldCitiesListItem = styled.li`
  width: "100%";
  padding: 5px 10px;
  margin: 5px;
  background-color: ${({ highlightedIndex, index }) =>
    highlightedIndex === index ? "lightgray" : null};
  font-weight: ${({ selectedItem, item }) =>
    selectedItem === item ? "bold" : "normal"};
`;

const FormFieldCities = ({ id, errors, onChange, label, errorMessage }) => {
  const { data, isLoading } = useQueryListCities();

  const handleFilterItems = useCallback(
    (inputValue) => {
      if (inputValue.length >= 3) {
        return data.filter(
          (item) =>
            !inputValue ||
            item.nome.toLowerCase().includes(inputValue.toLowerCase())
        );
      }

      return [];
    },
    [data]
  );

  return (
    <FormControl isInvalid={errors[id]}>
      <Downshift
        onChange={(e) => onChange(e || {})}
        itemToString={(item) => (item ? item.nome : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getRootProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <Flex direction="column" width="100%" {...getRootProps()}>
            <FormLabel {...getLabelProps()} htmlFor={id}>
              {label}
            </FormLabel>
            <Input
              {...getInputProps()}
              id={id}
              placeholder={
                isLoading
                  ? "Carregando cidades"
                  : "Digite no mínimo 3 letras..."
              }
              isDisabled={isLoading}
            />

            <FormFieldCitiesList isOpen={isOpen} {...getMenuProps()}>
              {isOpen && !isLoading
                ? handleFilterItems(inputValue).map((item, index) => (
                    <FormFieldCitiesListItem
                      highlightedIndex={highlightedIndex}
                      index={index}
                      selectedItem={selectedItem}
                      {...getItemProps({
                        key: item.id,
                        index,
                        item,
                      })}
                    >
                      {item.nome}
                    </FormFieldCitiesListItem>
                  ))
                : null}
            </FormFieldCitiesList>
          </Flex>
        )}
      </Downshift>

      {errors[id] && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormFieldCities;
