// Date:    8/5/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

var aum = aum || {};

(function (namespace) {
  'use strict';

  namespace.Tile = function (context) {
    this.context = context;
    this.defaultImageWidth = 250;
    this.defaultImageHeight = 350;
  };

  namespace.Tile.prototype.renderImage = function (img, topX, topY) {
    this.context.drawImage(img, 0, 0, this.defaultImageWidth, this.defaultImageHeight,
      topX, topY, this.defaultImageWidth, this.defaultImageHeight);
    return true;
  };

}(aum));