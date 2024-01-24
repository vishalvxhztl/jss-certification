import { Field, RouteData } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';
import React from 'react';

export type metaProps = {
  Title: Field<string>;
  [key: string]: unknown;
};

export type headMetaProps = {
  route: RouteData | null;
};

const HeadMeta = ({ route }: headMetaProps) => {
  const fields = route?.fields as metaProps;
  return (
    <Head>
      <title>{fields?.Title?.value}</title>
    </Head>
  );
};

export default HeadMeta;
