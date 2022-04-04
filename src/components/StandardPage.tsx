import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function StandardPage(props: { children: React.ReactNode }) {
  return (
    <>
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  )
}
