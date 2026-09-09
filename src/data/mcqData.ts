import { MCQQuestion } from '../types/study';

export const MCQ_DATABASE: MCQQuestion[] = [
  // Public Administration MCQs
  {
    id: 'pa-mcq-1',
    subjectId: 'public-administration',
    topicSlug: 'meaning-scope-evolution',
    difficulty: 'medium',
    question: {
      en: 'Who among the following thinkers famously characterized the traditional "Principles of Administration" as unscientific "proverbs and myths"?',
      hi: 'निम्नलिखित में से किस विचारक ने पारंपरिक "प्रशासनिक सिद्धांतों" को अवैज्ञानिक "कहावतें एवं मिथक" कहकर खारिज किया?',
      te: 'సాంప్రదాయ "పరిపాలనా సూత్రాలను" అశాస్త్రీయమైన "సామెతలు మరియు కల్పితాలు" అని విమర్శించిన ప్రసిద్ధ ఆలోచనాపరుడు ఎవరు?'
    },
    options: {
      en: ['Henri Fayol', 'Herbert A. Simon', 'Dwight Waldo', 'Luther Gulick'],
      hi: ['हेनरी फेयोल', 'हर्बर्ट ए. साइमन', 'ड्वाइट वाल्डो', 'लूथर गुलिक'],
      te: ['హెన్రీ ఫాయోల్', 'హెర్బర్ట్ ఎ. సైమన్', 'డ్వైట్ వాల్డో', 'లూథర్ గులిక్']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'In his landmark 1946 article "The Proverbs of Administration" and 1947 book "Administrative Behavior", Herbert Simon demonstrated that classical principles were mutually contradictory proverbs (e.g., Unity of Command vs Specialization) lacking empirical grounding.',
      hi: 'हर्बर्ट साइमन ने अपने 1946 के प्रसिद्ध लेख "द प्रोवर्ब्स ऑफ एडमिनिस्ट्रेशन" और 1947 की पुस्तक में सिद्ध किया कि पारंपरिक सिद्धांत परस्पर विरोधी कहावतें हैं जिनमें वैज्ञानिक प्रमाण का अभाव है।',
      te: 'హెర్బర్ట్ సైమన్ 1946లో ప్రచురించిన "ది ప్రొవెర్బ్స్ ఆఫ్ అడ్మినిస్ట్రేషన్" వ్యాసంలో సాంప్రదాయ సూత్రాలు పరస్పర విరుద్ధమైన సామెతలు అని నిరూపించారు.'
    }
  },
  {
    id: 'pa-mcq-2',
    subjectId: 'public-administration',
    topicSlug: 'meaning-scope-evolution',
    difficulty: 'easy',
    question: {
      en: 'Which of the following was NOT among the four defining pillars of New Public Administration (NPA) enunciated at the Minnowbrook Conference I (1968)?',
      hi: '1968 के प्रथम मिनोब्रुक सम्मेलन में प्रतिपादित नवीन लोक प्रशासन (NPA) के चार प्रमुख स्तंभों में से कौन-सा एक शामिल नहीं था?',
      te: '1968 నాటి మొదటి మిన్నోబ్రూక్ సదస్సులో ప్రతిపాదించిన నూతన ప్రజా పరిపాలన (NPA) నాలుగు ప్రధాన స్తంభాలలో కింది వాటిలో ఏది లేదు?'
    },
    options: {
      en: ['Relevance', 'Social Equity', 'Market Privatization', 'Change'],
      hi: ['प्रासंगिकता (Relevance)', 'सामाजिक समता (Social Equity)', 'बाजार निजीकरण (Market Privatization)', 'परिवर्तन (Change)'],
      te: ['ప్రాసంగికత (Relevance)', 'సామాజిక సమానత్వం (Social Equity)', 'మార్కెట్ ప్రైవేటీకరణ (Market Privatization)', 'మార్పు (Change)']
    },
    correctOptionIndex: 2,
    explanation: {
      en: 'Minnowbrook I emphasized Relevance, Values, Social Equity, and Change. "Market Privatization" belongs to New Public Management (NPM) of the 1990s, not NPA.',
      hi: 'प्रथम मिनोब्रुक के चार स्तम्भ थे: प्रासंगिकता, मूल्य, सामाजिक समता और परिवर्तन। बाजार निजीकरण 1990 के दशक के नवीन लोक प्रबंधन (NPM) का लक्षण है।',
      te: 'మిన్నోబ్రూక్-1 ప్రాసంగికత, విలువలు, సామాజిక సమానత్వం మరియు మార్పులను లక్ష్యాలుగా ప్రకటించింది. మార్కెట్ ప్రైవేటీకరణ అనేది 1990ల నాటి NPM కు సంబంధించినది.'
    }
  },
  {
    id: 'pa-mcq-3',
    subjectId: 'public-administration',
    topicSlug: 'taylor-scientific-management',
    difficulty: 'hard',
    question: {
      en: 'Under F.W. Taylor’s scheme of Functional Foremanship, which of the following bosses was situated on the shop-floor (execution) rather than the planning room?',
      hi: 'एफ.डब्ल्यू. टेलर की कार्यात्मक फोरमैनशिप योजना के अंतर्गत, निम्नलिखित में से कौन-सा फोरमैन नियोजन कक्ष के बजाय कार्यशाला (दुकान तल) में तैनात था?',
      te: 'ఎఫ్.డబ్ల్యూ. టేలర్ యొక్క ఫంక్షనల్ ఫోర్‌మన్‌షిప్ విధానంలో, ప్లానింగ్ విభాగంలో కాకుండా వర్క్‌షాప్ (అమలు రంగం) లో పనిచేసే ఫోర్‌మన్ ఎవరు?'
    },
    options: {
      en: ['Route Clerk', 'Time and Cost Clerk', 'Repair Boss', 'Instruction Card Clerk'],
      hi: ['रूट क्लर्क (Route Clerk)', 'समय एवं लागत क्लर्क', 'मरम्मत बॉस (Repair Boss)', 'निर्देश कार्ड क्लर्क'],
      te: ['రూట్ క్లర్క్', 'టైమ్ & కాస్ట్ క్లర్క్', 'రిపేర్ బాస్ (Repair Boss)', 'ఇన్‌స్ట్రక్షన్ కార్డ్ క్లర్క్']
    },
    correctOptionIndex: 2,
    explanation: {
      en: 'Taylor divided supervision into 4 planning specialists (Route Clerk, Instruction Card Clerk, Time & Cost Clerk, Disciplinarian) and 4 shop-floor execution bosses (Gang Boss, Speed Boss, Repair Boss, Inspector).',
      hi: 'टेलर ने फोरमैनशिप को दो भागों में बांटा: 4 नियोजन कक्ष में (रूट, निर्देश, समय/लागत, अनुशासन) और 4 कार्यशाला में (गैंग बॉस, स्पीड बॉस, रिपेयर बॉस, इंस्पेक्टर)।',
      te: 'టేలర్ పర్యవేక్షణను 4 గురు ప్లానింగ్ విభాగంలోనూ, 4 గురు షాప్ విభాగంలోనూ విభజించారు. రిపేర్ బాస్ షాప్-ఫ్లోర్ అమలు విభాగంలో ఉంటారు.'
    }
  },
  {
    id: 'pa-mcq-4',
    subjectId: 'public-administration',
    topicSlug: 'weber-bureaucracy',
    difficulty: 'medium',
    question: {
      en: 'Robert K. Merton’s primary sociological critique of Weberian bureaucracy centered on which structural dysfunction?',
      hi: 'वेबर की नौकरशाही के विरुद्ध रॉबर्ट के. मर्टन की प्राथमिक समाजशास्त्रीय आलोचना किस संरचनात्मक विकृति पर केंद्रित थी?',
      te: 'మాక్స్ వెబర్ బ్యూరోక్రసీపై రాబర్ట్ కె. మెర్టన్ చేసిన ప్రధాన విమర్శ ఏ లోపంపై కేంద్రీకృతమైంది?'
    },
    options: {
      en: ['Spoils System corruption', 'Goal Displacement (treating rules as ends in themselves)', 'Complete absence of written records', 'Lack of monetary compensation'],
      hi: ['लूट प्रणाली का भ्रष्टाचार', 'लक्ष्य विस्थापन (नियमों को ही साध्य मान लेना)', 'लिखित फाइलों का पूर्ण अभाव', 'नकद वेतन की कमी'],
      te: ['అవినీతి మరియు దోపిడీ వ్యవస్థ', 'లక్ష్య విస్థాపన (నియమాలే అంతిమ గమ్యంగా మారడం)', 'లిఖితపూర్వక రికార్డులు లేకపోవడం', 'సరైన వేతనాలు లేకపోవడం']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Merton explained that excessive adherence to bureaucratic formalities leads to "Goal Displacement" and "Trained Incapacity", where rules become more important than the actual service to citizens.',
      hi: 'मर्टन ने दर्शाया कि नियमों की अत्यधिक कठोरता "लक्ष्य विस्थापन" (Goal Displacement) पैदा करती है, जहां नियम जनसेवा से बड़े बन जाते हैं।',
      te: 'మెర్టన్ బ్యూరోక్రసీ లో నియమ నిబంధనలకు మితిమీరిన ప్రాధాన్యత ఇవ్వడం వల్ల అసలు ప్రజా సేవ వెనకబడి "లక్ష్య విస్థాపన" జరుగుతుందని నిరూపించారు.'
    }
  },

  // Sociology MCQs
  {
    id: 'soc-mcq-1',
    subjectId: 'sociology',
    topicSlug: 'emergence-modernity-europe',
    difficulty: 'easy',
    question: {
      en: 'In which year did Auguste Comte first coin the term "Sociology" to designate the positive science of society?',
      hi: 'आगस्ट कॉम्टे ने समाज के सकारात्मक विज्ञान को नामित करने के लिए किस वर्ष पहली बार "सोशियोलॉजी" (समाजशास्त्र) शब्द गढ़ा?',
      te: 'సమాజపు శాస్త్రీయ అధ్యయనం కోసం ఆగస్ట్ కామ్టే "సమాజశాస్త్రం" (Sociology) అనే పదాన్ని ఏ సంవత్సరంలో తొలిసారిగా రూపొందించారు?'
    },
    options: {
      en: ['1789', '1838', '1895', '1914'],
      hi: ['1789', '1838', '1895', '1914'],
      te: ['1789', '1838', '1895', '1914']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Auguste Comte coined the hybrid term "Sociology" (from Latin socius meaning companion and Greek logos meaning study) in 1838 in the 4th volume of his work "Course in Positive Philosophy".',
      hi: 'आगस्ट कॉम्टे ने 1838 में अपनी पुस्तक "कोर्स इन पॉजिटिव फिलॉसफी" के चौथे खंड में "सोशियोलॉजी" शब्द की रचना की।',
      te: 'ఆగస్ట్ కామ్టే 1838 లో తన "కోర్స్ ఇన్ పాజిటివ్ ఫిలాసఫీ" గ్రంథంలో సోషియాలజీ అనే పదాన్ని మొదటిసారి ఉపయోగించారు.'
    }
  },
  {
    id: 'soc-mcq-2',
    subjectId: 'sociology',
    topicSlug: 'sociological-imagination-commonsense',
    difficulty: 'medium',
    question: {
      en: 'According to C. Wright Mills, what is the crucial analytical distinction established by the "Sociological Imagination"?',
      hi: 'सी. राइट मिल्स के अनुसार, "समाजशास्त्रीय कल्पना" द्वारा स्थापित निर्णायक विश्लेषणात्मक अंतर क्या है?',
      te: 'సి. రైట్ మిల్స్ ప్రకారం "సామాజిక ఆలోచనా దృక్పథం" ప్రతిపాదించిన ముఖ్యమైన విశ్లేషణాత్మక వ్యత్యాసం ఏది?'
    },
    options: {
      en: [
        'Biological instincts vs Psychological moods',
        'Personal troubles of milieu vs Public issues of social structure',
        'Direct democracy vs Representative democracy',
        'Micro economics vs Macro economics'
      ],
      hi: [
        'जैविक प्रवृत्तियां बनाम मनोवैज्ञानिक मनोदशा',
        'व्यक्तिगत कष्ट (Personal Troubles) बनाम संरचनात्मक सार्वजनिक मुद्दे (Public Issues)',
        'प्रत्यक्ष लोकतंत्र बनाम प्रतिनिधि लोकतंत्र',
        'व्यष्टि अर्थशास्त्र बनाम समष्टि अर्थशास्त्र'
      ],
      te: [
        'శారీరక భావోద్వేగాలు vs మానసిక స్థితులు',
        'వ్యక్తిగత కష్టాలు (Personal Troubles) vs సామాజిక ప్రజా సమస్యలు (Public Issues)',
        'ప్రత్యక్ష ప్రజాస్వామ్యం vs ప్రాతినిధ్య ప్రజాస్వామ్యం',
        'సూక్ష్మ అర్థశాస్త్రం vs స్థూల అర్థశాస్త్రం'
      ]
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'C. Wright Mills formulated that the sociological imagination allows individuals to understand how private personal troubles (e.g. losing a job) are embedded in public structural issues (e.g. systemic economic depression).',
      hi: 'मिल्स ने स्पष्ट किया कि समाजशास्त्रीय कल्पना व्यक्ति को यह समझाती है कि उसके व्यक्तिगत कष्ट समाज की वृहद संरचनात्मक समस्याओं से कैसे जुड़े हैं।',
      te: 'మిల్స్ ప్రకారం సామాజిక ఆలోచనా దృక్పథం వ్యక్తిగత కష్టాలకు మరియు సమాజపు స్థూల నిర్మాణ సమస్యలకు మధ్య సంబంధాన్ని వివరిస్తుంది.'
    }
  },
  {
    id: 'soc-mcq-3',
    subjectId: 'sociology',
    topicSlug: 'emergence-modernity-europe',
    difficulty: 'hard',
    question: {
      en: 'Karl Marx identified four fundamental alienation (Entfremdung) types under capitalist mode of production. Which is NOT one of them?',
      hi: 'पूंजीवादी उत्पादन प्रणाली में कार्ल मार्क्स ने अलगाव के चार आयाम बताए। इनमें से कौन-सा एक शामिल नहीं है?',
      te: 'పెట్టుబడిదారీ విధానంలో కార్ల్ మార్క్స్ పేర్కొన్న నాలుగు రకాల పరాయీకరణల్లో కింది వాటిలో ఏది లేదు?'
    },
    options: {
      en: [
        'Alienation from the product of labor',
        'Alienation from the religious scriptures',
        'Alienation from fellow human beings',
        'Alienation from human species-essence (Gattungswesen)'
      ],
      hi: [
        'उत्पादित वस्तु से अलगाव',
        'धार्मिक ग्रंथों से अलगाव',
        'साथी मनुष्यों से अलगाव',
        'मानव प्रजाति-सार (Gattungswesen) से अलगाव'
      ],
      te: [
        'శ్రమ ద్వారా ఉత్పత్తయిన వస్తువు నుండి పరాయీకరణ',
        'మత గ్రంథాల నుండి పరాయీకరణ',
        'తోటి శ్రామికుల నుండి పరాయీకరణ',
        'సహజాత మానవ సారాంశం (Gattungswesen) నుండి పరాయీకరణ'
      ]
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'In the Economic and Philosophic Manuscripts of 1844, Marx detailed alienation from: 1) Product, 2) Process/Act of Production, 3) Fellow human beings, and 4) Species-essence (Gattungswesen). Religious alienation was a critique of Feuerbach, not one of the four work alienations.',
      hi: 'मार्क्स के 1844 के पांडुलिपियों के अनुसार अलगाव के 4 रूप हैं: उत्पाद से, उत्पादन प्रक्रिया से, साथी मनुष्यों से, और प्रजाति-सार से। धार्मिक ग्रंथों से अलगाव इनमें शामिल नहीं है।',
      te: 'మార్క్స్ 1844 ఆర్థిక మరియు తాత్విక పత్రాలలో శ్రమకు సంబంధించి వస్తువు, ప్రక్రియ, తోటి మనుషులు మరియు మానవ సారాంశం నుండి పరాయీకరణను పేర్కొన్నారు.'
    }
  },
  {
    id: 'soc-mcq-4',
    subjectId: 'sociology',
    topicSlug: 'emergence-modernity-europe',
    difficulty: 'medium',
    question: {
      en: 'Which Indian sociologist formulated the concepts of "Sanskritization", "Dominant Caste", and highlighted the dichotomy between "Book View" and "Field View"?',
      hi: 'किस भारतीय समाजशास्त्री ने "संस्कृतीकरण", "प्रभु जाति" की अवधारणाएं दीं तथा "बुक व्यू" और "फील्ड व्यू" के अंतर को रेखांकित किया?',
      te: '"సంస్కృతీకరణ", "ఆధిపత్య కులం" సిద్ధాంతాలను ప్రతిపాదించి "గ్రంథ పరిశీలన vs క్షేత్ర పరిశీలన" వ్యత్యాసాన్ని చాటిన భారతీయ సమాజశాస్త్రవేత్త ఎవరు?'
    },
    options: {
      en: ['G.S. Ghurye', 'M.N. Srinivas', 'Louis Dumont', 'Andre Beteille'],
      hi: ['जी.एस. घुर्ये', 'एम.एन. श्रीनिवास', 'लुई ड्यूमॉ', 'आंद्रे बेते'],
      te: ['జి.ఎస్. ఘుర్యే', 'ఎం.ఎన్. శ్రీనివాస్', 'లూయిస్ డుమాంట్', 'ఆండ్రే బెటెయిల్']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Prof. M.N. Srinivas revolutionized Indian sociology through his fieldwork in Rampura and Coorg, defining Sanskritization and Dominant Caste while arguing that real India must be understood through the "Field View".',
      hi: 'प्रो. एम.एन. श्रीनिवास ने रामपुरा और कुर्ग के अध्ययनों द्वारा संस्कृतीकरण व प्रभु जाति की व्याख्या की तथा पुस्तकीय ज्ञान के स्थान पर फील्ड व्यू को आवश्यक बताया।',
      te: 'ప్రొఫెసర్ ఎం.ఎన్. శ్రీనివాస్ రాంపుర మరియు కూర్గ్ పరిశోధనల ద్వారా సంస్కృతీకరణ మరియు ఆధిపత్య కులం భావనలను ప్రతిపాదించారు.'
    }
  }
];
