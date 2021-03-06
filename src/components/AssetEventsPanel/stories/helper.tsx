// Copyright 2020 Cognite AS
import { CogniteEvent } from '@cognite/sdk';
import React, { FC } from 'react';
import { fakeEvents, MockCogniteClient, sleep } from '../../../mocks';
import { ClientSDKProvider } from '../../ClientSDKProvider';
import {
  AssetEventsPanelProps,
  AssetEventsPanelStyles,
  EventAddonsProp,
  EventMetadataRenderer,
} from '../interfaces';

class CogniteClient extends MockCogniteClient {
  events: any = {
    list: () => ({
      autoPagingToArray: async () => {
        await sleep(1000);
        return fakeEvents;
      },
    }),
  };
}

const client = new CogniteClient({ appId: 'gearbox test' });

export const customColumns = [
  {
    title: 'Name',
    dataIndex: 'typeAndSubtype',
    key: 'typeAndSubtype',
  },
  {
    title: 'Custom Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'From',
    dataIndex: 'start',
    key: 'start',
  },
  {
    title: 'To',
    dataIndex: 'end',
    key: 'end',
  },
];

export const customStyle: AssetEventsPanelStyles = {
  table: { border: '1px solid red' },
  tableRow: { borderBottom: '2px solid #999' },
  tableCell: { backgroundColor: '#DDD' },
};

export const decorators = [
  (storyFn: any) => (
    <ClientSDKProvider client={client}>{storyFn()}</ClientSDKProvider>
  ),
];

export const handleAssetEventsLoaded = (events: CogniteEvent[]) =>
  console.log(events);

export const renderEventMetadata: EventMetadataRenderer = (
  event: EventAddonsProp
) => {
  const { metadata = {} } = event;
  const { sourceId = 'N/A', source = '' } = metadata;

  return (
    <div key={event.id} id={event.id.toString()}>
      <b>{sourceId}</b>: <i>{source}</i>
    </div>
  );
};

export const ComponentProps: FC<AssetEventsPanelProps> = () => <></>;
