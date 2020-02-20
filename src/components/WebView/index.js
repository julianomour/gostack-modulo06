import React, { Component } from 'react';

import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default class MyWeb extends Component {
  render() {
    const { navigation } = this.props;
    const repo = navigation.getParam('repo');
    return <WebView source={{ uri: repo.html_url }} style={{ flex: 1 }} />;
  }
}
