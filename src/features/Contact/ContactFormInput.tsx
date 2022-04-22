import React from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from "@chakra-ui/react";

import { ContactFormInputProps } from "utils/const";

const ContactFormInput = ({ name, icon, value, handleChange }: ContactFormInputProps) => {
  function handleParams(name: string) {
    if (name === "name") {
      return {
        type: "text",
        placeholder: "Jane Doe",
      };
    } else if (name === "email") {
      return {
        type: "email",
        placeholder: "jane.doe@starfleet.com",
      };
    } else {
      console.log("Error: ContactFormInput.tsx: handleParams()");
    }
  }

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="name" textTransform="capitalize">
        {name}
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color="gray.300" />
        </InputLeftElement>
        <Input
          type={handleParams(name)?.type}
          placeholder={handleParams(name)?.placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </InputGroup>
    </FormControl>
  );
};

export default ContactFormInput;
