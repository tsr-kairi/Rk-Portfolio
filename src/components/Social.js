import { HStack, Icon, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

function Social() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <HStack spacing="20" cursor="pointer">
      <Icon
        as={FaFacebook}
        boxSize={isNotSmallerScreen ? "50" : "30"}
        onClick={() =>
          window.open(
            "https://hi-in.facebook.com/people/Riki-Raj-Koiri/100011375119920/"
          )
        }
      />
      <Icon as={FaGoogle} boxSize={isNotSmallerScreen ? "50" : "30"} />
      <Icon as={FaSpotify} boxSize={isNotSmallerScreen ? "50" : "30"} />
      <Icon as={FaShopify} boxSize={isNotSmallerScreen ? "50" : "30"} />
    </HStack>
  );
}

export default Social;
