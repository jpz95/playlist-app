# Playlist app

Still determining what this will actually do..

## **Scripts**
### Compiles and hot-reloads for development
```
npm run start
```

### Compiles unit tests for Vue components and JavaScript modules.
```
npm run test
```

### Compiles *and hot-reloads* unit tests for Vue components and JavaScript modules.
```
npm run test:watch
```

### Compiles, minifies, and optimizes for production
```
npm run build
```

## **Project Structure (Top-level)**
| Folder | Description |
| --- | --- |
| `webpack` | webpack configuration that was built using principles from the [Create React App](https://create-react-app.dev/docs/folder-structure) project but applied to a Vue-based project. |
| `src` | Main entrypoint for the webapp. webpack will process these files to create development and production bundles. |
| `public` | Files that will be hosted and made public by the server. Contains the webapp's HTML template. |
