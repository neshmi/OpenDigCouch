(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.Field = (function(_super) {
    __extends(Field, _super);

    function Field() {
      _ref = Field.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Field.resourceName = 'field';

    Field.persist(Batman.LocalStorage);

    Field.encode('key');

    Field.storageKey = "temp/field";

    return Field;

  })(Batman.Model);

}).call(this);
