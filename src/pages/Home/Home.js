import React from 'react';
import Header from '../../core/Header';
import SideBar from '../../core/SideBar';
import {Container} from './components';

function Home(){
  return <Container>
    <SideBar>test</SideBar>
    <Container>
      <Header></Header>
      <section>
        <div>
          <span id="name"></span>
          <span id="description"></span>
        </div>
      </section>
    </Container>
  </Container>
}

export default Home;
