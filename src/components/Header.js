import {
  Stack,
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { useColorMode, useMediaQuery } from "@chakra-ui/react";

import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf="flex-start">
          <Text
            fontSize={isNotSmallerScreen ? "5xl" : "4xl"}
            fontWeight="semibold"
          >
            Hi, I am
          </Text>
          <Text
            fontSize={isNotSmallerScreen ? "7xl" : "5xl"}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Ranjit Kairi
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            GDE - Interaction Front-End web Developer and Designer, mobile
            photgrapher and nation lover https://ranjit.dev &
            https://ranjityx.dev Building @frontierdotxyz, YouTuber &
            Entrepreneur 🗣️
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ranjit-kairi-497485219/")
            }
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : 12}
          mb={isNotSmallerScreen ? "0" : 12}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/82371994?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
