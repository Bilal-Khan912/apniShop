import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layoutpage = (props) => {
  return (
    <div>
        <Header />
            <main style={{minHeight: '85vh'}}>
               {props.children}
            </main>
        <Footer />
    </div>
  )
}

export default Layoutpage
