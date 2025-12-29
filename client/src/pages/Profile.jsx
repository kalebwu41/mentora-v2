import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Calendar, Award, Target, BookOpen, TrendingUp } from 'lucide-react';
import Chip from '../components/ui/Chip.jsx';
import { useUser } from '../context/UserContext.jsx';
import { SectionTitle, AnimatedCard, StaggerContainer, MOTION } from '../components/animations/index.jsx';

export default function Profile() {
  const { user, updateUser } = useUser();
  const [bio, setBio] = useState('Mapping stories into systems that change schools.');
  const [email, setEmail] = useState('john.student@school.edu');
  const [careerGoal, setCareerGoal] = useState('Software Engineer');
  const [passions, setPassions] = useState(user.passions || ['software', 'design', 'storytelling']);
  const [strengths, setStrengths] = useState(user.strengths || ['creative problem solving', 'communication']);
  const [newPassion, setNewPassion] = useState('');
  const [newStrength, setNewStrength] = useState('');

  const MAX_PASSIONS = 8;
  const MAX_STRENGTHS = 8;

  function handleSave() {
    updateUser({ bio });
    toast.success('Profile saved.');
  }

  function handleAddPassion() {
    if (newPassion.trim() && passions.length < MAX_PASSIONS) {
      setPassions([...passions, newPassion.trim()]);
      setNewPassion('');
      toast.success('Passion added!');
    } else if (passions.length >= MAX_PASSIONS) {
      toast.error(`Maximum ${MAX_PASSIONS} passions allowed`);
    }
  }

  function handleAddStrength() {
    if (newStrength.trim() && strengths.length < MAX_STRENGTHS) {
      setStrengths([...strengths, newStrength.trim()]);
      setNewStrength('');
      toast.success('Strength added!');
    } else if (strengths.length >= MAX_STRENGTHS) {
      toast.error(`Maximum ${MAX_STRENGTHS} strengths allowed`);
    }
  }

  function handleRemovePassion(passionToRemove) {
    setPassions(passions.filter(p => p !== passionToRemove));
  }

  function handleRemoveStrength(strengthToRemove) {
    setStrengths(strengths.filter(s => s !== strengthToRemove));
  }

  const stats = [
    { label: 'Pathways Completed', value: '12', icon: Target },
    { label: 'Pods Joined', value: '5', icon: BookOpen },
    { label: 'Skills Gained', value: '28', icon: Award },
    { label: 'Weekly Streak', value: '14', icon: TrendingUp },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold text-white mb-2">My Profile</h1>
        <p className="text-lg text-white/80">Manage your account, skills, and career journey</p>
      </motion.div>

      {/* Profile Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-6"
      >
        <div className="flex items-start gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-2xl bg-mentora-accent flex items-center justify-center text-4xl font-bold text-white shadow-lg"
          >
            JS
          </motion.div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-mentora-text-dark mb-2">John Student</h2>
            <div className="flex items-center gap-4 text-mentora-text-on-light mb-4">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {email}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Grade 11
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                {careerGoal}
              </span>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-mentora-accent text-white font-semibold shadow-md hover:bg-mentora-accent-bright transition"
              >
                Edit Profile
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg border border-gray-300 text-mentora-text-dark font-semibold hover:bg-gray-50 transition"
              >
                Change Password
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-mentora-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-mentora-accent" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-mentora-text-dark">{stat.value}</p>
              <p className="text-sm text-mentora-text-on-light font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-bold text-mentora-text-dark mb-4">About Me</h3>
          <textarea
            className="min-h-[150px] w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-mentora-text-dark focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself, your interests, and your goals..."
          />
          <motion.button
            onClick={handleSave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 rounded-lg bg-mentora-accent text-white font-semibold shadow-md hover:bg-mentora-accent-bright transition"
          >
            Save Changes
          </motion.button>
        </motion.div>

        {/* Career Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-bold text-mentora-text-dark mb-4">Career Goals</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-mentora-text-on-light mb-2 block">Primary Career Interest</label>
              <input
                type="text"
                value={careerGoal}
                onChange={(e) => setCareerGoal(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-mentora-text-dark focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20"
                placeholder="e.g., Software Engineer, Product Designer"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-mentora-text-on-light mb-2 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-mentora-text-dark focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20"
                placeholder="your.email@school.edu"
              />
            </div>
          </div>
        </motion.div>

        {/* Passions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-bold text-mentora-text-dark mb-4">My Passions ({passions.length}/{MAX_PASSIONS})</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {passions.map((passion) => (
              <motion.div
                key={passion}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Chip label={passion} tone="sand" />
                <button
                  onClick={() => handleRemovePassion(passion)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition"
                >
                  ×
                </button>
              </motion.div>
            ))}
          </div>
          {passions.length < MAX_PASSIONS && (
            <div className="flex gap-2">
              <input
                type="text"
                value={newPassion}
                onChange={(e) => setNewPassion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddPassion()}
                placeholder="Add a passion..."
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-mentora-text-dark focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20"
              />
              <motion.button
                onClick={handleAddPassion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-mentora-accent text-white font-semibold shadow-md hover:bg-mentora-accent-bright transition"
              >
                Add
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-bold text-mentora-text-dark mb-4">My Strengths ({strengths.length}/{MAX_STRENGTHS})</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {strengths.map((strength) => (
              <motion.div
                key={strength}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Chip label={strength} tone="teal" />
                <button
                  onClick={() => handleRemoveStrength(strength)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition"
                >
                  ×
                </button>
              </motion.div>
            ))}
          </div>
          {strengths.length < MAX_STRENGTHS && (
            <div className="flex gap-2">
              <input
                type="text"
                value={newStrength}
                onChange={(e) => setNewStrength(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddStrength()}
                placeholder="Add a strength..."
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-mentora-text-dark focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20"
              />
              <motion.button
                onClick={handleAddStrength}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-mentora-accent text-white font-semibold shadow-md hover:bg-mentora-accent-bright transition"
              >
                Add
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
