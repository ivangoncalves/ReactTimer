var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <Clock totalSeconds={0}/>
        </div>
      </div>
    );
  }
});

module.exports = Timer;
