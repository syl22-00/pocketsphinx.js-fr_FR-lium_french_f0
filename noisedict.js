
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
fileData0.push.apply(fileData0, [60, 115, 62, 32, 83, 73, 76, 10, 60, 47, 115, 62, 32, 83, 73, 76, 10, 60, 115, 105, 108, 62, 32, 83, 73, 76, 10, 91, 98, 93, 32, 43, 98, 43, 10, 91, 109, 117, 115, 93, 32, 43, 109, 117, 115, 43, 10, 91, 105, 93, 32, 43, 105, 43, 10, 91, 114, 105, 114, 101, 93, 32, 43, 114, 105, 114, 101, 43, 10, 91, 101, 117, 104, 93, 32, 101, 101, 32, 101, 101, 32, 10]);
Module['FS_createDataFile']('/lium_french_f0', 'noisedict', fileData0, true, true);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
