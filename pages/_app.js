import './styles/App.scss'

function MyApp({ Component, pageProps }) {
  return (<>
  <Component {...pageProps} />
  <div id="fb-root"></div>
        <div class="fb-customerchat"
          attribution="setup_tool"
          page_id="182627661817675"
        theme_color="#e68585">
        </div>
  </>)
}

export default MyApp
