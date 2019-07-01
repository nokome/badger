# Badger

SVG badges for things that [Shields](https://shields.io/) and [Badgen](https://badgen.net/) don't provide.

## Badges

### `codecov-folder`

Displays the code coverage from CodeCov for a folder within a Github repo. e.g

- https://badger.nokome.now.sh/stencila/encoda/src/codecs/docx ![](https://badger.nokome.now.sh/stencila/encoda/src/codecs/docx)
- https://badger.nokome.now.sh/stencila/dockta ![](https://badger.nokome.now.sh/stencila/encoda/src/codecs/docx)

## Development and deployment

To start a development environment locally which replicates the production environment:

```bash
npx now dev
```

For a staging deployment:

```bash
npx now
```

For production deployment:

```bash
npx now --target production
```

If pushing or merging to the default branch, your project will be deployed and aliased in a production environment, automatically.

## Acknowledgements

- https://www.npmjs.com/package/badgen
- https://zeit.co/now
