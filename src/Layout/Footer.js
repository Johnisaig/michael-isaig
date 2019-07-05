import React from 'react';
import { Icon } from 'antd'
 

class Footer extends React.Component {
    render() {

        const styles = {
            FooterName: {
                textAlign: 'Center',
                color: 'white',
            },
            container1: {
                fontFamily: 'Ubuntu',
                backgroundColor: '#171717',            
                color: 'white',
                position: 'relative',
                width: '100%',
                overflow: 'auto',
                margin: 0,
                bottom: 0,
            },
            Information: {
                color: 'white',
                fontSize: 12,
                marginLeft: '6%',
                
            },
            Social: {
                color: 'white',
                textAlign: 'Center',
                padding:'50px',
                margin: '50',
            }
        };

        return (
          <React.Fragment>
                <div style={styles.container1}>
                    <h1 style={styles.FooterName}>Footers!</h1>
                    <div style={styles.Information}>
                        <h1 style={{ color: 'white' }}>Contact Information</h1>
                        <h3 style={{ color: 'white' }}>
                             <Icon type="phone" rotate={100} style={{ fontSize:15, marginRight: 10 }}/>
                             {' '}+639558777197
                        </h3>
                        <h3 style={{ color: 'white' }}>
                            <Icon type="mail" style={{ fontSize:15, marginRight: 10  }} />
                            {' '}ISAIGMICHAEL30@GMAIL.COM
                        </h3>
                        <h3 style={{ color: 'white' }}>
                            <Icon type="environment" style={{ fontSize:15, marginRight: 10  }} />
                            {' '}TAGUIG CITY, PINAGSAMA PHASE-II, PHILIPPINES
                        </h3>
                    </div>
                    <div style={styles.Social}>
                        <hr/>
                        <h1 style={{ color: 'white' }}>Social</h1>
                        <Icon 
                            type="facebook"  
                            style={{ fontSize:30, marginRight: 10  }} 
                         />
                        <Icon 
                            type="youtube"   
                            style={{ fontSize:30, marginRight: 10  }} 
                        />
                        <Icon 
                            type="linkedin"  
                            style={{ fontSize:30, marginRight: 10  }} 
                        />
                        <Icon 
                            type="instagram" 
                            style={{ fontSize:30, marginRight: 10  }} 
                        />
                        <p>Copyright 2019 Contor | All Rigth Reverse | Powerded by: Michael </p>
                        <br></br>
                    </div>
                </div>
          </React.Fragment>
        );
    }
}
export default Footer;


