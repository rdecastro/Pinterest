// Date:    8/4/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

describe('aum.Pinterest', function() {
  'use strict';

  var canvas, context, pinterest;

  beforeEach(function() {
    canvas = document.getElementById('main-canvas');
    context = canvas.getContext('2d');
    pinterest = new aum.Pinterest(context);
  });

  it('should be defined', function() {
    expect(pinterest).toBeDefined();
  });

  it('should have a render function', function() {
    expect(pinterest.render).toBeDefined();
  });

  it('render function should return true', function () {
    expect(pinterest.render()).toBe(true);
  });

});
