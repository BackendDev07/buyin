import React from 'react'
import { Banner, ProductListSlider } from '../components'
import Page from '../components/page/Page'
import Footer from '../components/footer/Footer'
import HyperX from '../components/hyperX/HyperX'

function Home() {

    return (
        <Page>
            <Banner />
            <ProductListSlider />
            <HyperX/>
            <Footer/>
        </Page>
    )
}

export default Home