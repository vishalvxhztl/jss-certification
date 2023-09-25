/**
 * This Layout is needed for Starter Kit.
 */

// Global
import {
  Placeholder,
  // getPublicUrl,
  LayoutServiceData,
  // Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

// Local
import Scripts from 'src/Scripts';
import HeadMeta from '../helpers/HeadMeta';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.

interface LayoutProps {
  layoutData: LayoutServiceData;
}

// export interface RouteFields {
//   [key: string]: unknown;
//   Title?: Field;
// }

const PageLayout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  // const fields = route?.fields as RouteFields;
  // const fields = route?.fields;

  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  return (
    <>
      <Scripts />
      <HeadMeta route={route} />
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;
