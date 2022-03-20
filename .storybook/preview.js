import { useState, useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import addons from '@storybook/addons';
import { colors, darkTheme, theme } from '../stiches.config'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    dark: {
      ...colors,
      // appBg: 'black'
    },
    light: {
      ...colors,
      // appBg: 'white'
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const channel = addons.getChannel();

const ThemeWrapper = ({ children }) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on('DARK_MODE', setDark);
    return () => channel.off('DARK_MODE', setDark);
  }, [channel, setDark]);

  return <div className={isDark ? darkTheme : theme}
    style={isDark ? { backgroundColor: 'black', padding: '20px' } : { backgroundColor: 'white', padding: '20px' }}>
    {children}
  </div>

}
export const decorators = [
  (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
]