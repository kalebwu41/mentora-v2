import { useState } from 'react';
import ChatInterface from '../components/chatbot/ChatInterface.jsx';
import SuggestionPanel from '../components/chatbot/SuggestionPanel.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function Chatbot() {
  const { user } = useUser();
  const [prompt, setPrompt] = useState('');

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,_2fr),_360px]">
      <ChatInterface context={{ roadmap: user.savedRoadmap, profile: user }} prefill={prompt} />
      <SuggestionPanel onPrompt={setPrompt} />
    </div>
  );
}
