import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadMongoUri() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) throw new Error('Missing .env.local');
  const env = readFileSync(envPath, 'utf8');
  const match = env.match(/^MONGODB_URI=(.+)$/m);
  if (!match) throw new Error('MONGODB_URI not found in .env.local');
  return match[1].trim().replace(/^["']|["']$/g, '');
}

const executiveCouncil = [
  {
    section: 'executive-council',
    name: 'Prof. Debarati Mukherjee',
    designation: 'President',
    shortBio: 'Leading DOHaD research initiatives and strategic direction for the organization.',
    profileImage: '/people/Debaratinew.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/debarati-mukherjee-68653b53/',
    displayOrder: 0,
  },
  {
    section: 'executive-council',
    name: 'Dr. Eunice Lobo',
    designation: 'Secretary and Strategic Partnerships Lead',
    shortBio: 'Managing organizational operations and member communications.',
    profileImage: '/people/Eunice.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/eunice-lobo-a9329128/',
    displayOrder: 1,
  },
  {
    section: 'executive-council',
    name: 'Dr. Deepa Ravi',
    designation: 'Research Lead',
    shortBio: 'Coordinating research activities and collaborative projects across India.',
    profileImage: '/people/Deepa.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/deepa-r-a2a221130/',
    displayOrder: 2,
  },
  {
    section: 'executive-council',
    name: 'Dr. Prafulla Shriyan',
    designation: 'Education Lead',
    shortBio: 'Developing educational programs and capacity building initiatives.',
    profileImage: '/people/Prafulla.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/prafulla-shriyan-25b66918/',
    displayOrder: 3,
  },
  {
    section: 'executive-council',
    name: 'Dr. Kiruthika Selvaraj',
    designation: 'Communications Lead',
    shortBio: 'Managing external communications and knowledge dissemination.',
    profileImage: '/people/Kiruthika.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/kiruthika-selvaraj/',
    displayOrder: 4,
  },
  {
    section: 'executive-council',
    name: 'Suganya Rajendran',
    designation: 'Treasurer',
    shortBio: 'Overseeing financial management and resource allocation.',
    profileImage: '/people/Suganya.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/suganya23/',
    displayOrder: 5,
  },
];

const advisoryGroup = [
  {
    section: 'advisory-group',
    name: 'Dr. Kalyanaraman Kumaran',
    designation: 'Chair of DOHaD India Regional Society',
    organization: 'University of Southampton, UK',
    profileImage: '/people/advisory/Dr Kalyanaraman Kumaran img.png',
    fullBio:
      'Dr. Kalyanaraman Kumaran is currently Professor of Public Health at the University of Southampton, UK, and Senior Scientist at the CSI Holdsworth Memorial Hospital & Vivekananda Memorial Hospital, India. Kumaran has over 30 years of experience in epidemiology and public health across the UK and India. His research focuses on understanding how factors operating in early life (such as maternal nutrition, fetal and infant growth) influence adult non-communicable diseases. He is also involved in the development and delivery of undergraduate and postgraduate public health teaching.',
    linkedinUrl: 'https://www.linkedin.com/in/kalyanaraman-kumaran-48636976/',
    displayOrder: 0,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Giridhara R. Babu (GRB)',
    designation: 'Professor of Population Medicine',
    organization: 'College of Medicine, Qatar University',
    profileImage: '/people/advisory/Dr. Giridhara R. Babu (GRB)  img.png',
    fullBio:
      'Dr. Giridhara R. Babu (GRB) serves as a Professor of Population Medicine at the College of Medicine, Qatar University. With a career spanning over two decades, GRB has led transformative public health research across epidemiology, disease prevention, and health security. His extensive work on infectious diseases, including the eradication of polio, his contributions to the COVID-19 response, and his commitment to advancing the resilience of health systems have earned him recognition as a leader in global health. His research, which has shaped global public health responses, focused on maternal and child health, non-communicable diseases, and health policy. He continues to influence health policy and education worldwide. He is featured among the top 2% of global highly cited researchers in 2024, as listed by Elsevier-Stanford (Scopus-based). His research interests include Global Health, NCD prevention, Lifecourse epidemiology, Cohort studies, and Pandemic preparedness.',
    linkedinUrl: 'https://www.linkedin.com/in/giridharbabur/',
    displayOrder: 1,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Stephen Matthews',
    designation: 'Canada Research Chair in Early Development and Health',
    additionalRole: 'President elect, International DOHaD society',
    organization: 'University of Toronto, Canada',
    profileImage: '/people/advisory/Dr. Stephen Matthews  img.png',
    fullBio:
      'Dr. Stephen Matthews is Canada Research Chair in Early Development and Health, Professor of Physiology, Ob-Gyn, and Medicine at the University of Toronto, and a Senior Scientist at the Lunenfeld-Tanenbaum Research Institute, Sinai Health. He served as Chair of the Department of Physiology (UofT; 2007-2014). He is currently the Director of Research at the Alliance for Human Development, LTRI, the Director of the Ontario Birth Study, and the Canadian lead PI of the Healthy Life Trajectories (HeLTI) trial in India. He has served as elected President of the Society for Reproductive Investigation (2023). In 2015, he co-founded DOHaD Canada and served as elected President (2018-23). He is President elect of the International DOHaD society.',
    linkedinUrl: 'https://www.linkedin.com/in/stephen-matthews-45bb7611a/',
    displayOrder: 2,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Giriraj Ratan Chandak',
    designation: 'Sir Jagadish Chandra Bose Fellow',
    organization: 'CSIR–Center for Cellular and Molecular Biology, Hyderabad',
    profileImage: '/people/advisory/Dr. Chandak img.png',
    fullBio:
      'Dr. Giriraj Ratan Chandak, former director of the Center for DNA Fingerprinting and Diagnostics and Chief Scientist at CSIR–Center for Cellular and Molecular Biology, Hyderabad. He currently serves as Sir Jagadish Chandra Bose Fellow at CSIR-CCMB and is a Fellow of all four Indian National Science Academies and Fellow of The World Academy of Sciences. Dr. Chandak is a physician-scientist specializing in human and medical genetics, with notable work on the genomic and epigenetic architecture of complex disorders such as type 2 diabetes and metabolic syndrome, with a particular focus on developmental programming. He has pioneered research on the genetic and epigenetic basis of the “thin–fat Indian” phenotype and developmental origins of type 2 diabetes and metabolic syndrome. He has over 150 publications shaping the understanding of complex genetic traits and the role of gene-environment interactions in South Asian populations. He has recently founded Lightening Lives LLP to translate genomics into healthcare solutions for underserved communities.',
    linkedinUrl: 'https://www.linkedin.com/in/giriraj-ratan-chandak-36334929/',
    displayOrder: 3,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Rebecca Kuriyan Raj',
    designation: 'Professor and Head of the Division of Nutrition',
    organization: "St. John's Research Institute, Bengaluru",
    profileImage: '/people/advisory/Dr. Rebecca Kuriyan Raj ing.png',
    fullBio:
      'Dr. Rebecca Kuriyan Raj serves as Professor and Head of the Division of Nutrition at St. John’s Research Institute. She has over three decades of experience in clinical nutrition, public health research, and academia, with interests in infant and child health, clinical nutrition, body composition, obesity, and energy expenditure. She has led large-scale cohorts examining the double and triple burden of malnutrition, linking multi-factorial evidence to inform functional and health outcomes, and evaluation of government initiatives- take-home ration programs, informing program redesign and policy uptake. Dr. Kuriyan-Raj has played a central role in capacity building for over two decades as Course Director of the Bangalore Boston Nutrition Collaborative and, later, NURTURE (2024 onwards), that have trained over 600 professionals from India and other countries. Her work has received numerous awards, including the Radha Practicing Dietitian Award and the Dean Louis & May Monteiro Research Prize, and she was listed among the top 2% of scientists in Medical Research by Stanford University in 2024 and 2025. Recently, she was awarded the title of Fellow of the International Union of Nutritional Sciences (IUNS) at the International Congress of Nutrition (ICN) in August 2025.',
    linkedinUrl: 'https://www.linkedin.com/in/rebecca-raj/',
    displayOrder: 4,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Sunita Taneja',
    designation: 'Senior Scientist and Executive Director',
    organization: 'Society for Applied Studies (SAS), Delhi',
    profileImage: '/people/advisory/Dr. Sunita Taneja imf.png',
    fullBio:
      'Dr. Sunita Taneja is a Senior Scientist and Executive Director of the Society for Applied Studies (SAS), Delhi. SAS is a not-for-profit research organization whose contributions to research have found a place in Indian and developing-country public health programs. Her research interests are child health and nutrition, and the development and evaluation of single or packages of interventions to improve birth outcomes, survival, growth, and development during early childhood. With around 3 decades of experience, she is globally recognized as a leading public health researcher.',
    linkedinUrl: 'https://www.linkedin.com/in/sunita-taneja-5694a755/',
    displayOrder: 5,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Suzanne Ozane',
    designation: 'Professor of Developmental Endocrinology',
    organization: 'University of Cambridge, UK',
    profileImage: '/people/advisory/Dr. Suzanne Ozane img.png',
    fullBio:
      'Dr. Suzanne Ozane, professor of Developmental Endocrinology, Head of the Department of Clinical Biochemistry, and Director of the Institute of Metabolic Science-Metabolic Research Laboratories at the University of Cambridge. Her research interests focus on understanding the mechanistic basis of the relationship between suboptimal early nutrition and long-term cardiometabolic health, with the goal of using this information to improve the health of the next generation. Professor Ozanne is the author of over 300 peer-reviewed full papers on the early origins of health and disease. She is an elected member of the Council of the Society for the Developmental Origins of Health and Disease and was elected as a Fellow of the Academy of Medical Sciences in 2022.',
    linkedinUrl: 'https://www.linkedin.com/in/sue-ozanne-13616979/',
    displayOrder: 6,
  },
  {
    section: 'advisory-group',
    name: 'Dr. Sadhana Joshi',
    designation: 'Director Grade Scientist',
    organization: 'Institute of Research in Reproduction and Health Advocacy (IRSHA), Pune',
    profileImage: '/people/advisory/Dr. Sadhana Joshi  img.png',
    fullBio:
      'Dr. Sadhana Joshi is currently a Director Grade Scientist and heads the Division of Mother and Child Health at IRSHA. She has been working in the field of maternal and child health for over 30 years. She is the Principal Investigator on an ICMR, Center for Advanced Research, as well as the ICMR Center for Collaborating Excellence. She is also the Principal Investigator on a DBT SAHAJ grant. Sadhana Joshi is a recipient of numerous national and international grants and has delivered critical orations in various scientific forums. She was awarded the 9th Dr. Rajammal P. Devadas Memorial Award of the Nutrition Society of India, 2018, and the Research Excellence Award for Developing Country Scientist at the 7th World Congress on Developmental Origins of Health and Disease, Portland, USA. She is a board member for the Preterm Birth International Collaborative PREBIC Australasian Branch (2017-2018).',
    linkedinUrl: 'https://www.bvuniversity.edu.in/irsha/staff-details/sadhana-joshi/1/4',
    displayOrder: 7,
  },
];

async function seed() {
  await mongoose.connect(loadMongoUri());

  const memberSchema = new mongoose.Schema(
    {
      name: String,
      designation: String,
      organization: String,
      additionalRole: String,
      fullBio: String,
      shortBio: String,
      profileImage: String,
      linkedinUrl: String,
      displayOrder: { type: Number, default: 0 },
      featured: { type: Boolean, default: false },
      section: {
        type: String,
        enum: ['executive-council', 'advisory-group'],
        default: 'advisory-group',
      },
    },
    { timestamps: true }
  );

  const AdvisoryMember =
    mongoose.models.AdvisoryMember || mongoose.model('AdvisoryMember', memberSchema);

  const existing = await AdvisoryMember.find().lean();
  const existingNames = new Set(existing.map((m) => m.name));

  let added = 0;
  let updated = 0;

  for (const member of [...executiveCouncil, ...advisoryGroup]) {
    if (existingNames.has(member.name)) {
      await AdvisoryMember.updateOne(
        { name: member.name },
        {
          $set: {
            section: member.section,
            designation: member.designation,
            organization: member.organization,
            additionalRole: member.additionalRole,
            shortBio: member.shortBio,
            fullBio: member.fullBio,
            profileImage: member.profileImage,
            linkedinUrl: member.linkedinUrl,
            displayOrder: member.displayOrder,
          },
        }
      );
      updated += 1;
      continue;
    }

    await AdvisoryMember.create(member);
    added += 1;
  }

  const legacyUpdated = await AdvisoryMember.updateMany(
    { section: { $exists: false } },
    { $set: { section: 'advisory-group' } }
  );

  await AdvisoryMember.deleteOne({ name: 'Dr Kalyanaraman Kumaran' });

  console.log(
    `Who We Are seed complete: ${added} added, ${updated} updated, ${legacyUpdated.modifiedCount} legacy members tagged as advisory-group.`
  );
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
