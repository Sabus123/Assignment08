import React from 'react';
import Hero from '../Components/Hero';
import LawyerContainer from '../Components/LawyerContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Hero></Hero>
            <LawyerContainer lawyer={data}></LawyerContainer>
        </div>
    );
};

export default Home;