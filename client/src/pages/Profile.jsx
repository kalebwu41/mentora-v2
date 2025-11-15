import { useState } from 'react';
import toast from 'react-hot-toast';
import Chip from '../components/ui/Chip.jsx';
import { useUser } from '../context/UserContext.jsx';

export default function Profile() {
  const { user, updateUser } = useUser();
  const [bio, setBio] = useState('Mapping stories into systems that change schools.');

  function handleSave() {
    updateUser({ bio });
    toast.success('Profile saved.');
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass-panel rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-teal/15 text-xl font-semibold">
            {user.name?.slice(0, 2) ?? 'ME'}
          </span>
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-mentora-navy/60">Grade {user.gradeLevel}</p>
          </div>
        </div>
        <textarea
          className="min-h-[120px] w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-4 py-3 text-sm focus:border-mentora-teal focus:outline-none"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="rounded-full bg-mentora-navy px-6 py-3 text-sm font-semibold text-white hover:bg-mentora-teal"
        >
          Save profile
        </button>
      </div>
      <div className="space-y-4">
        <div className="rounded-3xl border border-mentora-navy/10 bg-white/80 p-5">
          <p className="text-xs uppercase tracking-wide text-mentora-teal">Passions</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {user.passions.map((passion) => (
              <Chip key={passion} label={passion} tone="sand" />
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-mentora-navy/10 bg-white/80 p-5">
          <p className="text-xs uppercase tracking-wide text-mentora-teal">Strengths</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {user.strengths.map((strength) => (
              <Chip key={strength} label={strength} tone="teal" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
