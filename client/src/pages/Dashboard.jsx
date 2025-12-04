import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import {
  MapPin,
  Calendar,
  Bell,
  TrendingUp,
  Target,
  Users,
  BookOpen,
  Home,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';
import { skillConstellation, taskQueue, podActivityPeek } from '../data/skills.js';
import { generateUpcomingTasks } from '../utils/scoring.js';
import mentoraLogo from '../assets/mentora-logo.svg';

// Professional Blue Color Palette
const colors = {
  headerBlue: '#2D3E50',
  actionBlue: '#1E5EB8',
  bodyBlue: '#4A6FA5',
  lightBlueBg: '#F0F7FF',
  greyBg: '#F9F9F9',
  white: '#FFFFFF',
  borderGrey: '#E5E7EB',
  softRed: '#FEE2E2',
  softRedText: '#DC2626',
  softYellow: '#FEF3C7',
  softYellowText: '#D97706',
  softGreen: '#D1FAE5',
  softGreenText: '#059669',
};

function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'pathways', label: 'Pathways', icon: MapPin },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'pods', label: 'My Pods', icon: Users },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0"
      style={{ borderColor: colors.borderGrey }}
    >
      {/* Logo Section */}
      <div className="p-6 border-b" style={{ borderColor: colors.borderGrey }}>
        <Link to="/" className="flex items-center gap-3">
          <img src={mentoraLogo} alt="Mentora Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold" style={{ color: colors.actionBlue }}>
            Mentora
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                isActive
                  ? 'text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: isActive ? colors.actionBlue : 'transparent',
                color: isActive ? colors.white : colors.bodyBlue,
              }}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t" style={{ borderColor: colors.borderGrey }}>
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-lg font-bold" style={{ color: colors.actionBlue }}>
              JS
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: colors.headerBlue }}>
              John Student
            </p>
            <p className="text-xs" style={{ color: colors.bodyBlue }}>
              CS Major
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ x: 4 }}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all"
          style={{ color: colors.bodyBlue }}
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Log Out</span>
        </motion.button>
      </div>
    </motion.aside>
  );
}

function TaskBoard() {
  const [tasks, setTasks] = useState(generateUpcomingTasks(taskQueue));
  const [dragging, setDragging] = useState(null);

  function handleDragStart(id) {
    setDragging(id);
  }

  function handleDragOver(e, targetId) {
    e.preventDefault();
    if (!dragging || dragging === targetId) return;
    const currentIndex = tasks.findIndex((task) => task.id === dragging);
    const targetIndex = tasks.findIndex((task) => task.id === targetId);
    const updated = [...tasks];
    const [moved] = updated.splice(currentIndex, 1);
    updated.splice(targetIndex, 0, moved);
    setTasks(updated);
  }

  function handleDrop() {
    setDragging(null);
  }

  const getImpactStyle = (impact) => {
    if (impact === 'High') {
      return {
        bg: colors.softRed,
        text: colors.softRedText,
      };
    } else if (impact === 'Medium') {
      return {
        bg: colors.softYellow,
        text: colors.softYellowText,
      };
    } else {
      return {
        bg: colors.softGreen,
        text: colors.softGreenText,
      };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl bg-white p-6 shadow-sm border"
      style={{ borderColor: colors.borderGrey }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.lightBlueBg }}>
          <Calendar className="w-5 h-5" style={{ color: colors.actionBlue }} />
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold" style={{ color: colors.headerBlue }}>
            Upcoming Actions
          </p>
          <p className="text-xs" style={{ color: colors.bodyBlue }}>
            Drag to reorder priorities
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task, idx) => {
          const impactStyle = getImpactStyle(task.impact);
          return (
            <motion.div
              key={task.id}
              draggable
              onDragStart={() => handleDragStart(task.id)}
              onDragOver={(e) => handleDragOver(e, task.id)}
              onDrop={handleDrop}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ x: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              className="rounded-xl border p-4 cursor-move transition-all"
              style={{
                borderColor: colors.borderGrey,
                backgroundColor: colors.white,
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-sm" style={{ color: colors.headerBlue }}>
                  {task.label}
                </p>
                <span
                  className="px-2 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: impactStyle.bg,
                    color: impactStyle.text,
                  }}
                >
                  {task.impact}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: colors.bodyBlue }}>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Due: {task.due}
                </span>
                <span>Target: {task.targetDate}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function SkillRadarCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-2xl bg-white p-6 shadow-sm border"
      style={{ borderColor: colors.borderGrey }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.lightBlueBg }}>
          <Target className="w-5 h-5" style={{ color: colors.actionBlue }} />
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold" style={{ color: colors.headerBlue }}>
            Skill Constellation
          </p>
          <p className="text-xs" style={{ color: colors.bodyBlue }}>
            Your current skill profile across domains
          </p>
        </div>
      </div>

      <motion.div
        className="h-80 rounded-xl p-4"
        style={{ backgroundColor: colors.greyBg }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={skillConstellation}>
            <PolarGrid stroke={colors.borderGrey} />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: colors.headerBlue, fontSize: 12, fontWeight: 600 }}
            />
            <Radar
              name="Skill Levels"
              dataKey="score"
              stroke={colors.actionBlue}
              fill={colors.actionBlue}
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}

function PodActivityCard({ pod, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
      className="rounded-2xl bg-white p-6 shadow-sm border"
      style={{ borderColor: colors.borderGrey }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.lightBlueBg }}>
          <Users className="w-5 h-5" style={{ color: colors.actionBlue }} />
        </div>
        <p className="text-sm font-bold uppercase tracking-wide" style={{ color: colors.actionBlue }}>
          {pod.pod}
        </p>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: colors.bodyBlue }}>
        {pod.highlight}
      </p>

      <div className="flex gap-2 flex-wrap">
        {pod.avatars.map((avatar, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm"
            style={{ backgroundColor: colors.lightBlueBg }}
          >
            {avatar}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function StatsOverview() {
  const stats = [
    { label: 'Active Pathways', value: '3', icon: MapPin, change: '+2 this month' },
    { label: 'Skills Tracked', value: '12', icon: TrendingUp, change: '+5 since last quarter' },
    { label: 'Pod Sessions', value: '8', icon: Users, change: '4 this week' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
            className="rounded-2xl bg-white p-6 shadow-sm border"
            style={{ borderColor: colors.borderGrey }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.lightBlueBg }}>
                <Icon className="w-6 h-6" style={{ color: colors.actionBlue }} />
              </div>
              <div className="text-right">
                <p className="text-3xl font-extrabold" style={{ color: colors.headerBlue }}>
                  {stat.value}
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: colors.headerBlue }}>
              {stat.label}
            </p>
            <p className="text-xs" style={{ color: colors.bodyBlue }}>
              {stat.change}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function NotificationBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-4 mb-6 border-l-4 flex items-center gap-4"
      style={{
        backgroundColor: colors.lightBlueBg,
        borderLeftColor: colors.actionBlue,
      }}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.white }}>
        <Bell className="w-5 h-5" style={{ color: colors.actionBlue }} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold" style={{ color: colors.headerBlue }}>
          New pathway milestone available!
        </p>
        <p className="text-xs" style={{ color: colors.bodyBlue }}>
          Complete your Software Engineering debugging challenge to unlock the next step.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-lg font-semibold text-sm text-white shadow-sm"
        style={{ backgroundColor: colors.actionBlue }}
      >
        View Now
      </motion.button>
    </motion.div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.greyBg }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="max-w-[1400px] mx-auto p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-extrabold mb-2" style={{ color: colors.headerBlue }}>
              Welcome back, John
            </h1>
            <p className="text-lg" style={{ color: colors.bodyBlue }}>
              Here's your career progress overview
            </p>
          </motion.div>

          {/* Notification Banner */}
          <NotificationBanner />

          {/* Stats Overview */}
          <StatsOverview />

          {/* Main Grid */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-6 mb-6">
            {/* Skill Radar Chart */}
            <SkillRadarCard />

            {/* Task Board */}
            <TaskBoard />
          </div>

          {/* Pod Activity Section */}
          <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: colors.white }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.lightBlueBg }}>
                <Users className="w-5 h-5" style={{ color: colors.actionBlue }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: colors.headerBlue }}>
                  Pod Activity
                </h2>
                <p className="text-sm" style={{ color: colors.bodyBlue }}>
                  Recent updates from your learning communities
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {podActivityPeek.map((pod, idx) => (
                <PodActivityCard key={pod.pod} pod={pod} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
