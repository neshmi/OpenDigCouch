(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  OpenDig.ApplicationController = (function(_super) {
    __extends(ApplicationController, _super);

    function ApplicationController() {
      _ref = ApplicationController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ApplicationController.prototype.clearAllYields = true;

    Batman.DOM.Yield.clearAllStale();

    if (__indexOf.call(document.location.pathname.split("/"), "_design") >= 0) {
      Batman.config.viewPrefix = "" + (document.location.pathname.split('/')[1]) + "/_design/opendig_couch/views";
    }

    return ApplicationController;

  })(Batman.Controller);

}).call(this);
