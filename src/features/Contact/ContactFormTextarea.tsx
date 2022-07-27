import React from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ContactFormData } from "features/Contact/ContactForm";

type ContactFormTextareaProps = {
  name: "message";
  placeholder: string;
  error?: FieldError;
  register: UseFormRegister<ContactFormData>;
};

const ContactFormTextarea = ({ name, placeholder, error, register }: ContactFormTextareaProps) => {
  return (
    <FormControl isInvalid={error !== undefined} mb={4}>
      <FormLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</FormLabel>
      <Textarea
        placeholder={placeholder}
        {...register(name, {
          required: `${name} is required`,
        })}
      />
    </FormControl>
  );
};

export default ContactFormTextarea;
