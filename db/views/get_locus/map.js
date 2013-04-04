function(doc) {
  if(doc.field && doc.square && doc.code) {
    emit(doc.field + doc.square + ':' + doc.code, doc);
  };
}