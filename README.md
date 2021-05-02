# @tufan-io/tufan-pkg-fetch

This is a wrapper around [tufan-io/pkg-fetch](https://github.com/tufan-io/pkg-fetch), to allow custom github actions to build the requisite binaries. Used by [tufan-io/pkg](https://github.com/tufan-io/pkg).

## Installation

```
npm i @tufan-io/tufan-pkg-fetch
```

## Publish + Rebuild
Publishing a new version of the module involves a two step process:

1. `npm publish` to actually publish the module
2. Trigger a manual rebuild of the binaries by clicking the [Run Workflow](https://github.com/tufan-io/tufan-pkg-fetch/actions/workflows/tufan.yml) button. 
