// Date:    8/5/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

describe('aum.Main', function() {
  'use strict';

  var main;

  beforeEach(function() {
    main = new aum.Main();
  });

  it('should be defined', function() {
    expect(main).toBeDefined();
  });

  it('should have a startApplication function', function() {
    expect(main.startApplication).toBeDefined();
  });

  it('startApplication function should return true', function () {
    expect(main.startApplication()).toBe(true);
  });

});
