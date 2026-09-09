import { Language, MultilingualText } from '../types/study';

export interface ComparisonRow {
  parameter: MultilingualText;
  modelA: MultilingualText;
  modelB: MultilingualText;
}

export interface ComparisonMatrix {
  id: string;
  subjectId: 'public-administration' | 'sociology';
  title: MultilingualText;
  entityA: MultilingualText;
  entityB: MultilingualText;
  context: MultilingualText;
  rows: ComparisonRow[];
}

export const COMPARISON_MATRICES: ComparisonMatrix[] = [
  {
    id: 'comp-taylor-fayol',
    subjectId: 'public-administration',
    title: {
      en: 'Taylor’s Scientific Management vs Fayol’s Administrative Theory',
      hi: 'टेलर का वैज्ञानिक प्रबंधन बनाम फेयोल का प्रशासनिक सिद्धांत',
      te: 'టేలర్ శాస్త్రీయ నిర్వహణ vs ఫాయోల్ పరిపాలనా సిద్ధాంతం'
    },
    entityA: {
      en: 'F.W. Taylor (Scientific Management)',
      hi: 'एफ.डब्ल्यू. टेलर (वैज्ञानिक प्रबंधन)',
      te: 'ఎఫ్.డబ్ల్యూ. టేలర్ (శాస్త్రీయ నిర్వహణ)'
    },
    entityB: {
      en: 'Henri Fayol (Administrative Management)',
      hi: 'हेनरी फेयोल (प्रशासनिक प्रबंधन)',
      te: 'హెన్రీ ఫాయోల్ (పరిపాలనా నిర్వహణ)'
    },
    context: {
      en: 'A foundational comparative paradigm in Public Administration comparing shop-floor engineering with top-level executive leadership.',
      hi: 'लोक प्रशासन का आधारभूत तुलनात्मक प्रतिमान जो कार्यशाला स्तर के इंजीनियरिंग दृष्टिकोण की तुलना शीर्ष प्रशासनिक नेतृत्व से करता है।',
      te: 'ప్రజా పరిపాలనలో వర్క్‌షాప్ స్థాయి ఇంజనీరింగ్ దృక్పథం మరియు ఉన్నత స్థాయి నిర్వహణల మధ్య ప్రాథమిక పోలిక.'
    },
    rows: [
      {
        parameter: { en: 'Perspective & Level', hi: 'दृष्टिकोण एवं संगठनात्मक स्तर', te: 'దృక్పథం & సంస్థాగత స్థాయి' },
        modelA: { en: 'Bottom-up; Focused strictly on the shop-floor (factory worker & supervisor).', hi: 'नीचे-से-ऊपर; पूरी तरह से कार्यशाला (श्रमिक व फोरमैन) पर केंद्रित।', te: 'కింది నుండి పైకి; వర్క్‌షాప్ (కార్మికుడు & ఫోర్‌మన్) స్థాయిపై దృష్టి.' },
        modelB: { en: 'Top-down; Focused on the overall organization and executive leadership.', hi: 'ऊपर-से-नीचे; समग्र संगठन एवं शीर्ष प्रबंधकीय नेतृत्व पर केंद्रित।', te: 'పై నుండి కిందికి; మొత్తం సంస్థ మరియు ఉన్నతాధికారుల నాయకత్వంపై దృష్టి.' }
      },
      {
        parameter: { en: 'Core Focus', hi: 'मूल केंद्र बिंदु', te: 'ప్రధాన లక్ష్యం' },
        modelA: { en: 'Worker productivity and task efficiency via time-motion analysis.', hi: 'समय-गति अध्ययन द्वारा श्रमिक की दक्षता व उत्पादन में वृद्धि।', te: 'సమయ-గమన పరిశోధనల ద్వారా కార్మికుడి ఉత్పాదకత పెంపు.' },
        modelB: { en: 'Coordination and administrative functions of managers (POCCC).', hi: 'प्रबंधकों के प्रशासनिक कार्यों (POCCC) एवं सार्वभौमिक समन्वय पर।', te: 'మేనేజర్ల పరిపాలనా బాధ్యతలు (POCCC) మరియు సమన్వయం.' }
      },
      {
        parameter: { en: 'Unity of Command', hi: 'आदेश की एकता', te: 'ఆజ్ఞా ఏకత్వ సూత్రం' },
        modelA: { en: 'Rejected unity of command; Proposed 8 specialized foremen.', hi: 'आदेश की एकता को नकारा; 8 विशिष्ट फोरमैन की योजना दी।', te: 'ఆజ్ఞా ఏకత్వాన్ని తిరస్కరించి, 8 మంది స్పెషలిస్ట్ ఫోర్‌మెన్లను ప్రతిపాదించారు.' },
        modelB: { en: 'Strictly adhered to Unity of Command (one employee, one boss).', hi: 'आदेश की एकता पर कठोरता से बल दिया (एक कर्मचारी, एक बॉस)।', te: 'ఆజ్ఞా ఏకత్వ సూత్రానికి కట్టుబడ్డారు (ఒక్కో ఉద్యోగికి ఒక్క బాస్).' }
      },
      {
        parameter: { en: 'Applicability', hi: 'लागू होने का दायरा', te: 'వర్తింపు పరిధి' },
        modelA: { en: 'Specialized manufacturing and production environments.', hi: 'मुख्यतः विनिर्माण एवं औद्योगिक उत्पादन वातावरण में।', te: 'ప్రధానంగా ఉత్పాదక కర్మాగారాలకు మాత్రమే అనుకూలం.' },
        modelB: { en: 'Universal applicability across government, business, and non-profits.', hi: 'सरकार, व्यापार एवं सभी संगठनों में सार्वभौमिक रूप से प्रयोज्य।', te: 'ప్రభుత్వ, వ్యాపార మరియు అన్ని రకాల సంస్థలకు విశ్వవ్యాప్తంగా వర్తిస్తుంది.' }
      }
    ]
  },
  {
    id: 'comp-marx-weber',
    subjectId: 'sociology',
    title: {
      en: 'Karl Marx vs Max Weber on Capitalism and Stratification',
      hi: 'पूंजीवाद एवं स्तरीकरण पर मार्क्स बनाम वेबर',
      te: 'పెట్టుబడిదారీ విధానం & స్తరీకరణపై మార్క్స్ vs వెబర్'
    },
    entityA: {
      en: 'Karl Marx (Historical Materialism)',
      hi: 'कार्ल मार्क्स (ऐतिहासिक भौतिकवाद)',
      te: 'కార్ల్ మార్క్స్ (చారిత్రక భౌతికవాదం)'
    },
    entityB: {
      en: 'Max Weber (Social Action & Verstehen)',
      hi: 'मैक्स वेबर (सामाजिक क्रिया एवं व्याख्यात्मक)',
      te: 'మాక్స్ వెబర్ (వివరణాత్మక దృక్పథం)'
    },
    context: {
      en: 'The classic debate over whether material economic relations exclusively drive history or whether cultural ideas and religious values independently transform society.',
      hi: 'यह ऐतिहासिक बहस कि क्या केवल आर्थिक संबंध इतिहास तय करते हैं या धार्मिक मूल्य और सांस्कृतिक विचार भी समाज को रूपांतरित करते हैं।',
      te: 'సమాజాన్ని కేవలం ఆర్థిక శక్తులే నడిపిస్తాయా లేదా మతపరమైన విలువలు మరియు ఆలోచనలు కూడా ప్రభావితం చేస్తాయా అనే ప్రసిద్ధ చర్చ.'
    },
    rows: [
      {
        parameter: { en: 'Nature of Capitalism', hi: 'पूंजीवाद की प्रकृति', te: 'పెట్టుబడిదారీ స్వభావం' },
        modelA: { en: 'An inherently exploitative economic mode driven by surplus value theft from labor.', hi: 'श्रम के अधिशेष मूल्य के शोषण पर आधारित एक अस्थिर आर्थिक व्यवस्था।', te: 'శ్రామికుల శ్రమను దోపిడీ చేసి అదనపు విలువను రాబట్టే ఆర్థిక వ్యవస్థ.' },
        modelB: { en: 'An unprecedented form of rational calculability, accounting, and organization.', hi: 'तार्किक गणना, व्यवस्थित लेखांकन और अनुशासन पर आधारित प्रणाली।', te: 'హేతుబద్ధమైన లెక్కలు, క్రమశిక్షణ మరియు సమర్థవంతమైన నిర్వహణా వ్యవస్థ.' }
      },
      {
        parameter: { en: 'Genesis of Capitalism', hi: 'पूंजीवाद का उद्भव', te: 'పెట్టుబడిదారీ ఆవిర్భావం' },
        modelA: { en: 'Materialist: Primitive capital accumulation, enclosures, and factory technology.', hi: 'भौतिकवादी: आदिम पूंजी संचय, भूमि जब्ती और कारखाने की तकनीक।', te: 'భౌతికవాదం: వనరుల ఆక్రమణ, ఆస్తుల స్వాధీనం మరియు యంత్ర పరిజ్ఞానం.' },
        modelB: { en: 'Idealist/Religious: Calvinist ethic of worldly asceticism and predestination.', hi: 'धार्मिक/वैचारिक: केल्विनवादी प्रोटेस्टेंट आचार और सांसारिक तपस्या।', te: 'ఆలోచనాత్మక/మతపరమైన: కాల్వినిస్ట్ ప్రొటెస్టంట్ నైతిక నియమాలు మరియు పొదుపు.' }
      },
      {
        parameter: { en: 'Dimensions of Stratification', hi: 'स्तरीकरण के आयाम', te: 'స్తరీకరణ కొలతలు' },
        modelA: { en: 'Unidimensional: Strictly economic property ownership (Bourgeoisie vs Proletariat).', hi: 'एक-आयामी: केवल उत्पादन के साधनों पर मालिकाना हक (पूंजीपति बनाम सर्वहारा)।', te: 'ఏకైక కొలత: ఆస్తులు, ఉత్పత్తి సాధనాల యాజమాన్యం మాత్రమే (బూర్జువా vs శ్రామికులు).' },
        modelB: { en: 'Tridimensional: Pluralistic interplay of Class (economic), Status (social prestige), and Party (political power).', hi: 'त्रि-आयामी: वर्ग (आर्थिक), प्रस्थिति (सामाजिक सम्मान), और दल (राजनीतिक शक्ति)।', te: 'త్రిముఖ కొలతలు: వర్గం (ఆర్థికం), హోదా (సామాజిక గౌరవం), మరియు పార్టీ (రాజకీయ బలం).' }
      },
      {
        parameter: { en: 'Ultimate Trajectory', hi: 'अंतिम भविष्य', te: 'అంతిమ భవిష్యత్తు' },
        modelA: { en: 'Inevitable proletarian revolution destroying capitalism to establish classless communism.', hi: 'सर्वहारा क्रांति द्वारा पूंजीवाद का विनाश और वर्गहीन साम्यवाद की स्थापना।', te: 'శ్రామిక విప్లవం ద్వారా పెట్టుబడిదారీ వ్యవస్థ కూలిపోయి వర్గరహిత సమాజం ఏర్పడుతుంది.' },
        modelB: { en: 'Spread of unstoppable rationalization and bureaucratic "Iron Cage", without revolutionary escape.', hi: 'नौकरशाही और तार्किकता के "लोहे के पिंजरे" का अपरिहार्य प्रसार।', te: 'హేతుబద్ధత మరియు బ్యూరోక్రసీ అనే "ఇనుప పంజరం" మరింతగా బలపడుతుంది.' }
      }
    ]
  }
];
