function(doc) {
  var readings, reading;
  readings = {};

  if (doc.pails) {
    for (var pail in doc.pails) {
      for (var _reading in doc.pails[pail].readings) {
        reading = doc.pails[pail].readings[_reading];
        if(reading.count > 0){
         if (typeof readings[reading.age] === 'undefined') {
           readings[reading.age] = {};
         }
        
         if (typeof readings[reading.age][reading.pot_form] === 'undefined') {
          readings[reading.age][reading.pot_form] = 0;
         }
         readings[reading.age][reading.pot_form] += parseInt(reading.count);
        }
      }
    }
    emit(doc.field + doc.square + ":" + doc.code, readings);
  }
}