// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageHelper from '@/components/helpers/ImageHelper/ImageHelper';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import Text from '@/components/helpers/Text/Text';
import { Field, ImageField, LinkField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface BannerFields {
  contentPosition: Field<string>;
  cta: LinkField;
  description: RichTextField;
  image: ImageField;
  link: LinkField;
  title: Field<string>;
}

export type BannerProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BannerFields;
};

const Banner = ({ fields }: BannerProps): JSX.Element => {
  //Handle Classname as per sitecore position
  const alignmentClass =
    fields?.contentPosition?.value.trim().toLowerCase() === 'left'
      ? 'justify-start'
      : fields?.contentPosition?.value.trim().toLowerCase() === 'right'
      ? 'justify-end'
      : 'justify-center';
  // console.log('Banner || alignmentClass :', alignmentClass);

  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className={clsx(
        'bg-theme-bg',
        'relative',
        'h-screen',
        'max-h-full',
        'w-full',
        'flex',
        alignmentClass
      )}
      data-component="authorable/general/banner"
      data-testid="Banner"
    >
      {/* Image Section */}
      <ImageHelper className={clsx('object-cover', 'z-0')} image={fields?.image} fill={true} />
      {/* Content Section */}
      <div
        className={clsx(
          'z-1',
          'absolute',
          'top-1/2',
          '-translate-y-1/2',
          'md:w-1/3',
          'flex',
          'flex-col',
          'items-center',
          'gap-2',
          'p-5',
          'm-2',
          'bg-black',
          'bg-opacity-20',
          'rounded-lg',
          'backdrop-blur-sm',
          'shadow-sm'
        )}
      >
        <Text
          text={fields?.title?.value}
          tag="h2"
          className={clsx('font-bold', 'text-center', 'text-lg', 'md:text-2xl', 'lg:text-3xl')}
        />
        <RichTextA11yWrapper field={fields?.description} className={clsx('text-center')} editable />
        <LinkWrapper
          field={fields?.link}
          className={clsx('text-blue-600', 'hover:text-blue-500')}
        />
        <LinkWrapper field={fields?.cta} className={clsx('btn-full')} />
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default Banner;
