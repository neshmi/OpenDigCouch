/**
 * this file contains the json representation for rewrite rules
**/
[
  { // rewriting / to index.html
    "from":"/",
    "to":"index.html",
    "method":"GET",
    "query":{}
  },
  { // keeping relative urls sane
    "from":"/*",
    "to":"/*"
  },
  {
    "from": "resources/*",
    "to": "resources/*"
  },
  {
    "from": "/views/fields/index.html",
    "to": "views/fields/index.html"
  },
  {
    "from": "models/*",
    "to": "modes/*"
  },
  {
    "from": "controllers/*",
    "to": "controllers/*"
  },
  {
    "from": "css/*",
    "to": "css/*"
  },
  {
    "from": "/views/*",
    "to": "views/*"
  },
  {
    "from": "fields/*",
    "to": "fields/*"
  },
  {
    "from": "css/*",
    "to": "css/*"
  }
]
