(function() {
  var OpenDig, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig = (function(_super) {
    __extends(OpenDig, _super);

    function OpenDig() {
      _ref = OpenDig.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    OpenDig.set('media_server', 'http://media.opendig.org');

    OpenDig.set('site', 'umayri');

    OpenDig.root('fields#index');

    OpenDig.resources('fields');

    OpenDig.resources('squares');

    OpenDig.route('loci/:locus_id', 'loci#show');

    Batman.DOM.Yield.clearAllStale = function() {
      return {};
    };

    return OpenDig;

  })(Batman.App);

  window.OpenDig = OpenDig;

}).call(this);
