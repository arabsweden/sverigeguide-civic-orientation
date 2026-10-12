import React, { useState } from 'react';
import { Municipality, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { MapPin, Search, Phone, ExternalLink, Home, GraduationCap } from 'lucide-react';

interface MunicipalitiesViewProps {
  municipalities: Municipality[];
  language: Language;
}

export const MunicipalitiesView: React.FC<MunicipalitiesViewProps> = ({ municipalities, language }) => {
  const [search, setSearch] = useState('');
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const filtered = municipalities.filter(m => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return m.name.toLowerCase().includes(q) || m.nameSv.toLowerCase().includes(q) || m.region.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            <span>دليل البلديات السويدية (Kommuner)</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            بيانات الاتصال المباشر لخدمات دراسة SFI، الرعاية الاجتماعية المحلية، وبوابات طوابير السكن بالبلدية.
          </p>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث باسم البلدية (مثال: Stockholm, Göteborg, Malmö)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((m) => (
          <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">{m.name}</h3>
                <span className="text-xs font-semibold text-blue-600">{m.nameSv}</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {m.region}
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span className="font-semibold">هاتف SFI بالبلدية:</span>
                <span className="text-slate-900 font-bold">{m.sfiContact}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">طوارئ الرعاية الاجتماعية:</span>
                <span className="text-slate-900 font-bold">{m.socialServicesPhone}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href={m.housingAgencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-bold hover:underline flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>طابور سكن البلدية</span>
              </a>

              <a
                href={m.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline flex items-center gap-1"
              >
                <span>الموقع الرسمي</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
