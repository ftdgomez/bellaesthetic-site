import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export class MessengerChat extends Component {
  render() {
    return (
      <FacebookProvider appId="845685419375586">
        <CustomChat  pageId="182627661817675" minimized={false}/>
      </FacebookProvider>    
    );
  }
}

