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
// const s=(
//   // <Box><Text>jeevan</Text> </Box>
//   <Box border="1px solid red" w="1400px" h="550px" bg="#FFFFFF"><Text color="black">jeevan</Text></Box>
// )
const s = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const a = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-NEW_IN-PARTY_EDIT.jpg"
          alt="lady"
          w="500px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const b = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-DESIGNER-GOLDEN_GOOSE.jpg"
          alt="lady"
          w="400px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const m = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-CLOTHING_COATS.jpg"
          alt="lady"
          w="500px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const d = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-BAGS_CLUTCH_BAGS.jpg"
          alt="lady"
          w="400px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const j = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-ACCESSORIES_HOMEWARE.jpg"
          alt="lady"
          w="500px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const z = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-PRE_OWNED-LOUIS_VUITTON.jpg"
          alt="lady"
          w="500px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);
const n = (
  <Box w="1500px" h="550px" bg="#FFFFFF" color="black">
    <Flex direction="row" gap="50px" justifyContent="space-around">
      <Box lineHeight="20px">
        <Text>22% OFF</Text>
        <br />
        <br />
        <br />
        <Text>All 22% off</Text>
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
          src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-JEWELLERY-YOKO_LONDON.jpg"
          alt="lady"
          w="500px"
          h="95%"
          mt="30px"
        />
      </Box>
    </Flex>
  </Box>
);

export default function Category({ search }) {
  // const [h, seth] = useState(s);

  return (
    <div className="hover">
      <div className="subhover" style={{ width: "700px" }}>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          w="500px"
          pointer="none"
          label={s}
          aria-label="A tooltip"
        >
          22% Off
        </Tooltip>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          ml="-150px"
          label={a}
          aria-label="A tooltip"
        >
          Gifts
        </Tooltip>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          ml="-300px"
          label={z}
          aria-label="A tooltip"
        >
          new in
        </Tooltip>
        <Tooltip 
          className="tool"
          bg="#FFFFFF"
          label={n}
          ml="-400px"
          aria-label="A tooltip"
        >
          Brands
        </Tooltip>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          label={b}
          ml="-510px"
          aria-label="A tooltip"
        >
          Clothing
        </Tooltip>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          label={m}
          ml="-600px"
          aria-label="A tooltip"
        >
          Shoes
        </Tooltip>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          label={d}
          ml="-680px"
          aria-label="A tooltip"
        >
          bags
        </Tooltip>
        <Tooltip
          className="tool"
          bg="#FFFFFF"
          label={j}
          ml="-780px"
          aria-label="A tooltip"
        >
          Accessories
        </Tooltip>
      </div>

      <Box ml="300px">
        {search && (
          <InputGroup>
            <Input overflowX="none" w="200px" h="30px" />
            <InputLeftElement
              children={<Search2Icon ml="330px" mt="10px" mb="20px" />}
            />
          </InputGroup>
        )}
      </Box>
    </div>
  );
}
