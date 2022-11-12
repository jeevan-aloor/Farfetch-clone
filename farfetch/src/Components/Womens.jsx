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

export default function Womens() {
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
          // m="auto"
          // h="30px"
          // borderRadius="10px"
          // w="380px"
          // color="yellow"
          // bg="#4A5568"
          // fontStyle=""
          status="error"
        >
          <AlertIcon
          // ml="10px"
          // w="20px"
          // h="20px"
          // mr="10px"
          // borderRadius="50%"
          // bg="red"
          />
          There is no shopping option its processing
        </Alert>
      )}
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 700px)"
        w="100%"
        h="2000px"
        mt="30px"
      >
        <Box>
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4016468/data/b0fbcd99aac1f3ef2f6552360e3f93cc/1x1_messaging-side/637/data.jpeg"
            w="85%"
            h="90%"
            m="auto"
            mt="15px"
          />
        </Box>
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
          <Text mt="200px" fontSize="35px">
            Dancefloor ready: the hottest party shoes
          </Text>
          <Text w="600px" m="auto" fontSize="20px">
            Statement boots, power platforms and trending mules — unbox this
            season’s best styles
          </Text>
          <Button
            mt="40px"
            border="1px solid black"
            borderRadius="8px"
            onClick={loadClick}
            isLoading={load}
            p="13px"
            fontWeight="bold"
            variant="outline"
            colorScheme="#FFFFFF"
            fontSize={15}
          >
            Shop Now{" "}
          </Button>
        </Box>
        <Box>
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043494/data/58e1561d985820f6ff52f3b45e321414/1x1_messaging-side/637/data.jpeg"
            w="85%"
            h="90%"
            m="auto"
            mt="15px"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044254/data/59a98681fd23768264f5cf97e716c880/1x1_two-columns/637/data.jpeg"
            w="85%"
            h="90%"
            m="auto"
            mt="15px"
          />
        </Box>
        <Box></Box>
      </Grid>
      <Text textAlign="left" ml="50px" fontSize="30px" mt="100px" mb="50px">
        New in: handpicked daily from the world’s best brands and boutiques
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w="90%"
        templateRows="repeat(1,400px)"
        m="auto"
        gap="30px"
      >
        <Box id="j1">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>

        <Box id="j2">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>
        <Box id="j3">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>
        <Box id="j4">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>
      </Grid>
      <Flex justifyContent="space-around">
        <Text>New Season</Text>
        <Text>New Season</Text>
        <Text>New Season</Text>
        <Text>New Season</Text>
      </Flex>
      <Flex justifyContent="space-around">
        <Text mt="0px" fontWeight="bold">
          Gucci
        </Text>
        <Text mt="0px" ml="100px" fontWeight="bold">
          Gucci
        </Text>
        <Text mt="0px" fontWeight="bold">
          Valentino Garavani
        </Text>
        <Text mt="0px" fontWeight="bold">
          Paco Rabanne
        </Text>
      </Flex>
      <Flex justifyContent="space-around">
        <Text mt="0px">GG-jacquard knitted vest</Text>
        <Text mt="0px">GG logo-plaque shoulder bag</Text>
        <Text mt="0px">Tan-Go 165mm platform pumps</Text>
        <Text mt="0px">sequin-embellished shoulder bag</Text>
      </Flex>

      <Flex justifyContent="space-around">
        <Text>$920</Text>
        <Text>$2,100</Text>
        <Text>$2,207</Text>
        <Text>$1,989</Text>
      </Flex>
      <Text fontSize="30px" mt="50px">
        {" "}
        Shop gifts by category
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="90%"
        templateRows="repeat(1,500px)"
        m="auto"
        gap="30px"
      >
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991024/data/7f859c5eaab84fa9bb83cb08dfedb11b/3x4_three-columns/480/data.jpeg"
            alt="pic1"
            w="100%"
            h="100%"
          />
          <Text>HIGH-GLAMOUR GIFTS</Text>
        </Box>
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3983242/data/0b59538b9f90211cb3edae4dc2552fac/3x4_three-columns/480/data.jpeg"
            alt="pic2"
            w="100%"
            h="100%"
          />{" "}
          <Text>100 ICONIC BAGS</Text>
        </Box>
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3983292/data/3d0599e29225d4f3e25b07dbbf2068ac/3x4_three-columns/480/data.jpeg"
            alt="pic3"
            w="100%"
            h="100%"
          />{" "}
          <Text>FINE JEWELRY & WATCHES</Text>
        </Box>
      </Grid>
      <Text mt="100px" textAlign="left" ml="70px" fontSize="25px" mb="30px">
        Discover: trending gifts
      </Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        w="90%"
        templateRows="repeat(1,400px)"
        m="auto"
        gap="30px"
      >
        <Box id="j5">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>

        <Box id="j6">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>
        <Box id="j7">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>
        <Box id="j8">
          <Image
            src="https://img.icons8.com/material-outlined/2x/loading-heart.png"
            alt="heart"
            w="30px"
            ml="260px"
          />
        </Box>
      </Grid>
      <Flex justifyContent="space-around">
        <Text>New Season</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Flex>
      <Flex justifyContent="space-around">
        <Text mt="0px" fontWeight="bold">
          Prada
        </Text>
        <Text mt="0px" ml="100px" fontWeight="bold">
          Manolo Blahnik
        </Text>
        <Text mt="0px" fontWeight="bold">
          Anissa Kermiche
        </Text>
        <Text mt="0px" fontWeight="bold">
          Saint Laurent
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
      <Text fontSize="30px" mt="50px" mb="30px">
        {" "}
        Shop gifts by Brand
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="90%"
        templateRows="repeat(1,500px)"
        m="auto"
        gap="30px"
      >
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044252/data/75fd01a82411e80fb15bf39c2a2731ef/3x4_three-columns/480/data.jpeg"
            alt="pic1"
            w="100%"
            h="100%"
          />
          <Text>PRADA</Text>
          <Text>This way for editor-approved staples</Text>
        </Box>
        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044236/data/069e896d63bd97edb90022ef805a09d6/3x4_three-columns/480/data.jpeg"
            alt="pic2"
            w="100%"
            h="100%"
          />{" "}
          <Text>AREA</Text>
          <Text>The modern party dress code</Text>
        </Box>

        <Box>
          {" "}
          <Image
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044256/data/dc522e252961decd6ebe97f315f3cddc/3x4_three-columns/480/data.jpeg"
            alt="pic3"
            w="100%"
            h="100%"
          />{" "}
          <Text>ACNE STUDIOS</Text>
          <Text>Strong outerwear and statement accessories</Text>
        </Box>
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
