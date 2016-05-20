// to render the compontens and test if they are working as expected
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require ('jQuery'); //just as in the webpack config files
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', ()=>{
  it('should exist', ()=> {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
      //the lenght is equal to the number of components if found

      it('should render Start when paused', () => {
          var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
          var $el = $(ReactDOM.findDOMNode(controls));
          var $pauseButton = $el.find('button:contains(Start)');

          expect($pauseButton.length).toBe(1);
          //the lenght is equal to the number of components if found
      });
    });
  });
});
