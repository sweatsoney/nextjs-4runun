import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
Game.RuinTheFun(1);autoclicker = setInterval(function(){
  try {
    document.getElementById('bigCookie').click();
  } catch (err) {
    clearInterval();
  }
}, 10);