import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch, NavLink, useParams} from 'react-router-dom';

function Home(){
  return(
    <div>
        <h2>Home</h2>
        Home...
    </div>
  );
}

var contents = [
  {id:1 , title:'HTML', description: 'HTML is...'},
  {id:2 , title:'JS', description: 'JS is...'},
  {id:3 , title:'React', description: 'React is...'}
];

function Topic(){
  var params = useParams();
  console.log(params);
  var topic_id = params.topic_id;
  var selected_topic={
    title: 'Sorry',
    description: 'Not Found'
  };
  for (var i=0;i<contents.length; i++){
    if(contents[i].id ===Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params)
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}


function Topics(){

  var lis =[];
  for(var i =0; i<contents.length; i++){
    lis.push(
      <li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }

  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Switch>
        <Route path="/topics/:topic_id">
          <Topic></Topic>
        </Route>
      </Switch>
    </div>
  );
}



function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}


function App(){
  return(
  
    <div>
      <h1>Hello React Router Dom</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>

    </div>  
  );

}

ReactDom.render(<HashRouter><App /></HashRouter>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
