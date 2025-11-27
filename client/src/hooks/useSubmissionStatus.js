import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mentora_submissions';

export default function useSubmissionStatus() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSubmissions(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse submissions from localStorage', e);
      }
    }
  }, []);

  function addSubmission(pathwayId, stepIndex, payload) {
    const submission = {
      id: `${pathwayId}_${stepIndex}_${Date.now()}`,
      pathwayId,
      stepIndex,
      payload,
      status: 'submitted',
      createdAt: new Date().toISOString(),
      feedback: null,
    };
    const updated = [...submissions, submission];
    setSubmissions(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return submission;
  }

  function updateSubmissionStatus(submissionId, status) {
    const updated = submissions.map((s) =>
      s.id === submissionId ? { ...s, status } : s
    );
    setSubmissions(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function getPathwaySubmissions(pathwayId) {
    return submissions.filter((s) => s.pathwayId === pathwayId);
  }

  function getPathwayProgress(pathwayId, totalSteps) {
    const subs = getPathwaySubmissions(pathwayId);
    return {
      submittedSteps: subs.length,
      totalSteps,
      percentComplete: Math.round((subs.length / totalSteps) * 100),
      allSubmitted: subs.length === totalSteps,
      submissions: subs,
    };
  }

  return {
    submissions,
    addSubmission,
    updateSubmissionStatus,
    getPathwaySubmissions,
    getPathwayProgress,
  };
}
