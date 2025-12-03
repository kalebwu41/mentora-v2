import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { podChannels } from '../data/pods.js';
import PodComposer from '../components/pods/PodComposer.jsx';
import PodFeed from '../components/pods/PodFeed.jsx';
import { fetchPodFeed } from '../services/api.js';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';

export default function Pods() {
  const [feed, setFeed] = useState([]);
  const [selectedPod, setSelectedPod] = useState('all');

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

  const filteredFeed = selectedPod === 'all'
    ? feed
    : feed.filter(item => item.podId === selectedPod);

  return (
    <div className="min-h-screen bg-gradient-neutral">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-mentora-text-dark mb-3 tracking-tight">
              Pods
            </h1>
            <p className="text-lg text-mentora-text-on-light max-w-2xl">
              Connect with peers and mentors in focused learning communities. Get feedback, share wins, and grow together.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-6">

          {/* LEFT SIDEBAR - Pod Navigation & Stats */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Pod Navigation */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]">
              <h2 className="text-sm font-bold text-mentora-text-dark uppercase tracking-wide mb-4">
                Your Pods
              </h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setSelectedPod('all')}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedPod === 'all'
                      ? 'bg-mentora-accent text-white'
                      : 'text-mentora-text-on-light hover:bg-mentora-neutral-50'
                  }`}
                >
                  All Pods
                </button>
                {podChannels.slice(0, 5).map((pod) => (
                  <button
                    key={pod.id}
                    onClick={() => setSelectedPod(pod.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      selectedPod === pod.id
                        ? 'bg-mentora-accent text-white'
                        : 'text-mentora-text-on-light hover:bg-mentora-neutral-50'
                    }`}
                  >
                    {pod.title.replace(' Pod', '')}
                  </button>
                ))}
              </nav>
            </div>

            {/* Activity Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]">
              <h2 className="text-sm font-bold text-mentora-text-dark uppercase tracking-wide mb-4">
                Your Activity
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-mentora-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-mentora-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-mentora-text-dark">12</p>
                    <p className="text-xs text-mentora-text-on-light">Posts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-mentora-text-dark">47</p>
                    <p className="text-xs text-mentora-text-on-light">Received Likes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-mentora-text-dark">8</p>
                    <p className="text-xs text-mentora-text-on-light">Best Answers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* MAIN CONTENT - Pod Feed */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Active Pods Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-mentora-text-dark">
                  Explore Pods
                </h2>
                <span className="text-sm text-mentora-text-on-light">
                  {podChannels.length} active communities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {podChannels.map((pod, idx) => (
                  <motion.div
                    key={pod.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-mentora-text-dark/[0.08] bg-mentora-neutral-50 p-5 cursor-pointer transition-all hover:shadow-md"
                    onClick={() => setSelectedPod(pod.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-semibold text-mentora-text-dark leading-tight">
                        {pod.title}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-semibold text-mentora-text-on-light">
                          {pod.activity}%
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-mentora-text-on-light mb-3 leading-relaxed">
                      {pod.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {pod.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-mentora-accent/10 text-mentora-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feed */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-mentora-accent" />
                <h2 className="text-xl font-bold text-mentora-text-dark">
                  Recent Activity
                </h2>
              </div>
              <PodFeed feed={filteredFeed} />
            </div>
          </motion.main>

          {/* RIGHT SIDEBAR - Quick Actions & User Info */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Composer */}
            <PodComposer pods={podChannels} onPublish={handlePublish} />

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]">
              <h2 className="text-sm font-bold text-mentora-text-dark uppercase tracking-wide mb-4">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-mentora-text-on-light hover:bg-mentora-neutral-50 transition-all">
                  📝 Ask for critique
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-mentora-text-on-light hover:bg-mentora-neutral-50 transition-all">
                  🎉 Share a win
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-mentora-text-on-light hover:bg-mentora-neutral-50 transition-all">
                  📎 Upload content
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-mentora-text-on-light hover:bg-mentora-neutral-50 transition-all">
                  💬 Start discussion
                </button>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-mentora-accent/5 rounded-2xl p-6 border border-mentora-accent/20">
              <h2 className="text-sm font-bold text-mentora-text-dark uppercase tracking-wide mb-3">
                Pod Guidelines
              </h2>
              <ul className="space-y-2 text-sm text-mentora-text-on-light">
                <li className="flex items-start gap-2">
                  <span className="text-mentora-accent mt-0.5">✓</span>
                  <span>Be constructive and specific in feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mentora-accent mt-0.5">✓</span>
                  <span>Share context when asking questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-mentora-accent mt-0.5">✓</span>
                  <span>Celebrate wins and support peers</span>
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
