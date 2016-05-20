var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');


var Countdown = require('Countdown');

describe('Countdown', ()=> {
  it ('sould exist', ()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      //the variables were updated
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      //we need to see if the count was decreased
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
      }, 1001); //1 segunto e 1 milésimo
      done();
      //se for usar um teste com tempo tem que colocar a funcao done e incluir como parametro.

    });

    it('should never count less than zero', (done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
      }, 3000);
      done();
    });
  });

});


//
