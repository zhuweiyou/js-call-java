const java = require("java")

java.asyncOptions = {
    asyncSuffix: undefined,     // Don't generate node-style methods taking callbacks
    syncSuffix: "",              // Sync methods use the base name(!!)
    promiseSuffix: "Promise",   // Generate methods returning promises, using the suffix Promise.
    promisify: require("util").promisify, // Needs Node.js version 8 or greater, see comment below
    ifReadOnlySuffix: "_alt",
}

java.classpath.push('helloworld.jar')
java.classpath.push('jsoup-1.17.2.jar')
// console.log(java)

module.exports = java
