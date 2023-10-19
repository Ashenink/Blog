import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'


export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href= 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc9d47a73-9b73-4e98-9885-3c983263bd1e%2F3f2a14a1-44e8-480d-8edc-141451be8bc3%2F1zcdjy.jpg?table=block&id=7b1c4f22-77f7-4449-9e06-fbe0ac4f6b09&spaceId=c9d47a73-9b73-4e98-9885-3c983263bd1e&width=250&userId=dbca7c03-0f49-430b-87dc-fce67e3ce7ce&cache=v2' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc9d47a73-9b73-4e98-9885-3c983263bd1e%2F3f2a14a1-44e8-480d-8edc-141451be8bc3%2F1zcdjy.jpg?table=block&id=7b1c4f22-77f7-4449-9e06-fbe0ac4f6b09&spaceId=c9d47a73-9b73-4e98-9885-3c983263bd1e&width=250&userId=dbca7c03-0f49-430b-87dc-fce67e3ce7ce&cache=v2'
            />

            <link rel='manifest' href='/manifest.json' />
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
