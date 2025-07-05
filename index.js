import { Header } from "./components/header";
import { Main } from './components/main';

setTimeout(() => {
 const root = ReactDOM.createRoot(document.getElementById('app'));
 root.render(
            <>
                <Header />
                <Main />
            </>
        );
}, 100);
