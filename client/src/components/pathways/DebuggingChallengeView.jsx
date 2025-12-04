import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Bug,
  Code,
  Database,
  Download,
  FileText,
  GitBranch,
  Server,
  Terminal,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

export default function DebuggingChallengeView({ challenge }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Challenge Overview', icon: FileText },
    { id: 'symptoms', label: 'Symptoms & Reports', icon: AlertTriangle },
    { id: 'architecture', label: 'System Architecture', icon: Server },
    { id: 'logs', label: 'Logs & Monitoring', icon: Terminal },
    { id: 'evaluation', label: 'Evaluation Criteria', icon: CheckCircle },
  ];

  return (
    <div className="space-y-6">
      {/* Challenge Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
            <Bug className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold uppercase mb-3">
              <Clock className="w-3 h-3" />
              Production Crisis
            </div>
            <h2 className="text-3xl font-extrabold text-mentora-text-dark mb-2">
              {challenge.title}
            </h2>
            <p className="text-lg text-mentora-text-on-light font-medium leading-relaxed mb-4">
              {challenge.scenario}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span className="font-semibold">Time Budget: {challenge.timeEstimate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-red-500" />
                <span className="font-semibold">Complexity: {challenge.complexity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bug className="w-4 h-4 text-red-500" />
                <span className="font-semibold">Bug Layers: {challenge.bugLayers}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-card border border-mentora-text-dark/[0.08] overflow-hidden">
        <div className="flex overflow-x-auto border-b border-mentora-text-dark/[0.08]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-mentora-accent text-white border-b-2 border-mentora-accent'
                    : 'text-mentora-text-on-light hover:bg-mentora-neutral-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">Mission Brief</h3>
                <p className="text-base text-mentora-text-on-light leading-relaxed mb-4">
                  {challenge.missionBrief}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-mentora-text-dark mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Technology Stack
                  </h4>
                  <ul className="space-y-2">
                    {challenge.techStack.map((tech, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-mentora-text-on-light">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="text-lg font-bold text-mentora-text-dark mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-purple-600" />
                    Repository Setup
                  </h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-all">
                      <span className="text-sm font-semibold text-mentora-text-dark">Download Starter Code</span>
                      <Download className="w-4 h-4 text-purple-600" />
                    </button>
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-all">
                      <span className="text-sm font-semibold text-mentora-text-dark">Clone Git Repository</span>
                      <GitBranch className="w-4 h-4 text-purple-600" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <h4 className="text-lg font-bold text-mentora-text-dark mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  What You'll Learn
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {challenge.learningObjectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-mentora-text-on-light">
                      <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Symptoms Tab */}
          {activeTab === 'symptoms' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">User Reports</h3>
                <div className="space-y-4">
                  {challenge.userReports.map((report, idx) => (
                    <div key={idx} className="bg-red-50 rounded-xl p-5 border border-red-200">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-base text-mentora-text-dark font-semibold mb-1">
                            User Report #{idx + 1}
                          </p>
                          <p className="text-sm text-mentora-text-on-light italic">
                            "{report}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">Observed System Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {challenge.systemSymptoms.map((symptom, idx) => (
                    <div key={idx} className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-start gap-3">
                        <Bug className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-mentora-text-on-light">{symptom}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
                <h4 className="text-lg font-bold text-mentora-text-dark mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-600" />
                  Initial Hypothesis
                </h4>
                <p className="text-sm text-mentora-text-on-light leading-relaxed">
                  {challenge.initialHypothesis}
                </p>
              </div>
            </motion.div>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">System Architecture</h3>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <pre className="text-xs text-mentora-text-dark font-mono overflow-x-auto">
                    {challenge.architectureDiagram}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">Service Breakdown</h3>
                <div className="space-y-4">
                  {challenge.services.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border-2 border-mentora-text-dark/[0.12]">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-mentora-accent/10 flex items-center justify-center flex-shrink-0">
                          <Server className="w-5 h-5 text-mentora-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-mentora-text-dark mb-2">{service.name}</h4>
                          <p className="text-sm text-mentora-text-on-light mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-3 py-1 bg-mentora-accent/10 text-mentora-accent text-xs font-bold rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Logs Tab */}
          {activeTab === 'logs' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">Application Logs</h3>
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                  <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
                    {challenge.applicationLogs}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">Performance Metrics</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(challenge.performanceMetrics).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                      <p className="text-xs font-bold text-mentora-text-on-light uppercase tracking-wide mb-2">
                        {key.replace(/_/g, ' ')}
                      </p>
                      <p className="text-2xl font-extrabold text-mentora-text-dark">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <h4 className="text-lg font-bold text-mentora-text-dark mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  Key Observations
                </h4>
                <ul className="space-y-2">
                  {challenge.keyObservations.map((observation, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-mentora-text-on-light">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>{observation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Evaluation Tab */}
          {activeTab === 'evaluation' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-mentora-text-dark mb-4">Evaluation Criteria</h3>
                <div className="space-y-4">
                  {challenge.evaluationCriteria.map((criterion, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border-2 border-mentora-text-dark/[0.12]">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-lg font-bold text-mentora-text-dark">{criterion.category}</h4>
                        <span className="text-lg font-extrabold text-mentora-accent">{criterion.points} pts</span>
                      </div>
                      <p className="text-sm text-mentora-text-on-light">{criterion.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                <h4 className="text-lg font-bold text-mentora-text-dark mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Deliverables Required
                </h4>
                <ul className="space-y-2">
                  {challenge.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-mentora-text-on-light">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-mentora-text-dark mb-3">Passing Threshold</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-white rounded-full h-4 overflow-hidden border border-blue-300">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-full" style={{ width: '75%' }} />
                  </div>
                  <span className="text-2xl font-extrabold text-mentora-text-dark">75/100</span>
                </div>
                <p className="text-sm text-mentora-text-on-light mt-3">
                  Minimum score required to pass. Bonus points available for security considerations.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Docker Setup Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-8 shadow-card border border-mentora-text-dark/[0.08]"
      >
        <h3 className="text-2xl font-bold text-mentora-text-dark mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-mentora-accent" />
          Quick Start Instructions
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-2 font-mono">1. Clone and setup</p>
            <pre className="text-sm text-green-400 font-mono">
              git clone {challenge.repositoryUrl}{'\n'}
              cd mentora-shop{'\n'}
              docker-compose up --build
            </pre>
          </div>
          <div className="bg-gray-900 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-2 font-mono">2. Seed database</p>
            <pre className="text-sm text-green-400 font-mono">./scripts/seed.sh</pre>
          </div>
          <div className="bg-gray-900 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-2 font-mono">3. Run load test</p>
            <pre className="text-sm text-green-400 font-mono">node scripts/load-test.js</pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
