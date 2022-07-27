import React from "react";
import {
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputLeftElement,
  useToast,
  InputGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiOutlineUser, HiOutlineMail } from "react-icons/hi";

import ContactFormInput from "features/Contact/ContactFormInput";
import ContactFormTextarea from "features/Contact/ContactFormTextarea";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContactFormInput
        name="name"
        placeholder="Jane Doe"
        icon={HiOutlineUser}
        register={register}
        error={errors.name}
      />
      <ContactFormInput
        name="email"
        placeholder="jane.doe@starfleet.com"
        icon={HiOutlineMail}
        register={register}
        error={errors.email}
      />
      <ContactFormTextarea
        name="message"
        placeholder="Hi, I'm a software engineer..."
        register={register}
        error={errors.message}
      />
      <Button type="submit" isLoading={isSubmitting} mt={4} colorScheme="teal">
        Submit
      </Button>
    </form>
    // <form
    //   onSubmit={handleSubmit}
    //   name="contact"
    //   method="POST"
    //   data-netlify-recaptcha="true"
    //   data-netlify="true"
    // >
    //   <Stack gap={5}>
    //     <ContactFormInput
    //       name="name"
    //       icon={HiOutlineUser}
    //       value={form.name}
    //       handleChange={handleChange}
    //     />
    //     <ContactFormInput
    //       name="email"
    //       icon={HiOutlineMail}
    //       value={form.email}
    //       handleChange={handleChange}
    //     />
    //     <ContactFormTextarea value={form.message} handleChange={handleChange} />
    //     <Button colorScheme="teal" type="submit">
    //       Submit
    //     </Button>
    //   </Stack>
    // </form>
  );
};

export default ContactForm;
