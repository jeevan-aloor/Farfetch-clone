import React from "react";
import style from "./link.css";
import {
  Tooltip,
  InputLeftElement,
  InputGroup,
  Input,
  Text,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
const s = (
  <Box border="1px solid red" w={1430} h="400px" bg="#FFFFFF">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        22% OFF
        <br />
        <br />
        <br />
        All 22% off
        <br />
        <br />
        22% off clothing
        <br />
        <br />
        22% off clothing
        <br />
        <br />
        22% off clothing
        <br />
        <br />
        22% off clothing
        <br />
        <br />
        22% off clothing
        <br />
        <br />
        22% off clothing
        <br />
        <br />
      </Box>
      <Box>
        22% OFF DESIGNERS
        <br />
        <br />
        <br />
        Dsquared2
        <br />
        <br />
        Ganni
        <br />
        <br />
        JW Anderson
        <br />
        <br />
        Khaite
        <br />
        <br />
        Lemaire
        <br />
        <br />
        Marine Serre
        <br />
        <br />
        MSGM
        <br />
        <br />
        Off-White
        <br />
        <br />
        Palm Angels
        <br />
        <br />
        Zimmermann
        <br />
        <br />
      </Box>
      <Box>
        <Image
          src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4016468/data/b0fbcd99aac1f3ef2f6552360e3f93cc/1x1_messaging-side/637/data.jpeg"
          alt="lady"
          w="400px"
          h="60%"
        />
        <Text>women</Text>
        <Text>22 % off</Text>
        <Text>shop now</Text>
      </Box>
    </Flex>
  </Box>
);

export default function Category() {
  const [h, seth] = useState(s);

  return (
    <div className="hover">
      <Tooltip pointer="none" label={h} aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label={h} aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label={h} aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label={h} aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label={h} aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label={h} aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Box>
        <InputGroup>
          <Input w="200px" h="30px" />
          <InputLeftElement children={<Search2Icon ml="180px" mt="10px" />} />
        </InputGroup>
      </Box>
    </div>
  );
}
