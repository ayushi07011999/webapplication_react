import React from "react";
//import "./style.css"
//import Examlist from "./Component/Examlist"
//import { render } from 'react-dom';
//import {Ques} from "./Ques";

export default class Examlist extends React.Component {
  constructor() {
    super();

    this.state = {
      data1: [],
      data2: []
    };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.exambazaar.com/api/coding-round/routes/exam-info/7300393236"
    ).then(resp => {
      resp.json().then(result => {
        console.warn(result.data);
        this.setState({ data1: result.data.streams, data2: result.data.exams });
      });
    });
  }

  click(n) {
    
      console.log(n)
      alert("examid is :"+ n)
    //return <Ques nameid={this.n} ></Ques>
  }

  render() {
    return (
      <div>
        <h>Streams</h>
        <br />
        {this.state.data1
          ? this.state.data1.map((item1, i) => (
              <button
                className="dropbtn"
                value={item1._id}
                onClick={e => this.click(e.target.value)}
              >
                {item1.name}
                <br />
              </button>
            ))
          : null}

        <br />
        <br />
        <h> Exams </h>
        <br />
        {this.state.data2
          ? this.state.data2.map((item2, i) => (
              <button className="dropbtn" value={item2._id}
              onClick={e => this.click(e.target.value)}>
                {item2.name}
                <br />
              </button>
            ))
          : null}
      </div>
    );
  }
}
