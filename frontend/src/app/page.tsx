import React from 'react';
import Head from 'next/head';

export default function Home() {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2026",
      date: "Oct 24 • 10:00 AM",
      location: "Main Auditorium",
      category: "Technology",
      capacity: 500,
      rsvpCount: 420,
      image: "https://images.unsplash.com/photo-1540575467063-112fa2be8a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Campus Music Festival",
      date: "Nov 02 • 4:00 PM",
      location: "North Quad",
      category: "Entertainment",
      capacity: 1000,
      rsvpCount: 950,
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      date: "Nov 15 • 6:00 PM",
      location: "Innovation Hub",
      category: "Business",
      capacity: 150,
      rsvpCount: 145,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-xs">CEF</span>
            </div>
            Campus<span className="text-indigo-400">Events</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sign In</button>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 mb-24">
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              Live capacity tracking now available
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              Never Miss A Moment <br /> On Campus
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg md:text-xl">
              Discover, RSVP, and track live capacity for the best events happening around your university. 
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
                Explore Events
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all">
                Host an Event
              </button>
            </div>
          </div>

          {/* Featured Events */}
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-semibold tracking-tight">Trending This Week</h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                View all <span aria-hidden="true">&rarr;</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => {
                const capacityPercent = (event.rsvpCount / event.capacity) * 100;
                let barColor = "bg-emerald-500";
                if (capacityPercent >= 90) barColor = "bg-red-500";
                else if (capacityPercent >= 60) barColor = "bg-amber-500";

                return (
                  <div key={event.id} className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/[0.07] transition-colors">
                    <div className="aspect-[4/3] w-full relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        Live
                      </div>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">{event.category}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400">{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-sm text-zinc-400 mb-6">{event.location}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-zinc-400">RSVPs</span>
                          <span className="text-white">{event.rsvpCount} / {event.capacity}</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${barColor}`} style={{ width: `${capacityPercent}%` }}></div>
                        </div>
                      </div>

                      <button className={`w-full mt-6 py-3 rounded-xl font-medium transition-colors ${capacityPercent >= 100 ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-white text-black hover:bg-zinc-200'}`}>
                        {capacityPercent >= 100 ? 'Sold Out' : 'RSVP Now'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
