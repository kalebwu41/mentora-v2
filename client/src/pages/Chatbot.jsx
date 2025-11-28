import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatInterface from '../components/chatbot/ChatInterface.jsx';
import SuggestionPanel from '../components/chatbot/SuggestionPanel.jsx';
import { useUser } from '../context/UserContext.jsx';
import { SectionTitle, MOTION } from '../components/animations/index.js';

export default function Chatbot() {
  const { user } = useUser();
  const [prompt, setPrompt] = useState('');

  return (
    <div>
      <SectionTitle title="Mentor AI" subtitle="Ask anything about your learning journey" />
      <motion.div
        className="grid gap-6 lg:grid-cols-[minmax(0,_2fr),_360px]"
        {...MOTION.transitions.slideUpFade(0)}
      >
        <ChatInterface context={{ roadmap: user.savedRoadmap, profile: user }} prefill={prompt} />
        <SuggestionPanel onPrompt={setPrompt} />
      </motion.div>
    </div>
  );
}
