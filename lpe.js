(function(window) {
  var $P = {}, _$P_ = null;

  /*
      noConflict function
   */
  $P.noConflict = function() {
    window.$P = _$P_;
    return $P;
  }

  _$P_ = window.$P;
  window.$P = $P;

  // for loading with the AMD style module loader
  if (!!window.define && !!window.define.amd) {
    define('lpever', function() {
      return $P.noConflict();
    });
  }

  // for loading in Node.js
  if (!!module) {
    module.exports = $P.noConflict();
  }
})(window);