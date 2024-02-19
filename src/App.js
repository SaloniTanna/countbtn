import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  };

  //On Load Check Data 
  componentDidMount(){
    let mydata = localStorage.getItem("counter");
    if(mydata)
    {
      this.setState({txt1:parseInt(mydata)});
    }
    else
    {
      this.setState({txt1:0});
    }
  }

  //Set Data
  incrementData(){
    let mydata = localStorage.getItem("counter");

    if(mydata)
    {
        var no1 = parseInt(mydata) +1;
        this.setState({txt1:no1});
        localStorage.setItem("counter",no1);
    }
    else
    {
      localStorage.setItem("counter",0);
      this.setState({txt1:0});
    }
  }

  //GetData
  decrementData(){
    let mydata = localStorage.getItem("counter");

    if(mydata)
    {
        var no1 = parseInt(mydata) -1;
        this.setState({txt1:no1});
        localStorage.setItem("counter",no1);
    }
    else
    {
      localStorage.setItem("counter",0);
      this.setState({txt1:0});
    }
  }

  //Remove Data
  removeData(){
    localStorage.removeItem('counter');
    this.setState({txt1:"Data Removed"});
  }
  render()
  {
        return(
          <div>
            <h2>Increment , Decrement & Remove Data</h2>
            Value is:  {this.state.txt1}
            <br />
            <button onClick={this.incrementData.bind(this)}>+Data</button>
            <button onClick={this.decrementData.bind(this)}>-Data</button>
            <button onClick={this.removeData.bind(this)}>RemoveData</button>
          </div>
        )
  }


}

export default App;
