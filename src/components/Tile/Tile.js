import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Divider } from '@chakra-ui/core';
import ChakraLink from 'components/ChakraLink';

export default function Tile({ tileId, content }) {
  return (
    <Flex
      display="block"
      h="214px"
      w="414px"
      p="7px"
      backgroundColor="blue.100"
      rounded="lg"
      id={tileId}
      as={ChakraLink}
      to={`blog/${content.fileName}`}
    >
      <Flex
        w="100%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          w="45%"
          h="90%"
          rounded="lg"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url(/${content.imageLink})`}
        />
        <Flex direction="column" w="50%" h="90%" overflow="hidden">
          <Text fontFamily="sans-serif" color="blue.700" fontWeight="600">
            {content.title}
          </Text>
          <Divider borderColor="red.600" />
          <Text fontFamily="sans-serif" color="blue.700">
            {content.desc}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

Tile.propTypes = {
  tileId: PropTypes.number.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
  }).isRequired,
};
