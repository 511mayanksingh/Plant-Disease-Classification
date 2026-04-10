// Comprehensive disease database with detailed information
export const diseaseDatabase = {
  'Pepper bell  Bacterial spot': {
    name: 'Pepper Bell - Bacterial Spot',
    scientificName: 'Xanthomonas campestris',
    severity: 'Moderate to Severe',
    category: 'Bacterial Disease',
    icon: '🌶️',

    description: 'Bacterial spot is one of the most devastating diseases of peppers in warm, humid climates. It can cause severe defoliation and fruit spotting, leading to significant yield losses.',

    symptoms: [
      'Small, dark brown or black spots on leaves, typically with a yellow halo',
      'Raised, rough lesions on fruit surfaces',
      'Leaf spots may merge, causing leaves to turn yellow and drop',
      'Fruit spots are slightly raised and have a white halo',
      'Severe defoliation in advanced stages',
      'Reduced fruit quality and marketability'
    ],

    causes: [
      'Warm temperatures (75-86°F / 24-30°C)',
      'High humidity and leaf wetness',
      'Overhead irrigation or rain splash',
      'Contaminated seeds or transplants',
      'Poor air circulation',
      'Presence of wounds or insect damage'
    ],

    treatment: [
      'Apply copper-based bactericides at first sign of disease',
      'Use fixed copper sprays (copper hydroxide or copper sulfate)',
      'Combine copper with mancozeb for better protection',
      'Apply treatments every 7-10 days during wet weather',
      'Remove and destroy severely infected plants',
      'Avoid working with plants when foliage is wet'
    ],

    prevention: [
      'Use certified disease-free seeds and transplants',
      'Practice crop rotation (minimum 2-3 years)',
      'Plant resistant or tolerant varieties when available',
      'Use drip irrigation instead of overhead watering',
      'Ensure proper plant spacing for air circulation',
      'Stake plants to keep foliage off the ground',
      'Disinfect tools and equipment regularly',
      'Remove plant debris at end of season'
    ],

    organicTreatment: [
      'Copper-based organic fungicides',
      'Neem oil applications',
      'Biological control with Bacillus subtilis',
      'Serenade (Bacillus subtilis) organic bactericide',
      'Regular removal of infected plant parts'
    ],

    impact: {
      yield: '20-50% yield loss possible',
      quality: 'Fruit quality significantly reduced',
      marketability: 'Spotted fruits are unmarketable'
    }
  },

  'Pepper bell  healthy': {
    name: 'Pepper Bell - Healthy',
    scientificName: 'Capsicum annuum',
    severity: 'None',
    category: 'Healthy Plant',
    icon: '✅',

    description: 'Your bell pepper plant appears healthy with no signs of disease. Continue with proper care and preventive practices to maintain plant health.',

    symptoms: [
      'Vibrant green, uniform foliage',
      'No spots, lesions, or discoloration',
      'Strong, upright growth',
      'Normal fruit development',
      'No wilting or drooping',
      'Healthy root system'
    ],

    causes: [
      'Proper cultural practices',
      'Adequate nutrition and watering',
      'Good disease prevention measures',
      'Optimal growing conditions',
      'Healthy soil microbiome'
    ],

    treatment: [
      'No treatment necessary - plant is healthy!',
      'Continue regular monitoring',
      'Maintain current care practices'
    ],

    prevention: [
      'Continue consistent watering schedule',
      'Maintain balanced fertilization (NPK)',
      'Ensure 6-8 hours of sunlight daily',
      'Monitor regularly for early disease signs',
      'Practice good garden hygiene',
      'Maintain proper spacing between plants',
      'Use mulch to regulate soil moisture',
      'Rotate crops annually'
    ],

    organicTreatment: [
      'Compost tea applications for plant vigor',
      'Foliar feeding with seaweed extract',
      'Beneficial microorganism inoculants',
      'Companion planting with basil or marigolds'
    ],

    impact: {
      yield: 'Expected normal yield',
      quality: 'High-quality fruit production',
      marketability: 'Excellent market value'
    }
  },

  'Potato   Early blight': {
    name: 'Potato - Early Blight',
    scientificName: 'Alternaria solani',
    severity: 'Moderate',
    category: 'Fungal Disease',
    icon: '🥔',

    description: 'Early blight is a common fungal disease of potatoes caused by Alternaria solani. It typically appears mid to late season and can cause significant defoliation if left untreated.',

    symptoms: [
      'Dark brown spots with concentric rings (target-like pattern)',
      'Spots first appear on lower, older leaves',
      'Lesions may have a yellow halo around them',
      'Severely affected leaves turn yellow and drop',
      'Lesions on stems appear as elongated spots',
      'Tuber infections show dark, sunken lesions',
      'Progressive defoliation from bottom to top'
    ],

    causes: [
      'Warm temperatures (75-85°F / 24-29°C)',
      'High humidity and frequent rain',
      'Extended leaf wetness periods',
      'Weakened or stressed plants',
      'Poor nutrition (especially nitrogen deficiency)',
      'Previous crop debris in soil'
    ],

    treatment: [
      'Apply chlorothalonil-based fungicides',
      'Use mancozeb or maneb at 7-10 day intervals',
      'Alternate fungicide classes to prevent resistance',
      'Apply azoxystrobin for systemic protection',
      'Remove and destroy infected lower leaves',
      'Improve air circulation around plants',
      'Ensure adequate plant nutrition'
    ],

    prevention: [
      'Plant certified disease-free seed potatoes',
      'Use resistant varieties (e.g., Jacqueline Lee, Allegany)',
      'Practice 2-3 year crop rotation',
      'Hill soil around plants to protect tubers',
      'Avoid overhead irrigation; use drip systems',
      'Space plants adequately for air flow',
      'Remove volunteer potato plants',
      'Destroy crop debris after harvest',
      'Apply preventive fungicides before disease appears'
    ],

    organicTreatment: [
      'Copper-based fungicides (approved for organic)',
      'Bacillus subtilis biological fungicide',
      'Sulfur-based products',
      'Neem oil applications weekly',
      'Baking soda spray (1 tbsp per gallon water)',
      'Compost tea for plant immunity'
    ],

    impact: {
      yield: '20-30% yield reduction if severe',
      quality: 'Tuber quality may be affected',
      marketability: 'Reduced foliage affects tuber size'
    }
  },

  'Potato   Late blight': {
    name: 'Potato - Late Blight',
    scientificName: 'Phytophthora infestans',
    severity: 'Severe - Critical',
    category: 'Oomycete Disease',
    icon: '🥔',

    description: 'Late blight is the most destructive disease of potatoes worldwide. It caused the Irish Potato Famine and can destroy entire crops within days under favorable conditions. Immediate action is critical.',

    symptoms: [
      'Water-soaked, dark green to black lesions on leaves',
      'White, fuzzy fungal growth on leaf undersides (during humid conditions)',
      'Rapid spread from leaf to leaf and plant to plant',
      'Dark, firm rot on tubers, often with reddish-brown discoloration',
      'Entire plants can collapse within 7-14 days',
      'Distinct musty odor from infected plants',
      'Brown streaks on stems and petioles'
    ],

    causes: [
      'Cool, moist weather (50-70°F / 10-21°C)',
      'High humidity (above 90%)',
      'Extended periods of leaf wetness',
      'Frequent rain or heavy dew',
      'Infected seed tubers or volunteer plants',
      'Wind-borne spores from neighboring fields',
      'Poor drainage'
    ],

    treatment: [
      '⚠️ URGENT: Apply fungicides immediately upon detection',
      'Use systemic fungicides (metalaxyl, mefenoxam)',
      'Apply protectant fungicides (chlorothalonil, mancozeb)',
      'Tank-mix systemic + protectant for best results',
      'Spray every 5-7 days during outbreak',
      'Remove and destroy infected plants immediately',
      'Bag infected material before removal to prevent spore spread',
      'Do NOT compost infected material'
    ],

    prevention: [
      'Plant certified late blight-free seed potatoes',
      'Use resistant varieties (Defender, Elba, Jacqueline Lee)',
      'Apply preventive fungicides before disease appears',
      'Monitor local late blight alerts and forecasting systems',
      'Eliminate volunteer potato and tomato plants',
      'Ensure excellent drainage',
      'Hill soil high to protect tubers from spores',
      'Harvest in dry weather',
      'Kill vines 2-3 weeks before harvest',
      'Do not irrigate late in the day'
    ],

    organicTreatment: [
      'Copper-based fungicides (limited effectiveness)',
      'Preventive applications of Regalia (plant extract)',
      'Remove infected plants immediately',
      'Focus on resistant varieties and prevention',
      'Note: Organic treatments are less effective than conventional',
      'Consider conventional treatment for severe outbreaks'
    ],

    impact: {
      yield: '50-100% crop loss possible within days',
      quality: 'Total crop destruction if untreated',
      marketability: 'Complete loss of marketable yield'
    }
  },

  'Potato   healthy': {
    name: 'Potato - Healthy',
    scientificName: 'Solanum tuberosum',
    severity: 'None',
    category: 'Healthy Plant',
    icon: '✅',

    description: 'Your potato plant is healthy and disease-free. Maintain good agricultural practices to ensure continued health and optimal tuber production.',

    symptoms: [
      'Dark green, vigorous foliage',
      'No leaf spots, lesions, or discoloration',
      'Strong stem structure',
      'Normal flowering (if present)',
      'Healthy growth rate',
      'No wilting or yellowing'
    ],

    causes: [
      'Optimal growing conditions',
      'Proper cultural practices',
      'Good soil health and drainage',
      'Adequate nutrition',
      'Disease prevention measures in place'
    ],

    treatment: [
      'No treatment needed - maintain current practices',
      'Continue monitoring weekly for disease signs',
      'Keep detailed records of care routine'
    ],

    prevention: [
      'Continue regular watering (1-2 inches per week)',
      'Maintain hilling to protect developing tubers',
      'Apply balanced fertilizer (10-10-10 NPK)',
      'Scout plants weekly for early disease detection',
      'Practice crop rotation (3-4 year cycle)',
      'Use certified seed potatoes',
      'Maintain good weed control',
      'Ensure proper spacing (12-15 inches)',
      'Monitor for Colorado potato beetles and other pests'
    ],

    organicTreatment: [
      'Compost applications for soil health',
      'Mulching with straw to conserve moisture',
      'Companion planting with horseradish or flax',
      'Foliar sprays with seaweed extract',
      'Beneficial insect habitat maintenance'
    ],

    impact: {
      yield: 'Expected 10-20 tubers per plant',
      quality: 'Premium quality tubers',
      marketability: 'Excellent commercial value'
    }
  },

  'Tomato Bacterial spot': {
    name: 'Tomato - Bacterial Spot',
    scientificName: 'Xanthomonas spp.',
    severity: 'Moderate to Severe',
    category: 'Bacterial Disease',
    icon: '🍅',

    description: 'Bacterial spot is a serious disease of tomatoes that can cause extensive defoliation and fruit damage, particularly in warm, wet conditions. Multiple Xanthomonas species can cause this disease.',

    symptoms: [
      'Small, dark brown to black spots on leaves (1-3mm)',
      'Spots may have yellow halos',
      'Greasy or water-soaked appearance when young',
      'Raised, corky lesions on fruits',
      'Severe defoliation in advanced infections',
      'Fruit spots reduce marketability',
      'Lower leaves affected first'
    ],

    causes: [
      'Warm temperatures (75-86°F / 24-30°C)',
      'High humidity and rainfall',
      'Overhead irrigation',
      'Contaminated seeds or transplants',
      'Splashing water spreading bacteria',
      'Wounds from insects or mechanical damage'
    ],

    treatment: [
      'Apply copper-based bactericides',
      'Use copper + mancozeb combinations',
      'Spray every 7-10 days during wet periods',
      'Remove severely infected plants',
      'Prune affected lower branches',
      'Avoid handling wet plants',
      'Improve air circulation'
    ],

    prevention: [
      'Use certified disease-free seeds and transplants',
      'Treat seeds with hot water or bleach',
      'Plant resistant varieties (BHN 602, Mountain Merit)',
      'Practice 2-3 year crop rotation',
      'Use drip irrigation instead of sprinklers',
      'Stake and prune for air circulation',
      'Mulch to prevent soil splash',
      'Disinfect tools between plants',
      'Remove crop debris at season end'
    ],

    organicTreatment: [
      'Fixed copper sprays (OMRI approved)',
      'Bacillus subtilis biological control',
      'Acibenzolar-S-methyl for induced resistance',
      'Regular scouting and sanitation',
      'Prompt removal of infected tissue'
    ],

    impact: {
      yield: '10-50% yield loss depending on severity',
      quality: 'Fruit quality significantly reduced',
      marketability: 'Spotted fruits unmarketable'
    }
  },

  'Tomato Early blight': {
    name: 'Tomato - Early Blight',
    scientificName: 'Alternaria solani',
    severity: 'Moderate',
    category: 'Fungal Disease',
    icon: '🍅',

    description: 'Early blight is one of the most common tomato diseases. While not usually fatal, it can reduce yields significantly through defoliation and reduce fruit quality through direct fruit infections.',

    symptoms: [
      'Circular brown spots with concentric rings (bulls-eye pattern)',
      'Spots first appear on older, lower leaves',
      'Yellow halo surrounding the spots',
      'Infected leaves turn yellow and drop',
      'Sunken lesions on fruits near stem end',
      'Progressive upward movement of disease',
      'Stem lesions appear as dark, girdling cankers'
    ],

    causes: [
      'Warm temperatures (75-85°F / 24-29°C)',
      'High humidity',
      'Prolonged leaf wetness',
      'Stressed or weakened plants',
      'Nitrogen deficiency',
      'Overhead watering',
      'Crop debris from previous season'
    ],

    treatment: [
      'Apply chlorothalonil fungicide at first symptoms',
      'Use mancozeb or copper-based products',
      'Apply fungicides every 7-10 days',
      'Remove infected lower leaves',
      'Improve air circulation through pruning',
      'Mulch around plants',
      'Avoid wetting foliage when watering'
    ],

    prevention: [
      'Use disease-resistant varieties (Mountain Fresh Plus, Plum Regal)',
      'Practice crop rotation (3-4 years)',
      'Stake and prune plants for airflow',
      'Use drip or soaker hose irrigation',
      'Apply mulch to prevent soil splash',
      'Maintain adequate plant spacing (24-36 inches)',
      'Remove lower leaves that touch soil',
      'Clean up all plant debris at season end',
      'Start preventive fungicide program early'
    ],

    organicTreatment: [
      'Copper fungicides (Bordeaux mixture)',
      'Sulfur-based products',
      'Bacillus subtilis sprays',
      'Neem oil applications',
      'Baking soda spray (4 tsp per gallon)',
      'Regular pruning of infected leaves',
      'Compost tea for plant health'
    ],

    impact: {
      yield: '15-30% yield reduction typical',
      quality: 'Fruit sunscald from defoliation',
      marketability: 'Reduced fruit size and quality'
    }
  },

  'Tomato Late blight': {
    name: 'Tomato - Late Blight',
    scientificName: 'Phytophthora infestans',
    severity: 'Severe - Critical',
    category: 'Oomycete Disease',
    icon: '🍅',

    description: 'Late blight is the most destructive disease of tomatoes. The same pathogen that caused the Irish Potato Famine can destroy entire tomato crops within 1-2 weeks under favorable conditions. This is a CRITICAL disease requiring immediate action.',

    symptoms: [
      'Large, irregular, greasy-looking dark spots on leaves',
      'White, fuzzy growth on leaf undersides (humid weather)',
      'Rapid collapse of affected plant parts',
      'Dark, firm, greasy-appearing lesions on fruits',
      'Entire plant can be destroyed in 7-14 days',
      'Unpleasant odor from infected tissue',
      'Brown streaking on stems'
    ],

    causes: [
      'Cool, wet weather (50-70°F / 10-21°C)',
      'Relative humidity above 90%',
      'Extended leaf wetness (10+ hours)',
      'Frequent rain or overhead irrigation',
      'Infected plants or tubers nearby',
      'Wind-borne spores',
      'Poor air circulation'
    ],

    treatment: [
      '🚨 CRITICAL: Act immediately - hours matter!',
      'Apply systemic fungicides (Revus, Ranman, Forum)',
      'Tank-mix with protectant (chlorothalonil, mancozeb)',
      'Spray every 5 days during outbreak',
      'Remove and bag infected plants immediately',
      'Do NOT compost - destroy by burning or deep burial',
      'Disinfect tools after each plant',
      'Consider destroying entire crop if >50% infected'
    ],

    prevention: [
      'Scout plants daily during favorable weather',
      'Use late blight resistant varieties (Mountain Magic, Defiant)',
      'Apply preventive fungicides before disease arrives',
      'Monitor USAblight.org for local outbreaks',
      'Eliminate nearby potato and tomato volunteers',
      'Ensure excellent air circulation',
      'Use drip irrigation only',
      'Space plants generously (36-48 inches)',
      'Grow in well-drained locations',
      'Consider hoop houses or high tunnels'
    ],

    organicTreatment: [
      'Copper fungicides (moderate effectiveness only)',
      'Regalia biofungicide for prevention',
      'Act fast - remove infected plants immediately',
      'Focus on resistant varieties',
      'Consider conventional fungicides for severe cases',
      'Note: Organic control is very difficult once established'
    ],

    impact: {
      yield: '70-100% crop loss in days without treatment',
      quality: 'Complete crop destruction possible',
      marketability: 'Total loss of marketable fruit'
    }
  },

  'Tomato Leaf Mold': {
    name: 'Tomato - Leaf Mold',
    scientificName: 'Passalora fulva (formerly Cladosporium fulvum)',
    severity: 'Moderate',
    category: 'Fungal Disease',
    icon: '🍅',

    description: 'Leaf mold is primarily a greenhouse disease but can occur in outdoor tomatoes in humid climates. It rarely causes major crop losses but can reduce yields through defoliation.',

    symptoms: [
      'Yellow spots on upper leaf surfaces',
      'Olive-green to brown velvety growth on leaf undersides',
      'Older leaves affected first',
      'Leaves curl and turn brown before dropping',
      'Rarely affects fruits directly',
      'Symptoms worsen in high humidity',
      'Distinguished by velvety appearance'
    ],

    causes: [
      'High humidity (above 85%)',
      'Poor air circulation',
      'Cool to moderate temperatures (60-80°F / 16-27°C)',
      'Greenhouse environments',
      'Dense plant canopy',
      'Extended leaf wetness',
      'Contaminated greenhouse structures'
    ],

    treatment: [
      'Reduce humidity through ventilation',
      'Apply chlorothalonil fungicide',
      'Use mancozeb or copper-based products',
      'Remove heavily infected lower leaves',
      'Increase air circulation with fans (greenhouses)',
      'Space plants more widely',
      'Avoid overhead watering'
    ],

    prevention: [
      'Use resistant varieties (Big Beef, Mountain Fresh)',
      'Maximize air circulation and ventilation',
      'Maintain humidity below 85% (in greenhouses)',
      'Prune lower leaves and suckers',
      'Space plants adequately (2-3 feet)',
      'Water early in day to allow drying',
      'Use drip irrigation',
      'Sanitize greenhouse structures annually',
      'Heat greenhouses to reduce humidity'
    ],

    organicTreatment: [
      'Increase ventilation and reduce humidity',
      'Copper fungicides',
      'Sulfur-based products',
      'Bacillus subtilis',
      'Neem oil sprays',
      'Remove infected leaves promptly',
      'UV light treatment in greenhouses'
    ],

    impact: {
      yield: '10-30% yield reduction in severe cases',
      quality: 'Minimal direct fruit damage',
      marketability: 'Defoliation reduces fruit size'
    }
  },

  'Tomato Septoria leaf spot': {
    name: 'Tomato - Septoria Leaf Spot',
    scientificName: 'Septoria lycopersici',
    severity: 'Moderate',
    category: 'Fungal Disease',
    icon: '🍅',

    description: 'Septoria leaf spot is a very common tomato disease that typically appears after fruit set. It causes progressive defoliation from the bottom up but rarely affects fruits directly.',

    symptoms: [
      'Numerous small, circular spots with dark borders (2-3mm)',
      'Gray-white centers with tiny black dots (fruiting bodies)',
      'Spots start on lower, older leaves',
      'Affected leaves yellow and drop',
      'Progressive defoliation upward',
      'Fruits rarely infected but exposed to sunscald',
      'Can cause complete defoliation if severe'
    ],

    causes: [
      'Warm, wet weather (60-80°F / 16-27°C)',
      'High humidity and rainfall',
      'Overhead irrigation or sprinklers',
      'Splash of water from rain or irrigation',
      'Infected crop debris from previous season',
      'Extended leaf wetness periods',
      'Dense plant canopy'
    ],

    treatment: [
      'Apply chlorothalonil at first sign of disease',
      'Use mancozeb or copper-based fungicides',
      'Spray every 7-10 days during wet periods',
      'Remove and destroy infected lower leaves',
      'Improve air circulation through pruning',
      'Mulch to prevent soil splash',
      'Continue spraying until harvest'
    ],

    prevention: [
      'Use disease-resistant varieties (Plum Regal, Mountain Fresh)',
      'Practice 2-3 year crop rotation',
      'Remove all tomato debris at season end',
      'Mulch around plants with straw or plastic',
      'Stake and prune for air circulation',
      'Use drip irrigation - avoid wetting foliage',
      'Space plants 24-36 inches apart',
      'Remove lower leaves that touch soil',
      'Start preventive fungicide program early'
    ],

    organicTreatment: [
      'Copper fungicides (fixed copper)',
      'Neem oil applications weekly',
      'Bacillus subtilis products',
      'Aggressive removal of infected leaves',
      'Baking soda spray (1 tbsp per gallon)',
      'Compost tea for plant vigor',
      'Mulching to prevent splash'
    ],

    impact: {
      yield: '20-40% yield reduction from defoliation',
      quality: 'Sunscald damage to exposed fruits',
      marketability: 'Reduced fruit size and quality'
    }
  },

  'Tomato Spider mites Two spotted spider mite': {
    name: 'Tomato - Two-Spotted Spider Mites',
    scientificName: 'Tetranychus urticae',
    severity: 'Moderate to Severe',
    category: 'Pest Infestation',
    icon: '🕷️',

    description: 'Two-spotted spider mites are tiny arachnids (not insects) that suck plant sap, causing stippling, bronzing, and webbing. They reproduce rapidly in hot, dry conditions and can quickly build to damaging populations.',

    symptoms: [
      'Tiny yellow or white stipples on leaves',
      'Fine webbing on leaf undersides and between leaves',
      'Bronzing or silvery appearance of leaves',
      'Leaf drop in severe infestations',
      'Reduced plant vigor and stunting',
      'Minute moving dots visible with magnification',
      'Symptoms worsen in hot, dusty conditions'
    ],

    causes: [
      'Hot, dry weather (above 80°F / 27°C)',
      'Low humidity',
      'Dusty conditions',
      'Drought stress',
      'Over-fertilization with nitrogen',
      'Elimination of natural predators by pesticides',
      'Migration from nearby weeds or crops'
    ],

    treatment: [
      'Spray plants forcefully with water to dislodge mites',
      'Apply insecticidal soap or horticultural oil',
      'Use miticides if severe (abamectin, bifenthrin)',
      'Rotate miticide classes to prevent resistance',
      'Target leaf undersides where mites hide',
      'Repeat treatments every 5-7 days',
      'Release predatory mites (Phytoseiulus persimilis)',
      'Increase humidity around plants'
    ],

    prevention: [
      'Maintain adequate soil moisture',
      'Avoid drought stress',
      'Reduce nitrogen fertilization',
      'Keep area weed-free',
      'Preserve beneficial insects (ladybugs, lacewings)',
      'Avoid broad-spectrum insecticides',
      'Rinse dusty plants with water',
      'Monitor regularly, especially in hot weather',
      'Use reflective mulches'
    ],

    organicTreatment: [
      'Insecticidal soap (every 3-5 days)',
      'Neem oil sprays',
      'Horticultural oil',
      'Predatory mites (biological control)',
      'Strong water sprays',
      'Azadirachtin products',
      'Sulfur-based miticides',
      'Garlic or pepper spray',
      'Encourage natural predators'
    ],

    impact: {
      yield: '30-60% yield reduction if uncontrolled',
      quality: 'Reduced fruit size and quality',
      marketability: 'Plant stress affects overall production'
    }
  },

  'Tomato  Target Spot': {
    name: 'Tomato - Target Spot',
    scientificName: 'Corynespora cassiicola',
    severity: 'Moderate to Severe',
    category: 'Fungal Disease',
    icon: '🍅',

    description: 'Target spot is an increasingly important disease in warm, humid tomato-growing regions. It can cause severe defoliation and directly affect fruits, reducing both yield and quality.',

    symptoms: [
      'Brown spots with concentric rings (similar to early blight)',
      'Spots have light brown centers and dark brown margins',
      'Lesions on leaves, stems, and fruits',
      'Severe defoliation in advanced stages',
      'Fruit lesions are brown, sunken, and circular',
      'Unlike early blight, spots lack a distinct yellow halo',
      'Can affect plants at any stage'
    ],

    causes: [
      'Warm temperatures (60-85°F / 16-29°C)',
      'High humidity (above 80%)',
      'Extended periods of leaf wetness',
      'Overhead irrigation',
      'Dense plant canopy',
      'Previous crop debris',
      'Wind-borne spores'
    ],

    treatment: [
      'Apply chlorothalonil fungicide',
      'Use azoxystrobin or other strobilurins',
      'Apply mancozeb as protectant',
      'Spray every 7-10 days during disease-favorable weather',
      'Remove heavily infected lower leaves',
      'Improve air circulation',
      'Reduce leaf wetness duration'
    ],

    prevention: [
      'Use resistant varieties when available',
      'Practice 2-3 year crop rotation',
      'Space plants adequately (2-3 feet)',
      'Stake and prune for air circulation',
      'Use drip irrigation',
      'Mulch to prevent soil splash',
      'Remove crop debris at season end',
      'Start preventive fungicide program',
      'Avoid working with wet plants'
    ],

    organicTreatment: [
      'Copper-based fungicides',
      'Bacillus subtilis applications',
      'Neem oil sprays',
      'Sulfur-based products',
      'Remove infected plant parts promptly',
      'Improve cultural practices',
      'Compost tea applications'
    ],

    impact: {
      yield: '25-50% yield loss in severe cases',
      quality: 'Direct fruit damage reduces quality',
      marketability: 'Spotted fruits are unmarketable'
    }
  },

  'Tomato Tomato YellowLeaf Curl Virus': {
    name: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    scientificName: 'Begomovirus (family Geminiviridae)',
    severity: 'Severe',
    category: 'Viral Disease',
    icon: '🦠',

    description: 'TYLCV is one of the most devastating tomato viruses worldwide. It is transmitted exclusively by whiteflies (Bemisia tabaci) and has no cure. Prevention and whitefly control are essential.',

    symptoms: [
      'Severe stunting of plants',
      'Upward curling and cupping of leaves',
      'Yellowing of leaf margins',
      'Reduced leaf size',
      'Little to no fruit production',
      'Plants appear bushy with shortened internodes',
      'Symptoms appear 2-3 weeks after infection',
      'Flowers often drop before fruit set'
    ],

    causes: [
      'Transmission by whiteflies (Bemisia tabaci)',
      'No other mode of transmission',
      'Warm temperatures favor whitefly populations',
      'Infected transplants from nurseries',
      'Nearby infected tomato or weed hosts',
      'High whitefly populations',
      'No seed transmission'
    ],

    treatment: [
      '⚠️ NO CURE - Remove infected plants immediately',
      'Bag plants before removal to prevent whitefly spread',
      'Destroy by deep burial or burning',
      'Aggressive whitefly control on remaining plants',
      'Use systemic insecticides (imidacloprid, thiamethoxam)',
      'Apply insecticidal soap or oil',
      'Use yellow sticky traps',
      'Consider replanting with resistant varieties'
    ],

    prevention: [
      'Plant TYLCV-resistant varieties (critical!)',
      'Examples: BHN 602, Mountain Magic, Phoenix, Tygress',
      'Use transplants only from certified virus-free sources',
      'Install insect screening in greenhouses (50-mesh)',
      'Use reflective mulches to repel whiteflies',
      'Treat transplants with systemic insecticides',
      'Control whiteflies from transplanting onward',
      'Remove weeds that host whiteflies',
      'Plant trap crops (yellow squash) away from tomatoes',
      'Avoid planting near previous infected crops',
      'Scout regularly for whiteflies'
    ],

    organicTreatment: [
      'Use resistant varieties (most important!)',
      'Insecticidal soap for whiteflies',
      'Neem oil applications',
      'Yellow sticky traps',
      'Row covers (until flowering)',
      'Reflective mulches',
      'Remove infected plants promptly',
      'Kaolin clay as whitefly repellent',
      'Vacuum whiteflies from plants',
      'Predatory insects (Encarsia formosa)'
    ],

    impact: {
      yield: '50-100% yield loss - often complete',
      quality: 'Little to no marketable fruit',
      marketability: 'Infected plants produce almost no fruit'
    }
  },

  'Tomato  Tomato mosaic virus': {
    name: 'Tomato Mosaic Virus (ToMV)',
    scientificName: 'Tobamovirus',
    severity: 'Moderate to Severe',
    category: 'Viral Disease',
    icon: '🦠',

    description: 'Tomato mosaic virus is highly infectious and extremely stable. It can survive for years in dried plant debris and is easily spread mechanically through handling, tools, and contaminated clothing. Prevention is critical as there is no cure.',

    symptoms: [
      'Mottled light and dark green mosaic pattern on leaves',
      'Distorted, fern-like leaves',
      'Yellow spots or streaks on fruits',
      'Internal browning of fruits',
      'Stunted plant growth',
      'Reduced fruit set',
      'Necrotic spots on leaves in some strains',
      'Symptoms more severe in cool weather'
    ],

    causes: [
      'Mechanical transmission (touching, pruning, handling)',
      'Contaminated tools, gloves, or clothing',
      'Infected seed (rare but possible)',
      'Contact with tobacco products',
      'No insect vectors',
      'Very stable virus - survives in debris for years',
      'Highly contagious between plants'
    ],

    treatment: [
      '⚠️ NO CURE - Remove infected plants immediately',
      'Double-bag plants before removal',
      'Destroy by burning or deep burial',
      'DO NOT compost',
      'Disinfect all tools with 10% bleach solution',
      'Wash hands thoroughly with soap',
      'Change clothing if extensively handling infected plants',
      'Clean greenhouse structures thoroughly'
    ],

    prevention: [
      'Use certified virus-free seeds and transplants',
      'Plant resistant varieties (VFNT, BHN 444, Mountain Fresh)',
      'Disinfect tools between plants (10% bleach or Virkon S)',
      'Wash hands with soap before handling plants',
      'Avoid tobacco use around tomatoes',
      'Avoid touching plants when wet',
      'Use new gloves for each plant when transplanting',
      'Remove plant debris at season end',
      'Sterilize greenhouse structures annually',
      'Control weeds in nightshade family'
    ],

    organicTreatment: [
      'No treatment - focus on prevention',
      'Use resistant varieties',
      'Strict sanitation protocols',
      'Remove infected plants immediately',
      'Heat-treat seeds (30 min at 158°F / 70°C)',
      'Trisodium phosphate (TSP) for hand washing',
      'Milk spray (10% solution) may reduce spread',
      'UV light treatment of tools'
    ],

    impact: {
      yield: '20-60% yield reduction depending on timing',
      quality: 'Fruit quality significantly reduced',
      marketability: 'Discolored, distorted fruits unmarketable'
    }
  },

  'Tomato healthy': {
    name: 'Tomato - Healthy',
    scientificName: 'Solanum lycopersicum',
    severity: 'None',
    category: 'Healthy Plant',
    icon: '✅',

    description: 'Congratulations! Your tomato plant is healthy and disease-free. Continue your excellent care practices to ensure robust growth, high yields, and delicious fruits.',

    symptoms: [
      'Vibrant dark green foliage',
      'No spots, lesions, or discoloration',
      'Strong, upright growth habit',
      'Healthy flower production',
      'Good fruit set and development',
      'No wilting or yellowing',
      'Vigorous root system'
    ],

    causes: [
      'Excellent cultural practices',
      'Optimal growing conditions',
      'Proper nutrition and watering',
      'Good disease prevention',
      'Healthy soil ecosystem',
      'Adequate pest management'
    ],

    treatment: [
      'No treatment needed - plant is healthy!',
      'Continue current care practices',
      'Monitor regularly for early problem detection',
      'Document your successful practices'
    ],

    prevention: [
      'Maintain consistent watering (1-2 inches per week)',
      'Water at base of plant, not foliage',
      'Apply balanced fertilizer regularly',
      'Stake or cage plants for support',
      'Prune suckers for better air circulation',
      'Mulch around plants (straw or plastic)',
      'Scout weekly for pests and diseases',
      'Remove lower leaves as plant grows',
      'Maintain proper spacing (24-36 inches)',
      'Rotate crops annually',
      'Clean up debris at season end'
    ],

    organicTreatment: [
      'Continue organic matter additions to soil',
      'Compost tea applications every 2-3 weeks',
      'Seaweed extract foliar spray',
      'Companion planting (basil, marigolds, nasturtiums)',
      'Encourage beneficial insects',
      'Fish emulsion for nitrogen boost',
      'Calcium applications to prevent blossom end rot',
      'Proper mulching technique'
    ],

    impact: {
      yield: 'Expected 20-30 lbs per plant (indeterminate)',
      quality: 'Premium quality fruits',
      marketability: 'Excellent commercial and fresh market value'
    }
  }
};

// Helper function to get disease info by name (with fuzzy matching)
export function getDiseaseInfo(diseaseName) {
  // Normalize the disease name
  const normalizedName = diseaseName
    .toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Try exact match first
  for (const key in diseaseDatabase) {
    if (key.toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ') === normalizedName) {
      return diseaseDatabase[key];
    }
  }

  // Try partial match
  for (const key in diseaseDatabase) {
    const dbKey = key.toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ');
    if (dbKey.includes(normalizedName) || normalizedName.includes(dbKey)) {
      return diseaseDatabase[key];
    }
  }

  // Return null if no match found
  return null;
}
