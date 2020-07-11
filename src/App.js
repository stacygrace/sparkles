import React from 'react';
import {Sparkles, useRainbow } from './lib';

function App() {
    let config = {
        rainbowColors: ["hsl(50deg, 100%, 65%)","hsl(210deg, 100%, 65%)","hsl(340deg, 100%, 60%)"]
    }
    let colors = Object.values(useRainbow(config))

    return (
        <main className="container">
            <p><Sparkles color={colors}>Hello Beautiful! 😍 </Sparkles></p>
        </main>
    )
}

export default App;
