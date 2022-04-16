import React, { useState } from "react";
import { Stack, Button, useToast } from "@chakra-ui/react";
import { HiUser, HiOutlineMail } from "react-icons/hi";

import { ContactFormInput, ContactFormTextarea } from "features/Contact";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      message: "",
    });
    toast({
      title: "Message sent.",
      description: "Your message has been sent.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={5}>
        <ContactFormInput name="name" icon={HiUser} value={form.name} handleChange={handleChange} />
        <ContactFormInput
          name="email"
          icon={HiOutlineMail}
          value={form.email}
          handleChange={handleChange}
        />
        <ContactFormTextarea value={form.message} handleChange={handleChange} />
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
