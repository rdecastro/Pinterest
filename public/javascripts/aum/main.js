// Date:    8/4/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

var aum = aum || {};

var aum_pinterest_application;

(function (namespace) {
  'use strict';

  namespace.Main = function () {
  };

  namespace.Main.prototype.startApplication = function () {
    var canvas, context, pinterest;

    canvas = document.getElementById('main-canvas');
    context = canvas.getContext('2d');
    pinterest = new aum.Pinterest(context);
    return pinterest.render();
  };

}(aum));

aum_pinterest_application = new aum.Main();

window.onload = aum_pinterest_application.startApplication();