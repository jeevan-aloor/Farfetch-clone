import { Link } from "react-router-dom";
import React from "react";
import { useState, useRef } from "react";
import style from "./link.css";
import {
  Menu,
  Image,
  Button,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  TabList,
  Tab,
  Avatar,
  FormControl,
  Input,
  InputGroup,
  ModalOverlay,
  InputLeftElement,
  useDisclosure,
  ModalContent,
  ModalHeader,
  Modal,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Text,
  Tabs,
  MenuItemOption,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Category from "./category";

function PageLink() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bord, setBord] = useState(true);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  console.log(bord);

  const bordChange = () => {
    setBord(false);
  };
  const bordChange1 = () => {
    setBord(true);
  };

  return (
    <div>
      <div className="main">
        {/* Side 1 */}
        {/* side 1 */}
        <div className="navigate">
          <Link className="a" to="/">
            <h3>Womens</h3>
          </Link>
          <Link className="a" to="/Mens">
            <h3>Mens</h3>
          </Link>
          <Link to="/Kids">
            <h3>Kids</h3>
          </Link>
          <Link to="/Logo">
            <h1>FARFETCH</h1>
          </Link>
        </div>
        <div>
          <Link to="/">
            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                colorScheme="blue"
                border="none"
                mt="15"
                borderRadius="50%"
              >
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="flag"
                  w={30}
                />
              </MenuButton>
              <MenuList
                minWidth="240px"
                border="1px solid red"
                w="350px"
                h="400px"
                bg="#FFFFFF"
              >
                <MenuOptionGroup
                  defaultValue="asc"
                  title="DELIVERY DESTINATION OR REGION"
                  type="radio"
                >
                  <MenuOptionGroup
                    defaultValue="asc"
                    title="You are currently shipping to India and your order will be billed in USD $."
                    type="radio"
                  >
                    <InputGroup>
                      <Input
                        w="80%"
                        h="30px"
                        m="auto"
                        placeholder="Search for designation or region"
                      />
                      <InputLeftElement
                        pointerEvents="end"
                        children={
                          <SearchIcon color="gray.300" ml="290px" mt="10px" />
                        }
                      />
                    </InputGroup>
                    <MenuItemOption
                      mt="20px"
                      mb="20px"
                      bg="white"
                      border="none"
                      value="india"
                    >
                      India
                    </MenuItemOption>
                    <MenuItemOption
                      borderTop="1px solid red"
                      mt="20px"
                      bg="white"
                      border="none"
                      value="india"
                    >
                      India
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      bg="white"
                      border="none"
                      value="india"
                    >
                      africa
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      bg="white"
                      border="none"
                      value="india"
                    >
                      India
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      bg="white"
                      border="none"
                      value="india"
                    >
                      India
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      bg="white"
                      border="none"
                      value="india"
                    >
                      India
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Link>
          <Link to="/">
            <Button onClick={onOpen} border="none" borderRadius="50%" mt="10px">
              <Avatar bg="teal.500" w="30px" h="40px" border="none" />
            </Button>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent
                w="400px"
                h="600px"
                border="1px solid red"
                m="auto"
                mt="100px"
                bg="#FFFFFF"
              >
                <ModalHeader>Come on in</ModalHeader>
                <ModalCloseButton
                  w="40px"
                  ml="350px"
                  mt="-10px"
                  border="none"
                  bg="#FFFFFF"
                />

                <ModalBody pb={6}>
                  <Tabs>
                    <TabList borderBottom="1px solid red" width="80%" ml="10px">
                      <Tab
                        bg="#FFFFFF"
                        border="none"
                        onClick={bordChange1}
                        borderBottom={bord ? "2px solid red" : "none"}
                      >
                        SIGN IN
                      </Tab>

                      <Tab
                        bg="#FFFFFF"
                        border="none"
                        onClick={bordChange}
                        borderBottom={!bord ? "2px solid red" : "none"}
                      >
                        I'M NEW HERE
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <FormControl>
                          <FormLabel ml="20px">Email Address</FormLabel>
                          <Input
                            ml="20px"
                            h="30px"
                            w="80%"
                            ref={initialRef}
                            placeholder="First name"
                          />
                        </FormControl>
                        <FormControl mt={4}>
                          <FormLabel ml="20px">Password</FormLabel>
                          <Input
                            h="30px"
                            m="auto"
                            w="80%"
                            ml="20px"
                            placeholder="Last name"
                          />
                        </FormControl>
                        <FormControl mt={4}>
                          <Link to="/">Forgot Password</Link>
                        </FormControl>
                        <Button h="30px" w="83%" ml="20px" mt={10}>
                          SIGN IN
                        </Button>
                        <Text textAlign="center"> OR </Text>

                        <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&scope=email%20profile&openid.realm&prompt=select_account&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.farfetch.com%3Fid%3Dauth37228&client_id=280941613475-9d1nlgbhfe18sgv731r2ccrsqt0r3cvj.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.farfetch.com&gsiwebsdk=2&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow">
                          <Button w="83%" h="30px" ml="20px">
                            Countinue With Google
                          </Button>
                        </a>

                        <a href="https://appleid.apple.com/auth/authorize?client_id=com.farfetch.discover.ffid.service&redirect_uri=https%3A%2F%2Fwww.farfetch.com%2Fsignin-apple&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=2e06513d-c150-465b-b5a4-74d2c47382db&m=11&v=1.5.4">
                          <Button w="83%" h="30px" mt="20px" ml="20px">
                            Countinue With Apple id
                          </Button>
                        </a>

                        <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=418944141479017&kid_directed_site=0&app_id=418944141479017&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fclient_id%3D418944141479017%26redirect_uri%3Dhttps%253A%252F%252Fwww.farfetch.com%252Flogin-slice%252Fauth%252Fsocial%252Fsignin-facebook%26state%3D%257B%2522key%2522%253A%2522a855e311-c785-475f-a548-c8656d318b59%2522%252C%2522value%2522%253A%25225a22b884-5973-4ed6-a767-559aecef128b%2522%252C%2522moveFromBagToWishlist%2522%253Afalse%252C%2522returnUrl%2522%253A%2522https%253A%252F%252Fwww.farfetch.com%252Fin%252Fshopping%252Fwomen%252Fitems.aspx%2522%257D%26response_type%3Dcode%26scope%3Dpublic_profile%2Bemail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd7ada773-7c50-4f08-a68f-ac238762ad5d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.farfetch.com%2Flogin-slice%2Fauth%2Fsocial%2Fsignin-facebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522key%2522%253A%2522a855e311-c785-475f-a548-c8656d318b59%2522%252C%2522value%2522%253A%25225a22b884-5973-4ed6-a767-559aecef128b%2522%252C%2522moveFromBagToWishlist%2522%253Afalse%252C%2522returnUrl%2522%253A%2522https%253A%252F%252Fwww.farfetch.com%252Fin%252Fshopping%252Fwomen%252Fitems.aspx%2522%257D%23_%3D_&display=popup&locale=kn_IN&pl_dbl=0">
                          <Button mt="20px" w="83%" h="30px" ml="20px">
                            Countinue With Facebook
                          </Button>{" "}
                        </a>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Link>
          <Link to="/Mens">
            <Image
              src="https://img.icons8.com/material-sharp/2x/loading-heart.gif"
              alt="heart"
              w="25px"
              mt="20px"
            />
          </Link>
          <Link to="/Mens">
            <Image
              src="https://img.icons8.com/color/2x/shopaholic.png"
              alt="bag"
              w="30px"
              mt="18px"
            />
          </Link>
        </div>
      </div>
      <Category />
    </div>
  );
}
export default PageLink;
