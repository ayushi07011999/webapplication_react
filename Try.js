import React from "react";
//import "./style.css"
//import Examlist from "./Component/Examlist"
//import { render } from 'react-dom';

export default class Try extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: [],
      data2 :[]
      
    };
    this.clickhandler = this.clickhandler.bind(this)
  }

  componentDidMount() {
    fetch(
      "https://www.exambazaar.com/api/coding-round/routes/exam-info/7300393236"
    ).then(resp => {
      resp.json().then(result => {
       console.warn(result.data);
        this.setState({ data1: result.data.streams , data2:result.data.exams });
        const data1 = window.data1;
      });
    });
  }


clickhandler()
{
  console.log("data1");
}





  render() {
    return (
     <div>
        <h>Streams</h><br/>
        {this.state.data1
          ? this.state.data1.map((item1, i) => (
              <button className="dropbtn">
                {item1.name}
                <br />
              </button>
            ))
          : null}

         <br/><br/>
          <h> Exams </h><br/>
          {this.state.data2
          ? this.state.data2.map((item2, i) => (
              <button className="dropbtn">
                {item2.name}
                <br />
              </button>
            ))
          : null}


      </div>

      <button onClick={this.clickhandler}>drop</button>
    );
  }
}
