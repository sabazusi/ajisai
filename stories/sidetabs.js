import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SideTabs from '../src/components/SideTabs';

const items = [
  {
    tab: (<img src="../resources/images/sample1.png" />),
    content: (<div>content A</div>)
  },
  {
    tab: (<img src="../resources/images/sample2.png" />),
    content: (<div>content B</div>)
  }
];

storiesOf('SideTabs', module)
  .add('panel', () => (
    <SideTabs
      items={items}
    />
  ));
