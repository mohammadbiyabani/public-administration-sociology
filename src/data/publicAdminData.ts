import { Unit } from '../types/study';

export const PUBLIC_ADMIN_UNITS: Unit[] = [
  {
    id: 'pa-u1',
    number: 1,
    slug: 'intro-to-public-admin',
    subjectId: 'public-administration',
    title: {
      en: 'Introduction to Public Administration',
      hi: 'लोक प्रशासन का परिचय',
      te: 'ప్రజా పరిపాలన పరిచయం'
    },
    description: {
      en: 'Meaning, Scope, Significance, Wilsonian Dichotomy, Evolution from Traditional Admin to New Public Administration (NPA), New Public Management (NPM), and Good Governance.',
      hi: 'अर्थ, क्षेत्र, महत्व, विल्सन का द्विभाजन, पारंपरिक प्रशासन से नवीन लोक प्रशासन (NPA), नवीन लोक प्रबंधन (NPM) एवं सुशासन तक का विकास।',
      te: 'అర్థం, పరిధి, ప్రాముఖ్యత, విల్సోనియన్ విభజన, సాంప్రదాయ పరిపాలన నుండి నూతన ప్రజా పరిపాలన (NPA), నూతన ప్రజా నిర్వహణ (NPM) మరియు సుపరిపాలన వరకు పరిణామ క్రమం.'
    },
    topics: [
      {
        id: 'pa-u1-t1',
        slug: 'meaning-scope-evolution',
        unitId: 'pa-u1',
        subjectId: 'public-administration',
        title: {
          en: 'Meaning, Scope & Evolution: From Wilson to Good Governance',
          hi: 'अर्थ, कार्यक्षेत्र एवं विकास: विल्सन से सुशासन तक',
          te: 'అర్థం, పరిధి & పరిణామ క్రమం: విల్సన్ నుండి సుపరిపాలన వరకు'
        },
        summary: {
          en: 'Comprehensive analysis of public administration as an activity and academic discipline, tracing its evolution across five distinct historical paradigms.',
          hi: 'एक गतिविधि और अकादमिक विषय के रूप में लोक प्रशासन का विस्तृत विश्लेषण, पांच ऐतिहासिक चरणों में इसका विकास।',
          te: 'కార్యకలాపంగా మరియు విద్యా విభాగంగా ప్రజా పరిపాలన సమగ్ర విశ్లేషణ, ఐదు చారిత్రక నమూనాలలో దాని పరిణామం.'
        },
        readingTimeMinutes: 12,
        content: {
          en: {
            definition: 'Public Administration is the detailed and systematic execution of public law (Woodrow Wilson). According to Dwight Waldo, it is the organization and management of men and materials to achieve the purposes of government.',
            introduction: 'Public Administration operates at the critical intersection of political theory, constitutional law, and organizational science. Emerging as a distinct self-conscious academic discipline with Woodrow Wilson’s 1887 essay "The Study of Administration", it transitioned from mechanical efficiency models to citizen-centric, value-laden democratic governance frameworks.',
            detailedExplanation: [
              'Paradigm 1 (1887-1926): Politics-Administration Dichotomy pioneered by Woodrow Wilson and Frank J. Goodnow, establishing that politics sets policy while administration executes it neutrally.',
              'Paradigm 2 (1927-1937): Principles of Administration championed by W.F. Willoughby, Henri Fayol, and Luther Gulick (POSDCORB formula), viewing administration as a universal science governed by scientific laws.',
              'Paradigm 3 (1938-1947): The Era of Challenge sparked by Chester Barnard and Herbert Simon, who exposed traditional "principles" as mere proverbs lacking empirical validity, while Robert Dahl highlighted cultural contexts.',
              'Paradigm 4 (1948-1970): Crisis of Identity where the discipline oscillated between Political Science and Administrative Science.',
              'Paradigm 5 (1971-Present): Public Administration as Public Policy & Governance, giving birth to New Public Administration (NPA, Minnowbrook Conferences I, II, III), New Public Management (NPM), and the contemporary Good Governance paradigm.'
            ],
            keyFeatures: [
              'Publicness: Distinct accountability to constitutional mandates, citizen welfare, and public scrutiny unlike private enterprise.',
              'Service-Oriented Mandate: Direct responsibility for delivering essential public goods, social security, and infrastructural justice.',
              'Ethical Substratum: Duty-bound by public interest, bureaucratic neutrality, impartiality, and social equity.',
              'Dynamic Adaptation: Continuous integration of technological modernization (e-Governance) while safeguarding marginalized equities.'
            ],
            importantThinkers: [
              { name: 'Woodrow Wilson', contribution: 'Father of Public Administration; articulated the Politics-Administration dichotomy in 1887.' },
              { name: 'Dwight Waldo', contribution: 'Chaired the first Minnowbrook Conference (1968), institutionalizing New Public Administration (NPA).' },
              { name: 'Herbert Simon', contribution: 'Introduced the Logical Positivist critique; debunked classical principles as proverbs and introduced bounded rationality.' }
            ],
            examples: [
              'Direct Benefit Transfer (DBT) and Aadhaar integration in India, revolutionizing subsidy delivery and minimizing leakages.',
              'Citizens Charter and Right to Public Services legislations enacted across 20+ Indian states ensuring time-bound public service delivery.'
            ],
            criticism: [
              'Early classical theorists over-emphasized procedural efficiency at the expense of human empathy and social justice.',
              'Rigid bureaucratic adherence to rules frequently produces Goal Displacement (Robert Merton), where adhering to paperwork supercedes serving citizens.'
            ],
            contemporaryRelevance: 'In the era of AI and polycrisis (climate shocks, pandemics, and macroeconomic volatility), public administration has shifted toward "Anticipatory Governance" and "Whole-of-Government" approaches requiring agile, empathetic civil servants.',
            examPerspective: 'UPSC Mains Question Archetype: "The transition from New Public Administration (NPA) to New Public Management (NPM) represents an ideological shift from equity to efficiency. Reconcile this paradox in the light of Good Governance." Focus on Minnowbrook I vs Osborne & Gaebler.',
            quickRevisionPoints: [
              '1887: Woodrow Wilson essay marks birth of discipline.',
              'POSDCORB = Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting (Gulick & Urwick).',
              'Minnowbrook I (1968) focused on 4 pillars: Relevance, Values, Equity, and Change.',
              'NPM (1990s) introduced the 3Es: Economy, Efficiency, and Effectiveness + Market-driven mechanisms.',
              'World Bank 1992 report: Good Governance characterized by Rule of Law, Transparency, Accountability, Participation.'
            ],
            keywords: ['Wilsonian Dichotomy', 'POSDCORB', 'Minnowbrook Conference', 'New Public Administration', 'New Public Management', 'Good Governance', 'Goal Displacement']
          },
          hi: {
            definition: 'लोक प्रशासन सार्वजनिक कानून का विस्तृत और व्यवस्थित क्रियान्वयन है (वुडरो विल्सन)। ड्वाइट वाल्डो के अनुसार, यह सरकार के उद्देश्यों की प्राप्ति हेतु मानव एवं भौतिक संसाधनों का संगठन और प्रबंधन है।',
            introduction: 'लोक प्रशासन राजनीतिक दर्शन, संवैधानिक कानून और प्रशासनिक विज्ञान के संगम पर कार्य करता है। 1887 में वुड्रो विल्सन के ऐतिहासिक निबंध "द स्टडी ऑफ एडमिनिस्ट्रेशन" के साथ एक स्वतंत्र अकादमिक विषय के रूप में इसकी नींव रखी गई, जो यांत्रिक दक्षता से प्रारंभ होकर आज लोक-केंद्रित सुशासन तक विकसित हो चुका है।',
            detailedExplanation: [
              'प्रथम चरण (1887-1926): राजनीति-प्रशासन द्विभाजन (विल्सन और गुडनाउ) - नीति निर्माण और उसके निष्पक्ष क्रियान्वयन को पृथक किया गया।',
              'द्वितीय चरण (1927-1937): प्रशासनिक सिद्धांतों का स्वर्णिम युग (विलोबी, हेनरी फेयोल, लूथर गुलिक - POSDCORB सूत्र)।',
              'तृतीय चरण (1938-1947): चुनौतियों का युग - हर्बर्ट साइमन ने पुराने सिद्धांतों को "कहावतें" करार दिया और चेस्टर बर्नार्ड ने अनौपचारिक संगठन पर बल दिया।',
              'चतुर्थ चरण (1948-1970): पहचान का संकट - विषय अपने स्वतंत्र अस्तित्व के लिए राजनीति विज्ञान और प्रबंधन के मध्य संघर्षरत रहा।',
              'पंचम चरण (1971-वर्तमान): लोक नीति एवं सुशासन प्रतिमान - मिनोब्रुक सम्मेलन (NPA), नवीन लोक प्रबंधन (NPM) और डिजिटल सुशासन।'
            ],
            keyFeatures: [
              'सार्वजनिकता (Publicness): निजी प्रशासन के विपरीत यह संवैधानिक मूल्यों, सामाजिक न्याय और जन-उत्तरदायित्व से बंधा है।',
              'जन-कल्याणकारी ध्येय: निर्धन एवं वंचित वर्गों तक मूलभूत अधिकारों व सार्वजनिक सेवाओं की सुलभता।',
              'प्रशासनिक नैतिकता: निष्पक्षता, सत्यनिष्ठा, अनामिकता एवं संवेदनशीलता इसके अपरिहार्य आधार हैं।',
              'गतिशीलता: सूचना प्रौद्योगिकी (ई-गवर्नेंस) का उपयोग करते हुए सेवा वितरण में पारदर्शिता लाना।'
            ],
            importantThinkers: [
              { name: 'वुडरो विल्सन', contribution: 'लोक प्रशासन के जनक; राजनीति-प्रशासन द्विभाजन की अवधारणा प्रस्तुत की।' },
              { name: 'ड्वाइट वाल्डो', contribution: 'नवीन लोक प्रशासन (NPA) के प्रणेता; मिनोब्रुक सम्मेलन (1968) का नेतृत्व किया।' },
              { name: 'हर्बर्ट साइमन', contribution: 'तार्किक प्रत्यक्षवाद और प्रशासनिक निर्णय-निर्माण मॉडल (सीमित तार्किकता) के जनक।' }
            ],
            examples: [
              'भारत में प्रत्यक्ष लाभ अंतरण (DBT) एवं जन धन-आधार-मोबाइल (JAM) त्रिमूर्ति द्वारा बिचौलियों का उन्मूलन।',
              'सेवा का अधिकार अधिनियम (Right to Public Services Act) जिसके तहत निश्चित समय-सीमा में नागरिक सेवाएं अनिवार्य की गईं।'
            ],
            criticism: [
              'शास्त्रीय सिद्धांतों ने मनुष्य को केवल "आर्थिक मानव" समझा और सामाजिक-मनोवैज्ञानिक पक्षों की उपेक्षा की।',
              'नियमों की कठोरता के कारण रॉबर्ट मर्टन द्वारा चिन्हित "लक्ष्य विस्थापन" (Goal Displacement) की समस्या उत्पन्न होती है।'
            ],
            contemporaryRelevance: 'जलवायु संकट, महामारी और डिजिटल क्रांति के इस दौर में प्रशासन को पूर्व-अनुमानित (Anticipatory) एवं संपूर्ण-सरकार (Whole-of-Government) दृष्टिकोण अपनाना पड़ रहा है।',
            examPerspective: 'मुख्य परीक्षा अभ्यास प्रश्न: "नवीन लोक प्रशासन (NPA) से नवीन लोक प्रबंधन (NPM) की ओर संक्रमण समता से दक्षता की ओर वैचारिक बदलाव को दर्शाता है। सुशासन के आलोक में इस अंतर्विरोध का विश्लेषण कीजिए।"',
            quickRevisionPoints: [
              '1887: वुड्रो विल्सन के निबंध से विषय की शुरुआत।',
              'POSDCORB = योजना, संगठन, कार्मिक, निर्देशन, समन्वय, प्रतिवेदन, बजट (गुलिक एवं उर्विक)।',
              'मिनोब्रुक-I (1968) के 4 स्तम्भ: प्रासंगिकता, मूल्य, सामाजिक समता और परिवर्तन।',
              'नवीन लोक प्रबंधन (NPM): 3Es (मितव्ययिता, दक्षता, प्रभावशीलता) + बाजारोन्मुखी दृष्टिकोण।',
              'विश्व बैंक 1992: विधि का शासन, पारदर्शिता, उत्तरदायित्व, जनभागीदारी।'
            ],
            keywords: ['राजनीति-प्रशासन द्विभाजन', 'POSDCORB', 'मिनोब्रुक सम्मेलन', 'नवीन लोक प्रशासन', 'नवीन लोक प्रबंधन', 'सुशासन', 'लक्ष्य विस्थापन']
          },
          te: {
            definition: 'ప్రజా పరిపాలన అనేది ప్రజా చట్టాన్ని క్రమపద్ధతిలో మరియు సమగ్రంగా అమలు చేయడం (వుడ్రో విల్సన్). డ్వైట్ వాల్డో ప్రకారం, ప్రభుత్వం నిర్దేశించిన లక్ష్యాలను సాధించడానికి మానవ మరియు భౌతిక వనరులను నిర్వహించడం మరియు సమన్వయం చేయడమే ప్రజా పరిపాలన.',
            introduction: 'ప్రజా పరిపాలన అనేది రాజనీతి శాస్త్రం, రాజ్యాంగ చట్టం మరియు సంస్థాగత శాస్త్రాల సమ్మేళనంగా పనిచేస్తుంది. 1887 లో వుడ్రో విల్సన్ రచించిన "ది స్టడీ ఆఫ్ అడ్మినిస్ట్రేషన్" వ్యాసంతో స్వతంత్ర విద్యా విభాగంగా అవతరించి, మెకానికల్ నమూనాల నుండి పౌర-కేంద్రిత సుపరిపాలనగా పరిణామం చెందింది.',
            detailedExplanation: [
              'మొదటి దశ (1887-1926): రాజకీయ-పరిపాలనా విభజన (వుడ్రో విల్సన్ & ఫ్రాంక్ గుడ్నో) - రాజకీయాలు విధానాలను రూపొందిస్తే, పరిపాలన వాటిని తటస్థంగా అమలు చేస్తుందని ప్రతిపాదించారు.',
              'రెండవ దశ (1927-1937): పరిపాలనా సూత్రాల స్వర్ణయుగం (డబ్ల్యూ.ఎఫ్. విల్లోబీ, హెన్రీ ఫాయోల్, లూథర్ గులిక్ - POSDCORB సూత్రం).',
              'మూడవ దశ (1938-1947): సవాళ్ళ యుగం - హెర్బర్ట్ సైమన్ సంప్రదాయ సూత్రాలను కేవలం సామెతలుగా విమర్శించారు; చెస్టర్ బర్నార్డ్ అనధికారిక సంస్థలను నొక్కిచెప్పారు.',
              'నాల్గవ దశ (1948-1970): గుర్తింపు సంక్షోభం - ప్రజా పరిపాలన రాజనీతి శాస్త్రం మరియు పరిపాలనా శాస్త్రాల మధ్య తన ప్రత్యేక గుర్తింపు కోసం పోరాడింది.',
              'ఐదవ దశ (1971-ప్రస్తుతం): ప్రజా విధానం మరియు సుపరిపాలనా నమూనా - నూతన ప్రజా పరిపాలన (NPA, మిన్నోబ్రూక్ సదస్సులు), నూతన ప్రజా నిర్వహణ (NPM) మరియు డిజిటల్ సుపరిపాలన.'
            ],
            keyFeatures: [
              'ప్రజా ప్రయోజన తత్వం (Publicness): ప్రైవేట్ రంగంతో పోలిస్తే ఇది రాజ్యాంగ ఆదేశాలు, సామాజిక న్యాయం మరియు ప్రజా జవాబుదారీతనానికి కట్టుబడి ఉంటుంది.',
              'సేవా దృక్పథం: అణగారిన వర్గాలకు మరియు పేదలకు అవసరమైన ప్రజా సేవలు, సంక్షేమ పథకాలను అందించే ప్రాథమిక బాధ్యత.',
              'పరిపాలనా నైతికత: నిష్పాక్షికత, సమగ్రత, పారదర్శకత మరియు తటస్థత దీని ప్రధాన మూలస్తంభాలు.',
              'సమకాలీన అనుకూలత: సాంకేతిక పరిజ్ఞానాన్ని (ఈ-గవర్నెన్స్) జోడిస్తూ ప్రజా సేవలను సులభతరం చేయడం.'
            ],
            importantThinkers: [
              { name: 'వుడ్రో విల్సన్', contribution: 'ప్రజా పరిపాలన పితామహుడు; రాజకీయ-పరిపాలనా విభజన సిద్ధాంతాన్ని ప్రతిపాదించారు.' },
              { name: 'డ్వైట్ వాల్డో', contribution: 'నూతన ప్రజా పరిపాలన (NPA) మార్గదర్శకుడు; 1968 మిన్నోబ్రూక్ సదస్సు అధ్యక్షుడు.' },
              { name: 'హెర్బర్ట్ సైమన్', contribution: 'తార్కిక ప్రత్యక్షతావాదం మరియు నిర్ణయాధికార సిద్ధాంతం (పరిమిత హేతుబద్ధత) సృష్టికర్త.' }
            ],
            examples: [
              'భారతదేశంలో ప్రత్యక్ష ప్రయోజన బదిలీ (DBT) మరియు ఆధార్ అనుసంధానం ద్వారా అవినీతి నిర్మూలన, నేరుగా లబ్ధిదారులకు నిధుల జమ.',
              'పౌర సేవల హక్కు చట్టం (Right to Public Services Act) ద్వారా నిర్ణీత గడువులోగా ప్రజలకు సర్టిఫికెట్లు మరియు సేవలు అందించే వ్యవస్థ.'
            ],
            criticism: [
              'క్లాసికల్ సిద్ధాంతకర్తలు మానవ భావోద్వేగాలు మరియు సామాజిక న్యాయాన్ని విస్మరించి యాంత్రిక లాభాలకే ప్రాధాన్యత ఇచ్చారు.',
              'నియమ నిబంధనలకు మితిమీరిన ప్రాధాన్యత ఇవ్వడం వల్ల రాబర్ట్ మెర్టన్ పేర్కొన్న "లక్ష్య విస్థాపన" (Goal Displacement) ఏర్పడుతుంది.'
            ],
            contemporaryRelevance: 'నేటి డిజిటల్ యుగంలో సంక్షోభ నివారణకు పరిపాలన ముందస్తు అంచనాలతో కూడిన మరియు సంపూర్ణ ప్రభుత్వ (Whole-of-Government) సమన్వయ విధానాన్ని అమలు చేయాల్సిన అవసరం ఉంది.',
            examPerspective: 'యూపీఎస్సీ మెయిన్స్ ప్రశ్న నమూనా: "నూతన ప్రజా పరిపాలన (NPA) నుండి నూతన ప్రజా నిర్వహణ (NPM) కు జరిగిన మార్పు సమానత్వం నుండి సామర్థ్యం వైపు సిద్ధాంత మార్పును సూచిస్తుంది. సుపరిపాలన వెలుగులో ఈ వైరుధ్యాన్ని సమీక్షించండి."',
            quickRevisionPoints: [
              '1887: వుడ్రో విల్సన్ వ్యాసంతో ప్రజా పరిపాలన ఒక శాస్త్రంగా ప్రారంభం.',
              'POSDCORB = ప్రణాళిక, వ్యవస్థీకరణ, సిబ్బంది, ఆదేశాలు, సమన్వయం, నివేదన, బడ్జెట్ (గులిక్ & ఉర్విక్).',
              'మిన్నోబ్రూక్-1 (1968) యొక్క 4 సూత్రాలు: ప్రాసంగికత, విలువలు, సామాజిక సమానత్వం, మార్పు.',
              'NPM (1990లు): 3Es (పొదుపు, సామర్థ్యం, ప్రభావశీలత) + మార్కెట్ ఆధారిత సంస్కరణలు.',
              'ప్రపంచ బ్యాంకు 1992 నివేదిక: చట్టబద్ధ పాలన, పారదర్శకత, జవాబుదారీతనం, ప్రజా భాగస్వామ్యం.'
            ],
            keywords: ['విల్సోనియన్ విభజన', 'POSDCORB', 'మిన్నోబ్రూక్ సదస్సు', 'నూతన ప్రజా పరిపాలన', 'నూతన ప్రజా నిర్వహణ', 'సుపరిపాలన', 'లక్ష్య విస్థాపన']
          }
        }
      },
      {
        id: 'pa-u1-t2',
        slug: 'npa-npm-good-governance',
        unitId: 'pa-u1',
        subjectId: 'public-administration',
        title: {
          en: 'NPA vs NPM vs Good Governance: The Theoretical Paradigm Shift',
          hi: 'NPA बनाम NPM बनाम सुशासन: सैद्धांतिक प्रतिमान बदलाव',
          te: 'NPA vs NPM vs సుపరిపాలన: సిద్ధాంతపరమైన నమూనా మార్పు'
        },
        summary: {
          en: 'Comparative analysis of New Public Administration, New Public Management, and Good Governance paradigms in post-welfare state administration.',
          hi: 'उत्तर-कल्याणकारी राज्य प्रशासन में नवीन लोक प्रशासन, नवीन लोक प्रबंधन एवं सुशासन प्रतिमानों का तुलनात्मक अध्ययन।',
          te: 'సంక్షేమ రాజ్యం తర్వాతి పరిపాలనలో నూతన ప్రజా పరిపాలన, నూతన ప్రజా నిర్వహణ మరియు సుపరిపాలన నమూనాల సమగ్ర తులనాత్మక అధ్యయనం.'
        },
        readingTimeMinutes: 10,
        content: {
          en: {
            definition: 'NPA infused normative values (equity, change) into administrative study. NPM introduced market-driven entrepreneurial managerialism (3Es). Good Governance synthesizes state, market, and civil society into accountable democratic rule.',
            introduction: 'The evolution of modern administrative paradigms reflects changing societal expectations—from post-war equity demands to neo-liberal globalization and participatory democratic empowerment.',
            detailedExplanation: [
              'New Public Administration (1968): Catalyzed by turbulent US social upheaval (Vietnam War, civil rights movement). Dwight Waldo led young scholars at Minnowbrook to reject positivism and advocate for social equity.',
              'New Public Management (1990s): Catalyzed by Margaret Thatcher, Ronald Reagan, and Osborne & Gaebler’s book "Reinventing Government" (1992). Promoted steering rather than rowing, customer satisfaction, contracting out, and performance auditing.',
              'Good Governance (1992 onwards): Coined in the World Bank report "Governance and Development", shifting focus from mere market efficiency to institutional accountability, human rights, and rule of law.'
            ],
            keyFeatures: [
              'Normative vs Empirical balance in policy execution.',
              'Citizen as Beneficiary (NPA) vs Citizen as Customer (NPM) vs Citizen as Active Participant/Stakeholder (Good Governance).',
              'Decentralized organizational architecture vs hierarchical command and control.'
            ],
            importantThinkers: [
              { name: 'David Osborne & Ted Gaebler', contribution: 'Authors of Reinventing Government (1992); laid down 10 principles of entrepreneurial government.' },
              { name: 'Christopher Hood', contribution: 'Coined the term "New Public Management" in 1991.' }
            ],
            examples: [
              'Public Private Partnerships (PPP) in highway infrastructure and airport modernizations (NPM application).',
              'Gram Sabhas and Social Audits under MGNREGA in India (Good Governance and NPA application).'
            ],
            criticism: [
              'NPM reduced democratic citizens to mere commercial consumers, eroding public interest ethos.',
              'Good Governance is often criticized by developing nations as a neo-colonial donor conditionality imposed by IMF/World Bank.'
            ],
            contemporaryRelevance: 'Modern states blend NPM techniques (performance dashboards, agile KPI evaluation) with NPA moral imperatives (affirmative action, subaltern welfare).',
            examPerspective: 'Frequent UPSC Paper 1 Theme: Compare and contrast Minnowbrook I, II, and III perspectives on public administration.',
            quickRevisionPoints: [
              'NPA = Equity, Values, Social Change, Anti-hierarchy.',
              'NPM = Catalytic, Competitive, Mission-driven, Customer-focused.',
              'Good Governance 8 pillars: Consensus oriented, Participatory, Rule of Law, Effective & Efficient, Accountable, Transparent, Responsive, Equitable.'
            ],
            keywords: ['Minnowbrook', 'Reinventing Government', 'Steering vs Rowing', 'Social Equity', 'Customer vs Citizen', 'Social Audit']
          },
          hi: {
            definition: 'NPA ने प्रशासन में सामाजिक समता और मानवीय मूल्यों को जोड़ा। NPM ने बाजार-संचालित उद्यमिता प्रबंधन (3Es) को शामिल किया। सुशासन राज्य, बाजार और नागरिक समाज के त्रिकोणीय संतुलन पर आधारित है।',
            introduction: 'आधुनिक प्रशासनिक सिद्धांतों का क्रमिक विकास समाज की बदलती आवश्यकताओं को दर्शाता है—सामाजिक अशांति के दौर से लेकर वैश्वीकरण और वर्तमान जनभागीदारी तक।',
            detailedExplanation: [
              'नवीन लोक प्रशासन (1968): वियतनाम युद्ध और नागरिक अधिकार आंदोलनों की पृष्ठभूमि में मिनोब्रुक-I सम्मेलन ने मूल्य-तटस्थता को खारिज कर समता को अपनाया।',
              'नवीन लोक प्रबंधन (1990 का दशक): डेविड ऑस्बॉर्न और टेड गैबलर की पुस्तक "रीइन्वेंटिंग गवर्नमेंट" से प्रेरित। सरकार को नाव खेने (Rowing) के बजाय दिशा दिखाने (Steering) पर ध्यान देना चाहिए।',
              'सुशासन (1992): विश्व बैंक की रिपोर्ट द्वारा स्थापित, जिसमें संस्थागत क्षमता, भ्रष्टाचार-मुक्ति और मानवाधिकारों पर बल दिया गया।'
            ],
            keyFeatures: [
              'नागरिक की भूमिका: लाभार्थी (NPA) बनाम ग्राहक (NPM) बनाम सक्रिय साझेदार (सुशासन)।',
              'पदानुक्रमित संरचना का स्थान लचीले और विकेंद्रीकृत नेटवर्क ने लिया।',
              'परिणामोन्मुखी कार्यप्रणाली और सामाजिक प्रभाव का मूल्यांकन।'
            ],
            importantThinkers: [
              { name: 'डेविड ऑस्बॉर्न व टेड गैबलर', contribution: 'उद्यमी सरकार के 10 सिद्धांतों के प्रतिपादक (1992)।' },
              { name: 'क्रिस्टोफर हुड', contribution: '1991 में "न्यू पब्लिक मैनेजमेंट" पद गढ़ा।' }
            ],
            examples: [
              'राष्ट्रीय राजमार्गों और मेट्रो परियोजनाओं में पीपीपी (PPP) मॉडल (NPM का उदाहरण)।',
              'मनरेगा (MGNREGA) में ग्राम सभाओं द्वारा सामाजिक अंकेक्षण (Social Audit) (सुशासन का उदाहरण)।'
            ],
            criticism: [
              'NPM ने नागरिकों को उपभोक्ता बना दिया जिससे सार्वजनिक कल्याण की भावना कमजोर हुई।',
              'सुशासन की शर्तों को विकासशील देशों द्वारा अंतरराष्ट्रीय वित्तीय संस्थानों का दबाव माना जाता है।'
            ],
            contemporaryRelevance: 'आज का डिजिटल प्रशासन NPM की दक्षता और NPA की संवेदनशीलता का संतुलित समन्वय चाहता है।',
            examPerspective: 'यूपीएससी मुख्य परीक्षा: मिनोब्रुक I, II और III सम्मेलनों की वैचारिक यात्रा और उनके निष्कर्षों पर लगातार प्रश्न पूछे जाते हैं।',
            quickRevisionPoints: [
              'NPA: प्रासंगिकता, मूल्य, समता, परिवर्तन।',
              'NPM: 3Es (Economy, Efficiency, Effectiveness), प्रतिस्पर्धा, आउटसोर्सिंग।',
              'सुशासन के 8 लक्षण: सहभागिता, विधि का शासन, पारदर्शिता, अनुक्रियाशीलता, सर्वसम्मति, समता, प्रभावशीलता, उत्तरदायित्व।'
            ],
            keywords: ['मिनोब्रुक', 'रीइन्वेंटिंग गवर्नमेंट', 'स्टीयरिंग बनाम रोइंग', 'सामाजिक समता', 'ग्राहक बनाम नागरिक', 'सामाजिक अंकेक्षण']
          },
          te: {
            definition: 'NPA పరిపాలనలో సామాజిక సమానత్వం మరియు విలువల ప్రాధాన్యతను తీసుకొచ్చింది. NPM వ్యాపార నిర్వహణ మరియు మార్కెట్ సూత్రాలను (3Es) జోడించింది. సుపరిపాలన ప్రభుత్వం, మార్కెట్ మరియు పౌర సమాజాల మధ్య సమతుల్యతను నిర్దేశిస్తుంది.',
            introduction: 'ఆధునిక పరిపాలనా నమూనాల పరిణామం మారుతున్న సమాజపు డిమాండ్లకు అద్దం పడుతుంది - సంక్షోభాల నుండి ప్రైవేటీకరణ వరకు, ఆపై ప్రజాస్వామ్య భాగస్వామ్యం వరకు.',
            detailedExplanation: [
              'నూతన ప్రజా పరిపాలన (1968): వియత్నాం యుద్ధం మరియు అమెరికా సామాజిక అల్లర్ల నేపథ్యంలో డ్వైట్ వాల్డో ఆధ్వర్యంలో మొదటి మిన్నోబ్రూక్ సదస్సు జరిగింది.',
              'నూతన ప్రజా నిర్వహణ (1990లు): ఆస్బోర్న్ & గేబ్లర్ రచించిన "రీఇన్వెంటింగ్ గవర్నమెంట్" పుస్తకం ద్వారా ప్రభుత్వం బోటు నడపడం (Rowing) కాకుండా దారి చూపించడం (Steering) చేయాలని ప్రతిపాదించింది.',
              'సుపరిపాలన (1992): ప్రపంచ బ్యాంకు నివేదిక ఆధారంగా పారదర్శకత, జవాబుదారీతనం మరియు చట్టబద్ధ పాలన ప్రాతిపదికగా రూపొందింది.'
            ],
            keyFeatures: [
              'పౌరుడి స్థానం: లబ్ధిదారుడు (NPA) vs వినియోగదారుడు (NPM) vs భాగస్వామి (సుపరిపాలన).',
              'క్రమానుగత శ్రేణి నుంచి వికేంద్రీకృత నెట్‌వర్క్ వైపు వ్యవస్థల మార్పు.',
              'ఫలితాల ఆధారిత పాలన మరియు సమగ్ర సమీక్షా వ్యవస్థలు.'
            ],
            importantThinkers: [
              { name: 'డేవిడ్ ఆస్బోర్న్ & టెడ్ గేబ్లర్', contribution: '1992లో రీఇన్వెంటింగ్ గవర్నమెంట్ ద్వారా ఎంటర్‌ప్రెన్యూర్ ప్రభుత్వ సూత్రాలు రూపొందించారు.' },
              { name: 'క్రిస్టోఫర్ హుడ్', contribution: '1991లో "న్యూ పబ్లిక్ మేనేజ్‌మెంట్" పదాన్ని ప్రవేశపెట్టారు.' }
            ],
            examples: [
              'రహదారులు, విమానాశ్రయాల నిర్మాణంలో పబ్లిక్-ప్రైవేట్ భాగస్వామ్యం (PPP) (NPM ప్రభావం).',
              'ఉపాధి హామీ పథకంలో గ్రామసభల ద్వారా సోషల్ ఆడిట్ (సామాజిక తనిఖీ) నిర్వహణ (సుపరిపాలన).'
            ],
            criticism: [
              'NPM ప్రజాస్వామ్య పౌరులను కేవలం వినియోగదారులుగా మార్చివేసి ప్రభుత్వ సేవా గుణాన్ని దెబ్బతీసింది.',
              'అభివృద్ధి చెందుతున్న దేశాలపై ప్రపంచ బ్యాంకు నిబంధనలను బలవంతంగా రుద్దుతోందనే విమర్శ ఉంది.'
            ],
            contemporaryRelevance: 'నేటి ప్రభుత్వాలు సాంకేతికత ద్వారా NPM సామర్థ్యాన్ని మరియు సామాజిక న్యాయం ద్వారా NPA లక్ష్యాలను ఏకకాలంలో సాధిస్తున్నాయి.',
            examPerspective: 'యూపీఎస్సీ మరియు గ్రూప్-1 పరీక్షల్లో మిన్నోబ్రూక్ 1, 2, 3 సదస్సుల తులనాత్మక విశ్లేషణ అత్యంత కీలకమైన అంశం.',
            quickRevisionPoints: [
              'NPA: విలువల ప్రాధాన్యత, సామాజిక సమానత్వం, మార్పు.',
              'NPM: 3Es (ఎకానమీ, ఎఫిషియన్సీ, ఎఫెక్టివ్‌నెస్), మార్కెట్ ఆధారిత సంస్కరణలు.',
              'సుపరిపాలన 8 స్తంభాలు: ప్రజాభాగస్వామ్యం, చట్టపాలన, పారదర్శకత, స్పందన, ఏకాభిప్రాయం, సమానత్వం, సామర్థ్యం, జవాబుదారీతనం.'
            ],
            keywords: ['మిన్నోబ్రూక్', 'రీఇన్వెంటింగ్ గవర్నమెంట్', 'స్టీరింగ్ vs రోయింగ్', 'సామాజిక సమానత్వం', 'సోషల్ ఆడిట్']
          }
        }
      }
    ]
  },
  {
    id: 'pa-u2',
    number: 2,
    slug: 'classical-thinkers',
    subjectId: 'public-administration',
    title: {
      en: 'Classical Administrative Thinkers',
      hi: 'शास्त्रीय प्रशासनिक विचारक',
      te: 'సాంప్రదాయ పరిపాలనా సిద్ధాంతకర్తలు'
    },
    description: {
      en: 'In-depth analysis of Woodrow Wilson, Frederick Winslow Taylor (Scientific Management), Henri Fayol (14 Principles), Max Weber (Ideal Type Bureaucracy), Luther Gulick, and Elton Mayo.',
      hi: 'वुडरो विल्सन, एफ.डब्ल्यू. टेलर (वैज्ञानिक प्रबंधन), हेनरी फेयोल (14 सिद्धांत), मैक्स वेबर (आदर्श नौकरशाही), लूथर गुलिक एवं एल्टन मेयो का गहन विश्लेषण।',
      te: 'వుడ్రో విల్సన్, ఎఫ్.డబ్ల్యూ. టేలర్ (శాస్త్రీయ నిర్వహణ), హెన్రీ ఫాయోల్ (14 సూత్రాలు), మాక్స్ వెబర్ (ఆదర్శ బ్యూరోక్రసీ), లూథర్ గులిక్ మరియు ఎల్టన్ మేయోల లోతైన అధ్యయనం.'
    },
    topics: [
      {
        id: 'pa-u2-t1',
        slug: 'taylor-scientific-management',
        unitId: 'pa-u2',
        subjectId: 'public-administration',
        title: {
          en: 'F.W. Taylor: Scientific Management Theory & Mental Revolution',
          hi: 'एफ.डब्ल्यू. टेलर: वैज्ञानिक प्रबंधन सिद्धांत एवं मानसिक क्रांति',
          te: 'ఎఫ్.డబ్ల్యూ. టేలర్: శాస్త్రీయ నిర్వహణ సిద్ధాంతం & మానసిక విప్లవం'
        },
        summary: {
          en: 'Detailed examination of Taylorism, time-motion studies, functional foremanship, differential piece-rate system, and its modern legacies.',
          hi: 'टेलरवाद, समय एवं गति अध्ययन, कार्यात्मक फोरमैनशिप, विभेदक मजदूरी प्रणाली और इसके आधुनिक प्रभावों का विस्तृत अध्ययन।',
          te: 'టేలరిజం, సమయ-గమన పరిశీలనలు, ఫంక్షనల్ ఫోర్‌మన్‌షిప్, డిఫరెన్షియల్ వేజ్ విధానం మరియు ఆధునిక రంగాలలో దాని ప్రభావం.'
        },
        readingTimeMinutes: 11,
        content: {
          en: {
            definition: 'Scientific Management is knowing exactly what you want men to do, and then seeing that they do it in the best and cheapest way (F.W. Taylor, 1911).',
            introduction: 'Frederick Winslow Taylor formulated Scientific Management to eliminate rule-of-thumb guesswork and workplace soldiering (deliberate slowdown by workers), arguing that scientific analysis could find the "One Best Way" of doing any task.',
            detailedExplanation: [
              'Mental Revolution: Taylor insisted that true Scientific Management required a fundamental mental transformation where management and workers stop fighting over surplus division and cooperate to multiply the surplus.',
              'Core Principles: Science, not rule of thumb; Harmony, not discord; Cooperation, not individualism; Maximum output in place of restricted output; Development of each man to his greatest efficiency.',
              'Techniques: Time and motion studies, standardization of tools, differential piece-rate wage system (incentivizing high performers), and functional foremanship (splitting supervision among 8 specialized foremen).'
            ],
            keyFeatures: [
              'Separation of planning from execution.',
              'One Best Way determined via empirical observation and stop-watch measurement.',
              'Functional Foremanship replacing traditional unity of command with 8 specialist overseers.'
            ],
            importantThinkers: [
              { name: 'Frank & Lillian Gilbreth', contribution: 'Pioneered motion studies and categorized 18 elemental micro-movements known as "Therbligs".' },
              { name: 'Henry Gantt', contribution: 'Created the Gantt Chart for project planning and scheduling.' }
            ],
            examples: [
              'Assembly line innovations at Ford Motor Company and contemporary warehouse optimization algorithms at Amazon logistics hubs.',
              'Standard Operating Procedures (SOPs) utilized in emergency services and public passport issuance centers.'
            ],
            criticism: [
              'Treats human beings as cogs in a machine ("physiological mechanistic fallacy").',
              'Opposition from trade unions who argued it accelerated worker exhaustion and dehumanized labor.'
            ],
            contemporaryRelevance: 'Modern Business Process Reengineering (BPR), Six Sigma, and algorithmic delivery metrics reflect Taylor’s relentless pursuit of waste elimination.',
            examPerspective: 'UPSC Mains Anchor: Compare Taylor’s shop-floor bottom-up engineering with Henri Fayol’s top-down administrative principles.',
            quickRevisionPoints: [
              '1911: Publication of "Principles of Scientific Management".',
              'Soldiering: Natural soldiering (personal habits) vs Systematic soldiering (peer pressure).',
              'Functional Foremanship: 4 in planning room (Route clerk, Instruction card clerk, Time & cost clerk, Disciplinarian) + 4 in shop-floor (Gang boss, Speed boss, Repair boss, Inspector).'
            ],
            keywords: ['Scientific Management', 'Mental Revolution', 'One Best Way', 'Functional Foremanship', 'Systematic Soldiering', 'Differential Piece-Rate']
          },
          hi: {
            definition: 'वैज्ञानिक प्रबंधन यह जानने की कला है कि आप श्रमिकों से क्या कराना चाहते हैं, और फिर यह देखना कि वे उसे सबसे अच्छे और सस्ते तरीके से करें (टेलर, 1911)।',
            introduction: 'एफ.डब्ल्यू. टेलर ने पारंपरिक तदर्थवादी अंदाज (Rule of Thumb) और श्रमिकों द्वारा जानबूझकर काम धीमा करने (Soldiering) को समाप्त करने के लिए वैज्ञानिक प्रबंधन का प्रतिपादन किया। उनका मानना था कि किसी भी कार्य को करने का "एक सर्वोत्तम तरीका" (One Best Way) वैज्ञानिक रूप से खोजा जा सकता है।',
            detailedExplanation: [
              'मानसिक क्रांति (Mental Revolution): टेलर का मानना था कि प्रबंधन और श्रमिकों के बीच परस्पर संघर्ष के स्थान पर मानसिक सहयोग होना चाहिए जिससे उत्पादन का अधिशेष बढ़ाया जा सके।',
              'मौलिक सिद्धांत: विज्ञान न कि अंगूठे का नियम; सामंजस्य न कि टकराव; सहयोग न कि व्यक्तिवाद; अधिकतम उत्पादन; प्रत्येक व्यक्ति का उसकी उच्चतम क्षमता तक विकास।',
              'प्रमुख तकनीकें: समय और गति अध्ययन, औजारों का मानकीकरण, विभेदक मजदूरी प्रणाली, कार्यात्मक फोरमैनशिप (8 विशेषज्ञों द्वारा पर्यवेक्षण)।'
            ],
            keyFeatures: [
              'नियोजन (Planning) को क्रियान्वयन (Execution) से अलग करना।',
              'स्टॉपवॉच आधारित गति-अध्ययन द्वारा वैज्ञानिक प्रमाणीकरण।',
              'आदेश की एकता के स्थान पर 8 विशिष्ट फोरमैन द्वारा दिशा-निर्देश।'
            ],
            importantThinkers: [
              { name: 'फ्रैंक और लिलियन गिलब्रेथ', contribution: 'सूक्ष्म गति अध्ययन के जनक; 18 मौलिक गतियों (Therbligs) की पहचान की।' },
              { name: 'हेनरी गैंट', contribution: 'परियोजना शेड्यूलिंग हेतु गैंट चार्ट (Gantt Chart) का आविष्कार किया।' }
            ],
            examples: [
              'हेनरी फोर्ड की असेंबली लाइन और आधुनिक अमेज़ॅन वेयरहाउस एल्गोरिदम।',
              'सरकारी पासपोर्ट सेवा केंद्रों में मानक संचालन प्रक्रिया (SOP) जिसके तहत न्यूनतम समय में दस्तावेज जांचे जाते हैं।'
            ],
            criticism: [
              'मनुष्य को केवल एक यांत्रिक पुर्जा समझा गया, सामाजिक एवं मनोवैज्ञानिक आवश्यकताओं की उपेक्षा की गई।',
              'श्रमिक यूनियनों ने इसे शोषण और अत्यधिक कार्यभार बढ़ाने वाला करार दिया।'
            ],
            contemporaryRelevance: 'आज का सिक्स सिग्मा (Six Sigma) और व्यवसाय प्रक्रिया पुनर्रचना (BPR) टेलर के अपव्यय-उन्मूलन दर्शन के प्रत्यक्ष विस्तार हैं।',
            examPerspective: 'मुख्य परीक्षा प्रश्न: टेलर के नीचे-से-ऊपर (Shop-floor) दृष्टिकोण की हेनरी फेयोल के ऊपर-से-नीचे (Top-down) दृष्टिकोण के साथ तुलना कीजिए।',
            quickRevisionPoints: [
              '1911: "प्रिंसिपल्स ऑफ साइंटिफिक मैनेजमेंट" का प्रकाशन।',
              'सोल्जरिंग: स्वाभाविक सोल्जरिंग (आलस्य) एवं व्यवस्थित सोल्जरिंग (सहकर्मियों का दबाव)।',
              'कार्यात्मक फोरमैनशिप: 4 नियोजन कक्ष में + 4 कार्यशाला में।'
            ],
            keywords: ['वैज्ञानिक प्रबंधन', 'मानसिक क्रांति', 'सर्वोत्तम तरीका', 'कार्यात्मक फोरमैनशिप', 'विभेदक मजदूरी', 'सोल्जरिंग']
          },
          te: {
            definition: 'శాస్త్రీయ నిర్వహణ అంటే కార్మికుల నుండి ఏమి ఆశిస్తున్నారో స్పష్టంగా తెలుసుకోవడం మరియు వారు దానిని అత్యుత్తమమైన, అత్యంత చౌకైన మార్గంలో చేసేలా చూడటం (ఎఫ్.డబ్ల్యూ. టేలర్, 1911).',
            introduction: 'కార్మికులు పనిని ఉద్దేశపూర్వకంగా నెమ్మదిగా చేసే పద్ధతిని (Soldiering) మరియు అశాస్త్రీయ పద్ధతులను అంతం చేయడానికి ఎఫ్.డబ్ల్యూ. టేలర్ శాస్త్రీయ నిర్వహణను ప్రతిపాదించారు. ప్రతి పనిని చేయడానికి "ఒక అత్యుత్తమ విధానం" (One Best Way) ఉంటుందని ఆయన నిరూపించారు.',
            detailedExplanation: [
              'మానసిక విప్లవం (Mental Revolution): యాజమాన్యం మరియు కార్మికులు లాభాల పంపకంపై కొట్లాడకుండా, ఉత్పత్తిని పెంచడానికి పరస్పరం సహకరించుకోవాలని టేలర్ పిలుపునిచ్చారు.',
              'ప్రధాన సూత్రాలు: గుడ్డి నియమాలు కాకుండా శాస్త్రీయ విధానం; ఘర్షణ లేకుండా సామరస్యం; వ్యక్తీకరణ కాకుండా సహకారం; పరిమిత ఉత్పత్తికి బదులు గరిష్ట ఉత్పత్తి; ప్రతి వ్యక్తి గరిష్ట సామర్థ్యానికి శిక్షణ.',
              'సాంకేతిక పద్ధతులు: కాల-గమన పరిశోధనలు (Time and Motion studies), సాధనాల ప్రామాణీకరణ, డిఫరెన్షియల్ పీస్-రేట్ వేతన విధానం, ఫంక్షనల్ ఫోర్‌మన్‌షిప్ (8 మంది పర్యవేక్షకులు).'
            ],
            keyFeatures: [
              'ప్రణాళికా రచనను అమలు నుండి వేరు చేయడం.',
              'స్టాప్‌వాచ్ పరిశోధనల ద్వారా అత్యుత్తమ పని విధానాన్ని నిర్ణయించడం.',
              'ఏకస్వామ్య ఆదేశాల స్థానంలో 8 మంది స్పెషలిస్ట్ ఫోర్‌మెన్ ద్వారా సూచనలు.'
            ],
            importantThinkers: [
              { name: 'ఫ్రాంక్ & లిలియన్ గిల్బ్రెత్', contribution: 'మైక్రో-మోషన్ పరిశోధనల ద్వారా 18 ప్రాథమిక శారీరక కదలికలను (Therbligs) వర్గీకరించారు.' },
              { name: 'హెన్రీ గాంట్', contribution: 'పనుల ప్రణాళిక మరియు పర్యవేక్షణ కోసం ప్రసిద్ధ గాంట్ చార్ట్ (Gantt Chart) రూపొందించారు.' }
            ],
            examples: [
              'ఫోర్డ్ కార్ల అసెంబ్లీ లైన్ మరియు అమెజాన్ గిడ్డంగుల్లో సమయపాలన అల్గారిథమ్స్.',
              'పాస్‌పోర్ట్ సేవా కేంద్రాలు మరియు బ్యాంకింగ్ వ్యవస్థలలో ప్రామాణిక కార్యాచరణ విధానాలు (SOPs).'
            ],
            criticism: [
              'మనిషిని యంత్రంలో ఒక భాగాంగా పరిగణించి భావోద్వేగాలను, సామాజిక అవసరాలను పట్టించుకోలేదు.',
              'కార్మికులపై తీవ్రమైన పని ఒత్తిడిని పెంచుతుందని కార్మిక సంఘాలు వ్యతిరేకించాయి.'
            ],
            contemporaryRelevance: 'ప్రస్తుత సాఫ్ట్‌వేర్ సంస్థల్లో అజైల్ పద్ధతులు, సిక్స్ సిగ్మా మరియు లాజిస్టిక్స్ ఆప్టిమైజేషన్లలో టేలర్ శాస్త్రీయ దృక్పథం ఇప్పటికీ కీలక పాత్ర పోషిస్తోంది.',
            examPerspective: 'యూపీఎస్సీ మెయిన్స్: టేలర్ షాప్-ఫ్లోర్ బాటమ్-అప్ విధానాన్ని హెన్రీ ఫాయోల్ టాప్-డౌన్ అడ్మినిస్ట్రేటివ్ సూత్రాలతో పోల్చి సమీక్షించండి.',
            quickRevisionPoints: [
              '1911: "ప్రిన్సిపల్స్ ఆఫ్ సైంటిఫిక్ మేనేజ్‌మెంట్" పుస్తకం విడుదల.',
              'సోల్జరింగ్: సహజ సోల్జరింగ్ (బద్ధకం) మరియు క్రమబద్ధ సోల్జరింగ్ (సహచరుల ఒత్తిడి).',
              'ఫంక్షనల్ ఫోర్‌మన్‌షిప్: ప్లానింగ్ విభాగంలో 4 గురు + షాప్ విభాగంలో 4 గురు.'
            ],
            keywords: ['శాస్త్రీయ నిర్వహణ', 'మానసిక విప్లవం', 'ఒక అత్యుత్తమ విధానం', 'ఫంక్షనల్ ఫోర్‌మన్‌షిప్', 'సోల్జరింగ్']
          }
        }
      },
      {
        id: 'pa-u2-t2',
        slug: 'weber-bureaucracy',
        unitId: 'pa-u2',
        subjectId: 'public-administration',
        title: {
          en: 'Max Weber: Ideal-Type Bureaucracy & Authority Typology',
          hi: 'मैक्स वेबर: आदर्श-प्रारूप नौकरशाही एवं सत्ता का वर्गीकरण',
          te: 'మాక్స్ వెబర్: ఆదర్శ నమూనా బ్యూరోక్రసీ & అధికార వర్గీకరణ'
        },
        summary: {
          en: 'Comprehensive structural deconstruction of Weberian bureaucratic theory, legal-rational authority, impersonality, and Merton’s dysfunctional critique.',
          hi: 'वेबर के नौकरशाही सिद्धांत, विधिक-तार्किक सत्ता, अवैयक्तिकता और मर्टन की प्रकार्यात्मक विकृति का समग्र विश्लेषण।',
          te: 'వెబర్ బ్యూరోక్రసీ సిద్ధాంతం, చట్టబద్ధ-హేతుబద్ధ అధికారం, నియమ నిబంధనలు మరియు రాబర్ట్ మెర్టన్ విమర్శల సంపూర్ణ విశ్లేషణ.'
        },
        readingTimeMinutes: 13,
        content: {
          en: {
            definition: 'Bureaucracy is an administrative body of appointed officials characterized by hierarchy, written rules, specialized division of labor, and impersonality, representing the purest form of Legal-Rational authority.',
            introduction: 'German sociologist Max Weber conceptualized bureaucracy as an "Ideal Type" (analytical mental construct, not an empirical average). He considered it technically superior to all other forms of administration, analogous to machine production over handicraft.',
            detailedExplanation: [
              'Tripartite Typology of Authority: Traditional Authority (patrimonial, based on sanctity of immemorial traditions); Charismatic Authority (devotion to exemplary character/heroism); Legal-Rational Authority (obedience to impersonal legal norms and official positions).',
              'Structural Pillars of Ideal Bureaucracy: Fixed jurisdictional competencies governed by laws; Hierarchical chain of command; Documentation and record-keeping in files; Expert training; Complete separation of public office from private property; Impersonality (sine ira et studio - without hatred or passion).',
              'Career Civil Service: Officials are appointed based on technical merit, receive fixed monetary salaries with pensions, enjoy tenure protection, and follow structured promotion pathways.'
            ],
            keyFeatures: [
              'Impersonality preventing nepotism and clientelism.',
              'Written record system ensuring administrative continuity.',
              'Clear demarcation of official sphere from personal wealth.'
            ],
            importantThinkers: [
              { name: 'Robert K. Merton', contribution: 'Demonstrated bureaucratic dysfunctions: trained incapacity, ritualism, and goal displacement.' },
              { name: 'Alvin Gouldner', contribution: 'Identified mock, representative, and punishment-centered bureaucracies.' },
              { name: 'Michel Crozier', contribution: 'Described bureaucracy as an organization that cannot correct its behavior by learning from errors.' }
            ],
            examples: [
              'Indian Administrative Service (IAS) and Central Secretariat Service institutional design directly descended from Weberian civil service architecture.',
              'Judicial trial procedures requiring strict adherence to evidentiary laws and written affidavits.'
            ],
            criticism: [
              'Weber himself warned of the "Iron Cage of Bureaucracy" (Stahlhartes Gehäuse) that suffocates individual freedom.',
              'Red-tapism, delay, procedural rigidity, and unresponsiveness to crisis situations.'
            ],
            contemporaryRelevance: 'In developing nations, Weberian bureaucracy provides the vital spine of administrative stability and neutral election management, even as agile governance demands greater flexibility.',
            examPerspective: 'Mains Question Master: "Has the Weberian model become obsolete in the era of digital governance and NPM? Critically evaluate with Indian examples."',
            quickRevisionPoints: [
              'Ideal Type is a conceptual accentuation of certain elements, not an ethical ideal.',
              'Authority = Power + Legitimacy (Herrschaft).',
              'Mertonian Dysfunctions: Trained incapacity, goal displacement, excessive rigidity.',
              'Weberian Iron Cage: Loss of enchantment and human autonomy in an over-rationalized world.'
            ],
            keywords: ['Ideal Type', 'Legal-Rational Authority', 'Sine ira et studio', 'Iron Cage', 'Trained Incapacity', 'Goal Displacement']
          },
          hi: {
            definition: 'नौकरशाही नियुक्त अधिकारियों का एक ऐसा प्रशासनिक तंत्र है जो पदानुक्रम, लिखित नियमों, श्रम विभाजन और अवैयक्तिकता से युक्त होता है, जो विधिक-तार्किक सत्ता का शुद्धतम रूप है।',
            introduction: 'जर्मन समाजशास्त्री मैक्स वेबर ने नौकरशाही का एक "आदर्श प्रारूप" (Ideal Type) प्रस्तुत किया। उनका मानना था कि तकनीकी दक्षता, गति और निरंतरता की दृष्टि से नौकरशाही अन्य सभी प्रशासनिक प्रणालियों से उसी प्रकार श्रेष्ठ है जैसे हस्तकला की तुलना में मशीनरी।',
            detailedExplanation: [
              'सत्ता का त्रिविध वर्गीकरण: पारंपरिक सत्ता (परंपराओं की पवित्रता पर आधारित); करिश्माई सत्ता (व्यक्तिगत विशिष्टता व आकर्षण पर आधारित); विधिक-तार्किक सत्ता (लिखित कानूनों व पद की गरिमा पर आधारित)।',
              'आदर्श नौकरशाही के संरचनात्मक लक्षण: कानूनों द्वारा निर्धारित कार्यक्षेत्र; स्पष्ट पदानुक्रम; फाइलों व लिखित दस्तावेजों का रख-रखाव; तकनीकी योग्यता के आधार पर भर्ती; पद और निजी संपत्ति का पूर्ण पृथक्करण; अवैयक्तिकता (राग-द्वेष रहित आचरण)।',
              'स्थायी सिविल सेवा: निश्चित वेतन, पेंशन, पदोन्नति के स्पष्ट अवसर और पद की सुरक्षा।'
            ],
            keyFeatures: [
              'अवैयक्तिकता (Impersonality) जो भाई-भतीजावाद को रोकती है।',
              'लिखित रिकॉर्ड जो प्रशासनिक निरंतरता सुनिश्चित करते हैं।',
              'योग्यता आधारित भर्ती प्रक्रिया।'
            ],
            importantThinkers: [
              { name: 'रॉबर्ट के. मर्टन', contribution: 'नौकरशाही की विकृतियों (प्रशिक्षित अयोग्यता, लक्ष्य विस्थापन) को उजागर किया।' },
              { name: 'एल्विन गोल्डनर', contribution: 'प्रतिनिधिक एवं दंड-केंद्रित नौकरशाही का वर्गीकरण किया।' }
            ],
            examples: [
              'भारतीय प्रशासनिक सेवा (IAS) का ढांचा सीधे तौर पर वेबरियन आदर्श पर आधारित है।',
              'भारत निर्वाचन आयोग (ECI) की निष्पक्ष कार्यप्रणाली वेबरियन विधिक-तार्किक सत्ता का उत्कृष्ट उदाहरण है।'
            ],
            criticism: [
              'स्वयं वेबर ने चेताया था कि अत्यधिक तार्किकता मानव को "नौकरशाही के लोहे के पिंजरे" (Iron Cage) में कैद कर देगी।',
              'लालफीताशाही (Red-tapism), अत्यधिक औपचारिकता और जन-आकांक्षाओं के प्रति संवेदनहीनता।'
            ],
            contemporaryRelevance: 'डिजिटल शासन के बावजूद नीतिगत निरंतरता और कानून के शासन को बनाए रखने में वेबर की नौकरशाही आज भी अनिवार्य रीढ़ है।',
            examPerspective: 'मुख्य परीक्षा प्रश्न: "क्या ई-गवर्नेंस और आउटसोर्सिंग के दौर में वेबर का नौकरशाही मॉडल अप्रासंगिक हो गया है? भारतीय संदर्भ में परीक्षण कीजिए।"',
            quickRevisionPoints: [
              'आदर्श प्रारूप (Ideal Type) एक विश्लेषणात्मक उपकरण है, कोई नैतिक आदर्श नहीं।',
              'सत्ता (Authority) = शक्ति (Power) + वैधता (Legitimacy)।',
              'मर्टन की विकृतियां: नियमों को साध्य मान लेना (Goal Displacement)।',
              'लोहे का पिंजरा: अत्यधिक मशीनी तार्किकता से मानवीय गरिमा का ह्रास।'
            ],
            keywords: ['आदर्श प्रारूप', 'विधिक-तार्किक सत्ता', 'लोहे का पिंजरा', 'प्रशिक्षित अयोग्यता', 'लक्ष्य विस्थापन', 'लालफीताशाही']
          },
          te: {
            definition: 'బ్యూరోక్రసీ అనేది లిఖితపూర్వక నియమాలు, క్రమానుగత శ్రేణి, నైపుణ్యంతో కూడిన శ్రమ విభజన మరియు నిష్పాక్షికత ఆధారంగా నియమించబడిన అధికారుల సమూహం, ఇది చట్టబద్ధ-హేతుబద్ధ అధికారానికి స్వచ్ఛమైన రూపం.',
            introduction: 'జర్మన్ సామాజికవేత్త మాక్స్ వెబర్ బ్యూరోక్రసీ యొక్క "ఆదర్శ నమూనా" (Ideal Type) ను రూపొందించారు. హస్తకళల కంటే యంత్రాలు ఎంత వేగవంతమైనవో, ఇతర పాలనా పద్ధతుల కంటే బ్యూరోక్రసీ సాంకేతికంగా అంతటి అత్యుత్తమమైనదని ఆయన పేర్కొన్నారు.',
            detailedExplanation: [
              'అధికార వర్గీకరణ: సాంప్రదాయక అధికారం (తరతరాల ఆచారాలు); ఆకర్షణీయ/కరిష్మాటిక్ అధికారం (వ్యక్తిగత నాయకత్వ లక్షణాలు); చట్టబద్ధ-హేతుబద్ధ అధికారం (చట్టాలు మరియు రాజ్యాంగ నిబంధనలు).',
              'ఆదర్శ బ్యూరోక్రసీ ప్రధాన లక్షణాలు: చట్టబద్ధ అధికార పరిధులు; స్పష్టమైన క్రమానుగత శ్రేణి (Hierarchy); ఫైళ్ల నిర్వహణ మరియు లిఖితపూర్వక రికార్డులు; నైపుణ్యం ఆధారిత ఎంపిక; అధికార పదవి మరియు వ్యక్తిగత ఆస్తుల సంపూర్ణ విభజన; రాగద్వేషాలు లేని నిష్పాక్షికత.',
              'శాశ్వత సివిల్ సర్వీస్: పోటీ పరీక్షల ద్వారా నియామకం, స్థిరమైన వేతనం, పదవీ విరమణ ప్రయోజనాలు మరియు సర్వీస్ భద్రత.'
            ],
            keyFeatures: [
              'బంధుప్రీతిని నివారించే నిష్పాక్షిక నిబంధనలు.',
              'పాలనా కొనసాగింపును కాపాడే పత్రాల నిర్వహణ.',
              'అర్హత మరియు ప్రతిభ ఆధారంగా మాత్రమే నియామకాలు.'
            ],
            importantThinkers: [
              { name: 'రాబర్ట్ కె. మెర్టన్', contribution: 'బ్యూరోక్రసీ యొక్క లోపాలు - నియమాలకే అంకితమై అసలు లక్ష్యాలను మరిచిపోయే "లక్ష్య విస్థాపన" ను వివరించారు.' },
              { name: 'ఆల్విన్ గోల్డ్నర్', contribution: 'బ్యూరోక్రసీని ప్రతినిధి నమూనా మరియు శిక్షా-కేంద్రిత నమూనాలుగా విభజించారు.' }
            ],
            examples: [
              'భారత సివిల్ సర్వీసెస్ (IAS/IPS) వ్యవస్థ నేరుగా వెబర్ ఆదర్శ నమూనా పై ఆధారపడింది.',
              'భారత ఎన్నికల సంఘం (ECI) నిష్పాక్షికంగా ఎన్నికలను నిర్వహించడం చట్టబద్ధ-హేతుబద్ధ అధికారానికి ప్రతీక.'
            ],
            criticism: [
              'వెబర్ స్వయంగా దీనిని మానవ స్వేచ్ఛను హరించే "ఇనుప పంజరం" (Iron Cage) గా హెచ్చరించారు.',
              'రెడ్ టేపిజం, నిర్ణయాల్లో విపరీతమైన జాప్యం మరియు ప్రజా సమస్యల పట్ల మొండితనం.'
            ],
            contemporaryRelevance: 'డిజిటల్ గవర్నెన్స్ వచ్చినప్పటికీ చట్టబద్ధ పాలనను నిలబెట్టడానికి, అత్యవసర సమయాల్లో నిలకడైన పాలన అందించడానికి బ్యూరోక్రసీ నేటికీ అత్యవసరం.',
            examPerspective: 'యూపీఎస్సీ మెయిన్స్ ప్రశ్న: "డిజిటల్ పరిపాలన మరియు న్యూ పబ్లిక్ మేనేజ్‌మెంట్ యుగంలో వెబర్ బ్యూరోక్రసీ కాలం చెల్లినదా? భారతీయ ఉదాహరణలతో సమీక్షించండి."',
            quickRevisionPoints: [
              'ఐడియల్ టైప్ అనేది విశ్లేషణాత్మక నమూనా మాత్రమే, నైతిక ఆదర్శం కాదు.',
              'అధికారం = బలం + చట్టబద్ధమైన సమ్మతి (Legitimacy).',
              'మెర్టన్ విమర్శ: నిబంధనల వెనుక పరిగెత్తుతూ అసలు ఫలితాలను విస్మరించడం.',
              'ఐరన్ కేజ్: విపరీతమైన యాంత్రిక నియమాలు మానవత్వాన్ని బంధించడం.'
            ],
            keywords: ['ఆదర్శ నమూనా', 'చట్టబద్ధ-హేతుబద్ధ అధికారం', 'ఇనుప పంజరం', 'లక్ష్య విస్థాపన', 'రెడ్ టేపిజం']
          }
        }
      }
    ]
  }
];

// Add the remaining 8 core units for Public Administration syllabus architecture
export const ALL_PUBLIC_ADMIN_UNITS: Unit[] = [
  ...PUBLIC_ADMIN_UNITS,
  {
    id: 'pa-u3',
    number: 3,
    slug: 'administrative-theories',
    subjectId: 'public-administration',
    title: {
      en: 'Administrative Theories & Behavioral Science',
      hi: 'प्रशासनिक सिद्धांत एवं व्यवहारवादी विज्ञान',
      te: 'పరిపాలనా సిద్ధాంతాలు & ప్రవర్తనా శాస్త్రం'
    },
    description: {
      en: 'Scientific Management, Bureaucratic Theory, Human Relations Movement (Elton Mayo), Chester Barnard’s Acceptance Theory, Herbert Simon’s Decision-Making, Ecological Perspective (Fred Riggs).',
      hi: 'मानव संबंध आंदोलन (एल्टन मेयो), चेस्टर बर्नार्ड का स्वीकृति सिद्धांत, हर्बर्ट साइमन का निर्णय-निर्माण मॉडल, पारिस्थितिकीय दृष्टिकोण (फ्रेड रिग्स)।',
      te: 'మానవ సంబంధాల ఉద్యమం (ఎల్టన్ మేయో), చెస్టర్ బర్నార్డ్ అంగీకార సిద్ధాంతం, హెర్బర్ట్ సైమన్ నిర్ణయాధికార నమూనా, పర్యావరణ దృక్పథం (ఫ్రెడ్ రిగ్స్).'
    },
    topics: []
  },
  {
    id: 'pa-u4',
    number: 4,
    slug: 'principles-of-organization',
    subjectId: 'public-administration',
    title: {
      en: 'Principles of Organization & Administrative Dynamics',
      hi: 'संगठन के सिद्धांत एवं प्रशासनिक गतिशीलता',
      te: 'వ్యవస్థీకరణ సూత్రాలు & పరిపాలనా డైనమిక్స్'
    },
    description: {
      en: 'Hierarchy (Scalar Chain), Span of Control, Unity of Command, Coordination, Delegation, Decentralization, Line & Staff Agencies.',
      hi: 'पदानुक्रम (स्केलर चेन), नियंत्रण का विस्तार, आदेश की एकता, समन्वय, प्रत्यायोजन, विकेंद्रीकरण, सूत्र एवं स्टाफ एजेंसियां।',
      te: 'క్రమానుగత శ్రేణి, నియంత్రణా విస్తృతి, ఆజ్ఞా ఏకత్వ సూత్రం, సమన్వయం, అధికార దఖలు, వికేంద్రీకరణ, లైన్ & స్టాఫ్ విభాగాలు.'
    },
    topics: []
  },
  {
    id: 'pa-u5',
    number: 5,
    slug: 'personnel-administration',
    subjectId: 'public-administration',
    title: {
      en: 'Personnel Administration & Civil Service Ethics',
      hi: 'कार्मिक प्रशासन एवं सिविल सेवा नैतिकता',
      te: 'సిబ్బంది పరిపాలన & సివిల్ సర్వీస్ నైతిక విలువలు'
    },
    description: {
      en: 'Recruitment, Training (Mission Karmayogi), Promotion, Civil Service Neutrality, Anonymity, Code of Conduct, Administrative Integrity.',
      hi: 'भर्ती, प्रशिक्षण (मिशन कर्मयोगी), पदोन्नति, सिविल सेवा तटस्थता, अनामिकता, आचार संहिता, प्रशासनिक सत्यनिष्ठा।',
      te: 'నియామకాలు, శిక్షణ (మిషన్ కర్మయోగి), పదోన్నతులు, సివిల్ సర్వీస్ తటస్థత, అజ్ఞాతత్వం, ప్రవర్తనా నియమావళి, సమగ్రత.'
    },
    topics: []
  },
  {
    id: 'pa-u6',
    number: 6,
    slug: 'financial-administration',
    subjectId: 'public-administration',
    title: {
      en: 'Financial Administration & Budgetary Control',
      hi: 'वित्तीय प्रशासन एवं बजटीय नियंत्रण',
      te: 'ఆర్థిక పరిపాలన & బడ్జెట్ నియంత్రణ'
    },
    description: {
      en: 'Budget Cycle, Performance Budgeting, Zero-Based Budgeting (ZBB), Parliamentary Financial Committees (PAC, Estimates, PUC), CAG of India.',
      hi: 'बजट चक्र, निष्पादन बजट, शून्य-आधारित बजट (ZBB), संसदीय वित्तीय समितियां (लोक लेखा, प्राक्कलन, उपक्रम), भारत का नियंत्रक एवं महालेखापरीक्षक (CAG)।',
      te: 'బడ్జెట్ చక్రం, పనితీరు బడ్జెట్, జీరో బేస్డ్ బడ్జెట్ (ZBB), పార్లమెంటరీ ఆర్థిక కమిటీలు (PAC, అంచనాల కమిటీ), భారత కాగ్ (CAG).'
    },
    topics: []
  },
  {
    id: 'pa-u7',
    number: 7,
    slug: 'accountability-and-control',
    subjectId: 'public-administration',
    title: {
      en: 'Accountability & Control in Democratic Governance',
      hi: 'लोकतांत्रिक शासन में उत्तरदायित्व एवं नियंत्रण',
      te: 'ప్రజాస్వామ్య పాలనలో జవాబుదారీతనం & నియంత్రణ'
    },
    description: {
      en: 'Legislative, Executive, Judicial Review; Citizen Oversight, Ombudsman Institutions (Lokpal & Lokayukta), Right to Information (RTI Act 2005).',
      hi: 'विधायी, कार्यकारी, न्यायिक समीक्षा; नागरिक निगरानी, लोकपाल एवं लोकायुक्त, सूचना का अधिकार अधिनियम (RTI 2005)।',
      te: 'శాసన, కార్యనిర్వాహక, న్యాయ సమీక్ష; ప్రజా నిఘా, లోక్‌పాల్ & లోకాయుక్త, సమాచార హక్కు చట్టం (RTI 2005).'
    },
    topics: []
  },
  {
    id: 'pa-u8',
    number: 8,
    slug: 'public-policy',
    subjectId: 'public-administration',
    title: {
      en: 'Public Policy Formulation, Implementation & Evaluation',
      hi: 'लोक नीति निर्माण, क्रियान्वयन एवं मूल्यांकन',
      te: 'ప్రజా విధాన రూపకల్పన, అమలు & మూల్యాంకనం'
    },
    description: {
      en: 'Models of Policy Making (Institutional, Incremental - Lindblom, Mixed Scanning - Etzioni, Optimal - Dror), Implementation bottlenecks, Policy impact evaluation.',
      hi: 'नीति निर्माण के मॉडल (संस्थागत, वृद्धिशील - लिंडब्लॉम, मिश्रित स्कैनिंग - एट्ज़ियोनी, इष्टतम - ड्रोर), क्रियान्वयन बाधाएं, नीति प्रभाव मूल्यांकन।',
      te: 'విధాన రూపకల్పన నమూనాలు (లిండ్‌బ్లామ్ ఇంక్రిమెంటల్ మోడల్, ఎట్జియోని మిక్స్‌డ్ స్కానింగ్, డ్రోర్ ఆప్టిమల్ మోడల్), అమలు సమస్యలు, విధాన సమీక్ష.'
    },
    topics: []
  },
  {
    id: 'pa-u9',
    number: 9,
    slug: 'indian-administration',
    subjectId: 'public-administration',
    title: {
      en: 'Indian Administration: Constitutional Framework & Machinery',
      hi: 'भारतीय प्रशासन: संवैधानिक ढांचा एवं शासन तंत्र',
      te: 'భారత పరిపాలన: రాజ్యాంగ చట్రం & ప్రభుత్వ యంత్రాంగం'
    },
    description: {
      en: 'President, Prime Minister’s Office (PMO), Cabinet Secretariat, NITI Aayog, Central & State Secretariats, District Collector, 73rd & 74th Amendments (Panchayati Raj).',
      hi: 'राष्ट्रपति, प्रधानमंत्री कार्यालय (PMO), कैबिनेट सचिवालय, नीति आयोग, केंद्रीय व राज्य सचिवालय, जिला कलेक्टर, 73वां व 74वां संविधान संशोधन (पंचायती राज)।',
      te: 'రాష్ట్రపతి, ప్రధానమంత్రి కార్యాలయం (PMO), క్యాబినెట్ సెక్రటేరియట్, నీతి ఆయోగ్, కేంద్ర & రాష్ట్ర సచివాలయాలు, జిల్లా కలెక్టర్, 73 & 74వ రాజ్యాంగ సవరణలు (పంచాయతీ రాజ్).'
    },
    topics: []
  },
  {
    id: 'pa-u10',
    number: 10,
    slug: 'contemporary-governance',
    subjectId: 'public-administration',
    title: {
      en: 'Contemporary Governance, Digital India & Citizen-Centric Reforms',
      hi: 'समकालीन शासन, डिजिटल इंडिया एवं नागरिक-केंद्रित सुधार',
      te: 'సమకాలీన పాలన, డిజిటల్ ఇండియా & పౌర-కేంద్రిత సంస్కరణలు'
    },
    description: {
      en: 'E-Governance, Digital Public Infrastructure (UPI, ONDC), Citizen Charters, Social Audit, Corporate Social Responsibility, Public-Private Partnerships (PPP).',
      hi: 'ई-गवर्नेंस, डिजिटल पब्लिक इंफ्रास्ट्रक्चर (UPI, ONDC), नागरिक अधिकार पत्र (Citizen Charters), सोशल ऑडिट, पीपीपी (PPP) मॉडल।',
      te: 'ఈ-పాలన, డిజిటల్ పబ్లిక్ ఇన్‌ఫ్రాస్ట్రక్చర్ (UPI, ONDC), సిటిజన్ చార్టర్స్, సోషల్ ఆడిట్, ప్రభుత్వ-ప్రైవేట్ భాగస్వామ్యం (PPP).'
    },
    topics: []
  }
];
