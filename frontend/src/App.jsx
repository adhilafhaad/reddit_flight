import React from 'react';
import RedditFeed from './components/RedditFeed';
import CrashChart from './components/CrashChart';
import CrashMap from './components/CrashMap';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-darkText font-sans">
      <header className="text-center py-6 border-b border-gray-200 shadow">
        <h1 className="text-4xl font-bold tracking-wide text-primary">✈ Flight Crash Tracker</h1>
        <p className="text-gray-600 mt-2">Live Reddit feed, chart trends & 3D crash maps</p>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-12">
        <RedditFeed />
        <CrashChart />
        <CrashMap />
      </main>

      <footer className="text-center text-sm text-gray-400 mt-12 pb-6 border-t border-gray-200 pt-4">
        &copy; {new Date().getFullYear()} CrashWatch. Built with ❤️ using Reddit & Three.js.
      </footer>
    </div>
  );
};

export default App;