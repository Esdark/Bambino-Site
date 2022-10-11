// ===========================================================
// See tutorial at :
// https://css-tricks.com/animate-a-containers-on-mouse-over-using-perspective-and-transform/
// ===========================================================

(function () {
  // Init
  var containers = document.getElementById("containers"),
    inners = document.getElementById("inners");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };

  // Track the mouse position relative to the center of the containers.
  mouse.setOrigin(containers);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inners.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inners.offsetHeight / 2).toFixed(2),
      (mouse.x / inners.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inners.style.transform = style;
    inners.style.webkitTransform = style;
    inners.style.mozTranform = style;
    inners.style.msTransform = style;
    inners.style.oTransform = style;
  };

  //--------------------------------------------------------

  containers.onmousemove = onMouseMoveHandler;
  containers.onmouseleave = onMouseLeaveHandler;
  containers.onmouseenter = onMouseEnterHandler;
})();
