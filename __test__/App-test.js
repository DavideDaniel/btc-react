var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

describe('About', function(){
	it('loads without problems', function(){
		require('../app/components/About');
	});
	it('renders without problems', function(){
		var About = TestUtils.renderIntoDocument(<About/>);
		expect(About).toExist();
	});
});

describe('Home', function(){
	it('loads without problems', function(){
		require('../app/components/Home');
	});
});

describe('Main', function(){
	it('loads without problems', function(){
		require('../app/components/Main');
	});
});

describe('Menu', function(){
	it('loads without problems', function(){
		require('../app/components/Menu');
	});
	it('renders without problems', function(){
		var Menu = TestUtils.renderIntoDocument(<Menu/>);
		expect(Menu).toExist();
	});
});