import Head from "next/head";
import React from 'react';

import {
  Anchor,
  Avatar,
  Box,
  Footer,
  Nav,
  Paragraph,
  Header, 
  Button,
  Menu,
  Carousel,
  Image,
  Grid,
  ResponsiveContext,
  Grommet,
  Text
} from "grommet";

import { grommet } from "grommet/themes";
import { deepMerge } from 'grommet/utils';

import { Github, Slack } from "grommet-icons";
import { Home as HomeIcon } from "grommet-icons";


const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 500
      },
      medium: {
        value: 800
      },
      large: 1500
    }
  }
});

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"]
};

const rows = {
  small: ["xsmall", "xsmall", "xsmall", "xsmall",],
  medium: ["xsmall", "xsmall" ],
  large: ["xsmall", "xsmall", ],
  xlarge: ["xsmall", "xsmall",]
};

const areas = {
  small: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [0, 1], end: [0, 1] },
    { name: "three", start: [0, 2], end: [0, 2] },
    { name: "four", start: [0, 3], end: [0, 3] }
  ],
  medium: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [0, 1], end: [0, 1] },
    { name: "four", start: [1, 1], end: [1, 1] }
  ],
  large: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [0, 1], end: [0, 1] },
    { name: "four", start: [1, 1], end: [1, 1] }
  ],
  xlarge: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [0, 1], end: [0, 1] },
    { name: "four", start: [1, 1], end: [1, 1] }
  ]
};

const ResponsiveGrid = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // also if areas is a simple array not an object of arrays for different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

export default function Home() {

  const gravatarLink =
    "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

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
          <Nav direction="row" background="brand" pad="medium">
  <Anchor href='work' label="work.js"/>
</Nav>
      <Box/>
      <Box height="medium" width="large" overflow="hidden" alignSelf="center" pad="large"> 
  <Carousel fill>
    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
  </Carousel>
      </Box>
      <Grommet theme={customBreakpoints}>
      <Box>
        <ResponsiveGrid
          rows={rows}
          columns={columns}
          gap="small"
          areas={areas}
          margin="medium"
        >
          <Box
            gridArea="one"
            background="neutral-2"
            justify="center"
            align="center"
          >
            <strong>Box 1</strong>
          </Box>
          <Box
            gridArea="two"
            background="neutral-3"
            justify="center"
            align="center"
          >
            <strong>Box 2</strong>
          </Box>
          <Box
            gridArea="three"
            background="neutral-4"
            justify="center"
            align="center"
          >
            <strong>Box 3</strong>
          </Box>
          <Box
            gridArea="four"
            background="neutral-4"
            justify="center"
            align="center"
          >
            <strong>Box 4</strong>
          </Box>
        </ResponsiveGrid>
      </Box>
    </Grommet> 
    <Footer background="brand" pad="medium">
      <Text>Copyright</Text>
        <Anchor label="About" />
    </Footer>
    </Box>
    </Box>
  );
}
