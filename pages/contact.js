import Head from "next/head";
import React from 'react';

import {
  Anchor,
  Box,
  Footer,
  Header, 
  Button,
  Menu,
  Text
} from "grommet";


import { Github, Slack } from "grommet-icons";
import { Home as HomeIcon } from "grommet-icons";


export default function Contact() {


  return (
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
    >
     <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box flex role="main" pad={{ vertical: "large" }}>
        <Header background="brand">
          <Button icon={<HomeIcon />} hoverIndicator />
          <Menu label="account" items={[{ label: 'logout' }]} />
          </Header>
      <Box/> 
      

    <Footer background="brand" pad="medium">
      <Text>Copyright</Text>
        <Anchor label="About" />
    </Footer>
    </Box>
    </Box>
  );
}
