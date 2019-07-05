import React, { Component } from 'react';
import '../Styles/Transition.css';
import { Progress } from 'antd';

class Skill extends Component {

    constructor(props){
        super(props);

        this.state = {
            percent: 20
        }


    }

    dataShow = () => {

        let getPercent = this.state.percent + 10;
        this.setState({
            percent: getPercent
        })
  
        console.log(this.state.progress)

    };

    render() {

        const style = {

           Skills: {
           },

           content: {
               padding: '20px',
           }

        };


        return (
            <div style={style.Skills}>
               <div style={style.content}>
               <button onClick={this.dataShow}>Programming</button>
                 <h1 style={style.Skills}>
                    Programming Languages
                </h1>
                 <h3 style={style.Skills}>
                     PHP
                     <Progress className="progress"
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={this.state.percent}
                        status="active"
                    />
                 </h3>
                 <h3 style={style.Skills}>
                     C#.NET
                     <Progress
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={99.9}
                        status="active"
                    />
                 </h3>
                 <h3 style={style.Skills}>
                     VB.NET
                     <Progress
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={99.9}
                        status="active"
                    />
                 </h3>
                 <h3 style={style.Skills}>
                     JAVASCRIPT (REACTJS)
                     <Progress
                        style={style.Skills}
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={99.9}
                        status="active"
                    />
                 </h3>
               </div>
             
            </div>
        );
    }
}

export default Skill;       