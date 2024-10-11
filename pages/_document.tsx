import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'


export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            
            <link rel='shortcut icon' href= 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc9d47a73-9b73-4e98-9885-3c983263bd1e%2F91b583d7-eb0a-4295-a830-f1d7c4038465%2Fandroid-chrome-512x512.png/size/w=1420?exp=1728713641&sig=Xq6RT60eOHp0fK9zj045o9aVv_sBLFf1mcOJK2LsT3Q' />

            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='https://img.notionusercontent.com/s3/prod-files-secure%2Fc9d47a73-9b73-4e98-9885-3c983263bd1e%2F18bdb18a-a7f3-4da0-8655-4e0fa8d290fc%2Ffavicon-32x32.png/size/w=2000?exp=1728713599&sig=Rrq3qIBA-S0DzZkZ0M7_zqs-1ikAykLjRBGUm2tdKpo'
            />

            <link rel='manifest' href='/icon/site.webmanifest' />

          </Head>
          
          
          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />

          
            <Main />

            <NextScript />
            
            
            
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
