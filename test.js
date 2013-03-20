var should = require('should'),
    Set    = require('./index');

describe('Set', function() {

  describe('#constructor', function() {
    it('should be intialized to empty', function() {
      var set = new Set();
      set.values().should.have.length(0);
    });
  });

  describe('#add', function() {
    it('should increase length when add element', function() {
      var set = new Set();
      set.add('ob');
      set.values().should.have.length(1);
    });
    it('should not add element twice', function() {
      var set = new Set();
      set.add('foo'); set.add('foo');
      set.values().should.have.length(1);
    });
    it('should add multiple elements', function() {
      var set = new Set();
      set.add('foo'); set.add('bar');
      var values = set.values();
      values.should.have.length(2);
      values.should.include('foo');
      values.should.include('bar');
    });
  });

  describe('#addAll', function() {
    it('should add all elements to array', function() {
      var set = new Set();
      set.addAll(['foo', 'bar']);
      var values = set.values();
      values.should.have.length(2);
      values.should.include('foo');
      values.should.include('bar');
    });
  });

  describe('#remove', function() {
    it('should remove element', function() {
      var set = new Set();
      set.add('foo');
      set.remove('foo');
      set.values().should.have.length(0);
    });
    it('should remove from empty set without error', function() {
      var set = new Set();
      set.remove('foo');
    });
  });

  describe('#values', function() {
    it('should work for multiple elements', function() {
      var set = new Set();
      set.add('foo'); set.add('bar');
      var values = set.values();
      values.should.have.length(2);
      values.should.include('foo');
      values.should.include('bar');
    });
  });
});
