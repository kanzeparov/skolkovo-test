import React from 'react';
import {Table, Layout} from 'antd';
import {transactionsColumns} from './transaction-table-columns';
import openSocket from 'socket.io-client';

import './main-page.less';

const {Content} = Layout;

const BASE_URL = `http://${process.env.REACT_APP_BACKEND_URL}`;

interface UiTransaction {
  transactionId: string;
  time: Date;
  from: string;
  to: string;
  price: number;
  amount: number;
  cost: number;
  period: number;
  approved: boolean;
  endPeriodBalanceFrom: boolean;
  endPeriodBalanceTo: boolean;
}

interface MainPageProps {
  etherAddress?: string;
}

interface MainPageState {
  data: UiTransaction[];
  total: number;
  page: number;
  pageSize: number;
  isClosingChannels: boolean;
  socket: any
}


class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      total: 0,
      pageSize: 50,
      isClosingChannels: false,
      socket: null
    };
  }

  async componentDidMount() {
    this.setState({
      socket: openSocket(`${BASE_URL}`)
    }, () => {
      this.state.socket.on("msg", this.socketMessage.bind(this))
    })
  }

  socketMessage(event: any) {
    this.setState({
      data: [event, ...this.state.data]
    })
  }

  render() {
    const {data} = this.state;

    return (
      <Content className="main-page__content-container">
        <div className="main-page__content">
          <Table
            //   pagination={{
            //   pageSize, total,
            //   position: ['bottomLeft'],
            //   current: page,
            //   onChange: this.fetchPage.bind(this),
            //   onShowSizeChange: this.onChangePageSize.bind(this)
            // }}
            scroll={{x: 1240, y: "calc(100vh - 328px)"}}
            rowKey="ts"
            columns={transactionsColumns}
            dataSource={data}/>
        </div>
      </Content>
    );
  }

  componentWillUnmount(): void {

  }
}

export default MainPage;
