var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it ('should exist', () => {
      expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if a valid seconds entered', ()=> {
      var spy = expect.createSpy();
      //render o componente e passa spy como parametro
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));
      //1. Set the value. since we want to create a valid insert, we need to create.
      countdownForm.refs.seconds.value = '109';
      //2. GEt the DOM. get the jquery selection and get the first DOM node.
      TestUtils.Simulate.submit($el.find('form')[0]);
      //3. Execute
      expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if a invalid seconds entered', ()=> {
      var spy = expect.createSpy();
      //render o componente e passa spy como parametro
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));
      //1. Set the value. since we want to create a valid insert, we need to create.
      countdownForm.refs.seconds.value = '109ab';
      //2. GEt the DOM. get the jquery selection and get the first DOM node.
      TestUtils.Simulate.submit($el.find('form')[0]);
      //3. Execute
      expect(spy).toNotHaveBeenCalled();
    });

});
