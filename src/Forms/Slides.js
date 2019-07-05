import React, { Component } from 'react';
import { Carousel } from 'antd';
import gradPic  from '../Image/52964849_1454034658071455_9018853768757772288_n.jpg';
import michael from '../Image/60751952_2346240132104460_6796298400275890176_n.jpg';

class Slides extends Component {
     render() {
        
        const styles = {

            position: {
                marginTop: 50,
                padding: 0,
                top: 0,
            }
        }   
        return (
            <div style={styles.position}>              
               <Carousel
                    style={styles.position}
                    dots="true"
                    autoplay>
                <div>
                    <img
                        src={gradPic}
                        width="100%"  
                        height="500"
                        alt="Grad"
                        zIndex="1"
                    />
                   
                </div>
                <div>
                    <img 
                        src={michael}
                        width="100%"  
                        height="500"
                        alt="Grad"
                        zIndex="-1"
                    />
                </div>
                <div>
                    <img 
                        src={gradPic}
                        width="100%" 
                        height="500"
                        alt="Grad"
                        zIndex="-1"
                    />
                </div>
                <div>
                    <img 
                        src={michael}
                        width="100%" 
                        height="500"
                        alt="Grad"
                        zIndex="-1"
                    />
                </div>
            </Carousel>
            </div>
        );
    }
}

export default Slides;