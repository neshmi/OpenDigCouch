(function() {
  var OpenDig,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig = (function(_super) {

    __extends(OpenDig, _super);

    function OpenDig() {
      return OpenDig.__super__.constructor.apply(this, arguments);
    }

    OpenDig.set('mission', 'fight crime');

    OpenDig.root('fields#index');

    return OpenDig;

  })(Batman.App);

  window.OpenDig = OpenDig;

}).call(this);
