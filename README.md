PocketSphinx.js LIUM F0 French acoustic model bower package
-----------------------------------------------------------

This is the bower package for the LIUM F0 French acoustic model to be used with `pocketsphinx.js`. 

This is an acoustic model for French, trained on broadcast news audio. It is available on sourceforge, on the [CMU Sphinx repository](http://cmusphinx.org). Is should be used with audio recorded at 16kHz.

This bower package depends on `pocketsphinx.js-lib` which contains the library, without any language-specific file, such as acoustic or language model.

# 1. usage

For general usage see the docs of the base library (once installed, in `bower_components/pocketsphinx.js-lib/README.md`).

Following are the specific for that model.

a. Loading the acoustic model

The files must be loaded in the recognizer, with a call to the "load" command prior to initialization. The following file names should be used:

```javascript
data = {command: 'load', data: ["feat.params.js", "mdef.js", "means.js", "noisedict.js", "mixture_weights", "transition_matrices.js", "variances.js"].map(function(x) {return "../pocketsphinx.js-fr_FR-lium_french_f0/" + x;}
```

b. Initializing the recognizer

At init time, this model can be selected with:

```javascript
["-hmm", "lium_french_f0"]
```

c. Setting the sample rate

The recorder should be initialized with the correct sample rate, 8kHz:

```javascript
outputSampleRate: 16000
```

## License

These files are compiled versions of the acoustic models available on CMU sphinx repository. The licensing terms are available in the original package and are the same as other CMU Sphinx software.