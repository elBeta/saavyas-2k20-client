/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onServiceWorkerUpdateReady = () => {
  window.alert(
    "This application has been updated. Reloading to display the latest version."
  )
  window.location.reload()
}
