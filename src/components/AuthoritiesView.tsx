import React, { useState } from 'react';
import { Authority, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { Building2, Search, Phone, ExternalLink, Clock, ShieldAlert } from 'lucide-react';

interface AuthoritiesViewProps {
  authorities: Authority[];
  language: Language;
}

export const AuthoritiesView: React.FC<AuthoritiesViewProps> = ({ authorities, language }) => {
  const [search, setSearch] = useState('');
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const filtered = authorities.filter(a => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return a.name.toLowerCase().includes(q) || a.nameSv.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <span>{t('officialAuthorities')}</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            دليل الشامل للهيئات الحكومية والمؤسسات الرسمية السويدية مع الخدمات وأرقام التواصل السريع.
          </p>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث باسم الهيئة (مثال: Migrationsverket, Skatteverket)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((auth) => (
          <div key={auth.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">{auth.name}</h3>
                  <span className="text-xs font-semibold text-blue-600">{auth.nameSv}</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {auth.category}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{auth.description}</p>

              {/* Service tags */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-500 block">الخدمات الرئيسية:</span>
                <div className="flex flex-wrap gap-1.5">
                  {auth.services.map((srv, idx) => (
                    <span key={idx} className="text-[11px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md font-medium">
                      • {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contacts Footer */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                  <Phone className="w-3.5 h-3.5" />
                  <span>هاتف الخدمة: {auth.phone}</span>
                </div>

                {auth.emergencyPhone && (
                  <div className="flex items-center gap-1 font-bold text-rose-600">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>طوارئ: {auth.emergencyPhone}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{auth.hours}</span>
                </div>

                <a
                  href={auth.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                >
                  <span>زيارة البوابة الرسمية</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
