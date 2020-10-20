export const transactionsColumns = [
  {
    title: 'ts',
    dataIndex: 'ts',
    ellipsis: true
  },
  {
    title: 'device',
    dataIndex: 'device'
  },
  {
    title: 'co',
    dataIndex: 'co'
  },
  {
    title: 'humidity',
    dataIndex: 'humidity'
  },
  {
    title: 'light',
    dataIndex: 'light',
    render: (value: boolean) => value ? "True" : "False"
  },
  {
    title: 'lpg',
    dataIndex: 'lpg'
  },
  {
    title: 'motion',
    dataIndex: 'motion',
    render: (value: boolean) => value ? "True" : "False"
  },
  {
    title: 'smoke',
    dataIndex: 'smoke'
  },
  {
    title: 'temp',
    dataIndex: 'temp'
  }
];
