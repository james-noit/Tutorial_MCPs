import DefaultTheme from 'vitepress/theme'
import InteractiveDiagram from './InteractiveDiagram.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('InteractiveDiagram', InteractiveDiagram)
  }
}
