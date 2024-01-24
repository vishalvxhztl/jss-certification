import { BannerProps } from './Banner';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: BannerProps = {
  rendering: { componentName: 'Banner' },
  params: {},
  fields: {
    contentPosition: {
      value: 'center', // Or left right
    },
    cta: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Learn more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    description: {
      value:
        '<p>Join Horizontal at Connections 2023 and discover how we create personalized and connected experiences tailored for every customer.</p>',
    },
    image: {
      value: {
        src: 'https://dummyimage.com/16:9x1080/',
        alt: 'dummy Image',
      },
    },
    link: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Read more',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    title: {
      value: 'Connected experiences fine-tuned for your customers',
    },
  },
};

export const LeftBannerData: BannerProps = {
  ...defaultData,
  fields: {
    ...defaultData.fields,
    contentPosition: { ...defaultData.fields.contentPosition, value: 'left' },
  },
};

export const RightBannerData: BannerProps = {
  ...defaultData,
  fields: {
    ...defaultData.fields,
    contentPosition: { ...defaultData.fields.contentPosition, value: 'right' },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
