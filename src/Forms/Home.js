import React, { Component } from 'react';
import '../Styles/home.css';
import 'antd/dist/antd.css'; 

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        })
    };

    componentWillMount(){
        window.removeEventListener('scroll',null);
    };

    render() {

        return (
          <div className="Home">
            <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                <div className="nav_text">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">PORTFOLIO</a>
                    <a href="#">TECHNOLOGIES</a>
                    <a href="#">SKILLS</a>
                </div>
            </div>
          </div>

        );
    }
}

export default Home;