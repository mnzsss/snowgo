import React from 'react';

import { Container, BucketIcon, Label, Text } from './styles';

import bucket from '~/assets/img/ice-bucket.svg';

export default function Bucket({
  children,
  align,
  link,
  size,
  target = null,
  ...rest
}) {
  return (
    <Container align={align} {...rest}>
      <BucketIcon align={align} size={size} href={link || '#!'} target={target}>
        <img src={bucket} alt="Peça pelo WhatsApp" />
      </BucketIcon>

      {children && (
        <Label align={align}>
          <Text>{children}</Text>
        </Label>
      )}
    </Container>
  );
}
