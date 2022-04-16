import React from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

type ContactFormTextareaProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ContactFormTextarea = ({ value, handleChange }: ContactFormTextareaProps) => {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="message">Message</FormLabel>
      <Textarea
        placeholder="Hi, I'm a software engineer..."
        name="message"
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default ContactFormTextarea;
