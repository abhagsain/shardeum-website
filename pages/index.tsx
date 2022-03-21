import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";

const ButtonExamples = ({
  toggleColorMode,
}: {
  toggleColorMode: () => void;
}) => {
  return (
    <Container mt="10" maxWidth="container.xl" mx="auto">
      <Button onClick={toggleColorMode} mb="4">
        Toggle Color
      </Button>
      <Box display="flex" gap="3" flexWrap="wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
      </Box>
    </Container>
  );
};

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box mb="40">
      <Container maxW="container.xl">
        <Navbar />
      </Container>
      <Flex
        h={["80vh", "90vh"]}
        justifyContent="center"
        alignItems="center"
        mt={{ base: 10, lg: 0 }}
      >
        <Container maxW="container.xl" mx="auto">
          <SimpleGrid columns={[1, 1, 2]} gap={["8", "12c"]}>
            <VStack
              alignItems={{ base: "center", md: "flex-start" }}
              spacing={[8]}
            >
              <VStack spacing={2}>
                <Text
                  as="h2"
                  textAlign={{ base: "center", md: "left" }}
                  lineHeight="normal"
                  fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                  fontWeight="bold"
                >
                  Decentralization for everyone
                </Text>
                <Box maxW={{ base: "md", md: "full" }}>
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    textAlign={{ base: "center", md: "left" }}
                  >
                    Shardeum is the first linearly scalable smart contract
                    blockchain being built by the people for the people
                  </Text>
                </Box>
              </VStack>
              <Button variant="secondary" size="lg" onClick={toggleColorMode}>
                Join Discord
              </Button>
            </VStack>
            <Box h={["60", "80"]} bg="brand.grey-90"></Box>
          </SimpleGrid>
        </Container>
      </Flex>
      <ButtonExamples toggleColorMode={toggleColorMode} />
    </Box>
  );
};

export default Home;
