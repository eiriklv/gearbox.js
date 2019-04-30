## With Image

<!-- STORY -->

#### Usage:

```typescript jsx
import React from 'react';
import { SensorOverlay, SensorPosition } from '@cognite/gearbox';

function ExampleComponent(props) {
  const timeserieIds = [  8681821313339919 ];
  const handleClick = (timeserieId: number) => {};
  const handleSettingsClick = (timeserieId: number) => {};
  const handlePositionChange = (timeserieId: number, position: SensorPosition) => {};

  return (
    <SensorOverlay
      timeserieIds={ timeserieIds }
      colorMap={{ [8681821313339919]: 'orange' }}
      defaultPositionMap={{
        [8681821313339919]: {
          left: 0.2,
          top: 0.2,
          pointer: {
            left: 0.3,
            top: 0.4,
          },
        },
      }}
      onClick={action('onClick')}
      onSettingsClick={action('onSettingsClick')}
      onSensorPositionChange={action('onSensorPositionChange')}
    >
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-738495.jpg"
        width="100%"
      />
    </SensorOverlay>
  );

}
```