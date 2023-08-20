import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div>
        <Flex justify={'space-around'} wrap='wrap' gap='2'>
            <Box h={'50px'} w={'150px'} bg='red'>
                1
            </Box>
            <Box h={'50px'} w={'150px'} bg='blue'>
                2
            </Box>
            <Box h={'50px'} w={'150px'} bg='green'>
                3
            </Box>
            <Box h={'50px'} w={'150px'} bg='yellow'>
                4
            </Box>
        </Flex>
    </div>
  )
}
