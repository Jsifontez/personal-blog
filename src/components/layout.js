import React from "react"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Header />
        <main style={{paddingTop: '2.5rem'}}>{children}</main>
        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 170px);
  background-color: white;
`

export default Layout
