import { Category } from '../types';

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'society_rights',
    iconName: 'ShieldCheck',
    title: 'المجتمع والحقوق والديمقراطية',
    titleSv: 'Samhälle, Rättigheter & Demokrati',
    titleEn: 'Society, Rights & Democracy',
    description: 'فهم الدستور السويدي، حرية التعبير، المساواة، والحقوق الأساسية للمقيمين.',
    descriptionSv: 'Förstå den svenska grundlagen, yttrandefrihet, jämställdhet och grundläggande rättigheter.',
    descriptionEn: 'Understand the Swedish constitution, freedom of speech, equality, and basic rights.',
    badgeTag: 'المجتمع والديمقراطية',
    lessons: [
      {
        id: 'fundamental_rights',
        categoryId: 'society_rights',
        title: 'الحقوق والمبادئ الأساسية في السويد',
        titleSv: 'Grundläggande rättigheter och principer i Sverige',
        titleEn: 'Fundamental Rights and Principles in Sweden',
        readingTimeMinutes: 8,
        summary: 'تستند الدولة السويدية إلى الديمقراطية، سيادة القانون، وحرية التعبير والمساواة بين الجنسين.',
        summarySv: 'Sverige vilar på demokrati, rättsstatens principer, yttrandefrihet och jämställdhet.',
        summaryEn: 'Sweden is built on democracy, rule of law, freedom of speech, and gender equality.',
        fullContent: `تعتبر السويد ديمقراطية نيابية قائمة على أربعة قوانين أساسية تشكل الدستور السويدي (Grundlagar):
1. قانون شكل الحكومة (Regeringsformen): يحدد كيفية إدارة الدولة وحقوق المواطنين.
2. قانون حرية الصحافة (Tryckfrihetsförordningen): يضمن إمكانية نشر الكتب والجرائد بحرية.
3. قانون حرية التعبير (Yttrandefrihetsgrundlagen): يضمن التعبير عن الرأي في التلفزيون والراديو والإنترنت.
4. قانون الخلافة على العرش (Successionsordningen): يحدد قواعد تولي العرش.

مبدأ العلنية (Offentlighetsprincipen):
لكل شخص في السويد الحق في الاطلاع على الوثائق الرسمية للدوائر الحكومية والبلديات، مما يعزز الشفافية ومكافحة الفساد.

المساواة وحظر التمييز:
يحظر القانون السويدي التمييز بسبب الجنس، العرق، الدين، التوجه الجنسي، الإعاقة، أو العمر، وتشرف على ذلك هيئة أمين مظالم التمييز (DO - Diskrimineringsombudsmannen).`,
        fullContentSv: `Sverige är en representativ demokrati som bygger på fyra grundlagar:
1. Regeringsformen (RF): Styr hur landet styrs och vilka rättigheter medborgarna har.
2. Tryckfrihetsförordningen (TF): Garanterar rätten att trycka och sprida skrift.
3. Yttrandefrihetsgrundlagen (YGL): Garanterar rätten att uttrycka sig i radio, TV och internet.
4. Successionsordningen (SO): Reglerar vem som blir statschef.

Offentlighetsprincipen:
Alla har rätt att ta del av allmänna handlingar hos myndigheter för att stärka insyn och motverka korruption.

Diskrimineringsförbud:
Diskriminering p.g.a. kön, etnicitet, religion, sexuell läggning, funktionsnedsättning eller ålder är förbjuden enligt lag och bevakas av Diskrimineringsombudsmannen (DO).`,
        fullContentEn: `Sweden is a representative democracy anchored by four fundamental constitutional laws:
1. Instrument of Government (Regeringsformen): Outlines governance and civil rights.
2. Freedom of the Press Act (Tryckfrihetsförordningen): Guarantees the right to publish printed matter.
3. Fundamental Law on Freedom of Expression (Yttrandefrihetsgrundlagen): Protects expression in broadcast and digital media.
4. Act of Succession (Successionsordningen): Regulates succession to the Swedish throne.

The Public Access Principle (Offentlighetsprincipen):
Everyone has the right to inspect public documents held by government agencies and municipalities to ensure transparency.

Anti-Discrimination Laws:
Discrimination based on gender, ethnicity, religion, sexual orientation, disability, or age is prohibited by law and overseen by DO.`,
        practicalExamples: [
          'يمكنك الحصول على نسخة من القرارات الحكومية غير السرية بفضل مبدأ العلنية.',
          'إذا تعرضت للتمييز في مكان العمل أو المدرسة، يمكنك تقديم بلاغ رسمي لهيئة DO.',
          'تضمن الدولة حرية الاعتقاد وممارسة الشعائر الدينية لجميع السكان دون تدخل.'
        ],
        practicalExamplesSv: [
          'Du kan begära ut allmänna handlingar från myndigheter med stöd av offentlighetsprincipen.',
          'Om du upplever diskriminering på jobbet eller i skolan kan du anmäla det till DO.',
          'Religionsfrihet garanterar rätten att utöva sin tro fritt.'
        ],
        practicalExamplesEn: [
          'You can request public documents from government agencies under the Public Access Principle.',
          'If you experience discrimination at work or school, you can report it to DO.',
          'Freedom of religion guarantees the right to practice your faith freely.'
        ],
        officialSource: 'Riksdagen & Regeringen',
        officialUrl: 'https://www.riksdagen.se',
        lastVerifiedDate: '2026-06-15',
        quiz: [
          {
            id: 'q1_rights',
            type: 'mcq',
            question: 'ما هو المبدأ السويدي الذي يتيح للجمهور الاطلاع على الوثائق الرسمية للدوائر الحكومية؟',
            questionSv: 'Vilken princip i Sverige ger allmänheten rätt att läsa myndigheters handlingar?',
            questionEn: 'Which Swedish principle allows the public to view official agency documents?',
            options: [
              'مبدأ الشفافية المالية (Finansprincipen)',
              'مبدأ العلنية (Offentlighetsprincipen)',
              'مبدأ السرية البلدية (Sekretessprincipen)',
              'قانون حماية البيانات الشخصية (GDPR)'
            ],
            optionsSv: [
              'Finansprincipen',
              'Offentlighetsprincipen',
              'Sekretessprincipen',
              'GDPR-förordningen'
            ],
            optionsEn: [
              'Financial Transparency Principle',
              'Public Access Principle (Offentlighetsprincipen)',
              'Municipal Secrecy Principle',
              'GDPR Privacy Law'
            ],
            correctAnswerIndex: 1,
            explanation: 'مبدأ العلنية (Offentlighetsprincipen) هو جزء أسياسي من الدستور يضمن حق الجميع في قراءة الوثائق الرسمية.',
            explanationSv: 'Offentlighetsprincipen är en grundlagsskyddad rättighet som ger alla rätt till insyn i myndigheters arbete.',
            explanationEn: 'The Public Access Principle is a constitutional right allowing everyone access to public documents.'
          },
          {
            id: 'q2_matching_rights',
            type: 'matching',
            question: 'طابق بين المفهوم السويدي ومعناه:',
            questionSv: 'Koppla samman begrepp med dess betydelse:',
            questionEn: 'Match the Swedish concept with its meaning:',
            options: [],
            optionsSv: [],
            optionsEn: [],
            correctAnswerIndex: 0,
            explanation: 'التطابق الصحيح يربط المصطلحات السويدية الرسمية بالهياكل الحكومية.',
            explanationSv: 'Korrekt matchning länkar samman svenska myndighetsbegrepp.',
            explanationEn: 'Correct matching connects official Swedish terms.',
            matchingPairs: [
              {
                id: 'p1',
                left: 'Regeringsformen',
                leftSv: 'Regeringsformen',
                leftEn: 'Instrument of Government',
                right: 'قانون شكل الحكومة والديمقراطية',
                rightSv: 'Grundlagen för statsskicket och demokratin',
                rightEn: 'Constitution defining governance and democracy'
              },
              {
                id: 'p2',
                left: 'Diskrimineringsombudsmannen (DO)',
                leftSv: 'DO',
                leftEn: 'Equality Ombudsman',
                right: 'الهيئة المشرفة على حظر التمييز',
                rightSv: 'Myndighet som motverkar diskriminering',
                rightEn: 'Agency overseeing non-discrimination'
              },
              {
                id: 'p3',
                left: 'Riksdagen',
                leftSv: 'Riksdagen',
                leftEn: 'The Swedish Parliament',
                right: 'البرلمان السويدي المكون من 349 عضواً',
                rightSv: 'Sveriges parlament med 349 ledamöter',
                rightEn: 'Swedish parliament with 349 elected members'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'work_employment',
    iconName: 'Briefcase',
    title: 'سوق العمل والتشغيل',
    titleSv: 'Arbetsmarknad & Anställning',
    titleEn: 'Labour Market & Employment',
    description: 'قوانين العمل، عقود التشغيل، النقابات العمالية (Fackförbund)، والبحث عن عمل عبر Arbetsförmedlingen.',
    descriptionSv: 'Arbetsrätt, anställningsavtal, fackförbund och jobbsökande via Arbetsförmedlingen.',
    descriptionEn: 'Labor laws, employment contracts, trade unions (Fackförbund), and job searching via Arbetsförmedlingen.',
    badgeTag: 'سوق العمل',
    lessons: [
      {
        id: 'employment_contracts',
        categoryId: 'work_employment',
        title: 'عقود العمل والحقوق العمالية في السويد',
        titleSv: 'Anställningsformer och arbetsrätt i Sverige',
        titleEn: 'Employment Types and Labor Rights in Sweden',
        readingTimeMinutes: 10,
        summary: 'أنواع عقود العمل الرئيسية هي العقد الدائم (Tillsvidareanställning) والعقد المؤقت (Tidsbegränsad anställning).',
        summarySv: 'De huvudsakliga anställningsformerna är tillsvidareanställning (fast) och tidsbegränsad anställning.',
        summaryEn: 'The main employment types are permanent (Tillsvidareanställning) and fixed-term (Tidsbegränsad).',
        fullContent: `تتميز سوق العمل السويدي بوجود النموذج السويدي (Den svenska modellen) القائم على الاتفاقيات الجماعية (Kollektivavtal) بين أرباب العمل والنقابات العمالية.

أنواع عقود العمل:
1. عقد دائم (Tillsvidareanställning / Fast anställning): ينتهي فقط باستقالة أو إقالة وفق شروط قانونية.
2. عقد تجريبي (Provanställning): مدته الأقصى 6 أشهر للتحقق من كفاءة الموظف، ويمكن تحويله لعقد دائم.
3. عقد مؤقت (Särskild vissidsanställning): محدد بوقت أو مهمة معينة.

الاتفاقية الجماعية (Kollektivavtal):
تحدد الأجور الدنيا، ساعات العمل، الإجازات المدفوعة، التعويضات عند المرض، والتقاعد التكميلي (Tjänstepension). ليس بالضرورة أن ينص القانون على حد أدنى للأجور، بل تحدده الاتفاقيات الجماعية.

النقابات صندوق البطالة (A-kassa):
الانضمام للـ A-kassa يوفر تأميناً مالياً في حال فقدان العمل بنسبة تصل إلى 80% من الراتب السابق.`,
        fullContentSv: `Den svenska arbetsmarknaden bygger på "Den svenska modellen" med kollektivavtal mellan arbetsgivare och fackförbund.

Anställningsformer:
1. Tillsvidareanställning (Fast anställning): Löpande anställning utan slutdatum.
2. Provanställning: Högst 6 månader för att testa anställningen, övergår normalt i fast job.
3. Särskild vissidsanställning: Tidsbegränsat jobb för viss tid eller projekt.

Kollektivavtal:
Reglerar minimilöner, arbetstider, semester, sjuklön och tjänstepension. Sverige har ingen lagstadgad minimilön; löner sätts genom kollektivavtal.

A-kassa:
Medlemskap i en a-kassa ger ekonomisk trygghet vid arbetslöshet (upp till 80% av tidigare lön).`,
        fullContentEn: `The Swedish labor market operates under "The Swedish Model", driven by Collective Agreements (Kollektivavtal) negotiated between unions and employer associations.

Employment Types:
1. Permanent Employment (Tillsvidareanställning): Ongoing contract with no fixed end date.
2. Probationary Period (Provanställning): Maximum 6 months trial period, usually transitions to permanent.
3. Fixed-term Employment (Särskild vissidsanställning): Temporary role for a specific duration or project.

Collective Agreements (Kollektivavtal):
Set minimum wage guidelines, working hours, paid vacation, sick pay, and occupational pension (Tjänstepension). Sweden does not have a statutory state minimum wage; wages are set via collective bargaining.

Unemployment Insurance (A-kassa):
Joining an A-kassa provides financial coverage up to 80% of previous income during unemployment.`,
        practicalExamples: [
          'اطلب دائماً كتابة عقد عمل (Anställningsavtal) قبل البدء في أي وظيفة.',
          'اشترك في صندوق البطالة (A-kassa) فور شروعك في العمل لضمان التغطية المالية.',
          'تحقق مما إذا كان مكان عملك يطبق الاتفاقية الجماعية (Kollektivavtal).'
        ],
        practicalExamplesSv: [
          'Kräv alltid ett skriftligt anställningsavtal innan du börjar jobba.',
          'Gå med i en a-kassa så fort du börjar arbeta.',
          'Kontrollera om din arbetsplats har kollektivavtal.'
        ],
        practicalExamplesEn: [
          'Always insist on a written employment contract before starting work.',
          'Join an A-kassa fund as soon as you start working.',
          'Check if your workplace operates with a Collective Agreement (Kollektivavtal).'
        ],
        officialSource: 'Arbetsförmedlingen & Arbetsmiljöverket',
        officialUrl: 'https://arbetsformedlingen.se',
        lastVerifiedDate: '2026-07-01',
        quiz: [
          {
            id: 'q1_work',
            type: 'mcq',
            question: 'كيف تتم تحديد الحد الأدنى للأجور في معظم القطاعات في السويد؟',
            questionSv: 'Hur bestäms minimilöner i de flesta branscher i Sverige?',
            questionEn: 'How are minimum wages determined in most Swedish industries?',
            options: [
              'عن طريق قانون ثابت تصدره الحكومة سنوياً',
              'عن طريق الاتفاقيات الجماعية (Kollektivavtal) بين النقابات وأرباب العمل',
              'تحدده مصلحة الضرائب (Skatteverket) فقط',
              'يحددها مكتب البلديات بناءً على المنطقة'
            ],
            optionsSv: [
              'Genom en fast statlig lag som ändras årligen',
              'Genom kollektivavtal mellan fackförbund och arbetsgivare',
              'Enbart av Skatteverket',
              'Av kommunstyrelsen'
            ],
            optionsEn: [
              'Through a fixed annual state law',
              'Through collective agreements (Kollektivavtal) between unions and employers',
              'Solely determined by Skatteverket',
              'By local municipal councils'
            ],
            correctAnswerIndex: 1,
            explanation: 'في السويد لا يوجد حد أدنى للرواتب ينص عليه القانون العام، بل يتم تحديده من خلال الاتفاقيات الجماعية (Kollektivavtal).',
            explanationSv: 'Sverige har ingen lagstadgad minimilön. Löner förhandlas fram i kollektivavtal.',
            explanationEn: 'Sweden does not have a statutory minimum wage law; wages are negotiated in collective agreements.'
          }
        ]
      }
    ]
  },
  {
    id: 'housing_residence',
    iconName: 'Home',
    title: 'السكن والإقامة',
    titleSv: 'Bostad & Bosättning',
    titleEn: 'Housing & Residence',
    description: 'أنواع السكن (عقد أول HYRESRÄTT، عقد ثاني ANDRAHAND، ملكية BOSTADSRÄTT)، وقوائم الانتظار في البلديات.',
    descriptionSv: 'Bostadstyper (hyresrätt, andrahand, bostadsrätt) och kommunala bostadsköer.',
    descriptionEn: 'Housing types (first-hand rental, sub-letting, tenant-ownership) and municipal housing queues.',
    badgeTag: 'السكن',
    lessons: [
      {
        id: 'housing_types',
        categoryId: 'housing_residence',
        title: 'سوق السكن في السويد وكيفية البحث عن شقة',
        titleSv: 'Bostadsmarknaden i Sverige och hur du söker lägenhet',
        titleEn: 'The Swedish Housing Market and How to Find an Apartment',
        readingTimeMinutes: 9,
        summary: 'تنسق شركة السكن البلدية والشركات الخاصة توزيع العقود الأولية (Första hand) عبر نقاط الانتظار (Bostadspoäng).',
        summarySv: 'Kommunala bostadsbolag och privata hyresvärdar förmedlar förstahandskontrakt via köpoäng.',
        summaryEn: 'Municipal housing corporations and private landlords allocate first-hand leases via queue points.',
        fullContent: `ينقسم نظام السكن في السويد إلى عدة فئات رئيسية:
1. عقد إيجار مباشر (Förstahandskontrakt): عقد دائم مع شركة السكن مباشرة، وهو الخيار الأفضل والأكثر استقراراً. يتطلب التقديم عليه التراكم في طابور السكن (Bostadskö) مثل Bostadsförmedlingen i Stockholm أو Boplats Göteborg.
2. عقد إيجار ثانوي (Andrahandskontrakt): استئجار الشقة من المستأجر الأصلي. يجب أن يتم بموافقة رسمية من مالك البناء أو جمعية السكن (Bostadsrättsförening)، ويحظر القانون تقاضي إيجار فاحش غير مبرر.
3. شقة ملكية (Bostadsrätt): شراء حق السكن في شقة ضمن جمعية مالكي السكن.

تسجيل العنوان والتنقل (Folkbokföring):
يلزم القانون السويدي كل شخص بالتسجيل في العنوان الفعلي الذي يسكن فيه لدى مصلحة الضرائب (Skatteverket). التسجيل في عنوان وهمي يعتبر جريمة يعاقب عليها القانون.`,
        fullContentSv: `Det svenska bostadssystemet är uppdelat i följande former:
1. Förstahandskontrakt: Direktavtal med fastighetsägaren. Kräver oftast kötid i bostadskö (t.ex. Bostadsförmedlingen i Stockholm eller Boplats Göteborg).
2. Andrahandskontrakt: Du hyr av någon som har förstahandskontrakt eller äger bostaden. Kräver tillstånd från hyresvärden/bostadsrättsföreningen.
3. Bostadsrätt: Du köper en andel i en bostadsrättsförening som ger nyttjanderätt till lägenheten.

Folkbokföring:
Du måste vara folkbokförd på den adress där du faktiskt bor enligt Skatteverkets regler. Att vara felaktigt folkbokförd är straffbart.`,
        fullContentEn: `Housing in Sweden is grouped into three main forms:
1. First-hand Lease (Förstahandskontrakt): Direct contract with the building owner. Usually requires queue time in a housing portal (e.g., Stockholm Housing Agency or Boplats Göteborg).
2. Second-hand Lease (Andrahandskontrakt): Sub-letting from the primary tenant. Requires written permission from the landlord or housing board. Charging unfair rent above regulations is illegal.
3. Tenant-ownership (Bostadsrätt): Buying a share in a housing cooperative granting occupancy rights.

Civil Registration (Folkbokföring):
Swedish law mandates registering your civil address with Skatteverket where you actually reside. Registering false addresses is a criminal offense.`,
        practicalExamples: [
          'سجل في طابور السكن البلدي فور حصولك على الرقم الشخصي (Personnummer).',
          'تأكد دائماً من وجود موافقة خطية من مالك البناء عند استئجار شقة بعقد ثانوي (Andrahand).',
          'قم بتحديث عنوانك لدى Skatteverket فور انتقالك لشقة جديدة.'
        ],
        practicalExamplesSv: [
          'Ställ dig i den kommunala bostadskön så fort du fått ditt personnummer.',
          'Se till att hyresvärden har godkänt andrahandsuthyrningen skriftligt.',
          'Ändra din adress hos Skatteverket när du flyttar.'
        ],
        practicalExamplesEn: [
          'Register for the municipal housing queue as soon as you receive your Personnummer.',
          'Ensure the landlord has given written consent for any second-hand sublet.',
          'Update your address with Skatteverket immediately upon moving.'
        ],
        officialSource: 'Boverket & Skatteverket',
        officialUrl: 'https://www.boverket.se',
        lastVerifiedDate: '2026-06-20',
        quiz: [
          {
            id: 'q1_housing',
            type: 'mcq',
            question: 'ما الذي يجب القيام به فور الانتقال إلى سكن جديد في السويد؟',
            questionSv: 'Vad måste du göra direkt när du flyttar till en ny bostad i Sverige?',
            questionEn: 'What must you do immediately upon moving to a new home in Sweden?',
            options: [
              'تغيير العنوان وتسجيل السكن لدى مصلحة الضرائب (Skatteverket)',
              'إبلاغ سفارة بلدك الأصلي فوراً',
              'شراء شقة ملكية خلال شهر واحد',
              'إلغاء جميع الاشتراكات الهاتفية'
            ],
            optionsSv: [
              'Anmäla adressändring och folkbokföring hos Skatteverket',
              'Informera ditt ursprungslands ambassad',
              'Köpa en bostadsrätt inom en månad',
              'Säga upp ditt telefonabonnemang'
            ],
            optionsEn: [
              'Report change of address and civil status (Folkbokföring) to Skatteverket',
              'Notify your home country embassy',
              'Purchase a cooperative apartment within a month',
              'Cancel all phone subscriptions'
            ],
            correctAnswerIndex: 0,
            explanation: 'التسجيل في العنوان الصحيح لدى Skatteverket إجباري بموجب القانون السويدي (Folkbokföringslagen).',
            explanationSv: 'Det är lag på att vara folkbokförd där man bor i Sverige.',
            explanationEn: 'It is a legal requirement in Sweden to be registered where you physically reside.'
          }
        ]
      }
    ]
  },
  {
    id: 'healthcare_wellness',
    iconName: 'HeartPulse',
    title: 'الرعاية الصحية والعناية الطبية',
    titleSv: 'Sjukvård & Hälsa',
    titleEn: 'Healthcare & Wellness',
    description: 'المراكز الصحية (Vårdcentral)، الرقم 1177 للاستشارات، الرعاية الطارئة (Akutmottagning)، وسقف التكلفة (Högkostnadsskydd).',
    descriptionSv: 'Vårdcentraler, 1177 Vårdguiden, akutmottagning och högkostnadsskydd för sjukvård och medicin.',
    descriptionEn: 'Health centers (Vårdcentral), 1177 guidance, emergency care (Akut), and cost limits (Högkostnadsskydd).',
    badgeTag: 'الرعاية الصحية',
    lessons: [
      {
        id: 'healthcare_system',
        categoryId: 'healthcare_wellness',
        title: 'كيف يعمل نظام الرعاية الصحية والرقم 1177',
        titleSv: 'Hur sjukvården fungerar och 1177 Vårdguiden',
        titleEn: 'How Swedish Healthcare Works and 1177 Medical Advice',
        readingTimeMinutes: 7,
        summary: 'المركز الصحي (Vårdcentral) هو البوابة الأولى للرعاية الطبية غير الطارئة، والرقم 1177 يعمل على مدار الساعة.',
        summarySv: 'Vårdcentralen är den första kontakten för icke-akut vård, och 1177 ger sjukvårdsrådgivning dygnet runt.',
        summaryEn: 'Health centers (Vårdcentral) are the first point of contact for non-emergency care, with 1177 operating 24/7.',
        fullContent: `تُدار الرعاية الصحية في السويد عبر الأقاليم (Regioner) وتعتمد على الضرائب العامة لتغطية التكاليف:

1. الرقم 1177 (Vårdguiden):
رقم مجاني هاتفياً وموقع إلكتروني يتيح الاستشارة الطبية وتوجيهك للمركز الصحي المناسب، حجز المواعيد، وتجديد الوصفات الطبية (Recept).

2. المركز الصحي (Vårdcentral):
نقطة الاتصال الأولى لأغلب الفحوصات والأمراض. عند الحاجة لطبيب متخصص، يقوم طبيب المركز الصحي بكتابة تحويل طبي (Remiss).

3. قسم الطوارئ (Akutmottagning / 112):
مخصص للحالات الحرجة المهددة للحياة. اتصل بالرقم 112 في حالات الطوارئ القصوى كالجلطات أو الحوادث الخطيرة.

سقف حماية التكلفة العالية (Högkostnadsskydd):
يضمن النظام ألا يدفع المريض أكثر من مبلغ محدد سنوياً للزيارات الطبية (حوالي 1,400 كرونة) وللأدوية الموصوفة (حوالي 2,900 كرونة). الرعاية الصحية للأطفال دون سن 18 مجانية بالكامل غالباً.`,
        fullContentSv: `Sjukvården i Sverige finansieras huvudsakligen via skatt och drivs av regionerna:

1. 1177 Vårdguiden:
Sjukvårdsrådgivning per telefon och webb dygnet runt. Hjälper dig att bedöma vårdbehov och boka tider.

2. Vårdcentral:
Din första kontakt för alla vanliga sjukdomar och hälsokontroller. Om specialistvård behövs utfärdar läkaren en remiss.

3. Akutmottagning och 112:
Vid livshotande tillstånd eller svåra olyckor, ring 112 eller uppsök akuten direkt.

Högkostnadsskydd:
Innebär ett pristak för vad du betalar i patientavgifter under ett år (ca 1 400 kr för vård och ca 2 900 kr för receptbelagd medicin). Barnvård är avgiftsfri.`,
        fullContentEn: `Healthcare in Sweden is publicly funded via regional taxes:

1. 1177 Vårdguiden:
24/7 medical advice hotline and digital portal. Provides triage advice, appointment booking, and prescription renewals.

2. Health Center (Vårdcentral):
Your primary contact for everyday medical issues. If specialized hospital care is required, the GP issues a referral (Remiss).

3. Emergency Room (Akut) & 112:
For acute, life-threatening conditions. Call 112 immediately in case of severe emergencies.

High-Cost Protection (Högkostnadsskydd):
Caps out-of-pocket medical expenses per year (approx SEK 1,400 for consultations, SEK 2,900 for prescribed medicines). Healthcare for children under 18 is free.`,
        practicalExamples: [
          'اتصل بالرقم 1177 قبل التوجه إلى الطوارئ لتقييم حالتك ومعرفة وقت الانتظار.',
          'اختر مركزاً صحياً (Vårdcentral) قريب منك وسجل فيه للحصول على طبيب أسرة.',
          'احفظ تطبيق 1177 مع الهوية الرقمية BankID لإدارة مواعيدك بسهولة.'
        ],
        practicalExamplesSv: [
          'Ring 1177 innan du åker till akuten för rådgivning.',
          'Välj en vårdcentral och lista dig där.',
          'Ladda ner 1177-appen och logga in med BankID.'
        ],
        practicalExamplesEn: [
          'Call 1177 before heading to the ER for preliminary advice.',
          'Select and register at a local Vårdcentral to assign a primary physician.',
          'Use the 1177 app with BankID to manage appointments smoothly.'
        ],
        officialSource: '1177 Vårdguiden & Socialstyrelsen',
        officialUrl: 'https://www.1177.se',
        lastVerifiedDate: '2026-07-10',
        quiz: [
          {
            id: 'q1_health',
            type: 'mcq',
            question: 'ما هو الرقم التلفوني الهاتفي المخصص للاستشارات الطبية المتاحة 24/7 في السويد؟',
            questionSv: 'Vilket telefonnummer ringer du för sjukvårdsrådgivning dygnet runt i Sverige?',
            questionEn: 'Which phone number do you call for 24/7 medical guidance in Sweden?',
            options: [
              '1177',
              '112',
              '114 14',
              '113 13'
            ],
            optionsSv: [
              '1177',
              '112',
              '114 14',
              '113 13'
            ],
            optionsEn: [
              '1177',
              '112',
              '114 14',
              '113 13'
            ],
            correctAnswerIndex: 0,
            explanation: 'الرقم 1177 هو الخط المخصص للاستشارات الطبية والتوجيه، بينما 112 للطوارئ القصوى.',
            explanationSv: '1177 ger sjukvårdsrådgivning, medan 112 är för akuta nödsituationer.',
            explanationEn: '1177 provides medical advice, whereas 112 is reserved for life-threatening emergencies.'
          }
        ]
      }
    ]
  },
  {
    id: 'education_sfi',
    iconName: 'GraduationCap',
    title: 'التعليم واللغة السويدية (SFI)',
    titleSv: 'Utbildning & SFI',
    titleEn: 'Education & SFI',
    description: 'دروس SFI، التعليم الأساسي والثانوي للبالغين (Komvux)، والتعليم العالي والدعم المالي من CSN.',
    descriptionSv: 'SFI-undervisning, Komvux, högskoleutbildning och studiestöd från CSN.',
    descriptionEn: 'SFI Swedish courses, adult education (Komvux), higher education, and CSN study financial aid.',
    badgeTag: 'التعليم واللغة',
    lessons: [
      {
        id: 'sfi_komvux_pathways',
        categoryId: 'education_sfi',
        title: 'مسارات SFI، Komvux والدعم المالي CSN',
        titleSv: 'SFI-vägar, Komvux och studiestöd från CSN',
        titleEn: 'SFI Pathways, Komvux and CSN Study Aid',
        readingTimeMinutes: 8,
        summary: 'دراسة اللغة السويدية للمهاجرين (SFI) مجانية وتفتح الباب للتدريب المهني والتعليم العالي.',
        summarySv: 'SFI är avgiftsfri svenskundervisning för nyandlända som bereder väg för yrkesutbildning och högskola.',
        summaryEn: 'SFI offers tuition-free Swedish language courses for newcomers paving the way for vocational and university education.',
        fullContent: `التعليم في السويد مجاني ومتاح لجميع المقيمين بشكل قانوني:

1. SFI (Svenska för invandrare):
تتكون من ثلاثة مسارات (Studiemängd 1, 2, 3) وأربعة مستويات (A, B, C, D) تضمن تدرج الطالب حسب خلفيته التعليمية السابقة.

2. Komvux (Kommunal vuxenutbildning):
بعد إنهاء مرحلة SFI D، يستطيع الطالب الالتحاق بـ Svenska som andraspråk (SVA) في تعليم البالغين البلدي، واستكمال المواد الثانوية.

3. القروض والمنح الدراسية (CSN):
هيئة CSN تمنح الطلاب الدعم المالي (منحة + قروض ذات فائدة منخفضة) عند دراسة مراحل Komvux أو الجامعات والمعاهد العليا (Yrkeshögskola).`,
        fullContentSv: `Svensk utbildning är avgiftsfri och tillgänglig för alla folkbokförda:

1. SFI (Svenska för invandrare):
Har tre studievägar (1, 2, 3) och fyra kurser (A, B, C, D) anpassade efter studiebakgrund.

2. Komvux:
Efter SFI kurs D kan du läsa Svenska som andraspråk (Grund och Gymnasium) på Komvux för behörighet till yrkeshögskola/universitet.

3. CSN (Centrala studiestödsnämnden):
Erbjuder studiebidrag och studielån för studier på Komvux, yrkeshögskola och universitet.`,
        fullContentEn: `Education in Sweden is tuition-free and accessible for registered residents:

1. SFI (Swedish for Immigrants):
Consists of three study pathways (1, 2, 3) and four levels (A, B, C, D) structured by educational background.

2. Komvux (Municipal Adult Education):
After completing SFI Level D, students transition to Swedish as a Second Language (SVA) and high-school prerequisite courses.

3. CSN Study Aid:
CSN provides state grants and low-interest study loans for eligible students in adult, vocational, and university education.`,
        practicalExamples: [
          'سجل في SFI عن طريق بلديتك (Kommun) فور تسلم قرار الإقامة.',
          'تقدم بطلب الدعم المالي عبر موقع CSN بمجرد قبلك في دورة Komvux مؤهلة.'
        ],
        practicalExamplesSv: [
          'Anmäl dig till SFI via din kommun så fort du får uppehållstillstånd.',
          'Ansök om studiestöd hos CSN när du blivit antagen till studier.'
        ],
        practicalExamplesEn: [
          'Register for SFI with your local municipality as soon as you receive residency.',
          'Apply for study aid via the CSN website upon enrollment in qualified studies.'
        ],
        officialSource: 'Skolverket & CSN',
        officialUrl: 'https://www.csn.se',
        lastVerifiedDate: '2026-07-05',
        quiz: [
          {
            id: 'q1_sfi',
            type: 'mcq',
            question: 'ما هي الهيئة الحكومية المسؤولية عن تقديم المنح والقروض الدراسية للطلاب في السويد؟',
            questionSv: 'Vilken myndighet ansvarar för studiebidrag och studielån i Sverige?',
            questionEn: 'Which government agency handles study grants and student loans in Sweden?',
            options: [
              'CSN (Centrala studiestödsnämnden)',
              'Försäkringskassan',
              'Skatteverket',
              'Migrationsverket'
            ],
            optionsSv: [
              'CSN',
              'Försäkringskassan',
              'Skatteverket',
              'Migrationsverket'
            ],
            optionsEn: [
              'CSN',
              'Försäkringskassan',
              'Skatteverket',
              'Migrationsverket'
            ],
            correctAnswerIndex: 0,
            explanation: 'هيئة CSN هي الجهة المختصة بإدارة المنح والقروض الدراسية للطلاب.',
            explanationSv: 'CSN hanterar allt svenskt studiestöd.',
            explanationEn: 'CSN administers all Swedish student financial aid.'
          }
        ]
      }
    ]
  },
  {
    id: 'taxes_economy',
    iconName: 'Receipt',
    title: 'الضرائب والاقتصاد الشخصي',
    titleSv: 'Skatt & Privatekonomi',
    titleEn: 'Taxes & Personal Finance',
    description: 'الإقرار الضريبي السنوي (Deklaration)، الرقم الشخصي (Personnummer)، ومصرف الهوية الرقمي (BankID).',
    descriptionSv: 'Årlig deklaration, personnummer, skattetabell och BankID.',
    descriptionEn: 'Annual tax return (Deklaration), Personnummer, tax tables, and mobile BankID.',
    badgeTag: 'الضرائب والاقتصاد',
    lessons: [
      {
        id: 'tax_declaration_bankid',
        categoryId: 'taxes_economy',
        title: 'الضرائب، الإقرار الضريبي، وأهمية BankID',
        titleSv: 'Skatter, deklaration och vikten av BankID',
        titleEn: 'Taxes, Tax Declarations, and the Importance of BankID',
        readingTimeMinutes: 8,
        summary: 'تغطي الضرائب في السويد الخدمات العامة كالتعليم والصحة. ويقدم الإقرار الضريبي سنوياً في أبريل/مايو.',
        summarySv: 'Skatter finansierar välfärden. Deklarationen görs årligen i april/maj via Skatteverket.',
        summaryEn: 'Taxes fund public welfare. Tax returns are submitted annually in April/May via Skatteverket.',
        fullContent: `تعتمد السويد نظاماً ضريبياً شفافاً تموله ضريبة الدخل البلدية (Kommunalskatt):

1. ضريبة الدخل:
تقتطع مباشرة من الراتب الشهري بنسبة تتراوح عادة بين 29% و35% حسب البلدية التي تقيم فيها.

2. الإقرار الضريبي السنوي (Inkomstdeklaration):
تراسل مصلحة الضرائب (Skatteverket) جميع المكلفين سنوياً ببيان الدخل المسبق، ويمكن تأكيده بضغطة زر واحدة عبر التطبيق الذكي باستخدام BankID.

3. مصادقة الهوية الرقمية (BankID):
أهم أداة للهوية الإلكترونية في السويد. تتطلب فتح حساب بنكي محلي ورقم شخصي (Personnummer)، وتستخدم للوصول لخدمات البلديات، المستشفيات، والدوائر الحكومية.`,
        fullContentSv: `Sverige har ett välutvecklat skattesystem där kommunalskatten ligger på ca 29-35 %:

1. Inkomstskatt:
Dras direkt från din månadslön av arbetsgivaren.

2. Deklaration:
Varje vår skickar Skatteverket ut den förtryckta deklarationen. Den godkänns enkelt via app eller SMS med BankID.

3. BankID:
Den viktigaste e-legitimationen i Sverige. Krävs för att logga in på myndigheter, banker och sjukvård.`,
        fullContentEn: `Sweden operates a transparent tax model with municipal income tax ranging between 29% and 35%:

1. Income Tax:
Deducted directly from monthly paychecks by employers.

2. Annual Tax Return (Deklaration):
Every spring, Skatteverket issues pre-filled declaration forms. It can be confirmed seamlessly via app using BankID.

3. Mobile BankID:
The essential electronic ID standard in Sweden. Issued by banks to Personnummer holders to securely access government services.`,
        practicalExamples: [
          'راجع بيان الإقرار الضريبي المسبق في فصل الربيع ووافق عليه قبل الموعد النهائي.',
          'افتح حساباً بنكياً في أقرب وقت لاقتناء BankID لسهولة تسيير معاملاتك.'
        ],
        practicalExamplesSv: [
          'Granska din deklaration varje vår och godkänn den i tid.',
          'Skaffa ett svenskt bankkonto och BankID så snabbt som möjligt.'
        ],
        practicalExamplesEn: [
          'Review your tax declaration each spring and approve it before the deadline.',
          'Obtain a Swedish bank account and BankID as early as possible.'
        ],
        officialSource: 'Skatteverket & Finansinspektionen',
        officialUrl: 'https://www.skatteverket.se',
        lastVerifiedDate: '2026-06-18',
        quiz: [
          {
            id: 'q1_tax',
            type: 'mcq',
            question: 'ما هي الهوية الرقمية الأكثر استخداماً لتسجيل الدخول للدوائر الحكومية والبنوك في السويد؟',
            questionSv: 'Vilken är den mest använda e-legitimationen i Sverige?',
            questionEn: 'Which digital identity is most commonly used to log into official services in Sweden?',
            options: [
              'BankID',
              'SkatteID',
              'PassportID',
              'SFI-Pass'
            ],
            optionsSv: [
              'BankID',
              'SkatteID',
              'PassportID',
              'SFI-Pass'
            ],
            optionsEn: [
              'BankID',
              'SkatteID',
              'PassportID',
              'SFI-Pass'
            ],
            correctAnswerIndex: 0,
            explanation: 'BankID هو المعيار الرقمي الوطني المعتمد للهوية في السويد.',
            explanationSv: 'BankID är den dominerande e-legitimationen i Sverige.',
            explanationEn: 'BankID is the primary electronic ID system across Sweden.'
          }
        ]
      }
    ]
  },
  {
    id: 'family_children',
    iconName: 'Users',
    title: 'الأسرة والأطفال والرعاية الاجتماعية',
    titleSv: 'Familj, Barn & Socialförsäkring',
    titleEn: 'Family, Children & Social Welfare',
    description: 'إجازة الوالدين (Föräldraledighet)، علاوة الأطفال (Barnbidrag)، والخدمات الاجتماعية (Socialtjänsten).',
    descriptionSv: 'Föräldrapenning, barnbidrag, förskola och Socialtjänstens roll.',
    descriptionEn: 'Parental benefit (Föräldrapenning), child allowance (Barnbidrag), preschool, and Social Services.',
    badgeTag: 'الأسرة والأطفال',
    lessons: [
      {
        id: 'parental_rights_social_services',
        categoryId: 'family_children',
        title: 'حقوق الوالدين، إجازة الأمومة والأبوة، ودور الخدمات الاجتماعية',
        titleSv: 'Föräldrarättigheter, föräldrapenning och Socialtjänstens roll',
        titleEn: 'Parental Rights, Parental Benefits, and the Role of Social Services',
        readingTimeMinutes: 10,
        summary: 'تضمن السويد إجازة والدية مدفوعة الأجر تصل إلى 480 يوماً لكل طفل، ودور الخدمة الاجتماعية هو حماية رفاهية الطفل.',
        summarySv: 'Sverige har 480 dagars föräldrapenning per barn. Socialtjänstens uppdrag är att stötta familjer och skydda barn.',
        summaryEn: 'Sweden guarantees 480 days of paid parental leave per child. Social Services focus on family support and child safety.',
        fullContent: `تتميز السويد بنظام حماية اجتماعية متقدم للأسر والأطفال تشرف عليه صندوق التأمينات (Försäkringskassan):

1. إجازة الوالدين (Föräldrapenning):
يحق للوالدين تقاسم 480 يوماً من الإجازة المدفوعة الأجر لكل طفل لتشجيع مشاركة الآباء والأمهات بالتساوي في تربية الأبناء.

2. علاوة الطفل (Barnbidrag):
مبلغ شهري غير خاضع للضرائب (1,250 كرونة حالياً لكل طفل) يصرف تلقائياً لجميع الأسر المقيمة حتى يبلغ الطفل سن 16 عاماً.

3. دور الخدمات الاجتماعية (Socialtjänsten / Soc):
هيئة بلدية تهدف لتقديم الدعم والمساعدة المادية والنفسية للأسر والمستضعفين. ينص قانون الخدمات الاجتماعية على ضرورة تغليب مصلحة الطفل الفضلى (Barnets bästa). حظر الضرب أو الإهانة البدنية والنفسية للأطفال قانون صارم ومجرم في السويد منذ عام 1979.`,
        fullContentSv: `Sverige har ett starkt socialt skyddsnät för familjer via Försäkringskassan och kommunen:

1. Föräldrapenning:
Föräldrar har rätt till totalt 480 dagars betald föräldraledighet per barn för att dela på omvårdnaden.

2. Barnbidrag:
Ett skattefritt månatligt bidrag (för närvarande 1 250 kr per barn) som betalas ut till alla föräldrar upp till barnets 16-årsdag.

3. Socialtjänsten (Soc):
Kommunal myndighet som stöttar familjer i kris. Barnets bästa sätts alltid i främsta rummet. Aga och barnaga är absolut förbjudet enligt lag sedan 1979.`,
        fullContentEn: `Sweden offers comprehensive welfare support for parents and children managed by Försäkringskassan and municipal councils:

1. Parental Allowance (Föräldrapenning):
Parents receive up to 480 days of paid parental leave per child to ensure equal parental involvement.

2. Child Allowance (Barnbidrag):
A tax-free monthly state payout (currently SEK 1,250 per child) paid automatically until age 16.

3. Social Services (Socialtjänsten / Soc):
Municipal agency dedicated to family support and welfare. Swedish law strictly prioritizes the best interests of the child. Corporal punishment or physical abuse of children has been fully illegal since 1979.`,
        practicalExamples: [
          'قدّم طلب إجازة الوالدين لدى Försäkringskassan فور ولادة الطفل.',
          'يمكن للأسر التواصل مع Socialtjänsten للحصول على استشارات تربوية مجانية أو دعم مالي في حالات الأزمات.'
        ],
        practicalExamplesSv: [
          'Ansök om föräldrapenning hos Försäkringskassan.',
          'Kontakta Socialtjänsten för kostnadsfri familjerådgivning vid behov.'
        ],
        practicalExamplesEn: [
          'Apply for parental benefit with Försäkringskassan following a child birth.',
          'Reach out to Socialtjänsten for free family guidance or support during challenges.'
        ],
        officialSource: 'Försäkringskassan & Socialstyrelsen',
        officialUrl: 'https://www.forsakringskassan.se',
        lastVerifiedDate: '2026-07-02',
        quiz: [
          {
            id: 'q1_family',
            type: 'mcq',
            question: 'كم عدد أيام إجازة الوالدين المدفوعة (Föräldrapenning) المخصصة لكل طفل في السويد؟',
            questionSv: 'Hur många dagar med föräldrapenning har föräldrar rätt till per barn i Sverige?',
            questionEn: 'How many days of paid parental leave (Föräldrapenning) are allocated per child in Sweden?',
            options: [
              '480 يوماً',
              '100 يوم',
              '30 يوماً فقط',
              '365 يوماً'
            ],
            optionsSv: [
              '480 dagar',
              '100 dagar',
              '30 dagar',
              '365 dagar'
            ],
            optionsEn: [
              '480 days',
              '100 days',
              '30 days',
              '365 days'
            ],
            correctAnswerIndex: 0,
            explanation: 'يحق للوالدين الإفادة من 480 يوماً إجمالياً لإجازة الوالدين لكل طفل.',
            explanationSv: 'Totalt ges 480 dagar per barn.',
            explanationEn: 'Parents are granted a total of 480 days per child.'
          }
        ]
      }
    ]
  },
  {
    id: 'laws_governance',
    iconName: 'Scale',
    title: 'القوانين والهجرة والمواطنة',
    titleSv: 'Lagar, Migration & Medborgarskap',
    titleEn: 'Laws, Migration & Citizenship',
    description: 'قوانين تصاريح الإقامة (TUT / PUT)، شروط الجنسية السويدية لعام 2026، والشرطة والمحاكم.',
    descriptionSv: 'Uppehållstillstånd, medborgarskapskrav 2026, polisen och rättsväsendet.',
    descriptionEn: 'Residency permits (TUT / PUT), Swedish citizenship requirements 2026, police and judiciary.',
    badgeTag: 'القوانين والقضاء',
    lessons: [
      {
        id: 'migration_laws_2026',
        categoryId: 'laws_governance',
        title: 'قواعد الهجرة والجمارك وقوانين الجنسية لعام 2026',
        titleSv: 'Migrationslagstiftning och medborgarskapskrav 2026',
        titleEn: 'Migration Legislation and Citizenship Requirements 2026',
        readingTimeMinutes: 10,
        summary: 'تطلب قواعد الهجرة السويدية المحدثة لعام 2026 إثبات الإعالة الذاتية واجتياز اختبارات اللغة والثقافة للجنسية.',
        summarySv: 'Skärpta regler 2026 kräver egen försörjning samt prov i svenska och civilsamhälle för medborgarskap.',
        summaryEn: 'Updated 2026 migration rules mandate self-sufficiency proof and language/civic knowledge tests for citizenship.',
        fullContent: `تشرف مصلحة الهجرة (Migrationsverket) على قرارات الإقامة والجنسية وفق التشريعات الحديثة:

1. الإقامة المؤقتة والإقامة الدائمة (PUT):
تمنح الإقامة المؤقتة (TUT) لمدد تتراوح بين سنة وثلاث سنوات. للحصول على الإقامة الدائمة، يشترط إثبات الإعالة المالية الذاتية (Forsörjningskrav) من خلال عقد عمل دائم براتب يلبي حد الكفاية المعيشية، وإتقان اللغة السويدية الأساسية.

2. شروط الجنسية السويدية (Medborgarskap):
تتطلب طلبات الجنسية فترة إقامة فعلية قانونية مستمرة في السويد (عادة 5 سنوات)، واجتياز اختبار معرفة المجتمع السويدي واللغة السويدية، وسجل خالي من الجرائم الخطيرة أو الديون المستحقة لدى Kronofogden.`,
        fullContentSv: `Migrationsverket fattar beslut om tillstånd och medborgarskap utifrån gällande lagstifting:

1. Tidsbegränsat (TUT) och Permanent uppehållstillstånd (PUT):
För PUT krävs egen försörjning via fast jobb med skälig lön samt grundläggande kunskaper i svenska och samhällskunskap.

2. Krav för svenskt medborgarskap:
Innefattar hemvisttid i Sverige (normalt 5 år), godkänt prov i svenska och samhällskunskap, samt skötsamhet (inga svåra brott eller obetalda skulder hos Kronofogden).`,
        fullContentEn: `The Swedish Migration Agency (Migrationsverket) administers permits and citizenship under updated statutory guidelines:

1. Temporary (TUT) vs Permanent Residency (PUT):
Transition to PUT mandates proven self-sufficiency via steady employment meeting income thresholds, alongside foundational Swedish and civic knowledge.

2. Swedish Citizenship Requirements:
Mandates continuous lawful residence (typically 5 years), passing standard Swedish language and civic knowledge tests, and a clear record free of serious convictions or unpaid debts at Kronofogden.`,
        practicalExamples: [
          'احتفظ بجميع إيصالات الرواتب وعقود العمل لتسهيل تجديد الإقامة لدى Migrationsverket.',
          'استغل منصة SverigeGuide للتحضير لاختبار المواطنة والمعرفة المجتمعية.'
        ],
        practicalExamplesSv: [
          'Spara alla lönespecifikationer och avtal inför förlängning hos Migrationsverket.',
          'Använd SverigeGuide för att öva inför samhälls- och språkprovet.'
        ],
        practicalExamplesEn: [
          'Retain all pay slips and employment contracts ahead of permit renewals with Migrationsverket.',
          'Use SverigeGuide to practice for official civic and language knowledge tests.'
        ],
        officialSource: 'Migrationsverket & Justitiedepartementet',
        officialUrl: 'https://www.migrationsverket.se',
        lastVerifiedDate: '2026-07-15',
        quiz: [
          {
            id: 'q1_laws',
            type: 'mcq',
            question: 'ما هو الشرط الأساسي المالي للحصول على الإقامة الدائمة (PUT) في السويد؟',
            questionSv: 'Vad är ett huvudkrav gällande ekonomi för att beviljas permanent uppehållstillstånd (PUT)?',
            questionEn: 'What is a core financial requirement to be granted permanent residency (PUT) in Sweden?',
            options: [
              'إثبات الإعالة الذاتية (Försörjningskrav) عبر دخل عمل منتظم يفي بالشروط',
              'امتلاك حساب بنكي بمبلغ ملبي دون عمل',
              'الحصول على مساعدة مالية كاملة من البلدية',
              'الفوز باليناصيب الوطني'
            ],
            optionsSv: [
              'Att uppfylla försörjningskravet genom egen laglig inkomst',
              'Att ha ett stort sparkonto utan jobb',
              'Att ha fullt försörjningsstöd från kommunen',
              'Att vinna på lotteri'
            ],
            optionsEn: [
              'Fulfilling the maintenance/self-sufficiency requirement via legal work income',
              'Having a large bank deposit without employment',
              'Relying fully on municipal social assistance',
              'Winning the state lottery'
            ],
            correctAnswerIndex: 0,
            explanation: 'شروط الإقامة الدائمة تتطلب إثبات القدرة المالية على إعالة النفس قانونياً.',
            explanationSv: 'Försörjningskravet är ett centralt krav för permanent uppehållstillstånd.',
            explanationEn: 'The self-sufficiency maintenance requirement is crucial for obtaining PUT.'
          }
        ]
      }
    ]
  }
];
