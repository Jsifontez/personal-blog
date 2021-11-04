import React from "react"

import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div style={{minHeight: 'calc(100vh - 170px)', backgroundColor: 'white'}}>
        <Header />
        <main style={{paddingTop: '2.5rem'}}>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
