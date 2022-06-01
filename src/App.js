import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {

    return(
        <ChatEngine
            height = "100vh"
            projectID = "62dc84cf-8c8b-4ea4-bfb4-e34d48e3dd33"
            userName = "Shonali (Admin)"
            userSecret = "123123"
        />
    );
}

export default App;