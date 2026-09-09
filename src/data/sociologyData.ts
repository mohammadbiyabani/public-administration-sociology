import { Unit } from '../types/study';

export const SOCIOLOGY_UNITS: Unit[] = [
  {
    id: 'soc-u1',
    number: 1,
    slug: 'intro-to-sociology',
    subjectId: 'sociology',
    title: {
      en: 'Introduction to Sociology: Emergence & Scope',
      hi: 'समाजशास्त्र का परिचय: उद्भव एवं कार्यक्षेत्र',
      te: 'సమాజశాస్త్ర పరిచయం: ఆవిర్భావం & పరిధి'
    },
    description: {
      en: 'Modernity and Social Changes in Europe, Emergence of Sociology, Scope of the Discipline, Comparison with other Social Sciences, Common Sense vs Sociological Imagination (C. Wright Mills).',
      hi: 'यूरोप में आधुनिकता एवं सामाजिक परिवर्तन, समाजशास्त्र का उद्भव, विषय का क्षेत्र, अन्य सामाजिक विज्ञानों से संबंध, सामान्य ज्ञान बनाम समाजशास्त्रीय कल्पना (सी. राइट मिल्स)।',
      te: 'ఐరోపాలో ఆధునికత మరియు సామాజిక మార్పులు, సమాజశాస్త్ర ఆవిర్భావం, పరిధి, ఇతర సాంఘిక శాస్త్రాలతో సంబంధం, సాధారణ అవగాహన vs సామాజిక ఆలోచనా దృక్పథం (సి. రైట్ మిల్స్).'
    },
    topics: [
      {
        id: 'soc-u1-t1',
        slug: 'emergence-modernity-europe',
        unitId: 'soc-u1',
        subjectId: 'sociology',
        title: {
          en: 'Modernity and Social Changes in Europe & the Emergence of Sociology',
          hi: 'यूरोप में आधुनिकता, सामाजिक परिवर्तन एवं समाजशास्त्र का उद्भव',
          te: 'ఐరోపాలో ఆధునికత, సామాజిక పరివర్తన & సమాజశాస్త్ర ఆవిర్భావం'
        },
        summary: {
          en: 'Historical inquiry into the Enlightenment, French Revolution, and Industrial Revolution as catalysts for the scientific study of human society.',
          hi: 'प्रबोधन काल, फ्रांसीसी क्रांति और औद्योगिक क्रांति के ऐतिहासिक संदर्भ में मानव समाज के वैज्ञानिक अध्ययन का विश्लेषण।',
          te: 'జ్ఞానోదయ ఉద్యమం, ఫ్రెంచ్ విప్లవం మరియు పారిశ్రామిక విప్లవాల ద్వారా మానవ సమాజ శాస్త్రీయ అధ్యయనానికి పడిన పునాదుల విశ్లేషణ.'
        },
        readingTimeMinutes: 12,
        content: {
          en: {
            definition: 'Sociology is the scientific study of human social life, groups, and societies, founded on the premise that human behavior is profoundly shaped by the social structures within which people are embedded.',
            introduction: 'Sociology emerged in Western Europe in the late 18th and early 19th centuries as an intellectual response to the seismic disruptions wrought by the "Twin Revolutions": the political earthquake of the French Revolution (1789) and the socio-economic transformations of the Industrial Revolution, illuminated by the Enlightenment.',
            detailedExplanation: [
              'The Enlightenment (Age of Reason): Challenged ecclesiastical dogma and divine right of kings, asserting that human reason and empirical observation could decode the laws governing society just as Newton had unraveled the physical cosmos.',
              'The French Revolution (1789): Smashed the feudal estate system with ideals of Liberty, Equality, and Fraternity, but ushered in prolonged political instability and social fragmentation, prompting thinkers like Saint-Simon and Auguste Comte to seek a new science of social order.',
              'The Industrial Revolution: Mass migration from agrarian villages to squalid industrial cities (Manchester, London), rise of the factory proletariat, exploitation of child labor, and rupture of traditional kinship networks generated widespread social pathology.',
              'Sociological Response: Auguste Comte coined the term "Sociology" (1838) as the crowning pinnacle of positive sciences, aiming to reconcile social order (Statics) with progress (Dynamics).'
            ],
            keyFeatures: [
              'Intellectual secularization of social thought away from theology.',
              'Application of natural science methodologies (Positivism) to social phenomena.',
              'Focus on systemic societal transformation and social integration amidst breakdown of traditional bonds.'
            ],
            importantThinkers: [
              { name: 'Auguste Comte', contribution: 'Father of Sociology; proposed the Law of Three Stages (Theological, Metaphysical, Positive).' },
              { name: 'Henri de Saint-Simon', contribution: 'Advocated a science of society (Social Physiology) guided by industrialists and scientists.' },
              { name: 'C. Wright Mills', contribution: 'Formulated the "Sociological Imagination" — linking personal troubles of milieu with public issues of social structure.' }
            ],
            examples: [
              'Urban alienation, slum clusters, and breakdown of joint families in fast-growing Indian metropolitan belts (Bengaluru, NCR) mirroring European industrial transitions.',
              'Feminist mobilization and universal suffrage movements transforming patriarchal legal codes across post-colonial societies.'
            ],
            criticism: [
              'Early European sociological theories suffered from Eurocentric bias, assuming European modern development was the unilinear destiny of all civilizations.',
              'Positivist over-reliance on quantitative data ignored subjective meanings, emotions, and symbolic cultural nuances (critique by Interpretivists/Weber).'
            ],
            contemporaryRelevance: 'The transition to the "Network Society" and Fourth Industrial Revolution (AI, gig economy, algorithmic polarization) generates social dislocations that require contemporary sociological analysis.',
            examPerspective: 'UPSC Mains Direct Theme: "Sociology is the child of the Age of Revolution." Analyze how the intellectual currents of Enlightenment and Industrialization shaped the discipline.',
            quickRevisionPoints: [
              'Twin Revolutions: French Revolution (1789) + Industrial Revolution.',
              'Auguste Comte: Coined "Sociology" in 1838.',
              'Law of Three Stages: Theological -> Metaphysical -> Positive/Scientific.',
              'C. Wright Mills: Sociological Imagination bridges biography and history.',
              'Positivism: Study of society using empirical, measurable observation.'
            ],
            keywords: ['Enlightenment', 'Twin Revolutions', 'Positivism', 'Sociological Imagination', 'Law of Three Stages', 'Social Statics & Dynamics']
          },
          hi: {
            definition: 'समाजशास्त्र मानव सामाजिक जीवन, समूहों और समाजों का वैज्ञानिक अध्ययन है, जो इस मान्यता पर आधारित है कि मानवीय आचरण सामाजिक संरचनाओं द्वारा गहराई से संचालित होता है।',
            introduction: 'समाजशास्त्र का उद्भव 18वीं और 19वीं सदी के पश्चिमी यूरोप में दो महान क्रांतियों—1789 की फ्रांसीसी राजनीतिक क्रांति और औद्योगिक आर्थिक क्रांति—के फलस्वरूप उत्पन्न सामाजिक उथल-पुथल के बौद्धिक समाधान के रूप में हुआ, जिसे प्रबोधन काल (Enlightenment) ने वैचारिक शक्ति दी।',
            detailedExplanation: [
              'प्रबोधन काल (Enlightenment): इसने धार्मिक रूढ़िवादिता और दैवीय अधिकारों को नकारते हुए तर्क, विवेक और अनुभवजन्य अवलोकन को ज्ञान का आधार बनाया।',
              'फ्रांसीसी क्रांति (1789): इसने सामंती व्यवस्था को नष्ट कर स्वतंत्रता, समानता और बंधुत्व के मूल्यों को स्थापित किया, परंतु इसके बाद फैली सामाजिक अव्यवस्था ने विचारकों (सेंट-साइमन, आगस्ट कॉम्टे) को सामाजिक व्यवस्था के पुनर्निर्माण हेतु प्रेरित किया।',
              'औद्योगिक क्रांति: ग्रामीण कृषि से शहरी कारखानों में सामूहिक पलायन, गंदी बस्तियों का उभार, श्रमिक शोषण और संयुक्त परिवारों के विघटन ने गंभीर सामाजिक समस्याएं उत्पन्न कीं।',
              'आगस्ट कॉम्टे की भूमिका: कॉम्टे ने 1838 में "समाजशास्त्र" शब्द गढ़ा और प्रत्यक्षवाद (Positivism) के माध्यम से समाज की स्थिरता (Social Statics) और प्रगति (Social Dynamics) का वैज्ञानिक विश्लेषण किया।'
            ],
            keyFeatures: [
              'सामाजिक चिंतन का धर्मनिरपेक्षता एवं वैज्ञानिक आधार पर पुनर्गठन।',
              'प्राकृतिक विज्ञानों की पद्धति (प्रत्यक्षवाद) का मानवीय समाजों पर अनुप्रयोग।',
              'सामूहिक व्यवस्था, सामाजिक एकता और संरचनात्मक परिवर्तनों पर केंद्रीय ध्यान।'
            ],
            importantThinkers: [
              { name: 'आगस्ट कॉम्टे', contribution: 'समाजशास्त्र के जनक; मानव चिंतन के तीन स्तरों का नियम (धार्मिक, तात्विक, प्रत्यक्षवादी) प्रस्तुत किया।' },
              { name: 'सेंट साइमन', contribution: 'समाज के वैज्ञानिक अध्ययन (सामाजिक शरीर क्रिया विज्ञान) की वकालत की।' },
              { name: 'सी. राइट मिल्स', contribution: '"समाजशास्त्रीय कल्पना" (Sociological Imagination) की अवधारणा दी, जो व्यक्तिगत समस्याओं को सामाजिक मुद्दों से जोड़ती है।' }
            ],
            examples: [
              'भारत के महानगरों (दिल्ली, मुंबई, बेंगलुरु) में तीव्र औद्योगीकरण के कारण संयुक्त परिवारों का एकल परिवारों में टूटना और सामाजिक अलगाव।',
              'ग्रामीण श्रमिकों का महानगरों में अनौपचारिक गिग अर्थव्यवस्था (डिलीवरी/कैब) की ओर पलायन।'
            ],
            criticism: [
              'प्रारंभिक समाजशास्त्रीय सिद्धांत यूरो-केंद्रित (Eurocentric) थे और उन्होंने मान लिया कि सभी समाजों को पश्चिमी मार्ग पर ही चलना होगा।',
              'प्रत्यक्षवाद ने मानवीय भावनाओं और सांस्कृतिक प्रतीकों की अनदेखी की (मैक्स वेबर की आलोचना)।'
            ],
            contemporaryRelevance: 'एआई, सोशल मीडिया एल्गोरिदम और गिग इकॉनमी के इस नए युग में उपजे सामाजिक संकटों को समझने में समाजशास्त्रीय दृष्टि आज भी सर्वाधिक प्रासंगिक है।',
            examPerspective: 'यूपीएससी मुख्य परीक्षा: "समाजशास्त्र क्रांतियों के युग की संतान है।" समझाइए कि प्रबोधन काल और औद्योगिक क्रांति ने इस विषय के जन्म को कैसे आकार दिया।',
            quickRevisionPoints: [
              'दोहरी क्रांतियां: फ्रांसीसी क्रांति (1789) + औद्योगिक क्रांति।',
              '1838: आगस्ट कॉम्टे द्वारा "सोशियोलॉजी" शब्द की रचना।',
              'तीन स्तरों का नियम: धार्मिक -> तात्विक -> प्रत्यक्षवादी।',
              'सी. राइट मिल्स: समाजशास्त्रीय कल्पना इतिहास और जीवनी का मिलन है।',
              'प्रत्यक्षवाद: अनुभवजन्य और वैज्ञानिक विधियों द्वारा समाज का अध्ययन।'
            ],
            keywords: ['प्रबोधन काल', 'फ्रांसीसी क्रांति', 'औद्योगिक क्रांति', 'प्रत्यक्षवाद', 'समाजशास्त्रीय कल्पना', 'तीन स्तरों का नियम']
          },
          te: {
            definition: 'సమాజశాస్త్రం అనేది మానవ సామాజిక జీవితం, సమూహాలు మరియు సమాజాలను శాస్త్రీయంగా అధ్యయనం చేసే శాస్త్రం. వ్యక్తుల ప్రవర్తన వారు జీవించే సామాజిక నిర్మాణాల ద్వారా రూపొందించబడుతుందనే ప్రాతిపదికపై ఇది ఆధారపడి ఉంటుంది.',
            introduction: '18వ మరియు 19వ శతాబ్దపు పశ్చిమ ఐరోపాలో సంభవించిన "జంట విప్లవాలు" (ఫ్రెంచ్ విప్లవం & పారిశ్రామిక విప్లవం) మరియు జ్ఞానోదయ ఉద్యమం (Enlightenment) ఫలితంగా ఏర్పడిన అల్లకల్లోల పరిస్థితులకు పరిష్కారంగా సమాజశాస్త్రం ఆవిర్భవించింది.',
            detailedExplanation: [
              'జ్ఞానోదయ ఉద్యమం: మత విశ్వాసాలు మరియు రాజుల దైవాంశ సంభూతత్వాన్ని తిరస్కరించి, హేతువు మరియు పరిశీలన ద్వారా సామాజిక నియమాలను తెలుసుకోవచ్చని ప్రతిపాదించింది.',
              'ఫ్రెంచ్ విప్లవం (1789): భూస్వామ్య రాచరికాలను కూల్చి స్వేచ్ఛ, సమానత్వం, సౌభ్రాతృత్వాన్ని నినదించింది; అయితే దీనివల్ల ఏర్పడిన అనిశ్చితి క్రమశిక్షణతో కూడిన సామాజిక శాస్త్ర ఆవిర్భావానికి దారితీసింది.',
              'పారిశ్రామిక విప్లవం: వ్యవసాయ సమాజాల నుండి నగరాలకు వలసలు, పరిశ్రమల్లో శ్రామికుల దోపిడీ, మురికివాడలు మరియు సాంప్రదాయ ఉమ్మడి కుటుంబాల పతనం నూతన అధ్యయన ఆవశ్యకతను తెచ్చాయి.',
              'ఆగస్ట్ కామ్టే పాత్ర: 1838 లో ఆగస్ట్ కామ్టే "సమాజశాస్త్రం" (Sociology) అనే పదాన్ని కనిపెట్టి, ప్రత్యక్షతావాదం (Positivism) ద్వారా సామాజిక స్థిరత్వం (Statics) మరియు మార్పు (Dynamics) లను విశ్లేషించారు.'
            ],
            keyFeatures: [
              'సామాజిక ఆలోచనను మతపరమైన అంశాల నుంచి వేరుచేసి శాస్త్రీయ దృక్పథాన్ని కల్పించడం.',
              'భౌతిక శాస్త్రాల పద్ధతులను (ప్రత్యక్షతావాదం) సామాజిక పరిశీలనకు అన్వయించడం.',
              'సామాజిక ఐక్యత, క్రమబద్ధత మరియు నిర్మాణాత్మక మార్పులపై కేంద్రీకృత పరిశోధన.'
            ],
            importantThinkers: [
              { name: 'ఆగస్ట్ కామ్టే', contribution: 'సమాజశాస్త్ర పితామహుడు; మానవ ఆలోచనా పరిణామంలో మూడు దశల సిద్ధాంతాన్ని (మతపరమైన, తాత్విక, ప్రత్యక్షవాద) ప్రతిపాదించారు.' },
              { name: 'సెయింట్ సైమన్', contribution: 'పారిశ్రామిక సమాజాలను శాస్త్రీయంగా అధ్యయనం చేయడానికి సామాజిక శరీరధర్మ శాస్త్రం (Social Physiology) ను ప్రతిపాదించారు.' },
              { name: 'సి. రైట్ మిల్స్', contribution: '"సామాజిక ఆలోచనా దృక్పథం" (Sociological Imagination) ద్వారా వ్యక్తిగత సమస్యలను సామాజిక వ్యవస్థలతో అనుసంధానించారు.' }
            ],
            examples: [
              'హైదరాబాద్, బెంగళూరు వంటి మెట్రో నగరాల్లో వేగవంతమైన ఐటీ విస్తరణ వల్ల సాంప్రదాయ కుటుంబ వ్యవస్థలు న్యూక్లియర్ కుటుంబాలుగా మారడం.',
              'గ్రామీణ వ్యవసాయ రంగం నుంచి నగరాల గిగ్ ఆర్థిక వ్యవస్థ వైపు యువత వలసలు.'
            ],
            criticism: [
              'ప్రారంభ పాశ్చాత్య సమాజశాస్త్ర సిద్ధాంతాలు ఐరోపా కేంద్రీకృతంగా (Eurocentric) ఉండి, ఇతర ఆసియా, ఆఫ్రికా సమాజాల ప్రత్యేకతలను విస్మరించాయి.',
              'సంపూర్ణ గణాంక ఆధారిత ప్రత్యక్షవాదం మానవ మనస్తత్వాన్ని మరియు సాంస్కృతిక భావాలను విస్మరించింది.'
            ],
            contemporaryRelevance: 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్, సోషల్ మీడియా విభజనలు మరియు గిగ్ ఎకానమీ వంటి 21వ శతాబ్దపు కొత్త సవాళ్లను అర్థం చేసుకోవడానికి సమాజశాస్త్ర దృక్పథం తప్పనిసరి.',
            examPerspective: 'యూపీఎస్సీ మెయిన్స్ ప్రశ్న: "సమాజశాస్త్రం విప్లవాల యుగానికి బిడ్డ." జ్ఞానోదయ ఉద్యమం మరియు పారిశ్రామిక విప్లవాలు సమాజశాస్త్ర ఆవిర్భావానికి ఎలా దారితీశాయో విశ్లేషించండి.',
            quickRevisionPoints: [
              'జంట విప్లవాలు: ఫ్రెంచ్ విప్లవం (1789) + పారిశ్రామిక విప్లవం.',
              '1838: ఆగస్ట్ కామ్టే "సోషియాలజీ" పదాన్ని సృష్టించారు.',
              'మూడు దశల సిద్ధాంతం: మతపరమైన -> తాత్విక -> శాస్త్రీయ/ప్రత్యక్షవాద.',
              'సి. రైట్ మిల్స్: చరిత్ర మరియు వ్యక్తిగత జీవితాల అనుసంధానమే సామాజిక ఊహాశక్తి.',
              'ప్రత్యక్షతావాదం: ప్రయోగాల ఆధారంగా సమాజాన్ని పరిశీలించడం.'
            ],
            keywords: ['జ్ఞానోదయ ఉద్యమం', 'ఫ్రెంచ్ విప్లవం', 'పారిశ్రామిక విప్లవం', 'ప్రత్యక్షతావాదం', 'సామాజిక ఆలోచనా దృక్పథం', 'మూడు దశల సిద్ధాంతం']
          }
        }
      },
      {
        id: 'soc-u1-t2',
        slug: 'sociological-imagination-commonsense',
        unitId: 'soc-u1',
        subjectId: 'sociology',
        title: {
          en: 'Sociological Imagination vs Common Sense Knowledge',
          hi: 'समाजशास्त्रीय कल्पना बनाम सामान्य ज्ञान (Common Sense)',
          te: 'సామాజిక ఆలోచనా దృక్పథం vs సాధారణ లౌకిక జ్ఞానం'
        },
        summary: {
          en: 'Epistemological distinction between routine intuitive common sense and structured scientific sociological analysis (C. Wright Mills & Zygmunt Bauman).',
          hi: 'सहज ज्ञान (Common Sense) और वैज्ञानिक समाजशास्त्रीय विश्लेषण के मध्य ज्ञानमीमांसीय अंतर (सी. राइट मिल्स एवं ज़िग्मुंट बौमन)।',
          te: 'సాధారణ సహజ జ్ఞానం మరియు క్రమబద్ధమైన శాస్త్రీయ సమాజశాస్త్ర విశ్లేషణల మధ్య తాత్విక వ్యత్యాసం.'
        },
        readingTimeMinutes: 9,
        content: {
          en: {
            definition: 'The Sociological Imagination is a quality of mind that allows its possessor to understand the larger historical scene in terms of its meaning for the inner life and the external career of a variety of individuals (C. Wright Mills, 1959).',
            introduction: 'While common sense relies on unexamined everyday assumptions, tradition, and individualistic explanations, sociology deconstructs these assumptions through rigorous empirical evidence, comparative cross-cultural inquiry, and structural causation.',
            detailedExplanation: [
              'Personal Troubles vs Public Issues: Mills famously differentiated between personal troubles of milieu (e.g., one individual unemployed in a city of 100,000 is a personal character trouble) and public issues of social structure (e.g., 5 million people unemployed nationwide points to structural collapse of economic opportunities).',
              'Common Sense is Individualistic & Naturalistic: Common sense assumes poverty results from laziness or crime from innate evil; sociology reveals systemic inequalities, discrimination, and differential access to resources.',
              'Zygmunt Bauman’s Distinctions: Sociology operates through rigorous discourse, draws upon a broader field of comparison, makes sense of human action within social webs, and defamiliarizes the familiar (questioning what is taken for granted).'
            ],
            keyFeatures: [
              'Defamiliarization: Questioning everyday taken-for-granted beliefs.',
              'Structural contextualization of individual life trajectories.',
              'Empirical verification vs anecdotal assertions.'
            ],
            importantThinkers: [
              { name: 'C. Wright Mills', contribution: 'Author of "The Sociological Imagination" (1959); conceptualized biography, history, and social structure.' },
              { name: 'Zygmunt Bauman', contribution: 'Articulated four major boundary markers separating sociological knowledge from common sense.' },
              { name: 'Peter Berger', contribution: 'Described the first wisdom of sociology as: "things are not what they seem".' }
            ],
            examples: [
              'Suicide: Common sense views it as a purely psychological private act; Emile Durkheim demonstrated it is driven by levels of social integration and moral regulation.',
              'Divorce: Common sense views it as marital incompatibility; sociology analyzes shifting gender roles, economic independence of women, and secularization.'
            ],
            criticism: [
              'Sociologists risk creating an esoteric, jargon-laden ivory tower that alienates ordinary citizens from civic discourse.',
              'Extreme structural determinism can ignore personal agency, willpower, and individual moral accountability.'
            ],
            contemporaryRelevance: 'In an era rife with social media misinformation and sensationalized echo chambers, sociological imagination trains citizens to critically interrogate structural roots of polarization.',
            examPerspective: 'Direct UPSC Mains Question: "Common sense knowledge is culturally bound and unreflective, while sociological knowledge is self-reflective and critical." Discuss.',
            quickRevisionPoints: [
              'C. Wright Mills (1959): Troubles (personal) vs Issues (structural).',
              'Peter Berger: "Things are not what they seem" - looking behind facade.',
              'Common sense: Anecdotal, individualistic, naturalizing.',
              'Sociology: Comparative, contextual, structural, self-correcting.'
            ],
            keywords: ['Sociological Imagination', 'Personal Troubles vs Public Issues', 'Common Sense', 'Defamiliarization', 'Structural Causation', 'Peter Berger']
          },
          hi: {
            definition: 'समाजशास्त्रीय कल्पना (Sociological Imagination) मस्तिष्क की वह क्षमता है जो व्यक्ति को इतिहास और व्यक्तिगत जीवन-वृत्त (जीवनी) के अंतर्संबंधों को समझने में सक्षम बनाती है (सी. राइट मिल्स, 1959)।',
            introduction: 'सामान्य ज्ञान (Common Sense) हमारे दैनिक अनुभवों, परंपराओं और रूढ़ियों पर आधारित होता है, जबकि समाजशास्त्र इन मान्यताओं को वैज्ञानिक प्रमाण, वस्तुनिष्ठता और संरचनात्मक कारणों के आधार पर चुनौती देता है।',
            detailedExplanation: [
              'व्यक्तिगत कष्ट (Troubles) बनाम सार्वजनिक मुद्दे (Issues): यदि किसी शहर में एक व्यक्ति बेरोजगार है तो यह उसका व्यक्तिगत कष्ट है; परंतु जब देश में करोड़ों युवा बेरोजगार हों तो यह आर्थिक संरचना की विफलता का सार्वजनिक मुद्दा है।',
              'सामान्य ज्ञान व्यक्तिवादी और स्वाभाविक (Naturalistic) होता है: यह मानता है कि गरीबी आलस्य का परिणाम है; समाजशास्त्र दर्शाता है कि गरीबी अवसरों के अभाव और जाति/वर्ग असमानताओं का परिणाम है।',
              'ज़िग्मुंट बौमन के अनुसार: समाजशास्त्र सामान्य ज्ञान की सीमाओं को तोड़ता है, परिचित को अपरिचित बनाता है और व्यक्ति को सामाजिक ताने-बाने में रखकर देखता है।'
            ],
            keyFeatures: [
              'अपरिचितीकरण (Defamiliarization): जो सामान्य प्रतीत होता है उस पर गंभीर सवाल उठाना।',
              'व्यक्तिगत अनुभवों को वृहद सामाजिक व ऐतिहासिक संदर्भ में देखना।',
              'अनुभवजन्य प्रमाणों पर आधारित वस्तुनिष्ठ ज्ञान।'
            ],
            importantThinkers: [
              { name: 'सी. राइट मिल्स', contribution: '"द सोशियोलॉजिकल इमेजिनेशन" (1959) के लेखक; इतिहास और जीवनी के संगम पर बल दिया।' },
              { name: 'पीटर बर्जर', contribution: 'प्रसिद्ध कथन: "चीजें वैसी नहीं होतीं जैसी वे बाहर से दिखाई देती हैं।"' },
              { name: 'ज़िग्मुंट बौमन', contribution: 'समाजशास्त्र और सामान्य ज्ञान के मध्य 4 स्पष्ट सीमाओं का निरूपण किया।' }
            ],
            examples: [
              'आत्महत्या: सामान्य ज्ञान इसे मानसिक अवसाद का व्यक्तिगत कार्य मानता है; जबकि दुर्खीम ने सिद्ध किया कि यह सामाजिक एकजुटता और नियंत्रण की स्थिति से निर्धारित होता है।',
              'विवाह विच्छेद: सामान्य समझ इसे आपसी झगड़ा मानती है, जबकि समाजशास्त्र इसे महिला सशक्तिकरण और बदलते पारिवारिक मानदंडों से जोड़ता है।'
            ],
            criticism: [
              'अत्यधिक जटिल तकनीकी भाषा के कारण समाजशास्त्र आम जनमानस से दूर हो जाता है।',
              'संरचना पर अति-निर्भरता व्यक्ति के व्यक्तिगत उत्तरदायित्व और स्वतंत्र इच्छाशक्ति की उपेक्षा कर सकती है।'
            ],
            contemporaryRelevance: 'फेक न्यूज और सोशल मीडिया दुष्प्रचार के युग में समाजशास्त्रीय कल्पना नागरिकों को सतह के पीछे छिपे वास्तविक संरचनात्मक हितों को पहचानने का विवेक देती है।',
            examPerspective: 'मुख्य परीक्षा प्रश्न: "सामान्य ज्ञान संस्कृति-विशिष्ट एवं अचिंतित होता है, जबकि समाजशास्त्रीय ज्ञान आत्म-चिंतनशील एवं विश्लेषणात्मक है।" परीक्षण कीजिए।',
            quickRevisionPoints: [
              'सी. राइट मिल्स (1959): व्यक्तिगत कष्ट बनाम सार्वजनिक मुद्दे।',
              'पीटर बर्जर: सामाजिक यथार्थ के मुखौटों को उजागर करना।',
              'सामान्य ज्ञान: व्यक्ति-केंद्रित, सहज धारणा, व्यक्तिदोषी।',
              'समाजशास्त्र: संरचनात्मक, अनुभवजन्य, तुलनात्मक।'
            ],
            keywords: ['समाजशास्त्रीय कल्पना', 'व्यक्तिगत कष्ट बनाम सार्वजनिक मुद्दे', 'सामान्य ज्ञान', 'अपरिचितीकरण', 'पीटर बर्जर']
          },
          te: {
            definition: 'సామాజిక ఆలోచనా దృక్పథం (Sociological Imagination) అనేది ఒక వ్యక్తి తన వ్యక్తిగత జీవిత అనుభవాలను విస్తృత చారిత్రక మరియు సామాజిక పరిణామాలతో ముడిపెట్టి అర్థం చేసుకునే మానసిక సామర్థ్యం (సి. రైట్ మిల్స్, 1959).',
            introduction: 'సాధారణ లౌకిక జ్ఞానం (Common Sense) వ్యక్తుల రోజువారీ అభిప్రాయాలు, అపోహలపై ఆధారపడితే, సమాజశాస్త్రం ఆధారాలు, విమర్శనాత్మక పరిశీలన మరియు సామాజిక నిర్మాణాల ద్వారా వాస్తవాలను వెలికితీస్తుంది.',
            detailedExplanation: [
              'వ్యక్తిగత కష్టాలు (Personal Troubles) vs ప్రజా సమస్యలు (Public Issues): ఒక నగరంలో ఒక్కడికే ఉద్యోగం లేకపోతే అది అతని వ్యక్తిగత లోపం కావచ్చు; కానీ లక్షలాది మందికి ఉద్యోగాలు లేకపోతే అది దేశ ఆర్థిక నిర్మాణపు ప్రజా సమస్య.',
              'సాధారణ జ్ఞానం వ్యక్తిగతమైనది: పేదరికానికి కారణం బద్ధకం అని సాధారణ జ్ఞానం చెబితే; వనరుల అసమాన పంపిణీ మరియు వివక్షల వల్ల పేదరికం ఏర్పడుతుందని సమాజశాస్త్రం వివరిస్తుంది.',
              'జిగ్మంట్ బౌమన్ విశ్లేషణ: సమాజశాస్త్రం సుపరిచితమైన విషయాలను ప్రశ్నించి, వాటి వెనుక ఉన్న సామాజిక శక్తులను బట్టబయలు చేస్తుంది.'
            ],
            keyFeatures: [
              'సుపరిచిత విషయాల వెనుక దాగివున్న నిజాలను వెలికితీయడం.',
              'వ్యక్తిగత జీవితాన్ని సామాజిక వ్యవస్థల సమగ్ర చట్రంలో చూడటం.',
              'అనుభవపూర్వక పరిశోధన ద్వారా నిర్ణయాలు తీసుకోవడం.'
            ],
            importantThinkers: [
              { name: 'సి. రైట్ మిల్స్', contribution: '"ది సోషియోలాజికల్ ఇమాజినేషన్" (1959) గ్రంథకర్త; చరిత్రను మరియు జీవితాలను అనుసంధానించారు.' },
              { name: 'పీటర్ బెర్గర్', contribution: '"విషయాలు పైకి కనిపించినట్లు ఉండవు" అనే ప్రసిద్ధ వాక్యాన్ని ప్రతిపాదించారు.' },
              { name: 'జిగ్మంట్ బౌమన్', contribution: 'సాధారణ జ్ఞానానికి మరియు సమాజశాస్త్రానికి మధ్య 4 ప్రధాన వ్యత్యాసాలను నిరూపించారు.' }
            ],
            examples: [
              'ఆత్మహత్య: సాధారణ జ్ఞానం దీనిని మానసిక ఒత్తిడి అని కొట్టిపారేస్తే, ఎమిలే దుర్ఖీమ్ సామాజిక సమగ్రత లోపించడం వల్లే ఆత్మహత్యలు జరుగుతాయని రుజువు చేశారు.',
              'విడాకులు: దాంపత్య కలహాలు కాకుండా, స్త్రీల ఆర్థిక స్వాతంత్ర్యం మరియు మారిన సామాజిక విలువల కోణంలో సమాజశాస్త్రం విశ్లేషిస్తుంది.'
            ],
            criticism: [
              'క్లిష్టమైన సిద్ధాంత పదజాలం వల్ల సమాజశాస్త్రం సామాన్య ప్రజలకు దూరం అవుతుందనే విమర్శ.',
              'వ్యక్తుల వ్యక్తిగత నైతిక బాధ్యతను తగ్గించి కేవలం వ్యవస్థలపై నిందలు వేయడం సరికాదని కొందరు భావిస్తారు.'
            ],
            contemporaryRelevance: 'నేటి సోషల్ మీడియా తప్పుడు సమాచారం మరియు ద్వేషపూరిత ప్రచారాల వెనుక ఉన్న వాస్తవాలను వివేచనతో గ్రహించడానికి సామాజిక ఊహాశక్తి ఎంతో అవసరం.',
            examPerspective: 'యూపీఎస్సీ మెయిన్స్ ప్రశ్న: "సాధారణ జ్ఞానం సంస్కృతికి పరిమితమై ఉంటుంది, సమాజశాస్త్ర జ్ఞానం స్వీయ పరిశీలనాత్మకమైనది." చర్చించండి.',
            quickRevisionPoints: [
              'సి. రైట్ మిల్స్ (1959): వ్యక్తిగత బాధలు vs సామాజిక సమస్యలు.',
              'పీటర్ బెర్గర్: సమాజపు ముసుగులను ఛేదించడం.',
              'సాధారణ జ్ఞానం: వ్యక్తులను నిందించే పద్ధతి, సాంప్రదాయక భావనలు.',
              'సమాజశాస్త్రం: నిర్మాణాత్మక హేతువులు, శాస్త్రీయ పద్ధతులు.'
            ],
            keywords: ['సామాజిక ఆలోచనా దృక్పథం', 'వ్యక్తిగత కష్టాలు vs ప్రజా సమస్యలు', 'సాధారణ జ్ఞానం', 'పీటర్ బెర్గర్', 'ఎమిలే దుర్ఖీమ్']
          }
        }
      }
    ]
  }
];

// Add the remaining 8 core units for Sociology curriculum architecture
export const ALL_SOCIOLOGY_UNITS: Unit[] = [
  ...SOCIOLOGY_UNITS,
  {
    id: 'soc-u2',
    number: 2,
    slug: 'sociological-thinkers',
    subjectId: 'sociology',
    title: {
      en: 'Pioneering Sociological Thinkers',
      hi: 'प्रमुख समाजशास्त्रीय विचारक',
      te: 'ప్రముఖ సామాజిక సిద్ధాంతకర్తలు'
    },
    description: {
      en: 'Karl Marx (Historical Materialism, Alienation, Class Struggle), Emile Durkheim (Social Facts, Suicide, Division of Labour, Religion), Max Weber (Social Action, Protestant Ethic, Ideal Types), Talcott Parsons (Social System, AGIL), Robert K. Merton (Latent/Manifest Functions, Reference Groups).',
      hi: 'कार्ल मार्क्स (ऐतिहासिक भौतिकवाद, अलगाव, वर्ग संघर्ष), दुर्खीम (सामाजिक तथ्य, आत्महत्या, श्रम विभाजन), मैक्स वेबर (सामाजिक क्रिया, प्रोटेस्टेंट आचार), पार्सन्स (AGIL मॉडल), मर्टन (प्रकट एवं अप्रकट प्रकार्य)।',
      te: 'కార్ల్ మార్క్స్ (చారిత్రక భౌతికవాదం, పరాయీకరణ, వర్గ పోరాటం), ఎమిలే దుర్ఖీమ్ (సామాజిక వాస్తవాలు, ఆత్మహత్య, శ్రమ విభజన), మాక్స్ వెబర్ (సామాజిక చర్య, ప్రొటెస్టంట్ నైతికత), పార్సన్స్ (AGIL నమూనా), మెర్టన్.'
    },
    topics: []
  },
  {
    id: 'soc-u3',
    number: 3,
    slug: 'core-sociological-concepts',
    subjectId: 'sociology',
    title: {
      en: 'Core Sociological Concepts & Social Structure',
      hi: 'मूल समाजशास्त्रीय अवधारणाएं एवं सामाजिक संरचना',
      te: 'ప్రాథమిక సామాజిక భావనలు & సామాజిక నిర్మాణం'
    },
    description: {
      en: 'Society, Community, Association, Institutions, Culture (Cultural Lag - Ogburn), Socialization (Cooley’s Looking Glass Self, Mead’s I and Me), Social Control, Status & Role.',
      hi: 'समाज, समुदाय, संघ, संस्थाएं, संस्कृति (सांस्कृतिक पिछड़ापन - ऑगबर्न), समाजीकरण (कूले का आत्म-दर्पण, मीड का स्व), सामाजिक नियंत्रण, प्रस्थिति एवं भूमिका।',
      te: 'సమాజం, కమ్యూనిటీ, సంఘం, సంస్థలు, సంస్కృతి (కల్చరల్ లాగ్), సాంఘికీకరణ (కూలీ అద్దపు భావన, మీడ్ సిద్ధాంతం), సామాజిక నియంత్రణ, హోదా & పాత్ర.'
    },
    topics: []
  },
  {
    id: 'soc-u4',
    number: 4,
    slug: 'research-methodology',
    subjectId: 'sociology',
    title: {
      en: 'Research Methods & Methodology in Social Sciences',
      hi: 'सामाजिक विज्ञान में अनुसंधान पद्धतियां एवं प्रविधियां',
      te: 'సామాజిక పరిశోధనా పద్ధతులు & శాస్త్ర విధానాలు'
    },
    description: {
      en: 'Scientific Method, Positivism vs Interpretivism, Quantitative vs Qualitative Methods, Sampling, Observation, Questionnaire & Interview, Triangulation, Reflexivity.',
      hi: 'वैज्ञानिक पद्धति, प्रत्यक्षवाद बनाम व्याख्यात्मकता, मात्रात्मक एवं गुणात्मक विधियां, प्रतिचयन (Sampling), अवलोकन, प्रश्नावली एवं साक्षात्कार, त्रिकोणीकरण।',
      te: 'శాస్త్రీయ పద్ధతి, ప్రత్యక్షతావాదం vs వివరణాత్మక దృక్పథం, పరిమాణాత్మక & గుణాత్మక పద్ధతులు, నమూనా సేకరణ (శాంప్లింగ్), పరిశీలన, ప్రశ్నావళి & ఇంటర్వ్యూ.'
    },
    topics: []
  },
  {
    id: 'soc-u5',
    number: 5,
    slug: 'social-stratification',
    subjectId: 'sociology',
    title: {
      en: 'Social Stratification & Hierarchy',
      hi: 'सामाजिक स्तरीकरण एवं पदानुक्रम',
      te: 'సామాజిక స్తరీకరణ & క్రమానుగత అసమానతలు'
    },
    description: {
      en: 'Concepts of Hierarchy & Difference, Theories of Stratification (Marx, Weber, Davis & Moore Functional Theory), Caste, Class, Gender, Ethnicity & Race, Social Mobility.',
      hi: 'स्तरीकरण के सिद्धांत (मार्क्स, वेबर, डेविस व मूर का प्रकार्यात्मक सिद्धांत), जाति, वर्ग, लिंग, नृजातीयता, सामाजिक गतिशीलता।',
      te: 'స్తరీకరణ సిద్ధాంతాలు (మార్క్స్, వెబర్, డేవిస్ & మూర్ ప్రయోజనవాదం), కులం, వర్గం, లింగ వివక్ష, జాతి అసమానతలు, సామాజిక గతిశీలత.'
    },
    topics: []
  },
  {
    id: 'soc-u6',
    number: 6,
    slug: 'social-institutions',
    subjectId: 'sociology',
    title: {
      en: 'Social Institutions: Family, Marriage, Kinship & Religion',
      hi: 'सामाजिक संस्थाएं: परिवार, विवाह, नातेदारी एवं धर्म',
      te: 'సామాజిక వ్యవస్థలు: కుటుంబం, వివాహం, బంధుత్వం & మతం'
    },
    description: {
      en: 'Types of Family & Changing Dynamics, Marriage Rules (Endogamy/Exogamy), Kinship Systems, Sociology of Religion (Durkheim, Weber, Secularization thesis).',
      hi: 'परिवार के प्रकार एवं बदलते प्रतिमान, विवाह के नियम, नातेदारी प्रणालियां, धर्म का समाजशास्त्र (दुर्खीम, वेबर, धर्मनिरपेक्षीकरण)।',
      te: 'కుటుంబ రకాలు & ఆధునిక మార్పులు, వివాహ నిబంధనలు, బంధుత్వ వ్యవస్థలు, మత సమాజశాస్త్రం (దుర్ఖీమ్, వెబర్, లౌకికవాదం).'
    },
    topics: []
  },
  {
    id: 'soc-u7',
    number: 7,
    slug: 'social-change-modernization',
    subjectId: 'sociology',
    title: {
      en: 'Social Change, Development & Modernization',
      hi: 'सामाजिक परिवर्तन, विकास एवं आधुनिकीकरण',
      te: 'సామాజిక మార్పు, అభివృద్ధి & ఆధునికీకరణ'
    },
    description: {
      en: 'Theories of Social Change (Evolutionary, Cyclical - Spengler/Toynbee, Conflict - Marx), Modernization, Globalization, Sanskritization & Westernization (M.N. Srinivas).',
      hi: 'सामाजिक परिवर्तन के सिद्धांत (उद्विकासवादी, चक्रीय, संघर्ष), आधुनिकीकरण, वैश्वीकरण, संस्कृतीकरण एवं पश्चिमीकरण (एम.एन. श्रीनिवास)।',
      te: 'సామాజిక మార్పు సిద్ధాంతాలు (పరిణామ క్రమం, చక్రీయ సిద్ధాంతం, సంఘర్షణ వాదం), ఆధునికీకరణ, ప్రపంచీకరణ, సంస్కృతీకరణ (ఎం.ఎన్. శ్రీనివాస్).'
    },
    topics: []
  },
  {
    id: 'soc-u8',
    number: 8,
    slug: 'indian-society-structure',
    subjectId: 'sociology',
    title: {
      en: 'Indian Society: Structure, Diversity & Dynamic Tensions',
      hi: 'भारतीय समाज: संरचना, विविधता एवं गतिशीलता',
      te: 'భారతీయ సమాజం: నిర్మాణం, వైవిధ్యం & డైనమిక్ సవాళ్లు'
    },
    description: {
      en: 'Unity in Diversity, Colonial Impact on Indian Society, Caste System (Varna vs Jati, Louis Dumont Homo Hierarchicus), Tribal Communities, Rural & Agrarian Structure.',
      hi: 'विविधता में एकता, भारतीय समाज पर औपनिवेशिक प्रभाव, जाति व्यवस्था (वर्ण बनाम जाति, लुई ड्यूमॉ), जनजातीय समुदाय, ग्रामीण एवं कृषक संरचना।',
      te: 'భిన్నత్వంలో ఏకత్వం, భారత సమాజంపై వలసపాలన ప్రభావం, కుల వ్యవస్థ (వర్ణ vs జాతి, లూయిస్ డుమాంట్), గిరిజన తెగలు, గ్రామీణ & వ్యవసాయ నిర్మాణం.'
    },
    topics: []
  },
  {
    id: 'soc-u9',
    number: 9,
    slug: 'social-movements',
    subjectId: 'sociology',
    title: {
      en: 'Social Movements in India: Historical & Contemporary',
      hi: 'भारत में सामाजिक आंदोलन: ऐतिहासिक एवं समकालीन',
      te: 'భారతదేశంలో సామాజిక ఉద్యమాలు: చారిత్రక & సమకాలీన'
    },
    description: {
      en: 'Peasant Movements (Tebhaga, Telangana, Naxalbari), Dalit Mobilization (B.R. Ambedkar, Neo-Buddhism), Women’s Movements, Environmental Movements (Chipko, Narmada Bachao).',
      hi: 'कृषक आंदोलन (तेभागा, तेलंगाना, नक्सलबाड़ी), दलित आंदोलन (अंबेडकर, नव-बौद्ध धर्म), महिला आंदोलन, पर्यावरण आंदोलन (चिपको, नर्मदा बचाओ)।',
      te: 'రైతు ఉద్యమాలు (తెభాగా, తెలంగాణ సాయుధ పోరాటం), దళిత ఉద్యమం (బి.ఆర్. అంబేద్కర్), మహిళా ఉద్యమాలు, పర్యావరణ ఉద్యమాలు (చిప్కో, నర్మదా బచావో).'
    },
    topics: []
  },
  {
    id: 'soc-u10',
    number: 10,
    slug: 'contemporary-social-issues',
    subjectId: 'sociology',
    title: {
      en: 'Contemporary Social Issues: Digital Age & Global Transformations',
      hi: 'समकालीन सामाजिक मुद्दे: डिजिटल युग एवं वैश्विक परिवर्तन',
      te: 'సమకాలీన సామాజిక సమస్యలు: డిజిటల్ యుగం & సవాళ్లు'
    },
    description: {
      en: 'Digital Divide & Platform Society, Changing Family & Elder Care, Mental Health & Youth Alienation, Regional Disparities, Communalism & Secularism Debates.',
      hi: 'डिजिटल विभाजन, बदलते पारिवारिक संबंध एवं वृद्धों की देखभाल, मानसिक स्वास्थ्य एवं युवा असंतोष, क्षेत्रवाद, सांप्रदायिकता बनाम धर्मनिरपेक्षता।',
      te: 'డిజిటల్ అసమానతలు, మారుతున్న కుటుంబాలు & వృద్ధుల సంరక్షణ, యువత మానసిక ఒత్తిళ్లు, ప్రాంతీయ అసమానతలు, మతతత్వం vs లౌకికవాదం.'
    },
    topics: []
  }
];
