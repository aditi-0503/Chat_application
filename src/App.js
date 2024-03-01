import { ChatEngine, ChatFeed } from "react-chat-engine";

import './App.css';

const App = () => {
if(!localStorage.getItem('username')) return <LoginForm></LoginForm>

    return(
        <ChatEngine
        height="100vh"
        projectID="eb492bd5-2733-4110-b137-0d9a358b6074"
        userName="zackzimmer"
        userSecret="123123"
        renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
        />
    );
}
export default App;
