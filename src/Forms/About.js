import React, { Component } from 'react';
import Logo from '../Image/60751952_2346240132104460_6796298400275890176_n.jpg';

class About extends Component {
    render() {

        const styles = {

            About: {

                fontFamily: 'Ubuntu',
                color: '#3f3d5e',
                margin: '50px',
                padding: '30px',

            },

            Image: {

                float: 'left',
                paddingRight: '5%',
                overflow: 'auto',
                zIndex: 1000 

            },


            Info: {

                textAlign: 'left',
                p: {
                    letterSpacing: '2px',
                    color: '#2f313e'
                }
            }

        };


        return (
            <React.Fragment>
                <div style={styles.About}>
                
                    <div style={styles.Image}>
                        <img 
                            src={Logo}
                            width="500" 
                            height="400"
                            alt="zxc"
                        />
                    </div>
                    <div style={styles.Info}> 
                            <h2>WHO IM I?</h2>
                            <h1>Passionate about Android and Web development</h1>
                            <p style={styles.Info.p}> 
                                I'm a Fullstack Developer based in the Philippines. 
                                I am a dreamer and a fanatic of all digital things. 
                                I like to create something beautiful looking, using my imagination. 
                                I prefer aesthetics over functionalities, when it comes to web design.
                            </p>
                            <p style={styles.Info.p}> 
                                I have a Bachelor Degree in Information Technology from The Fisher Valley College.                            </p>
                            <p style={styles.Info.p}> 
                                I am flexible, open-minded, observant and willing to work under pressure. 
                                I am open to new opportunities and willing to do everything to accomplish the goal.
                            </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;