import * as React from "react";
import { Link } from "gatsby";
import { Container, Heading, Text, Link as CLink } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Seo } from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Navbar />
      <Container as="main" mt="8">
        <Heading as="h1" size="xl" fontWeight="semibold">
          404: Page not found
        </Heading>
        <Text my="4">
          You just hit a route that doesn't exist... the sadness.
        </Text>

        <CLink as={Link} to="/" color="primary.500">
          Go back to the homepage
        </CLink>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Not Found" />;

export default NotFoundPage;
