// to render the compontens and test if they are working as expected
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require ('jQuery'); //just as in the webpack config files
var TestUtils = require('react-addons-test-utils');


//Component we want to test
var Clock = require('Clock');

//Create the group
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('Render', () => {
    it('Should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));    // tem o elemento para usar jQuery
      var actualText = $el.find('.clock-text').text(); //this is what is actualy rendered
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it ('should format seconds', () => {
      //we need to render the componten
      var clock = TestUtils.renderIntoDocument(<Clock/>); //pass the JSX as we would render the Component
      var seconds = 615;
      var expected = '10:15';
      //store the result
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it ('should format seconds when min/sec are less than 10', () => {
      //we need to render the componten
      var clock = TestUtils.renderIntoDocument(<Clock/>); //pass the JSX as we would render the Component
      var seconds = 61;
      var expected = '01:01';
      //store the result
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

  });
});
