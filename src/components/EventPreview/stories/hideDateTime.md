## Hidden Event Start Datetime and End Datetime

<!-- STORY -->

#### Usage:

```typescript jsx
import React from 'react';
import { Event } from '@cognite/sdk';
import { EventPreview } from '@cognite/gearbox';

function ExampleComponent(props) {
  const onShowDetails = (event: Event) = {};

  return (
    <EventPreview 
      eventId={4650652196144007}
      onShowDetails={onShowDetails}
      hideProperties={['startTime', 'endTime']}
    />
  );

}
```