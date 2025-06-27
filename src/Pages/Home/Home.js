import React from 'react'
import Layout from '../../components/Layouts/layout'
import '../../Styles/HomeStyle.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const Home = () => {
  return (
    <>
    <Layout>
      {/*Home Section Hero Banner */}
      <Section1 />

      {/*Home Section2 Hero Banner */}
      <Section2 />

      {/*Home Section3 Menu */}
      <Section3 />

      {/* {Home Section4 Promotion} */}
      <Section4 />

      {/* {Home Section5 Shop} */}
      <Section5 />

      {/* {Home Section6 Blog} */}
      <Section6 />

      {/* {Home Section6 Contact} */}
      <Section7 />
    </Layout>
    </>
  )
}

export default Home
