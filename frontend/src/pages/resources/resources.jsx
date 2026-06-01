import React from 'react';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  const helplines = [
    {
      region: "India",
      contacts: [
        { name: "Vandrevala Foundation", phone: "91-5298-7821", schedule: "24/7", cost: "Free & Confidential" },
        { name: "Kiran Mental Health Helpline", phone: "1800-599-0019", schedule: "24/7", cost: "Government Operated" },
        { name: "AASRA Helpline", phone: "91-9820466726", schedule: "24/7", cost: "Crisis Intervention" }
      ]
    },
    {
      region: "International & Digital",
      contacts: [
        { name: "US & Canada Suicide & Crisis Lifeline", phone: "988", schedule: "24/7", cost: "Call or Text" },
        { name: "UK NHS Mental Health Services", phone: "111", schedule: "24/7", cost: "Urgent Medical Care" },
        { name: "Befrienders Worldwide", phone: "Find Local Helpline", link: "https://www.befrienders.org", schedule: "Global Directory", cost: "International Support Network" }
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 selection:bg-teal-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8 animate-in fade-in duration-400">
        
        <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-800">Professional Support Directory</h1>
            <p className="text-sm text-slate-500 mt-1">
              If you need deeper human care or specialized medical attention, these verified networks are here for you.
            </p>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="self-start sm:self-center rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 active:scale-98 transition-all cursor-pointer shadow-2xs"
          >
            &larr; Back to Dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-6">
            {helplines.map((group, index) => (
              <div key={index} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-2xs space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-50">
                  {group.region} Networks
                </h2>
                
                <div className="space-y-3">
                  {group.contacts.map((line, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl bg-slate-50 border border-slate-100/70 transition-all hover:border-slate-200 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">{line.name}</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-400 mt-1">
                          <span>{line.schedule}</span>
                          <span>&bull;</span>
                          <span>{line.cost}</span>
                        </div>
                      </div>
                      
                      {line.link ? (
                        <a 
                          href={line.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-900 transition-all text-center"
                        >
                          Visit Site
                        </a>
                      ) : (
                        <a 
                          href={`tel:${line.phone.replace(/[^0-9]/g, '')}`}
                          className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 active:scale-95 transition-all text-center shadow-2xs"
                        >
                          Call {line.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-linear-to-b from-teal-50/40 to-white border border-slate-100 p-6 shadow-2xs space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700">Immediate Grounding</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                If anxiety spikes or panic sets in, try the 5-4-3-2-1 Technique to anchor your thoughts back into your physical space:
              </p>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li className="flex items-center gap-2"><span className="text-teal-600">5</span> Things you can see around you</li>
                <li className="flex items-center gap-2"><span className="text-teal-600">4</span> Things you can physically touch</li>
                <li className="flex items-center gap-2"><span className="text-teal-600">3</span> Things you can distinctively hear</li>
                <li className="flex items-center gap-2"><span className="text-teal-600">2</span> Things you can smell</li>
                <li className="flex items-center gap-2"><span className="text-teal-600">1</span> Thing you can taste</li>
              </ul>
            </div>

            {/* Privacy Promise Notice */}
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-2xs space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Privacy Commitment</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Accessing this dashboard is completely decentralized. Solace logs none of your personal identity tags, geo-location streams, or communication histories to any cloud network profiles. Your safety is private.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Resources;