import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { ContactFormInput, ContactFormTextarea } from "../Contact";

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
  const toast = useToast();

  const onSubmit = async (data: ContactFormData) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    };
    const response = await fetch(
      process.env.GATSBY_SERVERLESS_FN_URL || "",
      requestOptions
    );
    if (response.ok) {
      toast({
        title: "Success",
        description: "Your message has been sent.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContactFormInput
        name="name"
        placeholder="Jane Doe"
        icon="UserIcon"
        register={register}
        error={errors.name}
      />
      <ContactFormInput
        name="email"
        placeholder="jane.doe@starfleet.com"
        icon="MailIcon"
        register={register}
        error={errors.email}
      />
      <ContactFormTextarea
        name="message"
        placeholder="Hi, I'm a software engineer..."
        register={register}
        error={errors.message}
      />
      <Button
        type="submit"
        isLoading={isSubmitting}
        mt={4}
        colorScheme="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
