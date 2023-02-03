import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div>
            <div className="container">
                    <div className="about">
                        <Typewriter
                            options={{
                                strings: ['Привет!', 'Это магазин, созданный на React JS!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                </div>
            </div>
        </div>
    );
};

export default About;