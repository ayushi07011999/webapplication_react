import React from "react";
//import "./style.css"
//import Examlist from "./Component/Examlist"
//import { render } from 'react-dom';




export default class Ques extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: [],
      data2: [],
      newdata:props.nameid
    };
     //this.click = this.click.bind(this)
     //console.log(this.state.newdata);
     console.log("hfuryfrf");
  }

  componentDidMount() {
    fetch(
      "https://www.exambazaar.com/api/coding-round/routes/exam-info/7300393236"
    ).then(resp => {
      resp.json().then(result => {
        console.warn(result.data);
        this.setState({ data1: result.data.streams, data2: result.data.exams});

        console.log(this.state.newdata);
      });
    });
  }


render()
  {
   // const newdata = {this.state.newdata};

   return(
     <div>{

    this.state.data1?
     this.state.data1.map((k,i)=>(
        if( k._id=={this.state.newdata}){ 
           return(<p>{k.name}</p>)
              }
         else{}     
        
              
           
         

     )):null
     }

    //console.log("hello world")
    }
     </div>
   );


  


  }
}
