import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function JobEditor() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title: '', client: '', status: '', start_date: '', end_date: '' });

  useEffect(() => { fetchJobs(); }, []);

  async function fetchJobs() {
    const { data, error } = await supabase.from('Jobs').select('*').order('created_at', { ascending: false });
    if (!error) setJobs(data);
  }

  async function addJob(e) {
    e.preventDefault();
    const { title, client, status, start_date, end_date } = form;
    if (!title || !client) return;
    const { error } = await supabase.from('Jobs').insert([{ title, client, status, start_date, end_date }]);
    if (!error) {
      setForm({ title: '', client: '', status: '', start_date: '', end_date: '' });
      fetchJobs();
    }
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  return (
    <div>
      <h2>Job Editor</h2>
      <form onSubmit={addJob} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <input value={form.title} onChange={e => updateField('title', e.target.value)} placeholder="Job title" required />
        <input value={form.client} onChange={e => updateField('client', e.target.value)} placeholder="Client name" required />
        <input value={form.status} onChange={e => updateField('status', e.target.value)} placeholder="Status" />
        <input type="date" value={form.start_date} onChange={e => updateField('start_date', e.target.value)} />
        <input type="date" value={form.end_date} onChange={e => updateField('end_date', e.target.value)} />
        <button type="submit">Add Job</button>
      </form>
      <hr />
      <ul>
        {jobs.map(job => (
          <li key={job.id}><strong>{job.title}</strong> – {job.client} [{job.status || 'No status'}]<br/>
          {job.start_date || 'No start'} → {job.end_date || 'No end'}</li>
        ))}
      </ul>
    </div>
  );
}
