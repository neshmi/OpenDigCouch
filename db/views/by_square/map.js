function(doc){emit([doc.square, doc.code, doc._id, doc.locus_type, doc.designation, doc.age, '/loci/' + doc.field + doc.square + ':' + doc.code],doc.square);};