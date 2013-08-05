// Date:    8/5/13
// Author:  Ray Joseph De Castro
// Company: Advanced Upward Motion

var pinterest = pinterest || {};

window.onload = function () {
  pinterest.renderTiles();
};

pinterest.renderTiles = function () {
  var tileWidth = 236;
  var tileSpacing = 20;

  pinterest.getDataFromRestApi();

  // Temporarily hard coded while we are working on wiring up the rest api
  pinterest.renderTile(tileSpacing, 0);
  pinterest.renderTile(tileWidth + tileSpacing * 2, 0);
  pinterest.renderTile(tileWidth * 2 + tileSpacing * 3, 0);
}

pinterest.getDataFromRestApi = function () {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/api/', false);
  request.send();
  request.onreadystatechange = pinterest.getResponseWhenReady(request);
}

pinterest.getResponseWhenReady = function (request) {

  if (isRequestOperationDone() && isResponseDefined()) {
    renderTileFromResponseData();
  }

  function isRequestOperationDone() {
    return request.readyState === 4;
  }

  function isResponseDefined() {
    return request.responseText !== undefined;
  }

  function renderTileFromResponseData() {
    var responseJson = JSON.parse(request.responseText);

    // TODO: Render tiles based on responseJson Information, currently logging json data to console
    console.log(responseJson);
  }
}

pinterest.renderTile = function (originX, originY) {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext("2d");
  var imageWidth = 236;
  var imageHeight = 350;
  var lineColor = '#b7b7b7';
  var commentHeight = 50;
  var repinHeight = 50;
  var boardHeight = 50;

  context.strokeStyle = lineColor;
  context.strokeRect(originX, originY, imageWidth, imageHeight);
  context.strokeRect(originX, imageHeight, imageWidth, commentHeight);
  context.strokeRect(originX, imageHeight + commentHeight, imageWidth, repinHeight);
  context.strokeRect(originX, imageHeight + commentHeight + repinHeight, imageWidth, boardHeight);
};