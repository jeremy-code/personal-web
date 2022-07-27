import React from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FieldError, UseFormRegister } from "react-hook-form";

import { ContactFormData } from "features/Contact/ContactForm";

type ContactFormProps = {
  name: "name" | "email";
  placeholder: string;
  icon: IconType;
  error?: FieldError;
  register: UseFormRegister<ContactFormData>;
};

const ContactFormInput = ({ name, placeholder, icon, error, register }: ContactFormProps) => {
  return (
    <FormControl isInvalid={error !== undefined} mb={4}>
      <FormLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
          <Icon as={icon} />
        </InputLeftElement>
        <Input
          placeholder={placeholder}
          {...register(name, {
            required: `${name} is required`,
          })}
        />
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default ContactFormInput;
