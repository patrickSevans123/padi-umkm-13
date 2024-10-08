import React from 'react';
import { Box, Image, Text, Badge, Icon, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ProductCard = ({
  productName,
  productPrice,
  productImage,
  sellerName,
  location,
  rating,
  sales,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      width="100%"
      maxWidth="250px"
      minWidth="200px"
      aspectRatio={4 / 5}
      mx="auto"
      minHeight="450px"
    >
      {/* Product Image */}
      <Box width="100%" height="60%">
        <Image
          src={productImage || 'https://via.placeholder.com/150'}
          alt={productName}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>

      <Box p={3} height="40%">
        <Badge borderRadius="full" px="2" colorScheme="teal">UMKM</Badge>

        <HStack mt="1" align="center">
          <Text fontWeight="bold" fontSize="sm">{sellerName}</Text>
        </HStack>

        <Text 
          mt="2" 
          fontSize="md" 
          fontWeight="semibold" 
          noOfLines={1}
          isTruncated
          lineHeight="tight"
        >
          {productName}
        </Text>

        <Text fontSize="md" fontWeight="bold" color="teal.500">
          Rp. {productPrice}
        </Text>

        <HStack mt="2" alignItems="center">
          <Icon as={FaMapMarkerAlt} color="gray.500" />
          <Text color="gray.500" fontSize="sm">{location}</Text>
        </HStack>

        <HStack mt="2" alignItems="center">
          <StarIcon color="yellow.400" />
          <Text fontSize="sm" fontWeight="semibold">{rating || 0}</Text>
          <Text color="gray.500" fontSize="sm">{sales} Terjual</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
