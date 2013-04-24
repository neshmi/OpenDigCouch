(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.SquaresController = (function(_super) {
    __extends(SquaresController, _super);

    function SquaresController() {
      _ref = SquaresController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SquaresController.prototype.routingKey = 'squares';

    SquaresController.prototype.show = function(params) {
      var endkey, response, startkey;

      response = null;
      this.square = params.id;
      this.square_label = "Square " + this.square + " - Loci";
      startkey = 'startkey=["' + this.square + '"]';
      endkey = 'endkey=["' + this.square + "\\ufff0" + '"]';
      $.ajax({
        type: "GET",
        async: false,
        cache: false,
        url: '_view/by_square?group=true&' + startkey + '&' + endkey,
        success: function(data, textStatus, jqHXR) {
          return response = JSON.parse(data).rows;
        }
      });
      this.loci = response;
      return this.render({
        source: "squares/show.html?" + ((new Date).getTime())
      });
    };

    return SquaresController;

  })(OpenDig.ApplicationController);

}).call(this);
