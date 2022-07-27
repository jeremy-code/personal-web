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

import { ContactFormData } from "features/Contact/ContactForm";
import { FieldError, UseFormRegister } from "react-hook-form";

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

// import { ContactFormInputProps } from "utils/const";

// const ContactFormInput = ({ name, icon, value, handleChange }: ContactFormInputProps) => {
//   function handleParams(name: string) {
//     if (name === "name") {
//       return {
//         type: "text",
//         placeholder: "Jane Doe",
//       };
//     } else if (name === "email") {
//       return {
//         type: "email",
//         placeholder: "jane.doe@starfleet.com",
//       };
//     } else {
//       console.log("Error: ContactFormInput.tsx: handleParams()");
//     }
//   }

//   return (
//     <FormControl isRequired>
//       <FormLabel htmlFor="name" textTransform="capitalize">
//         {name}
//       </FormLabel>
//       <InputGroup>
//         <InputLeftElement pointerEvents="none">
//           <Icon as={icon} color="gray.300" />
//         </InputLeftElement>
//         <Input
//           placeholder={handleParams(name)?.placeholder}
//           name={name}
//           value={value}
//           onChange={handleChange}
//         />
//       </InputGroup>
//     </FormControl>
//   );
// };

// export default ContactFormInput;
