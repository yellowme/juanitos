import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ExampleComponent from './ExampleComponent';

storiesOf('components/ExampleComponent', module).add(
  'with default settings',
  () => {
    const name = text('name', 'juanito');

    return <ExampleComponent name={name} />;
  }
);
