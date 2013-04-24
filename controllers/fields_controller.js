(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.FieldsController = (function(_super) {
    __extends(FieldsController, _super);

    function FieldsController() {
      _ref = FieldsController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FieldsController.prototype.routingKey = 'fields';

    FieldsController.prototype.index = function(params) {
      var response;

      response = null;
      $.ajax({
        type: "GET",
        url: "_view/all_fields?group=true",
        datatype: 'json',
        async: false,
        cache: false,
        success: function(data, textStatus, jqHXR) {
          return response = JSON.parse(data).rows;
        }
      });
      return this.fields = response;
    };

    FieldsController.prototype.show = function(params) {
      var endkey, response, startkey;

      response = null;
      this.field = params.id;
      this.field_label = "Field " + this.field + " - Squares";
      startkey = 'startkey=["' + this.field + '"]';
      endkey = 'endkey=["' + this.field + "\\ufff0" + '"]';
      $.ajax({
        type: "GET",
        async: false,
        cache: false,
        url: '_view/by_field?group=true&' + startkey + '&' + endkey,
        success: function(data, textStatus, jqHXR) {
          return response = JSON.parse(data).rows;
        }
      });
      this.squares = response;
      return this.render({
        source: "fields/show.html?" + ((new Date).getTime())
      });
    };

    return FieldsController;

  })(OpenDig.ApplicationController);

}).call(this);
