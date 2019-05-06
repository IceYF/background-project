import React, { Component } from 'react';
import { Layout } from 'antd';
import { HashRouter,Route,Redirect,Switch } from 'react-router-dom';
import './App.css';
import Sider from './component/leftnav/Sider';
import Header from './component/components/Header';
import Footer from './component/components/Copyright';
import Books from './component/rightcon/books/Books';
import Members from './component/rightcon/members/Members';
import Sentiment from './component/rightcon/sentiment/Sentiment';
import Classification from './component/rightcon/classification/Classification';
import TheAdministrator from './component/rightcon/theAdministrator/TheAdministrator';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          {/* 左边菜单栏组件 => Sider */}
          <Sider />
          <Layout style={{ marginLeft: 200,position: 'relative',minHeight: 624,background: '#fff' }}>
            {/* 右边头部信息公共组件 => Header */}
            <Header />
            {/* 右边组件内容展示区域 */}
            <Layout.Content>
              <Switch>
                {/* 1. 漫画管理 路由界面 */}
                <Route path="/" exact component={Books}></Route>
                {/* 2. 会员管理 路由界面 */}
                <Route path="/Members" exact component={Members}></Route>
                {/* 3. 人气排行 路由界面 */}
                <Route path="/Sentiment" exact component={Sentiment}></Route>
                {/* 4. 分类排行 路由界面 */}
                <Route path="/Classification" exact component={Classification}></Route>
                {/* 5. 管理员账号 路由界面 */}
                <Route path="/TheAdministrator" exact component={TheAdministrator}></Route>
                {/* 路由界面重定向 */}
                <Redirect to="/"></Redirect>
              </Switch>
            </Layout.Content>
            {/* 右边底部版权信息组件 => Footer */}
            <Footer />
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}

export default App;