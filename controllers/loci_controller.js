(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.LociController = (function(_super) {
    __extends(LociController, _super);

    function LociController() {
      _ref = LociController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    LociController.prototype.routingKey = 'loci';

    LociController.prototype.show = function(params) {
      var description_json, response;

      response = null;
      description_json = null;
      this.locus_param = params.locus_id;
      $.ajax({
        type: "GET",
        async: false,
        url: "resources/descriptions.json",
        success: function(data, textStatus, jqHXR) {
          return description_json = data;
        }
      });
      $.ajax({
        type: "GET",
        async: false,
        url: "_view/get_locus?key=\"" + this.locus_param + "\"",
        success: function(data, textStatus, jqHXR) {
          return response = JSON.parse(data).rows[0];
        }
      });
      console.log(description_json.description_types[response.value.locus_type]);
      this.locus = response.value;
      return this.render({
        source: "loci/show.html?" + ((new Date).getTime())
      });
    };

    return LociController;

  })(OpenDig.ApplicationController);

}).call(this);
