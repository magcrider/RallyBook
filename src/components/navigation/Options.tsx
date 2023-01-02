import * as React from 'react';
import {Drawer} from 'react-native-paper';

const Options = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Options">
      <Drawer.Item
        label="Select PDF ..."
        icon="file-pdf-box"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Settings"
        icon="cog"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default Options;
