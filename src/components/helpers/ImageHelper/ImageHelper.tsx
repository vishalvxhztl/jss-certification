import useExperienceEditor from '@/lib/use-experience-editor';
import { ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import React from 'react';
export type imageHelperProps = {
  image: ImageField;
  fill?: boolean;
  className: string;
};

const toNumber = (number: unknown): number => {
  if (number === null || typeof number === 'undefined') return 0;
  if (typeof number === 'string') {
    const parsedNumber = Number(number);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }
  return 0;
};
const ImageHelper = ({ image, fill, className }: imageHelperProps) => {
  const isEE = useExperienceEditor();
  if (isEE) {
    return <NextImage contentEditable fill={fill} />;
  }
  if (!fill) {
    return (
      <Image
        src={image?.value?.src || ''}
        fill={fill}
        width={toNumber(image?.value?.width)}
        height={toNumber(image?.value?.height)}
        className={className}
        alt={(image?.value?.alt as string) || ''}
      />
    );
  }
  return (
    <Image
      src={image?.value?.src || ''}
      fill={fill}
      className={className}
      alt={(image?.value?.alt as string) || ''}
    />
  );
};

export default ImageHelper;
