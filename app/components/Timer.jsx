var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="small-centered middle-6 large-4">
          <Clock totalSeconds={0}/>
        </div>
      </div>
    );
  }
});

module.exports = Timer;
