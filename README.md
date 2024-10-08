# 🔺 next-antd-tailwind 🔺

## 📘 About

A boilerplate for Next.js integrated with Ant Design, tailwindcss and a lot of useful tools/library.

## 📝 Table of Contents

- [🔺 next-antd-tailwind 🔺](#-next-antd-tailwind-)
  - [📘 About](#-about)
  - [📝 Table of Contents](#-table-of-contents)
  - [📦 Template contains](#-template-contains)
  - [💎 Pre-loaded dependencies](#-pre-loaded-dependencies)
  - [📝 Versions (Last 2 Minor Version)](#-versions-last-2-minor-version)
    - [v0.4.2 - `2024-09-20`](#v042---2024-09-20)
    - [v0.4.1 - `2024-09-04`](#v041---2024-09-04)
    - [v0.4.0 - `2024-09-04`](#v040---2024-09-04)
    - [v0.3.3 - `2024-08-15`](#v033---2024-08-15)
    - [v0.3.2 - `2024-08-15`](#v032---2024-08-15)
    - [v0.3.1 - `2024-04-18`](#v031---2024-04-18)
    - [v0.3.0 - `2024-04-17`](#v030---2024-04-17)
    - [v0.2.6 - `2024-02-21`](#v026---2024-02-21)
    - [v0.2.5 - `2024-02-21`](#v025---2024-02-21)
    - [v0.2.4 - `2024-02-07`](#v024---2024-02-07)
    - [v0.2.3 - `2024-02-06`](#v023---2024-02-06)
    - [v0.2.2 - `2024-02-06`](#v022---2024-02-06)
    - [v0.2.1 - `2023-06-12`](#v021---2023-06-12)
    - [v0.2.0 - `2023-06-12`](#v020---2023-06-12)
    - [v0.1.0 - `2023-03-13`](#v010---2023-03-13)
    - [Version History](#version-history)
  - [📌 Get Started](#-get-started)
    - [Want some more ?](#want-some-more-)

## 📦 Template contains

- [x] ReactJS v18.3.x
- [x] Next.js v14.2.x
- [x] TailwindCSS v3.4.x
- [x] Ant Design v5.20.x
- [x] Containerized with Docker (`node:18-alpine` image)
- [x] CI/CD supported (`Jenkins` & `SonarQube`)
- [x] Helm command set for k8s
- [x] A bunch of tools/library (e.g. `axios`, `dayjs`, `pino`, etc.)

## 💎 Pre-loaded dependencies

```bash
yarn add @ant-design/icons antd axios dayjs eslint eslint-config-next js-base64 js-cookie lodash pino react-loading-randomizable
yarn add --dev @testing-library/jest-dom @testing-library/react autoprefixer jest jest-environment-jsdom postcss tailwindcss
npx tailwindcss init -p
```

## 📝 Versions (Last 2 Minor Version)

### v0.4.2 - `2024-09-20`

- Fixed known vulnerabilities
- Updated dependencies

### v0.4.1 - `2024-09-04`

- Fixed known vulnerabilities via `npx yarn-audit-fix`

### v0.4.0 - `2024-09-04`

- Added supported cacheHandler with Redis for scalable infrastructure
- Added Prettier configuration files
- Updated dockerignore for lean

### v0.3.3 - `2024-08-15`

- Updated dependencies

### v0.3.2 - `2024-08-15`

- Updated dependencies

### v0.3.1 - `2024-04-18`

- Updated dependencies 
- Downgraded `eslint` to ^8 cause they're not yet ease compatibility for `nextjs@14.2.2`

### v0.3.0 - `2024-04-17`

- Migrated Next 14 (Still on Pages router)
- Updated dependencies 

### v0.2.6 - `2024-02-21`

- Updated [Pantone Color of the year 2024](https://www.pantone.com/color-of-the-year/2024)

### v0.2.5 - `2024-02-21`

- Updated dependencies

### v0.2.4 - `2024-02-07`

- Updated default csp header
- Adjusted compiler config for non-production env

### v0.2.3 - `2024-02-06`

- Added default CSP (pre-defined)

### v0.2.2 - `2024-02-06`

- Updated dependencies

### v0.2.1 - `2023-06-12`

- Fixed jest test options (watchAll) on package.json

### v0.2.0 - `2023-06-12`

- Updated dependencies, structure, a bunch of tools/library

### v0.1.0 - `2023-03-13`

- Initialized Project

### Version History

... [more](./CHANGELOG.md)

## 📌 Get Started

1. Initialized (don't forget to rename `my-project`)

    ```bash
    npx degit owlsome-official/next-antd-tailwind#main my-project
    ```

2. Go to project folder

    ```bash
    cd my-project
    ```

3. Set up dependencies

    ```bash
    yarn
    ```

4. Run!

    ```bash
    yarn dev
    ```

### Want some more ?

see [Next.js Guide](https://nextjs.org/docs)

🌈 Next.js Template – Made with ❤️ by Watsize 🌈
