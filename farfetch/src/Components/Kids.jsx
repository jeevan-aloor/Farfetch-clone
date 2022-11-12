import React from "react";
import {
  Grid,
  Box,
  Image,
  RadioGroup,
  Stack,
  Checkbox,
  Radio,
  Alert,
  AlertIcon,
  Text,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";
import style from "./main.css";
import Footer from "./footer";

export default function Kids() {
  const [load, setLoad] = useState(false);
  const [value, setValue] = useState("1");
  const [alertmsg, setAlert] = useState(false);

  const loadClick = () => {
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
      setAlert(true);
    }, 4000);

    setTimeout(() => {
      setAlert(false);
    }, 8000);
  };
  return (
    <div style={{ color: "#222" }}>
      {alertmsg && (
        <Alert
          m="auto"
          h="30px"
          borderRadius="10px"
          w="380px"
          color="yellow"
          bg="#4A5568"
          fontStyle=""
          status="error"
        >
          <AlertIcon
            ml="10px"
            w="20px"
            h="20px"
            mr="10px"
            borderRadius="50%"
            bg="red"
          />
          There is no shopping option its processing
        </Alert>
      )}
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(1, 700px)"
        w="100%"
        h="700px"
        mt="30px"
      >
        <Box>
          <Text
            w="450px"
            fontFamily="Nimbus Sans Extended D, Helvetica,Arial ,sans-serif"
            lineHeight="--typography-display-large-line-height"
            color="BLACK"
            textTransform="uppercase"
            fontSize="50px"
            textAlign="center"
            m="auto"
            mt="150px"
            fontWeight="bold"
          >
            22% off your new wardrobe
          </Text>
          <Text ml="80px" w="600px" fontSize="25px">
            For a limited time only, you can shop the world’s most iconic brands
            with 22% off. Offer available on selected full-price items
          </Text>
          <Button
            onClick={loadClick}
            isLoading={load}
            p="13px"
            border="1px solid black"
            borderRadius="8px"
            fontWeight="bold"
            variant="outline"
            colorScheme="#FFFFFF"
            fontSize={15}
          >
            Shop Now
          </Button>
        </Box>
        <Box>
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043736/data/754b1e35814e5bfeb9d4fc05af703173/1x1_messaging-side/637/data.jpeg"
            w="85%"
            h="90%"
            m="auto"
            mt="15px"
          />
        </Box>
      </Grid>
      <Text textAlign="centre" ml="50px" fontSize="30px" mt="100px" mb="50px">
        The best of new in
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="90%"
        templateRows="repeat(1,400px)"
        m="auto"
        gap="30px"
      >
        <Box id="k1">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>
        <Box id="k2">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>
        <Box id="k3">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>
      </Grid>

      <Flex justifyContent="space-around">
        <Text textAlign="left" mt="0px" ml="100px">
          BABY
        </Text>
        <Text mt="0px">KIDS</Text>
        <Text mt="0px">TEEN</Text>
      </Flex>
      <Flex justifyContent="space-around">
        <Text mt="0px">GG-jacquard knitted vest</Text>
        <Text mt="0px">GG logo-plaque shoulder bag</Text>
        <Text mt="0px">Tan-Go 165mm platform pumps</Text>
      </Flex>

      <Grid
        templateColumns="repeat(2, 1fr)"
        w="90%"
        templateRows="repeat(1,700px)"
        m="auto"
        mt="100px"
        gap="30px"
      >
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043632/data/408cce5d413a5f76d7b494b62b9099fa/1x1_two-columns/637/data.jpeg"
            alt="pic2"
            w="100%"
            h="100%"
          />{" "}
          <Text>THE SNAKER EDIT</Text>
        </Box>
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043654/data/4d1dd317a138e838f0cc51a0e24fc7c2/1x1_two-columns/637/data.jpeg"
            alt="pic3"
            w="100%"
            h="100%"
          />{" "}
          <Text>ALL THE ACCESSORIES</Text>
        </Box>
      </Grid>
      <Text mt="100px" textAlign="left" ml="70px" fontSize="25px" mb="30px">
        Trending now: our most-wanted gifts
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w="90%"
        templateRows="repeat(1,400px)"
        m="auto"
        gap="30px"
      >
        <Box id="k4">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>

        <Box id="k5">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>
        <Box id="k6">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>
        <Box id="k7">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="280px"
          />
        </Box>
      </Grid>
      <Flex justifyContent="space-around">
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Flex>
      <Flex justifyContent="space-around">
        <Text mt="0px" fontWeight="bold">
          Visivim
        </Text>
        <Text mt="0px" ml="100px" fontWeight="bold">
          Master mind japan
        </Text>
        <Text mt="0px" fontWeight="bold">
          AMI paris
        </Text>
        <Text mt="0px" fontWeight="bold">
          Daniel Willington
        </Text>
      </Flex>
      <Flex justifyContent="space-around">
        <Text mt="0px">GG-jacquard knitted vest</Text>
        <Text mt="0px">blue Hangisi 70 silk satin leather pumps</Text>
        <Text mt="0px">Love Handles vase (33cm)</Text>
        <Text mt="0px">logo-plaque quilted AirPods case</Text>
      </Flex>

      <Flex justifyContent="space-around">
        <Text>$4,490</Text>
        <Text>$2,328</Text>
        <Text>$646</Text>
        <Text>$645</Text>
      </Flex>

      <Grid
        templateColumns="repeat(2, 1fr)"
        w="90%"
        templateRows="repeat(1,500px)"
        m="auto"
        gap="50px"
      >
        <Box mt="50px">
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043744/data/8604120401f959dd8ced28f688186a1c/1x1_two-columns/637/data.jpeg"
            alt="pic2"
            w="100%"
            h="100%"
          />{" "}
          <Text>MONCLOR KIDS</Text>
          <Text>
            Keep the cold but in cozy puffer coat from italian powerhose brand
          </Text>
        </Box>

        <Box> </Box>
      </Grid>
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="90%"
        templateRows="repeat(1,180px)"
        m="auto"
        mt="150px"
        gap="30px"
      >
        <Box boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt="30px">
          {" "}
          <QuestionOutlineIcon w="40px" />
          <Text>How to shop</Text>
          <Text>Your Guide to shopping and placing orders</Text>{" "}
        </Box>
        <Box boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt="30px">
          <QuestionOutlineIcon />
          <Text>FAQS</Text>
          <Text>Your Question and answer</Text>{" "}
        </Box>

        <Box boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt="30px">
          <QuestionOutlineIcon />
          <Text>NEED HELP ?</Text>
          <Text>Contact our global Customers Servie team</Text>{" "}
        </Box>
      </Grid>
      <Text fontSize="30px" color="blackAlpha" mt="40px">
        GET 10% OFF YOUR FIRST ORDER
      </Text>
      <Text w="450px" fontSize="18px" textAlign="center" m="auto">
        Sign up for promotions, tailored new arrivals, stock updates and more –
        straight to your inbox
      </Text>
      <Text>GET UPDATES BY</Text>
      <Checkbox defaultChecked mb="20px">
        Email
      </Checkbox>
      <br />
      <Input
        placeholder="Your email address"
        w="300px"
        h="30px"
        border="1px solid black"
        borderRadius="10px"
      />
      <br />
      <Checkbox mb="20px">SMS</Checkbox>
      <br />
      <Button
        w="330px"
        h="35px"
        bg="black"
        border="1px solid black"
        borderRadius="10px"
        color="white"
        fontSize="18px"
      >
        Sign up
      </Button>
      <Text w="500px" m="auto" mt="20px">
        By signing up, you agree to our{" "}
        <a
          style={{ color: "black" }}
          href="https://www.farfetch.com/in/privacy-policy/"
        >
          Privacy Policy.
        </a>{" "}
        Unsubscribe anytime at the bottom of our emails
      </Text>
      <Footer />
    </div>
  );
}
