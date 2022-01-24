import './App.css';
import AuthButtons from "./AuthButtons";
import AuthenticatedRequestToBackend from "./AuthenticatedRequestToBackend";
import AuthInfoOnFrontend from "./AuthInfoOnFrontend";

function App() {
    return (
        <div className="App">
            <AuthButtons />
            <AuthInfoOnFrontend />
            <AuthenticatedRequestToBackend />
        </div>
    );
}

export default App;
