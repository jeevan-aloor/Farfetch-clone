import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

function Footer() {
  return (
    <Box
      w="100%"
      h="500px"
      boxSizing="border-box"
      bg="#222"
      color="white"
      fontFamily="Farfetch Basis,Helvetica Neue,Arial,sans-serif"
    >
      <Flex
        flexDirection="row"
        gap="20px"
        w="100%"
        h="90%"
        fontSize="1.2rem"
        lineHeight="40px"
      >
        <Box w="20%" ml="20px" h="100%" textAlign="center">
          <Text>Farfetch app</Text>
          <Text>Farfetch App for iOS and Android</Text>
        </Box>
        <Box w="30%">
          <Text>DESTINATION/REGION, CURRENCY AND LANGUAGE</Text>
          <Text>India, USD $</Text>
          <Text>FOLLOW US</Text>
          <Flex direction="row" m="auto" gap="20px" mt="50px">
            <Image
              ml="100px"
              w="30px"
              src="https://cdn-icons-png.flaticon.com/128/2626/2626270.png"
              alt="insta"
            />
            <Image
              color="white"
              w="30px"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
              alt="insta"
            />
            <Image
              w="30px"
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="insta"
            />
            <Image
              w="30px"
              src="https://cdn-icons-png.flaticon.com/128/3670/3670166.png"
              alt="insta"
            />
            <Image
              w="30px"
              src="https://cdn-icons-png.flaticon.com/128/179/179335.png"
              alt="insta"
            />
          </Flex>
        </Box>
        <Box w="25%" lineHeight="40px" textAlign="left" ml="20px">
          <Text>CUSTOMER SERVICE</Text>
          <Text>Contact us</Text>
          <Text>Orders & delivery</Text>
          <Text>Payment & pricing</Text>
          <Text>Cryptocurrency payments t</Text>
          <Text>Returns & refunds</Text>
          <Text>FAQs</Text>
          <Text>Terms & conditions</Text>
          <Text>Promotion terms & conditions</Text>
          <Text>Privacy policy</Text>
        </Box>
        <Box w="20%" textAlign="left" ml="20px" lineHeight="40px">
          <Text>ABOUT FARFETCH</Text>
          <Text>About Us</Text>
          <Text>Investors</Text>
          <Text>Boutique Partners</Text>
          <Text>Affiliate Programme Student discount UNiDAYS</Text>
          <Text>Youth discount</Text>
          <Text>Careers</Text>
          <Text>Customer Promise</Text>
          <Text>FARFETCH App</Text>
          <Text>site map</Text>
        </Box>
      </Flex>
      <Text textAlign="left">
        'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK
        Limited and are registered in numerous jurisdictions around the world. ©
        Copyright 2022 FARFETCH UK Limited. All rights reserved.
      </Text>
    </Box>
  );
}
export default Footer;
