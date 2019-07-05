import React, { Component } from 'react';
import { Card } from 'antd';


class Experience extends Component {

    render() {

        const styles = {

            Experience: {
                backgroundColor: '#2f313e',
                color: 'white',
            },

            Content: {
                padding: 20,
                margin:20,
                color: 'white',
            }


        };

        return (
            <div style={styles.Experience}>
               <div style={styles.Content}>
                    <h1 style={styles.Experience}>
                        Experiences and Education
                    </h1>
                    <p>Education</p>
                    <div style={{ background: 'gray', padding: '30px' }}>
                        <Card title="Card title" bordered={true} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        </Card>
                    </div>
               </div>
            </div>
        );
    }
}

export default Experience;