# Docs for Next.js

Minimalistic documentations page for Next.js web apps.

## Installation

```bash
git clone
yarn install
```

## Usage

This directory is a standalone Next.js web app. To see it run on `https://localhost:3000/docs`,

```bash
yarn run dev
```

To incorporate it in a Next.js web app,

1. Copy over the files in `components/`, `styles/`, `lib/docs`, `pages/docs/` into corresponding directories
2. Add `import "antd/dist/antd.css";` before other stylesheets in `pages/_app.js`

### docs/ structure

The docs is organized in an intuitive manner.

```
project
└───components
└───pages
└───docs
		│   page-one.md			// path: /docs/page-one
		│   page-two.md
		└───heading-one			// no corresponding path
				|   page-a.md		// path: /docs/heading-one/page-a
				│   page-b.md
				|   ...
		└───heading-two
				|		page-i.md
				|		page-ii.md
```

An example:

```
project
└───components
└───pages
└───docs
		│   getting-started.md			// path: /docs/page-one
		│   faq.md
		└───basic-features			// no corresponding path
				|   pages.md				// path: /docs/heading-one/page-a
				│   data-fetching.md
				|		...
```

### manifest.json

`docs/manifest.json` is the master document that decides which paths to pre-render at build time and what is displayed on the navigation menu. If there is a corresponding markdown file, `"key" ` value should refer to that `.md` file. Without `.md` ending in `"key"` value, `lib/docs` would only consider it as a heading and thus not render it.

manifest.json` takes on the following structure:

```
[
	{
		"title": "NAME",
		"key": "/path/to/desired/directory/or/file",
		"children": [
			{...recursive}
		]
	}
]
```

An example corresponding the aforementioned docs structure:

```json
[
  {
    "title": "Documentations",
    "key": "/docs",
    "children": [
      { "title": "Getting Started", "key": "/docs/getting-started.md" },
      {
        "title": "Basic Features",
        "key": "/docs/basic-features",
        "children": [
          {
            "title": "Pages",
            "key": "/docs/basic-features/pages.md"
          },
          {
            "title": "Data Fetching",
            "key": "/docs/basic-features/data-fetching.md"
          }
        ]
      },
      { "title": "FAQ", "key": "/docs/faq.md" }
    ]
  }
]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
