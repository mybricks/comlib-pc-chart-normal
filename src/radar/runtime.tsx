import React, { useEffect, useState } from 'react';
import { Radar } from '@ant-design/charts';
import { Data, InputIds, MockData } from './constants';

export default function ({ data, env, inputs, style }: RuntimeParams<Data>) {
  const [dataSourceInRuntime, setRuntimeDataSource] = useState([]);

  useEffect(() => {
    if (env.runtime) {
      inputs[InputIds.SetData]((val) => {
        setRuntimeDataSource(val);
      });
    }
  }, []);

  return (
    <Radar
      {...style}
      {...data.config}
      data={env.edit ? MockData[data.subType] : dataSourceInRuntime}
      key={env.edit ? JSON.stringify(data.config) : undefined}
    />
  );
}
