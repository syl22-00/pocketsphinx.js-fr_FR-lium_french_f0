
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'lium_french_f0', true, true);
fileData0 = [];
fileData0.push.apply(fileData0, [45, 102, 101, 97, 116, 32, 49, 115, 95, 99, 95, 100, 95, 100, 100, 10, 45, 97, 103, 99, 32, 109, 97, 120, 10, 45, 99, 109, 110, 32, 99, 117, 114, 114, 101, 110, 116, 10, 45, 118, 97, 114, 110, 111, 114, 109, 32, 110, 111, 32, 10, 45, 108, 111, 119, 101, 114, 102, 32, 49, 51, 51, 46, 51, 51, 51, 51, 52, 10, 45, 117, 112, 112, 101, 114, 102, 32, 54, 56, 53, 53, 46, 52, 57, 55, 53, 54, 10, 45, 110, 102, 105, 108, 116, 32, 52, 48, 10, 45, 110, 102, 102, 116, 32, 53, 49, 50, 10]);
Module['FS_createDataFile']('/lium_french_f0', 'feat.params', fileData0, true, true);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
