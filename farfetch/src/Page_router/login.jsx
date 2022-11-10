import React from "react";
import { Link, Navigate } from "react-router-dom";
import { CheckIcon } from "@chakra-ui/icons";
import style from "./link.css";
import {
  Menu,
  Image,

  Radio,
  Button,
  InputRightElement,
  RadioGroup,
  Stack,
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
  textDecoration,
} from "@chakra-ui/react";
import { useState, useRef } from "react";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bord, setBord] = useState(true);
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [magic, setMagic] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [register, setRegister] = useState([]);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [show, setShow] = useState(false);
  const [move, setMove] = useState(false);
  const handleClick = () => setShow(!show);
  const bordChange = () => {
    setBord(false);
  };
  const bordChange1 = () => {
    setBord(true);
  };
  const username = (e) => {
    setName(e.target.value);
  };
  const useremail = (e) => {
    setEmail(e.target.value);
  };
  const userpassword = (e) => {
    setPassword(e.target.value);
  };
  const userRegister = () => {
    setRegister([
      ...register,
      {
        name,
        email,
        Password,
      },
    ]);
    setMove(true)

    
  };

  console.log(register);
  const namelength = name.split("");
  const emaillength = email.split("");
  const passwordlength = Password.split("");
  console.log(email);
  console.log(Password);
  return (
    <Link to="/">
      <Button onClick={onOpen} border="none" borderRadius="50%" mt="10px">
        <Avatar bg="teal.500" w="30px" h="40px" border="none" />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        onClick={setScrollBehavior}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />

        <ModalContent
          w="400px"
          h="700px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          m="auto"
          mt="100px"
          bg="#FFF"
          borderRadius="10px"
          fontFamily="Farfetch Basis,Helvetica Neue,Arial,sans-serif"
        >
          <ModalHeader fontSize="25px" ml="20px" mb="20px" mt="10px">
            Come on in
          </ModalHeader>
          <ModalCloseButton
            w="40px"
            ml="350px"
            mt="-10px"
            border="none"
            bg="#FFFFFF"
            padding="10px"
            _hover={{ background: "#E2E8F0" }}
            borderRadius="10px"
          />
          <div className="scroll">
            <ModalBody pb={6}>
              <Tabs>
                <TabList
                  borderBottom="1px solid #81E6D9"
                  width="80%"
                  ml="20px"
                  mb="20px"
                >
                  <Tab
                    bg="#FFFFFF"
                    border="none"
                    onClick={bordChange1}
                    w="80px"
                    borderBottom={bord ? "2px solid black" : "none"}
                    // border="1px solid red"
                    mr="10px"
                    fontSize="16px"
                    color={bord ? "black" : "#A0AEC0"}
                  >
                    SIGN IN
                  </Tab>

                  <Tab
                    bg="#FFFFFF"
                    border="none"
                    onClick={bordChange}
                    borderBottom={!bord ? "2px solid black" : "none"}
                    fontSize="16px"
                    color={!bord ? "black" : "#A0AEC0"}
                  >
                    I'M NEW HERE
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <FormControl>
                      <FormLabel mb="10px" ml="20px">
                        Email Address
                      </FormLabel>
                      <Input
                        ml="20px"
                        h="35px"
                        w="80%"
                        ref={initialRef}
                        border="1px solid black"
                        borderRadius="10px"
                        mb="20px"
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel mb="10px" ml="20px">
                        Password
                      </FormLabel>
                      <Input
                        h="35px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        mb="10px"
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <Link to="/" className="forgot">
                        Forgot your Password?
                      </Link>
                    </FormControl>
                    <Button
                      bg="black"
                      color="white"
                      w="83%"
                      ml="20px"
                      mt={10}
                      border="1px solid black"
                      borderRadius="10px"
                      h="38px"
                    >
                      SIGN IN
                    </Button>
                    <Text textAlign="center"> OR </Text>

                    <a
                      href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&scope=email%20profile&openid.realm&prompt=select_account&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.farfetch.com%3Fid%3Dauth37228&client_id=280941613475-9d1nlgbhfe18sgv731r2ccrsqt0r3cvj.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.farfetch.com&gsiwebsdk=2&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        h="39px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        color="black"
                        fontSize="15px"
                        bg="#ffffff"
                        _hover={{ bg: "aliceblue" }}
                        mb="30px"
                      >
                        Countinue With Google
                      </Button>
                    </a>

                    <a
                      href="https://appleid.apple.com/auth/authorize?client_id=com.farfetch.discover.ffid.service&redirect_uri=https%3A%2F%2Fwww.farfetch.com%2Fsignin-apple&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=2e06513d-c150-465b-b5a4-74d2c47382db&m=11&v=1.5.4"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        h="39px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        color="black"
                        fontSize="15px"
                        bg="#ffffff"
                        _hover={{ bg: "aliceblue" }}
                        mb="30px"
                      >
                        Countinue With Apple id
                      </Button>
                    </a>

                    <a
                      href="https://www.facebook.com/login.php?skip_api_login=1&api_key=418944141479017&kid_directed_site=0&app_id=418944141479017&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fclient_id%3D418944141479017%26redirect_uri%3Dhttps%253A%252F%252Fwww.farfetch.com%252Flogin-slice%252Fauth%252Fsocial%252Fsignin-facebook%26state%3D%257B%2522key%2522%253A%2522a855e311-c785-475f-a548-c8656d318b59%2522%252C%2522value%2522%253A%25225a22b884-5973-4ed6-a767-559aecef128b%2522%252C%2522moveFromBagToWishlist%2522%253Afalse%252C%2522returnUrl%2522%253A%2522https%253A%252F%252Fwww.farfetch.com%252Fin%252Fshopping%252Fwomen%252Fitems.aspx%2522%257D%26response_type%3Dcode%26scope%3Dpublic_profile%2Bemail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd7ada773-7c50-4f08-a68f-ac238762ad5d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.farfetch.com%2Flogin-slice%2Fauth%2Fsocial%2Fsignin-facebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522key%2522%253A%2522a855e311-c785-475f-a548-c8656d318b59%2522%252C%2522value%2522%253A%25225a22b884-5973-4ed6-a767-559aecef128b%2522%252C%2522moveFromBagToWishlist%2522%253Afalse%252C%2522returnUrl%2522%253A%2522https%253A%252F%252Fwww.farfetch.com%252Fin%252Fshopping%252Fwomen%252Fitems.aspx%2522%257D%23_%3D_&display=popup&locale=kn_IN&pl_dbl=0"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        h="39px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        color="black"
                        fontSize="15px"
                        mb="10px"
                        bg="#ffffff"
                        _hover={{ bg: "aliceblue" }}
                      >
                        Countinue With Facebook
                      </Button>{" "}
                    </a>
                  </TabPanel>
                  <TabPanel>
                    <FormControl>
                    <FormControl >
                      <FormLabel mb="10px" ml="20px">
                        Name
                      </FormLabel>
                      <InputGroup>
                        <Input
                          ml="20px"
                          h="35px"
                          w="80%"
                          ref={initialRef}
                          border="1px solid black"
                          borderRadius="10px"
                          mb="20px"
                          onChange={username}
                          type="text"
                        />
                        {namelength.length > 5 && (
                          <InputRightElement
                            children={
                              <CheckIcon
                                color="green.500"
                                mr="60px"
                                mt="10px"
                              />
                            }
                          />
                        )}
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel mb="10px" ml="20px">
                        Email Address
                      </FormLabel>
                      <InputGroup>
                        <Input
                          ml="20px"
                          h="35px"
                          w="80%"
                          ref={initialRef}
                          border="1px solid black"
                          borderRadius="10px"
                          mb="20px"
                          onChange={useremail}
                          type="email"
                        />
                        {emaillength.length >= 8 && (
                          <InputRightElement
                            children={
                              <CheckIcon
                                color="green.500"
                                mr="60px"
                                mt="10px"
                              />
                            }
                          />
                        )}
                      </InputGroup>
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel mb="10px" ml="20px">
                        Password
                      </FormLabel>
                      <InputGroup>
                        <Input
                          h="35px"
                          m="auto"
                          w="80%"
                          ml="20px"
                          border="1px solid black"
                          borderRadius="10px"
                          mb="10px"
                          onChange={userpassword}
                          type={show ? "text" : "password"}
                        />
                        {passwordlength.length >= 8 && (
                          <InputRightElement
                            children={
                              <CheckIcon
                                color="green.500"
                                mr="60px"
                                mt="10px"
                              />
                            }
                          />
                        )}
                        <InputRightElement width="14.5rem" mt="5px">
                          <Button
                            h="1.75rem"
                            size="sm"
                            border="1px solid black"
                            bg={!show ? "#FEFCBF" : "#E53E3E"}
                            borderRadius="10px"
                            onClick={handleClick}
                          >
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    </FormControl>
                    <FormControl mt={4}>
                      <Text fontSize="15px" ml="20px" color="black">
                        By registering, you agree with our
                        <a
                          href="https://www.farfetch.com/in/terms-and-conditions/"
                          className="terms"
                        >
                          Terms & Conditions and Privacy and Cookie Policy.
                        </a>
                      </Text>
                    </FormControl>
                    <Button
                      bg="black"
                      color="white"
                      w="83%"
                      ml="20px"
                      mt={10}
                      border="1px solid black"
                      borderRadius="10px"
                      h="38px"
                      onClick={userRegister}
                    >
                      REGISTER
                    </Button>
                    <Text textAlign="center"> OR </Text>

                    <a
                      href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&scope=email%20profile&openid.realm&prompt=select_account&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.farfetch.com%3Fid%3Dauth37228&client_id=280941613475-9d1nlgbhfe18sgv731r2ccrsqt0r3cvj.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.farfetch.com&gsiwebsdk=2&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        h="39px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        color="black"
                        fontSize="15px"
                        bg="#ffffff"
                        _hover={{ bg: "aliceblue" }}
                        mb="20px"
                      >
                        Countinue With Google
                      </Button>
                    </a>

                    <a
                      href="https://appleid.apple.com/auth/authorize?client_id=com.farfetch.discover.ffid.service&redirect_uri=https%3A%2F%2Fwww.farfetch.com%2Fsignin-apple&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=2e06513d-c150-465b-b5a4-74d2c47382db&m=11&v=1.5.4"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        h="39px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        color="black"
                        fontSize="15px"
                        bg="#ffffff"
                        _hover={{ bg: "aliceblue" }}
                        mb="20px"
                      >
                        Countinue With Apple id
                      </Button>
                    </a>

                    <a
                      href="https://www.facebook.com/login.php?skip_api_login=1&api_key=418944141479017&kid_directed_site=0&app_id=418944141479017&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fclient_id%3D418944141479017%26redirect_uri%3Dhttps%253A%252F%252Fwww.farfetch.com%252Flogin-slice%252Fauth%252Fsocial%252Fsignin-facebook%26state%3D%257B%2522key%2522%253A%2522a855e311-c785-475f-a548-c8656d318b59%2522%252C%2522value%2522%253A%25225a22b884-5973-4ed6-a767-559aecef128b%2522%252C%2522moveFromBagToWishlist%2522%253Afalse%252C%2522returnUrl%2522%253A%2522https%253A%252F%252Fwww.farfetch.com%252Fin%252Fshopping%252Fwomen%252Fitems.aspx%2522%257D%26response_type%3Dcode%26scope%3Dpublic_profile%2Bemail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd7ada773-7c50-4f08-a68f-ac238762ad5d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.farfetch.com%2Flogin-slice%2Fauth%2Fsocial%2Fsignin-facebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522key%2522%253A%2522a855e311-c785-475f-a548-c8656d318b59%2522%252C%2522value%2522%253A%25225a22b884-5973-4ed6-a767-559aecef128b%2522%252C%2522moveFromBagToWishlist%2522%253Afalse%252C%2522returnUrl%2522%253A%2522https%253A%252F%252Fwww.farfetch.com%252Fin%252Fshopping%252Fwomen%252Fitems.aspx%2522%257D%23_%3D_&display=popup&locale=kn_IN&pl_dbl=0"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        h="39px"
                        m="auto"
                        w="80%"
                        ml="20px"
                        border="1px solid black"
                        borderRadius="10px"
                        color="black"
                        fontSize="15px"
                        bg="#ffffff"
                        _hover={{ bg: "aliceblue" }}
                        mb="20px"
                      >
                        Countinue With Facebook
                      </Button>{" "}
                    </a>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </Link>
  );
}
