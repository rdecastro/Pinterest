// Date:    8/5/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

describe('aum.Tile', function() {
  'use strict';

  var canvas, context, tile;

  beforeEach(function() {
    canvas = document.getElementById('main-canvas');
    context = canvas.getContext('2d');
    tile = new aum.Tile(context);
  });

  it('should be defined', function() {
    expect(tile).toBeDefined();
  });

  it('should have ability to render an image', function () {
    var image = new Image();
    image.src = '/images/image_1.jpg';

    expect(tile.renderImage(image, 0, 0)).toBeTruthy();
  });

});