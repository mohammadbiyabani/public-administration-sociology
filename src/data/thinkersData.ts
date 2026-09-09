import { Thinker } from '../types/study';

export const THINKERS_DATABASE: Thinker[] = [
  // Public Administration Thinkers
  {
    id: 'thinker-wilson',
    slug: 'woodrow-wilson',
    subjectId: 'public-administration',
    name: {
      en: 'Woodrow Wilson',
      hi: 'वुडरो विल्सन',
      te: 'వుడ్రో విల్సన్'
    },
    era: '1856 – 1924 (USA)',
    biography: {
      en: '28th President of the United States and political scientist, widely revered as the "Father of Public Administration" for carving out its autonomous identity from political science.',
      hi: 'संयुक्त राज्य अमेरिका के 28वें राष्ट्रपति एवं राजनीति विज्ञानी, जिन्हें राजनीति विज्ञान से पृथक कर लोक प्रशासन को स्वतंत्र पहचान देने के लिए "लोक प्रशासन का जनक" कहा जाता है।',
      te: 'అమెరికా 28వ అధ్యక్షుడు మరియు రాజనీతి శాస్త్రవేత్త, ప్రజా పరిపాలనను రాజనీతి శాస్త్రం నుండి వేరుచేసి స్వతంత్ర శాస్త్రంగా తీర్చిదిద్దిన "ప్రజా పరిపాలనా పితామహుడు".'
    },
    majorWorks: [
      'The Study of Administration (1887 essay in Political Science Quarterly)',
      'Congressional Government: A Study in American Politics (1885)',
      'The State: Elements of Historical and Practical Politics (1889)'
    ],
    coreConcepts: [
      {
        en: 'Politics-Administration Dichotomy: Politics sets policy goals, while administration executes them with business-like neutral efficiency.',
        hi: 'राजनीति-प्रशासन द्विभाजन: राजनीति नीतियां तय करती है, जबकि प्रशासन उन्हें व्यापारिक निष्पक्षता व दक्षता से लागू करता है।',
        te: 'రాజకీయ-పరిపాలనా విభజన: రాజకీయాలు విధానాలను నిర్ణయిస్తాయి, పరిపాలన వాటిని తటస్థ వ్యాపార దక్షతతో అమలు చేస్తుంది.'
      },
      {
        en: 'Comparative Administrative Study: Advocated studying French and Prussian civil service systems to strengthen American democratic execution.',
        hi: 'तुलनात्मक अध्ययन: अमेरिकी लोकतंत्र को सशक्त करने हेतु फ्रांसीसी एवं प्रशियाई नौकरशाही प्रणालियों के अध्ययन पर बल।',
        te: 'తులనాత్మక అధ్యయనం: అమెరికన్ ప్రజాస్వామ్య సామర్థ్యాన్ని పెంచడానికి ఫ్రెంచ్, ప్రష్యన్ సివిల్ సర్వీస్ వ్యవస్థలను అధ్యయనం చేయాలని సూచించారు.'
      },
      {
        en: 'Famous Dictum: "It is getting harder to run a constitution than to frame one."',
        hi: 'प्रसिद्ध कथन: "संविधान का निर्माण करने की तुलना में उसे चलाना कहीं अधिक कठिन होता जा रहा है।"',
        te: 'ప్రసిద్ధ సూక్తి: "రాజ్యాంగాన్ని నిర్మించడం కంటే దానిని అమలు చేసి నడపడం అత్యంత కష్టతరమైనది."'
      }
    ],
    criticism: {
      en: 'The strict separation of politics from administration was later exposed by Appleby and Waldo as an artificial myth, since administrators actively shape policy through discretionary rule-making.',
      hi: 'राजनीति और प्रशासन के पूर्ण पृथक्करण को बाद में वाल्डो और ऐप्पलबी ने मिथक सिद्ध किया, क्योंकि प्रशासक नियम निर्माण में सक्रिय भाग लेते हैं।',
      te: 'రాజకీయాలు మరియు పరిపాలనను పూర్తిగా వేరు చేయడం అసాధ్యమని, విధానాల రూపకల్పనలో అధికారులు కూడా కీలక పాత్ర పోషిస్తారని పాల్ ఆపిల్బీ విమర్శించారు.'
    },
    examRelevance: {
      en: 'Crucial for UPSC Paper 1 Section A. Frequently tested on the contemporary relevance of the Politics-Administration Dichotomy in the era of committed bureaucracy vs neutral civil service.',
      hi: 'यूपीएससी प्रश्नपत्र 1 खंड क के लिए अपरिहार्य। प्रतिबद्ध नौकरशाही बनाम तटस्थ सिविल सेवा के संदर्भ में विल्सन के द्विभाजन पर लगातार प्रश्न पूछे जाते हैं।',
      te: 'యూపీఎస్సీ మరియు గ్రూప్-1 పరీక్షల్లో రాజకీయ-పరిపాలనా విభజన మరియు సివిల్ సర్వీసెస్ తటస్థత అంశాలపై తరచుగా అడిగే ప్రశ్న.'
    }
  },
  {
    id: 'thinker-taylor',
    slug: 'fw-taylor',
    subjectId: 'public-administration',
    name: {
      en: 'Frederick Winslow Taylor',
      hi: 'फ्रेडरिक विंसलो टेलर',
      te: 'ఫ్రెడరిక్ విన్స్‌లో టేలర్'
    },
    era: '1856 – 1915 (USA)',
    biography: {
      en: 'Mechanical engineer and father of Scientific Management, who revolutionized early 20th-century industrial production through empirical experimentation at Midvale and Bethlehem Steel.',
      hi: 'मैकेनिकल इंजीनियर एवं वैज्ञानिक प्रबंधन के जनक, जिन्होंने मिडवेल और बेथलहम स्टील में प्रयोगों द्वारा औद्योगिक उत्पादन में क्रांति ला दी।',
      te: 'మెకానికల్ ఇంజనీర్ మరియు శాస్త్రీయ నిర్వహణ పితామహుడు; పరిశ్రమలలో సమయ-గమన పరిశోధనల ద్వారా ఉత్పాదకతను విప్లవాత్మకంగా పెంచారు.'
    },
    majorWorks: [
      'Shop Management (1903)',
      'The Principles of Scientific Management (1911)',
      'A Piece Rate System (1895)'
    ],
    coreConcepts: [
      {
        en: 'The One Best Way: Discovering optimal work methods through systematic scientific observation rather than guesswork.',
        hi: 'एक सर्वोत्तम तरीका: अनुमान के स्थान पर व्यवस्थित वैज्ञानिक अध्ययन द्वारा कार्य की सर्वश्रेष्ठ विधि खोजना।',
        te: 'ఒక అత్యుత్తమ విధానం: గుడ్డి పద్ధతులు కాకుండా శాస్త్రీయ పరిశోధనల ద్వారా పని చేసే అత్యుత్తమ పద్ధతిని కనుగొనడం.'
      },
      {
        en: 'Mental Revolution: Total shift in mutual attitude between workers and management from conflict to surplus-maximizing cooperation.',
        hi: 'मानसिक क्रांति: लाभ के बंटवारे पर विवाद के बजाय अधिशेष बढ़ाने हेतु प्रबंधन और श्रमिकों का आपसी सहयोग।',
        te: 'మానసిక విప్లవం: యాజమాన్యం మరియు కార్మికుల మధ్య ఘర్షణ వైఖరిని తొలగించి, ఉమ్మడి లాభాల పెంపునకు పరస్పర సహకారం.'
      },
      {
        en: 'Functional Foremanship: Dividing supervisory duties among 8 specialist foremen to replace single-boss military hierarchy.',
        hi: 'कार्यात्मक फोरमैनशिप: एकल सैनिक पदानुक्रम के स्थान पर 8 विशेषज्ञ फोरमैन द्वारा श्रमिकों का मार्गदर्शन।',
        te: 'ఫంక్షనల్ ఫోర్‌మన్‌షిప్: కేవలం ఒకే బాస్ కాకుండా 8 మంది ప్రత్యేక నిపుణుల ద్వారా కార్మికులకు దిశానిర్దేశం.'
      }
    ],
    criticism: {
      en: 'Human relations theorists (Mayo) criticized Taylor for reducing workers to economic automatons ("rabble hypothesis"), ignoring psychological security and group dynamics.',
      hi: 'एल्टन मेयो और मानव संबंधियों ने मनुष्य को केवल "आर्थिक रोबोट" समझने और सामाजिक-मनोवैज्ञानिक आवश्यकताओं की अनदेखी के लिए टेलर की आलोचना की।',
      te: 'కార్మికులను కేవలం డబ్బు కోసం పనిచేసే యంత్రాలుగా చూశారని మరియు వారి సామాజిక అవసరాలను పట్టించుకోలేదని ఎల్టన్ మేయో విమర్శించారు.'
    },
    examRelevance: {
      en: 'High-frequency exam topic comparing Scientific Management with Henri Fayol’s Classical Management and modern BPR / Six Sigma.',
      hi: 'टेलर के वैज्ञानिक प्रबंधन की फेयोल के प्रशासनिक सिद्धांतों तथा आधुनिक बिजनेस प्रोसेस रीइंजीनियरिंग (BPR) से तुलना पर नियमित प्रश्न।',
      te: 'టేలరిజం vs ఫాయోల్ సిద్ధాంతాల పోలిక మరియు సమకాలీన సిక్స్ సిగ్మా / ఐటీ ప్రాజెక్ట్ మేనేజ్‌మెంట్‌తో సంబంధం.'
    }
  },
  {
    id: 'thinker-fayol',
    slug: 'henri-fayol',
    subjectId: 'public-administration',
    name: {
      en: 'Henri Fayol',
      hi: 'हेनरी फेयोल',
      te: 'హెన్రీ ఫాయోల్'
    },
    era: '1841 – 1925 (France)',
    biography: {
      en: 'French mining engineer and executive, considered the Father of Modern Operational-Management Theory for formulating universal administrative principles applicable to all organizations.',
      hi: 'फ्रांसीसी खनन इंजीनियर और उद्योगपति, जिन्हें सभी संगठनों पर लागू होने वाले सार्वभौमिक प्रशासनिक सिद्धांतों के प्रतिपादन हेतु "आधुनिक प्रबंधन सिद्धांत का जनक" माना जाता है।',
      te: 'ఫ్రెంచ్ మైనింగ్ ఇంజనీర్ మరియు కార్యనిర్వాహకుడు; ఆధునిక పరిపాలనా నిర్వహణ పితామహుడు, విశ్వవ్యాప్త 14 నిర్వహణ సూత్రాలను రూపొందించారు.'
    },
    majorWorks: [
      'General and Industrial Management (Administration Industrielle et Générale, 1916)'
    ],
    coreConcepts: [
      {
        en: 'POCCC Elements of Management: Planning, Organizing, Commanding, Coordinating, and Controlling.',
        hi: 'POCCC तत्व: नियोजन (Planning), संगठन (Organizing), आदेश (Commanding), समन्वय (Coordinating), एवं नियंत्रण (Controlling)।',
        te: 'POCCC నిర్వహణా అంశాలు: ప్రణాళిక, వ్యవస్థీకరణ, ఆదేశాలు, సమన్వయం, నియంత్రణ.'
      },
      {
        en: '14 Principles of Management: Including Unity of Command, Unity of Direction, Scalar Chain, Espirit de Corps, and Equity.',
        hi: '14 प्रशासनिक सिद्धांत: जिसमें आदेश की एकता, निर्देश की एकता, स्केलर चेन, सहयोग की भावना और समता शामिल हैं।',
        te: '14 పరిపాలనా సూత్రాలు: ఆజ్ఞా ఏకత్వ సూత్రం, సమన్వయ శ్రేణి (Scalar Chain), సమష్టి భావన (Espirit de Corps), నిష్పాక్షికత.'
      },
      {
        en: 'Gangplank Concept: Direct horizontal communication channel between two colleagues on the same hierarchical level to avoid bureaucratic delay.',
        hi: 'गैंगप्लांक (Gangplank): फाइलों के चक्कर में होने वाली देरी से बचने हेतु समान पदानुक्रम वाले अधिकारियों के मध्य सीधा संपर्क।',
        te: 'గ్యాంగ్‌ప్లాంక్: నిర్ణయాల జాప్యాన్ని నివారించడానికి క్రమానుగత శ్రేణిలో సమాన హోదా కలిగిన అధికారులు నేరుగా సంప్రదించుకునే పద్ధతి.'
      }
    ],
    criticism: {
      en: 'Herbert Simon attacked Fayol’s principles as ambiguous "proverbs" that frequently contradict each other (e.g., Unity of Command vs Specialization).',
      hi: 'हर्बर्ट साइमन ने फेयोल के सिद्धांतों को परस्पर विरोधी "कहावतें" (Proverbs) कहा, जैसे विशेषज्ञता और आदेश की एकता का अंतर्विरोध।',
      te: 'హెర్బర్ట్ సైమన్ ఫాయోల్ సూత్రాలను కేవలం ఒకదానితో ఒకటి విభేదించే సామెతలుగా విమర్శించారు.'
    },
    examRelevance: {
      en: 'Core UPSC staple comparing Fayol (Top-Down Administrative Management) with Taylor (Bottom-Up Shop-floor Management).',
      hi: 'फेयोल (ऊपर-से-नीचे व्यापक दृष्टिकोण) और टेलर (नीचे-से-ऊपर कार्यशाला दृष्टिकोण) की तुलना मुख्य परीक्षा में बार-बार पूछी जाती है।',
      te: 'ఫాయోల్ (టాప్-డౌన్ మేనేజ్‌మెంట్) మరియు టేలర్ (బాటమ్-అప్ ఇంజనీరింగ్) తులనాత్మక విశ్లేషణ యూపీఎస్సీ ప్రిపరేషన్‌లో తప్పనిసరి.'
    }
  },
  {
    id: 'thinker-mayo',
    slug: 'elton-mayo',
    subjectId: 'public-administration',
    name: {
      en: 'Elton Mayo',
      hi: 'एल्टन मेयो',
      te: 'ఎల్టన్ మేయో'
    },
    era: '1880 – 1949 (Australia / USA)',
    biography: {
      en: 'Harvard psychologist who spearheaded the landmark Hawthorne Studies (1924-1932) at Western Electric Company, founding the Human Relations School of administration.',
      hi: 'हार्वर्ड के मनोवैज्ञानिक जिन्होंने वेस्टर्न इलेक्ट्रिक कंपनी में हॉथोर्न प्रयोगों (1924-1932) का नेतृत्व कर मानव संबंध विचारधारा की नींव रखी।',
      te: 'హార్వర్డ్ మనస్తత్వవేత్త; చారిత్రాత్మక హాథోర్న్ పరిశోధనల (1924-1932) ద్వారా మానవ సంబంధాల సిద్ధాంతాన్ని స్థాపించారు.'
    },
    majorWorks: [
      'The Human Problems of an Industrial Civilization (1933)',
      'The Social Problems of an Industrial Civilization (1945)'
    ],
    coreConcepts: [
      {
        en: 'Hawthorne Effect: Novelty of being observed and made to feel valued causes workers to increase productivity, not just physical light or wage tweaks.',
        hi: 'हॉथोर्न प्रभाव: केवल वेतन या रोशनी बढ़ाने से नहीं, बल्कि जब श्रमिकों को लगता है कि उन पर विशेष ध्यान दिया जा रहा है, तो उत्पादकता बढ़ती है।',
        te: 'హాథోర్న్ ప్రభావం: భౌతిక సౌకర్యాల కంటే తమను గుర్తించి గౌరవిస్తున్నారనే భావన కార్మికుల ఉత్పాదకతను పెంచుతుంది.'
      },
      {
        en: 'Informal Organization: Inside every formal structure exists a powerful informal social network of peer norms, emotional bonds, and informal leaders.',
        hi: 'अनौपचारिक संगठन: प्रत्येक औपचारिक ढांचे के भीतर सहकर्मियों की मित्रता, अनौपचारिक नियम और भावनात्मक बंधनों का एक सक्रिय जाल होता है।',
        te: 'అనధికారిక వ్యవస్థ: ప్రతి అధికారిక వ్యవస్థ లోపల సహచరుల మధ్య భావోద్వేగ బంధాలు, అనధికారిక నియమాలు కలిగిన అంతర్గత సమాజం ఉంటుంది.'
      },
      {
        en: 'Social Person Model: Workers are driven by need for belonging, recognition, and social security, replacing Taylor’s Rabble Hypothesis.',
        hi: 'सामाजिक मानव मॉडल: श्रमिक केवल पैसे के भूखे नहीं होते बल्कि सम्मान, सुरक्षा और सामाजिक संबंधों से प्रेरित होते हैं।',
        te: 'సామాజిక మానవ నమూనా: కార్మికులు కేవలం ధనం కోసం కాకుండా గుర్తింపు, ఆదరణ మరియు సామాజిక భద్రత కోసం పనిచేస్తారు.'
      }
    ],
    criticism: {
      en: 'Marxist critics like Loren Baritz argued Mayo was a servant of corporate power who manipulated worker psychology to neutralize trade unions ("cow sociology").',
      hi: 'मार्क्सवादियों ने आरोप लगाया कि मेयो ने ट्रेड यूनियनों को कमजोर करने के लिए श्रमिकों के मनोविज्ञान का दोहन किया ("गाय समाजशास्त्र")।',
      te: 'కార్మిక సంఘాలను నిర్వీర్యం చేయడానికి యాజమాన్యాల పక్షాన కార్మికుల మనస్తత్వంతో ఆడుకున్నారని మార్క్సిస్ట్ విమర్శకులు విమర్శించారు.'
    },
    examRelevance: {
      en: 'UPSC Paper 1 Section A classic question examining the transition from Classical Machine Theory to Human Relations Paradigm.',
      hi: 'शास्त्रीय यांत्रिक सिद्धांत से मानव संबंध दृष्टिकोण की ओर संक्रमण पर यूपीएससी में लगातार उच्च अंक वाले प्रश्न पूछे जाते हैं।',
      te: 'క్లాసికల్ మెకానికల్ సిద్ధాంతాల నుండి మానవ సంబంధాల సిద్ధాంతం వైపు జరిగిన పరిణామ క్రమంపై ప్రశ్నలు.'
    }
  },

  // Sociology Thinkers
  {
    id: 'thinker-marx',
    slug: 'karl-marx',
    subjectId: 'sociology',
    name: {
      en: 'Karl Marx',
      hi: 'कार्ल मार्क्स',
      te: 'కార్ల్ మార్క్స్'
    },
    era: '1818 – 1883 (Germany / UK)',
    biography: {
      en: 'Philosopher, economist, and revolutionary sociologist whose theories of Historical Materialism, class conflict, and alienation form the bedrock of critical sociological thought.',
      hi: 'दार्शनिक, अर्थशास्त्री एवं क्रांतिकारी समाजशास्त्री, जिनके ऐतिहासिक भौतिकवाद, वर्ग संघर्ष और अलगाव के सिद्धांतों ने आलोचनात्मक समाजशास्त्र की नींव रखी।',
      te: 'తత్వవేత్త, ఆర్థికవేత్త మరియు విప్లవ సామాజికవేత్త; చారిత్రక భౌతికవాదం, వర్గ పోరాటం మరియు పరాయీకరణ సిద్ధాంతాల సృష్టికర్త.'
    },
    majorWorks: [
      'Das Kapital (Capital: Critique of Political Economy, 1867)',
      'The Communist Manifesto (with Friedrich Engels, 1848)',
      'Economic and Philosophic Manuscripts of 1844',
      'The German Ideology (1845)'
    ],
    coreConcepts: [
      {
        en: 'Historical Materialism: Society’s economic infrastructure (Forces and Relations of Production) determines its ideological superstructure (law, religion, state).',
        hi: 'ऐतिहासिक भौतिकवाद: समाज का आर्थिक आधार (उत्पादन की शक्तियां व संबंध) उसके वैचारिक अधिरचना (कानून, धर्म, राज्य) को निर्धारित करता है।',
        te: 'చారిత్రక భౌతికవాదం: సమాజపు ఆర్థిక మూలాధారం (ఉత్పత్తి సాధనాలు) సమాజపు ఉన్నత నిర్మాణాలను (చట్టం, మతం, ప్రభుత్వం) నిర్దేశిస్తుంది.'
      },
      {
        en: 'Four Dimensions of Alienation (Entfremdung): Alienation from the product, from the process of production, from fellow human beings, and from human species-essence (Gattungswesen).',
        hi: 'अलगाव के 4 रूप: उत्पादित वस्तु से अलगाव, उत्पादन प्रक्रिया से अलगाव, साथी श्रमिकों से अलगाव, और अपनी स्वयं की मानवीय प्रकृति से अलगाव।',
        te: 'పరాయీకరణ 4 రూపాలు: ఉత్పత్తి చేసిన వస్తువు నుండి, ఉత్పత్తి ప్రక్రియ నుండి, తోటి మనుషుల నుండి మరియు తన సొంత సహజాత మానవత్వం నుండి వేరుపడటం.'
      },
      {
        en: 'Class Struggle: "The history of all hitherto existing society is the history of class struggles" (Bourgeoisie vs Proletariat in capitalism).',
        hi: 'वर्ग संघर्ष: "अब तक के समस्त समाजों का इतिहास वर्ग संघर्षों का इतिहास रहा है" (पूंजीपति बनाम सर्वहारा वर्ग)।',
        te: 'వర్గ పోరాటం: "ఇప్పటివరకు ఉన్న సమస్త మానవ సమాజాల చరిత్ర వర్గ పోరాటాల చరిత్రే" (పెట్టుబడిదారులు vs శ్రామికులు).'
      }
    ],
    criticism: {
      en: 'Criticized by Max Weber and Ralf Dahrendorf for economic reductionism—failing to see that status, prestige, and political power can generate inequality independent of property ownership.',
      hi: 'वेबर और डाहरेनडॉर्फ ने आर्थिक अति-निर्धारणवाद के लिए मार्क्स की आलोचना की; उन्होंने सिद्ध किया कि प्रतिष्ठा और राजनीतिक शक्ति भी असमानता पैदा करते हैं।',
      te: 'ఆర్థిక అంశాలకే మితిమీరిన ప్రాధాన్యత ఇచ్చారని, కులం, హోదా మరియు రాజకీయ అధికారం కూడా అసమానతలకు దారితీస్తాయని మాక్స్ వెబర్ విమర్శించారు.'
    },
    examRelevance: {
      en: 'UPSC Sociology Paper 1 Thinkers mandatory topic. Frequent questions on Alienation in modern work environments and relevance of Marxian class analysis in contemporary India.',
      hi: 'समाजशास्त्र प्रश्नपत्र 1 का मुख्य स्तंभ। आधुनिक कॉरपोरेट जगत में अलगाव और समकालीन भारत में मार्क्सवादी वर्ग विश्लेषण पर नियमित प्रश्न।',
      te: 'యూపీఎస్సీ సమాజశాస్త్ర పేపర్ 1 లో అత్యంత ముఖ్యమైన విభాగం. ఆధునిక కార్పొరేట్ ఉద్యోగుల్లో పరాయీకరణ మరియు వర్గ విభజనలపై ప్రశ్నలు.'
    }
  },
  {
    id: 'thinker-durkheim',
    slug: 'emile-durkheim',
    subjectId: 'sociology',
    name: {
      en: 'Émile Durkheim',
      hi: 'एमिल दुर्खीम',
      te: 'ఎమిలే దుర్ఖీమ్'
    },
    era: '1858 – 1917 (France)',
    biography: {
      en: 'Founding father of French sociology who established its academic credentials via functionalism, methodological positivism, and empirical study of suicide and religion.',
      hi: 'फ्रांसीसी समाजशास्त्र के जनक, जिन्होंने प्रकार्यवाद, प्रत्यक्षवादी पद्धति और आत्महत्या एवं धर्म के वैज्ञानिक अध्ययन द्वारा विषय को विश्वविद्यालयी मान्यता दिलाई।',
      te: 'ఫ్రెంచ్ సమాజశాస్త్ర పితామహుడు; ప్రయోజనవాదం (Functionalism), ఆత్మహత్య మరియు మతంపై పరిశోధనల ద్వారా సమాజశాస్త్రానికి విశ్వవిద్యాలయ హోదా తెచ్చారు.'
    },
    majorWorks: [
      'The Rules of Sociological Method (1895)',
      'The Division of Labour in Society (1893)',
      'Suicide: A Study in Sociology (1897)',
      'The Elementary Forms of the Religious Life (1912)'
    ],
    coreConcepts: [
      {
        en: 'Social Facts (Faits Sociaux): Ways of acting, thinking, and feeling external to the individual, endowed with coercive power to control human behavior (sui generis).',
        hi: 'सामाजिक तथ्य: व्यक्ति से बाह्य, सोचने, अनुभव करने और कार्य करने के तरीके जो व्यक्ति पर बाध्यकारी दबाव डालते हैं।',
        te: 'సామాజిక వాస్తవాలు (Social Facts): వ్యక్తికి వెలుపల ఉండి, వ్యక్తి ప్రవర్తనను నియంత్రించే ఒత్తిడి శక్తిని కలిగి ఉండే సామాజిక అంశాలు.'
      },
      {
        en: 'Mechanical vs Organic Solidarity: Mechanical solidarity based on likeness and strong collective conscience; Organic solidarity based on specialized division of labor and interdependence.',
        hi: 'यांत्रिक बनाम सावयवी एकता: समरूपता पर आधारित यांत्रिक एकता और जटिल श्रम विभाजन पर आधारित सावयवी एकता।',
        te: 'యాంత్రిక vs సేంద్రీయ ఐక్యత: సాంప్రదాయ సమాజాల్లో సారుప్యత ఆధారిత యాంత్రిక ఐక్యత; ఆధునిక సమాజాల్లో శ్రమ విభజన ఆధారిత సేంద్రీయ ఐక్యత.'
      },
      {
        en: 'Typology of Suicide: Egoistic (low integration), Altruistic (excessive integration), Anomic (normlessness due to sudden economic dislocation), and Fatalistic (excessive regulation).',
        hi: 'आत्महत्या के 4 प्रकार: अहंकारी (कम सामाजिक जुड़ाव), परार्थवादी (अत्यधिक जुड़ाव), अप्रतिमानित/एनोमिक (अचानक संकट), एवं भाग्यवादी (अत्यधिक दमन)।',
        te: 'ఆత్మహత్య వర్గీకరణ: అహంకారపూరిత (తక్కువ సమగ్రత), పరోపకార (మితిమీరిన సమగ్రత), అనోమిక్ (నియమాలు కోల్పోవడం), మరియు విధిలిఖిత.'
      }
    ],
    criticism: {
      en: 'Methodological collectivism treated society as an omnipotent entity ("Social Realism"), reducing human actors to mere puppets devoid of creative subjectivity.',
      hi: 'दुर्खीम के सामाजिक यथार्थवाद ने व्यक्ति को समाज का केवल कठपुतली बना दिया और मानवीय स्वतंत्र विवेक की उपेक्षा की।',
      te: 'వ్యక్తుల వ్యక్తిగత భావోద్వేగాలను, సృజనాత్మక ఆలోచనలను విస్మరించి సమాజాన్ని ఒక సర్వశక్తిమంతమైన యంత్రంగా చూపించారని విమర్శ.'
    },
    examRelevance: {
      en: 'Universal favourite in UPSC Sociology exams: Durkheimian theory of suicide, secularization of religion, and Anomie in post-reform societies.',
      hi: 'दुर्खीम का आत्महत्या सिद्धांत, धर्म का समाजशास्त्र, और तीव्र आर्थिक परिवर्तनों में एनोमी (अप्रतिमानता) की स्थिति पर लगातार प्रश्न।',
      te: 'దుర్ఖీమ్ ఆత్మహత్య సిద్ధాంతం, మతం సమాజపు ఆరాధన అనే సూత్రం మరియు సమకాలీన నిరాశావాదం (Anomie) పై ప్రశ్నలు.'
    }
  },
  {
    id: 'thinker-weber',
    slug: 'max-weber-sociology',
    subjectId: 'sociology',
    name: {
      en: 'Max Weber',
      hi: 'मैक्स वेबर',
      te: 'మాక్స్ వెబర్'
    },
    era: '1864 – 1920 (Germany)',
    biography: {
      en: 'German polymath who pioneered the Interpretive (Verstehen) paradigm in sociology, investigating how cultural values and religious ethics drive historical and economic development.',
      hi: 'जर्मन विद्वान जिन्होंने व्याख्यात्मक (Verstehen) समाजशास्त्र की नींव रखी; उन्होंने दिखाया कि कैसे धार्मिक मूल्यों ने पूंजीवाद के विकास को गति दी।',
      te: 'జర్మన్ తత్వవేత్త; వివరణాత్మక (Verstehen) దృక్పథాన్ని నెలకొల్పారు, మతపరమైన నైతిక విలువలు పెట్టుబడిదారీ ఆర్థిక వ్యవస్థను ఎలా నడిపించాయో నిరూపించారు.'
    },
    majorWorks: [
      'The Protestant Ethic and the Spirit of Capitalism (1905)',
      'Economy and Society (1922)',
      'The Methodology of the Social Sciences (1949)'
    ],
    coreConcepts: [
      {
        en: 'Verstehen & Social Action: Empathetic understanding of the subjective meanings that actors attach to their social conduct.',
        hi: 'वेर्स्टेहेन (सहानुभूतिपूर्ण समझ): कर्ता द्वारा अपनी क्रिया को दिए जाने वाले व्यक्तिपरक अर्थ को गहराई से समझना।',
        te: 'వెర్‌స్టెహెన్: సమాజంలో వ్యక్తులు తమ పనులకు ఆపాదించే అంతర్గత అర్థాలను సానుభూతితో అర్థం చేసుకోవడం.'
      },
      {
        en: 'Protestant Ethic Thesis: Calvinist doctrines of Predestination and Inner-Worldly Asceticism fostered worldly rational investment, birthing modern capitalism.',
        hi: 'प्रोटेस्टेंट आचार संहिता: केल्विनवादी धार्मिक मान्यताओं और सांसारिक तपस्या ने आधुनिक पूंजीवाद के विकास में प्रेरक शक्ति का कार्य किया।',
        te: 'ప్రొటెస్టంట్ నైతికత: కాల్వినిస్ట్ మత సిద్ధాంతాలు, పొదుపు మరియు కష్టపడే తత్వం ఆధునిక పెట్టుబడిదారీ వ్యవస్థకు జీవం పోశాయి.'
      },
      {
        en: 'Tridimensional Stratification: Class (economic order), Status (social prestige order), and Party (political power order).',
        hi: 'त्रिआयामी स्तरीकरण: वर्ग (आर्थिक), प्रस्थिति (सामाजिक सम्मान), और दल (राजनीतिक शक्ति)।',
        te: 'త్రిమితీయ స్తరీకరణ: వర్గం (ఆర్థిక సంపద), హోదా (సామాజिक గౌరవం), మరియు పార్టీ (రాజకీయ అధికారం).'
      }
    ],
    criticism: {
      en: 'Historians (like R.H. Tawney) argued capitalism preceded Calvinism, while Weber underplayed material technological prerequisites in economic take-off.',
      hi: 'आर.एच. टॉनी जैसे इतिहासकारों ने तर्क दिया कि पूंजीवाद का जन्म केल्विनवाद से पूर्व हो चुका था और वेबर ने भौतिक कारकों की उपेक्षा की।',
      te: 'పెట్టుబడిదారీ విధానం ప్రొటెస్టంట్ మతం కంటే ముందే ఇటలీ వంటి ప్రాంతాలలో ప్రారంభమైందని చరిత్రకారులు వాదించారు.'
    },
    examRelevance: {
      en: 'Perennial UPSC question comparing Marx vs Weber on stratification, religion, and the inevitability of capitalism/bureaucracy.',
      hi: 'मार्क्स बनाम वेबर (स्तरीकरण, धर्म और सामाजिक परिवर्तन पर तुलना) समाजशास्त्र मुख्य परीक्षा का सर्वाधिक पूछा जाने वाला विषय है।',
      te: 'మార్క్స్ vs వెబర్ (స్తరీకరణ, మతం మరియు సామాజిక మార్పుపై తులనాత్మక అధ్యయనం) యూపీఎస్సీ మెయిన్స్‌లో తరచుగా అడిగే ప్రశ్న.'
    }
  },
  {
    id: 'thinker-srinivas',
    slug: 'mn-srinivas',
    subjectId: 'sociology',
    name: {
      en: 'M.N. Srinivas',
      hi: 'एम.एन. श्रीनिवास',
      te: 'ఎం.ఎన్. శ్రీనివాస్'
    },
    era: '1916 – 1999 (India)',
    biography: {
      en: 'Foremost Indian sociologist who pioneered structural-functional field studies of village and caste dynamics, dismantling colonial textbook stereotypes of Indian society.',
      hi: 'भारत के मूर्धन्य समाजशास्त्री जिन्होंने ग्रामीण व जातीय अध्ययनों द्वारा भारतीय समाज की औपनिवेशिक रूढ़िवादिता को ध्वस्त किया।',
      te: 'భారత అగ్రగామి సమాజశాస్త్రవేత్త; గ్రామీణ మరియు కుల వ్యవస్థలపై క్షేత్రస్థాయి పరిశోధనల ద్వారా భారతీయ సమాజపు వాస్తవికతను ప్రపంచానికి చాటారు.'
    },
    majorWorks: [
      'Religion and Society among the Coorgs of South India (1952)',
      'Social Change in Modern India (1966)',
      'The Remembered Village (1976)',
      'The Dominant Caste and Other Essays (1987)'
    ],
    coreConcepts: [
      {
        en: 'Sanskritization: Process by which lower or middle castes emulate customs, rituals, ideology, and way of life of twice-born (Dwija) upper castes to claim higher ritual status.',
        hi: 'संस्कृतीकरण: वह प्रक्रिया जिसके द्वारा निम्न या मध्यम जातियां उच्च जातियों के रीति-रिवाजों और जीवन शैली को अपनाकर सामाजिक सोपान में उच्च स्थिति का दावा करती हैं।',
        te: 'సంస్కృతీకరణ: నిమ్న లేదా మధ్యతరగతి కులాలు ఉన్నత ద్విజ కులాల ఆచారాలు, జీవనశైలిని అనుసరించడం ద్వారా సామాజిక హోదాను పెంచుకోవడానికి చేసే ప్రయత్నం.'
      },
      {
        en: 'Dominant Caste: A caste wielding decisive demographic numbers, sizable land ownership, political power, and respectable ritual status in a local hierarchy.',
        hi: 'प्रभु जाति (Dominant Caste): वह जाति जिसके पास स्थानीय स्तर पर पर्याप्त भूमि, संख्या बल और राजनीतिक प्रभाव हो (उदा. जाट, पाटीदार, रेड्डी, वोक्कालिगा)।',
        te: 'ఆధిపత్య కులం (Dominant Caste): ఒక గ్రామంలో లేదా ప్రాంతంలో ఎక్కువ జనాభా, వ్యవసాయ భూములు మరియు రాజకీయ అధికారం కలిగిన కులం (ఉదా: రెడ్లు, కమ్మ, పటేల్, జాట్).'
      },
      {
        en: 'Field View vs Book View: Urged scholars to study Indian society through participatory village field immersion rather than ancient textual scriptures (Indology).',
        hi: 'फील्ड व्यू बनाम बुक व्यू: प्राचीन धार्मिक ग्रंथों (बुक व्यू) के स्थान पर वास्तविक ग्रामीण जीवन के प्रत्यक्ष अध्ययन (फील्ड व्यू) पर बल दिया।',
        te: 'క్షేత్రస్థాయి పరిశీలన vs గ్రంథ పరిశీలన: పాత పుస్తకాలు కాకుండా ప్రత్యక్షంగా గ్రామీణ ప్రజలతో కలిసి జీవించి వాస్తవాలను అధ్యయనం చేయాలని సూచించారు.'
      }
    ],
    criticism: {
      en: 'Dalit scholars like Gail Omvedt criticized Sanskritization for assuming lower castes willingly accept upper-caste cultural hegemony rather than building autonomous counter-cultures.',
      hi: 'दलित विचारकों ने आलोचना की कि संस्कृतीकरण उच्च जातियों की सांस्कृतिक सर्वोच्चता को स्वीकार करता है और दलित स्वाभिमान संघर्षों की उपेक्षा करता है।',
      te: 'సంస్కృతీకరణ ఉన్నత కులాల ఆధిపత్యాన్ని అంగీకరిస్తున్నట్లు చూపిస్తుందని, దళిత వర్గాల స్వయంప్రతిపత్తి పోరాటాలను తగ్గించి చూపిస్తుందని విమర్శ.'
    },
    examRelevance: {
      en: 'Core foundation for UPSC Sociology Paper 2 (Indian Society). Highly tested on Sanskritization vs Westernization and the role of Dominant Castes in state politics.',
      hi: 'यूपीएससी समाजशास्त्र प्रश्नपत्र 2 (भारतीय समाज) का आधार। संस्कृतीकरण बनाम आधुनिकीकरण और राज्य की राजनीति में प्रभु जातियों की भूमिका पर अनिवार्य प्रश्न।',
      te: 'యూపీఎస్సీ సమాజశాస్త్రం పేపర్ 2 మరియు ఏపీపీఎస్సీ/టీఎస్‌పీఎస్సీ గ్రూప్-1 లలో సంస్కృతీకరణ మరియు ఆధిపత్య కులాల రాజకీయ పాత్రపై ప్రశ్నలు.'
    }
  }
];
