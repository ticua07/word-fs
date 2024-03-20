# Word FS

![Main page](https://raw.githubusercontent.com/ticua07/word-fs/master/assets/main.png)

Save your files in a single DB, retrieve them anytime you want with a 3-word code

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── src/
│   ├── components/ - Svelte components here
│   ├── layouts/ - Layouts
│   └── pages/ - API, get/ and index pages here
│   └── utils/ - Utils, mostly word generating
│   └── db/ - DB's schema and singleton
```

This proyect uses svelte for more complicated tasks, like sending and retrieving files.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun dev-db` | Create and run a local database                     |
| `bun push` | Create database tables                     |
