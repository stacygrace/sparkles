import React from 'react';
import {Sparkles} from './lib';
import styled from "styled-components";

function App() {

    return (
        <Layout>
            <h1>
                <Sparkles colors={"rainbow"}>
                    Sparkle Sparkle! <span role="img" aria-label="heart-face-emoji">😍</span>
                </Sparkles>
            </h1>
        </Layout>
    )
}

export default App;

const Layout = styled.main`
    display: grid;
    place-items: center;
    `