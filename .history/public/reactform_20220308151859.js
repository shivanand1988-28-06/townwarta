

const React = require('react');

function Newform (){
    const name = "shiva";
       return( 
       <>
          <h1> hiiiii {name}</h1>
       </>
       );
     
     };
    const element = <Newform/> 
   
     ReactDOM.render(element,document.getElementById("root"));