// Global
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import { IconGallery, IconItem, Title, useOf } from '@storybook/blocks';

export const FaIconsBlock = ({ of }) => {
  return (
    <IconGallery>
      {console.log(Object.keys(FaIcons))}
      {Object.keys(FaIcons).map((key) => (
        <IconItem name={key}>
          <FontAwesomeIcon icon={FaIcons[key]} />
        </IconItem>
      ))}
    </IconGallery>
  );
};
