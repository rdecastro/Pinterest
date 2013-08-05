// Date:    8/4/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

var aum = aum || {};

(function (namespace) {

  'use strict';

  namespace.Pinterest = function (context) {

    this.context = context;

  };

  namespace.Pinterest.prototype.render = function () {
    this.context.fillStyle = 'blue';
    this.context.fillRect(0, 0, 320, 480);
    return true;
  };

}(aum));