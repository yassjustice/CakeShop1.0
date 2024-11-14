import React from 'react';
import { View, Image } from 'react-native';
import { styled } from 'tailwindcss-react-native';

const ImageWrapper = styled(View);
const StyledImage = styled(Image);

const ImageItem = ({ src, aspectRatio }) => (
  <ImageWrapper className="overflow-hidden rounded-lg mb-4 flex-1">
    <StyledImage
      source={src}
      resizeMode="cover"
      style={{ width: '100%', height: undefined, aspectRatio }}
      className="w-full"
    />
  </ImageWrapper>
);

export default ImageItem;
