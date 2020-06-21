/*import React from "react";

export default class Randomques extends React.Component{

constructor(props)
{
  super(props);

  this.state=
  {
     data1 : [],
    
     newid :{props.id}
  };
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

render()
{
   return (
<div>
    this.state.data1.map((s)=>(
      if(s==newid)
        {s.name}
    
      else{}

     
    )
    </div>
    );
    }
  }
    


*/
