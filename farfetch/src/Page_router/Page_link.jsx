import { Link, Navigate } from "react-router-dom";
import React from "react";
import { useState, useRef } from "react";
import style from "./link.css";
import {
  Menu,
  Image,
  Radio,
  Button,
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
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Category from "./category";
import Login from "./login";

function PageLink() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bord, setBord] = useState(true);
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [magic, setMagic] = useState(true);
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [adminemail, setAdminEmaildisplay] = useState("");
  const [adminemailcheck, setAdminEmaildisplaycheck] = useState(false);

  const magicset = () => {
    setMagic(false);
    setTimeout(() => {
      setMagic(true);
    }, 10000);
  };
  console.log("mGI", magic);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  // console.log(bord);

  // const bordChange = () => {
  //   setBord(false);
  // };
  // const bordChange1 = () => {
  //   setBord(true);
  // };

  return (
    <div>
      <div className="main">
        {/* women,mens,kids */}

        <div className="navigate" style={{ paddingTop: "20px" }}>
          <Link className="a" to="/">
            <Text mr="-50px">womens</Text>
          </Link>
          <Link className="a" ml="-200px" to="/Mens">
            <h3>Mens</h3>
          </Link>
          <Link
            className="a"
            style={{
              marginLeft: "-30px",
              textDecoration: "none",
              color: "#222222",
            }}
            to="/Kids"
          >
            <h3>Kids</h3>
          </Link>
          <Link to="/Logo" style={{ textDecoration: "none" }}>
            <h1 style={{ fill: "#222", color: "black", fontSize: "1.9rem" }}>
              FARFETCH
            </h1>
          </Link>
        </div>

        {/* flag,login,like cart   */}

        {/* falg */}

        <div>
          <Link to="/">
            <Menu closeOnSelect={false}>
              <MenuButton
                // as={Button}
                // colorScheme="blue"
                // border="none"
                // mt="15"
                // borderRadius="10%"

                onClick={magicset}
              >
                <Image
                  src="data:image/png;base64,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"
                  alt="flag"
                  w={30}
                />
              </MenuButton>

              <MenuList
                minWidth="240px"
                border="1px solid red"
                w="350px"
                h="500px"
                bg="#FFFFFF"
                color="black"
              >
                <MenuOptionGroup
                  defaultValue="asc"
                  title="DELIVERY DESTINATION OR REGION"
                  type="radio"
                  color="#222"
                >
                  <MenuOptionGroup
                    defaultValue="asc"
                    title="You are currently shipping to India and your order will be billed in USD $."
                    type="radio"
                    color="black"
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
                        children={<SearchIcon color="gray.300" ml="530px" />}
                      />
                    </InputGroup>

                    <MenuItemOption
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="45px"
                      bg="white"
                      border="none"
                      value="india"
                      borderBottom="1px solid #A0AEC0
                      "
                      fontSize="17px"
                    >
                      India
                    </MenuItemOption>
                    <MenuItemOption
                      borderTop="1px solid red"
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="25px"
                      bg="white"
                      border="none"
                      value="india"
                      fontSize="17px"
                    >
                      Andorra
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="25px"
                      bg="white"
                      border="none"
                      value="india"
                      fontSize="17px"
                    >
                      U.A.E
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="25px"
                      bg="white"
                      border="none"
                      value="india"
                      fontSize="17px"
                    >
                      الإمارات العربية المتحدة
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="25px"
                      bg="white"
                      border="none"
                      value="india"
                      fontSize="17px"
                    >
                      Afganistana
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="25px"
                      bg="white"
                      border="none"
                      value="india"
                      fontSize="17px"
                    >
                      Antigua and Barbuda
                    </MenuItemOption>
                    <MenuItemOption
                      mt="20px"
                      ml="20px"
                      mb="20px"
                      w="290px"
                      h="25px"
                      bg="white"
                      border="none"
                      value="india"
                      fontSize="17px"
                    >
                      Anguilla
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Link>
          {display && <Text>{name}</Text>}
          {adminemailcheck && <Text>{adminemail}</Text>}
          {adminemailcheck && (
            <Button
              onClick={() => {
                setAdminEmaildisplaycheck(false);
                window.location.reload();
                return <Navigate to="/" />;
              }}
            >
              LOGOUT
            </Button>
          )}

          {display && (
            <Button
              onClick={() => {
                setDisplay(false);
                window.location.reload();
              }}
            >
              LOGOUT
            </Button>
          )}

          {/* login */}
          <Login
            setDisplay={setDisplay}
            setName={setName}
            name={name}
            setAdminEmail={setAdminEmaildisplay}
            adminemail={adminemail}
            setAdminEmaildisplaycheck={setAdminEmaildisplaycheck}
          />

          {/* like,heart */}

          <Link to="/Mens">
            <Image
              src="https://img.icons8.com/material-sharp/2x/loading-heart.gif"
              alt="heart"
              w="25px"
              mt="5px"
              h="30px"
            />
          </Link>

          {/* cart,bag */}

          <Link to="/Mens">
            <Image
              src="https://img.icons8.com/color/2x/shopaholic.png"
              alt="bag"
              w="30px"
              mt="5px"
            />
          </Link>
        </div>
      </div>
      <Category search={magic} />
    </div>
  );
}
export default PageLink;
