var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function (){
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){  //react class
    //se o novo valor for diferente do anterior.. lembrando que esta funcao
    //é chamada se qualquer valor for alterado.
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >=0 ? newCount : 0
      });
    }, 1000); //second parameter is the time.. 1000ms.
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'  //para ouvir este componente usa o componentDidUpdate
    });
  },
  render: function(){
    var {count} = this.state;
    return (
      <div>
        <div>
          <Clock totalSeconds={count}/>
          <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        </div>
      </div>
    );
  }
});

module.exports = Countdown;
