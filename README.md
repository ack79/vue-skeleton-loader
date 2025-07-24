# Vue Skeleton Loader

A modern and customizable skeleton loading component for Vue.js. Compatible with both Vue 2 and Vue 3.

![npm](https://img.shields.io/npm/v/vue-skeleton-loader)
![license](https://img.shields.io/npm/l/vue-skeleton-loader)
![downloads](https://img.shields.io/npm/dm/vue-skeleton-loader)

## Features

- 🎯 Vue 2 and Vue 3 support
- 🎨 Customizable colors and animations
- 📦 Lightweight and performant
- 🔧 TypeScript support
- 🎭 Multiple shape types (text, circle, rect, heading)

## Installation

```bash
npm install vue-skeleton-loader
# or
yarn add vue-skeleton-loader
```

## Usage

### Global Registration

```javascript
// Vue 3
import { createApp } from 'vue'
import VueSkeletonLoader from 'vue-skeleton-loader'

const app = createApp(App)
app.use(VueSkeletonLoader)
app.mount('#app')

// Vue 2
import Vue from 'vue'
import VueSkeletonLoader from 'vue-skeleton-loader'

Vue.use(VueSkeletonLoader)
```

### Local Registration

```javascript
import { SkeletonLoader } from 'vue-skeleton-loader'

export default {
  components: {
    SkeletonLoader
  }
}
```

### Basic Usage

```vue
<template>
  <skeleton-loader type="text" />
  <skeleton-loader type="circle" width="48px" height="48px" />
  <skeleton-loader type="rect" height="200px" />
  <skeleton-loader type="heading" />
</template>
```

### Loading Content

```vue
<template>
  <skeleton-loader :loading="isLoading">
    {{ content }}
  </skeleton-loader>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      content: 'Loaded content'
    }
  }
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | String | 'text' | Type of skeleton ('text', 'circle', 'rect', 'heading') |
| width | String/Number | '100%' | Width value |
| height | String/Number | null | Height value |
| animated | Boolean | true | Animation state |
| loading | Boolean | true | Loading state |
| content | String | '' | Content to show when loading is complete |
| backgroundColor | String | '#E3E5E8' | Background color |
| highlightColor | String | '#F0F2F5' | Highlight color |

## Examples

### Card Loading

```vue
<template>
  <div class="card">
    <skeleton-loader type="circle" width="64px" height="64px" />
    <div class="content">
      <skeleton-loader type="heading" width="60%" />
      <skeleton-loader type="text" />
      <skeleton-loader type="text" width="80%" />
    </div>
  </div>
</template>

<style>
.card {
  padding: 16px;
  display: flex;
  gap: 16px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
```

### Custom Colors

```vue
<template>
  <skeleton-loader
    type="text"
    backgroundColor="#2196F3"
    highlightColor="#64B5F6"
  />
</template>
```

## Contributing

We love your input! We want to make contributing to Vue Skeleton Loader as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Development Process

1. Fork the repo and create your branch from `main`
2. Install dependencies: `npm install`
3. Make your changes
4. Add or update tests if needed
5. Make sure your code lints: `npm run lint`
6. Run the tests: `npm run test`
7. Build the project: `npm run build`
8. Create a pull request!

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

### Code Style

- Use TypeScript
- Follow the existing code style
- Run `npm run format` before committing
- Write meaningful commit messages

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage
```

### Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the version number in package.json following [Semantic Versioning](https://semver.org/)
3. Your PR will be merged once you have the sign-off of at least one maintainer

## License

MIT

## Support

If you have any questions or need help integrating the component, please [open an issue](https://github.com/yourusername/vue-skeleton-loader/issues). 