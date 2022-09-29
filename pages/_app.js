import { grommet, Grommet } from 'grommet';
import '../components/card/card.css';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={grommet}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
