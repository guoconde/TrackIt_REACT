import ReactDom from "react-dom";

import App from './Components/App'
import { AuthProvider } from "./Components/Generic/Providers/Auth";

ReactDom.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
document.querySelector('.root')
)