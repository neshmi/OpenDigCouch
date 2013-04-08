(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.GeneralLocusView = (function(_super) {
    __extends(GeneralLocusView, _super);

    function GeneralLocusView() {
      _ref = GeneralLocusView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    GeneralLocusView.prototype.render = function() {
      var description, descriptionFile, general_item, list_item, locus, locus_data, node, _i, _len, _ref1;

      description = new OpenDig.Description;
      descriptionFile = description.descriptionFile();
      locus = this.context.get('locusData');
      node = $(this.get('node'));
      _ref1 = descriptionFile.general_information;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        general_item = _ref1[_i];
        locus_data = locus[general_item.key];
        list_item = $("<dt class='text-success'>" + general_item.label + "</dt><dd>" + locus_data + "</dd>");
        if (locus_data) {
          node.append(list_item);
        }
      }
      return GeneralLocusView.__super__.render.apply(this, arguments);
    };

    return GeneralLocusView;

  })(Batman.View);

}).call(this);
