var React = require('react');
var PropTypes = React.PropTypes;

// it needs to receive the contdownStatus prop to know when to render.

var Controls = React.createClass({
  propTypes: {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return ()=> {
      this.props.onStatusChange(newStatus); //send info to the parent component.
    }
  },
  render: function() {
    var {countdownStatus} = this.props;

    var renderStartStopButton = ()=> {
      if (countdownStatus === 'started') {
        //render Clear
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>

    );
  }

});

module.exports = Controls;
