import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { podChannels } from '../data/pods.js';
import PodComposer from '../components/pods/PodComposer.jsx';
import PodFeed from '../components/pods/PodFeed.jsx';
import { fetchPodFeed } from '../services/api.js';

export default function Pods() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchPodFeed();
      setFeed(data);
    }
    load();
  }, []);

  function handlePublish(entry) {
    const payload = {
      ...entry,
      user: 'You',
      avatar: '🌱',
      likes: 0,
      replies: 0,
      tags: [entry.tag],
    };
    setFeed((prev) => [payload, ...prev]);
    toast.success('Shared with the pod!');
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {podChannels.map((pod) => (
          <div key={pod.id} className="rounded-3xl border border-mentora-navy/10 bg-white/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-mentora-teal">{pod.title}</p>
            <p className="mt-2 text-sm text-mentora-navy/70">{pod.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-mentora-navy/60">
              {pod.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-mentora-sand px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-mentora-navy/50">Activity: {pod.activity}%</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[360px,_1fr]">
        <PodComposer pods={podChannels} onPublish={handlePublish} />
        <PodFeed feed={feed} />
      </div>
    </div>
  );
}
