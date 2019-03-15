export const funk = {
  theme: {
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#53f',
      secondary: '#0c0047',
      highlight: '#e3f',
      muted: '#fafafe',
    },
    fonts: {
      body: 'Poppins, system-ui, sans-serif',
      monospace: '"Roboto Mono", monospace',
    },
    fontWeights: {
      heading: 900,
    },
  },
  components: {
    button: {
      fontWeight: 'bold',
    }
  },
  googleFont: 'https://fonts.googleapis.com/css?family=Poppins400:700:900|Roboto+Mono',
}

export const future = {
  theme: {
    colors: {
      text: '#fff',
      background: '#000',
      primary: '#0fc',
      secondary: '#0cf',
      highlight: '#f0c',
      muted: '#011',
    },
    fonts: {
      body: '"Avenir Next", system-ui, sans-serif',
    }
  },
  components: {
    button: {
      fontWeight: 'bold',
      color: 'background',
    }
  },
}

export const roboto = {
  theme: {
    fonts: {
      body: 'Roboto, system-ui, sans-serif',
      monospace: '"Roboto Mono", monospace',
    },
    fontWeights: {
      heading: 600,
    },
  },
  components: {},
  googleFont: 'https://fonts.googleapis.com/css?family=Roboto400:700|Roboto+Mono',
}

export default {
  funk,
  future,
  roboto,
}
