import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <HStack spacing={4}>
          <Link href="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
          <Link href="/blog" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
          <Link href="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 1</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 2</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;