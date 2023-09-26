//CommonJs. Every file is a module (by default)
//Modules - encapsulated Code (only share minimum)

const names = require('./4names')
const sayHi = require('./5utils')
require('./7-mind-grenade')
sayHi('Susan')
sayHi(names.jalah)
sayHi(names.jibril)