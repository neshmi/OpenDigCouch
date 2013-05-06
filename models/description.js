(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.Description = (function(_super) {
    __extends(Description, _super);

    function Description() {
      _ref = Description.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Description.prototype.descriptionFile = function() {
      var response;

      response = null;
      $.ajax({
        type: "GET",
        url: "resources/descriptions.json",
        datatype: 'json',
        async: false,
        success: function(data, textStatus, jqHXR) {
          return response = data;
        }
      });
      return response;
    };

    return Description;

  })(Batman.Model);

}).call(this);
