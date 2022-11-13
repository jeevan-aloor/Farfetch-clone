import React from "react";
import { Box, Text, Input, Stack, Button } from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import {useRef,useState} from 'react'
import Recentadd from "./recentadd";
import { Navigate } from "react-router-dom";

export default function Admin() {
  const nameRef=useRef()
  const categoryRef=useRef()
  const rateRef=useRef()
  const imageRef=useRef()
  const [navi,setNavi]=useState(false)
  
  const adminAdd=()=>{
    setNavi(true)
     return <Recentadd nameRefs={nameRef.current.value} categoryRef={categoryRef.current.value} rateRef={rateRef.current.value} imageRef={imageRef.current.value} />
   

  }
  if(navi===true){
    return <Navigate to="/recentadd"/>
  }

  return (
    <Box
      w="600px"
      h="600px"
      m="auto"
      mt="50px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      pt="6px"
    >
      <Text fontSize="25px" textDecoration="slateblue">
        ADD PRODUCT FORM
      </Text>
      <Box m="auto" ml="20px" w="90%" h="500px">
        <Stack>
          <label style={{ textAlign: "left" }}>ADD PRODUCT NAME</label>
          <Input
            border="1px solid black"
            m="auto"
            w="95%"
            h="35px"
            borderRadius="10px"
            mt="30px"
            
            ref={nameRef}
          />
          <label style={{ textAlign: "left", marginTop: "30px" }}>
            ADD PRODUCT CATEGORY
          </label>
          <Input
            border="1px solid black"
            w="95%"
            h="35px"
            m="auto"
            borderRadius="10px"
            mt="30px"
            ref={categoryRef}
          />
          <label style={{ textAlign: "left", marginTop: "30px" }}>
            ADD PRODUCT RATE
          </label>
          <Input
            border="1px solid black"
            w="95%"
            h="35px"
            m="auto"
            borderRadius="10px"
            mt="30px"
            ref={rateRef}
          />
          <label style={{ textAlign: "left", marginTop: "30px" }}>
            ADD PRODUCT IMAGE
          </label>
          <Input
            border="1px solid black"
            w="95%"
            h="35px"
            m="auto"
            borderRadius="10px"
            mt="30px"
            ref={imageRef}
          />
          <Stack>
            <Button
              mt="40px"
              h="40px"
              bg="black"
              color="white"
              borderRadius={10}
              border="1px solid black"
              w="95%"
              onClick={adminAdd}
            >
              ADD PRODUCT
            </Button>
          </Stack>
        </Stack>
      </Box>
      
    </Box>
  );
}
