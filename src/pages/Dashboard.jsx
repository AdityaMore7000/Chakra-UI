import { Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Heading my="30px" p="10px"> Chakra UI is awesome</Heading>
        <Text ml={'20px'} color={'blue.300'} fontWeight={'bold'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          consequatur deserunt non!
        </Text>
      </Container>
    </div>
  );
}
