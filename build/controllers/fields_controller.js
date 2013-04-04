(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.FieldsController = (function(_super) {

    __extends(FieldsController, _super);

    function FieldsController() {
      return FieldsController.__super__.constructor.apply(this, arguments);
    }

    FieldsController.prototype.routingKey = 'fields';

    FieldsController.prototype.index = function() {};

    return FieldsController;

  })(OpenDig.ApplicationController);

}).call(this);
