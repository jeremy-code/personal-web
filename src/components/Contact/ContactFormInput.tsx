import React from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { Icon } from "../Misc";
import { ContactFormData } from "./ContactForm";

type ContactFormProps = {
  name: "name" | "email";
  placeholder: string;
  icon: string;
  error?: FieldError;
  register: UseFormRegister<ContactFormData>;
};

const ContactFormInput = ({
  name,
  placeholder,
  icon,
  error,
  register,
}: ContactFormProps) => {
  return (
    <FormControl isInvalid={error !== undefined} mb={4}>
      <FormLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <Icon icon={icon} />
        </InputLeftElement>
        <Input
          placeholder={placeholder}
          {...register(name, {
            required: `${name} is required`,
          })}
          variant={useColorModeValue("outline", "filled")}
        />
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default ContactFormInput;
