import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SideTabs from '../src/components/SideTabs';

const items = [
  {
    tab: (<img src="http://dummyimage.com/25/cca3d1/ff006f&text=1" />),
    content: (<div>content A</div>)
  },
  {
    tab: (<img src="http://dummyimage.com/25/64b05d/8a0700&text=2" />),
    content: (<div>content B</div>)
  }
];

storiesOf('SideTabs', module)
  .add('panel', () => (
    <SideTabs
      items={items}
    />
  ));
