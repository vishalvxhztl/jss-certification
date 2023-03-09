import {
  ComponentParams,
  ComponentRendering,
  SitecoreContextValue,
} from '@sitecore-jss/sitecore-jss-nextjs';

/**
 * Shared component props
 */
export type ComponentProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
};

/**
 * Component props with context
 * You can access `sitecoreContext` by withSitecoreContext/useSitecoreContext
 * @example withSitecoreContext()(ContentBlock)
 * @example const { sitecoreContext } = useSitecoreContext()
 */
export type ComponentWithContextProps = ComponentProps & {
  sitecoreContext: SitecoreContextValue;
};

/**
 * Optional prop used to denote the containing parent's max width
 * This equates to percentage width of the page
 */
export type ContainedBy = {
  containedBy?: 100 | 75 | 50 | 25;
};
