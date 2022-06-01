import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height = "100vh"
            projectID = "62dc84cf-8c8b-4ea4-bfb4-e34d48e3dd33"
            userName = "Shonali (Admin)"
            userSecret = "123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;