import React from 'react'
import Header from './Header'
import Section from './Section'
import Styled from 'styled-components'

function Home() {
    return (
        <Main>
            <Header />
            <Section bgImg="model-3.jpg" title="Model 3" description="Order Online for" descriptionLink="Touchless Delivery" rightBtn="Custom Order" leftBtn="Existing Inventory" />
            <Section bgImg="model-y.jpg" title="Model Y" description="Order Online for" descriptionLink="Touchless Delivery" rightBtn="Custom Order" leftBtn="Existing Inventory" />
            <Section bgImg="model-s.jpg" title="Model S" description="Order Online for" descriptionLink="Touchless Delivery" rightBtn="Custom Order" leftBtn="Existing Inventory" />
            <Section bgImg="model-x.jpg" title="Model X" description="Order Online for" descriptionLink="Touchless Delivery" rightBtn="Custom Order" leftBtn="Existing Inventory" />
            <Section bgImg="solar-panel.jpg" title="Solar Panels" description="Lowest Cost Solar Panels in America" rightBtn="Order Now" leftBtn="Learn More" />
            <Section bgImg="solar-roof.jpg" title="Solar Roof" description="Produce Clean Energy From Your Roof" rightBtn="Order Now" leftBtn="Learn More" />
            <Section bgImg="accessories.jpg" title="Accessories" rightBtn="Shop Now" />
        </Main>
    )
}

export default Home

const Main = Styled.main`
overflow-y:scroll;
scroll-snap-type: y mandatory;
height: 100vh;
overflow-x:hidden;
`
