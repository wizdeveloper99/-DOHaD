"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function WhoAreWePage() {
  const executiveCouncil = [
    {
      title: "President",
      name: "Prof. Debarati Mukherjee",
      description:
        "Leading DOHaD research initiatives and strategic direction for the organization.",
      image: "/people/Debaratinew.jpg",
      linkedin: "https://www.linkedin.com/in/debarati-mukherjee-68653b53/"
    },
    {
      title: "Secretary and Strategic Partnerships Lead",
      name: "Eunice Lobo",
      description:
        "Managing organizational operations and member communications.",
      image: "/people/Eunice.jpg",
      linkedin: "https://www.linkedin.com/in/eunice-lobo-a9329128/"
    },
    {
      title: "Research Lead",
      name: "Dr. Deepa Ravi",
      description:
        "Coordinating research activities and collaborative projects across India.",
      image: "/people/Deepa.jpg",
      linkedin: "https://www.linkedin.com/in/deepa-r-a2a221130/"
    },
    {
      title: "Education Lead",
      name: "Dr. Prafulla Shriyan",
      description:
        "Developing educational programs and capacity building initiatives.",
      image: "/people/Prafulla.jpeg",
      linkedin: "https://www.linkedin.com/in/prafulla-shriyan-25b66918/"
    },
    {
      title: "Communications Lead",
      name: "Dr. Kiruthika Selvaraj",
      description:
        "Managing external communications and knowledge dissemination.",
      image: "/people/Kiruthika.jpeg",
      linkedin: "https://www.linkedin.com/in/kiruthika-selvaraj/"
    },
    {
      title: "Treasurer",
      name: "Suganya Rajendran",
      description:
        "Overseeing financial management and resource allocation.",
      image: "/people/Suganya.jpg",
      linkedin: "https://www.linkedin.com/in/suganya23/"
    },
  ]

  const advisoryCouncil = [
    {
      name: "Dr. Kalyanaraman Kumaran",
      title: "Chair of DOHaD India Regional Society",
      image: "/people/advisory/Dr Kalyanaraman Kumaran img.png",
      fullBio: "Dr. Kalyanaraman Kumaran is currently Professor of Public Health at the University of Southampton, UK, and Senior Scientist at the CSI Holdsworth Memorial Hospital & Vivekananda Memorial Hospital, India. Kumaran has over 30 years of experience in epidemiology and public health across the UK and India. His research focuses on understanding how factors operating in early life (such as maternal nutrition, fetal and infant growth) influence adult non-communicable diseases. He is also involved in the development and delivery of undergraduate and postgraduate public health teaching.",
      linkedin: "https://www.linkedin.com/in/kalyanaraman-kumaran-48636976/"
    },
    {
      name: "Dr. Giridhara R. Babu (GRB)",
      title: "Professor of Population Medicine",
      image: "/people/advisory/Dr. Giridhara R. Babu (GRB)  img.png",
      fullBio: "Dr. Giridhara R. Babu (GRB) serves as a Professor of Population Medicine at the College of Medicine, Qatar University. With a career spanning over two decades, GRB has led transformative public health research across epidemiology, disease prevention, and health security. His extensive work on infectious diseases, including the eradication of polio, his contributions to the COVID-19 response, and his commitment to advancing the resilience of health systems have earned him recognition as a leader in global health. His research, which has shaped global public health responses, focused on maternal and child health, non-communicable diseases, and health policy. He continues to influence health policy and education worldwide. He is featured among the top 2% of global highly cited researchers in 2024, as listed by Elsevier-Stanford (Scopus-based). His research interests include Global Health, NCD prevention, Lifecourse epidemiology, Cohort studies, and Pandemic preparedness.",
      linkedin: "https://www.linkedin.com/in/giridharbabur/"
    },
    {
      name: "Dr. Stephen Matthews",
      title: "Canada Research Chair in Early Development and Health",
      image: "/people/advisory/Dr. Stephen Matthews  img.png",
      fullBio: "Dr. Stephen Matthews is Canada Research Chair in Early Development and Health, Professor of Physiology, Ob-Gyn, and Medicine at the University of Toronto, and a Senior Scientist at the Lunenfeld-Tanenbaum Research Institute, Sinai Health. He served as Chair of the Department of Physiology (UofT; 2007-2014). He is currently the Director of Research at the Alliance for Human Development, LTRI, the Director of the Ontario Birth Study, and the Canadian lead PI of the Healthy Life Trajectories (HeLTI) trial in India. He has served as elected President of the Society for Reproductive Investigation (2023). In 2015, he co-founded DOHaD Canada and served as elected President (2018-23).",
      linkedin: "https://www.linkedin.com/in/stephen-matthews-45bb7611a/"
    },
    {
      name: "Dr. Giriraj Ratan Chandak",
      title: "Sir Jagadish Chandra Bose Fellow",
      image: "/people/advisory/Dr. Chandak img.png",
      fullBio: "Dr. Giriraj Ratan Chandak, former director of the Center for DNA Fingerprinting and Diagnostics and Chief Scientist at CSIR–Center for Cellular and Molecular Biology, Hyderabad. He currently serves as Sir Jagadish Chandra Bose Fellow at CSIR-CCMB and is a Fellow of all four Indian National Science Academies and Fellow of The World Academy of Sciences. Dr. Chandak is a physician-scientist specializing in human and medical genetics, with notable work on the genomic and epigenetic architecture of complex disorders such as type 2 diabetes and metabolic syndrome, with a particular focus on developmental programming. He has pioneered research on the genetic and epigenetic basis of the “thin–fat Indian” phenotype and developmental origins of type 2 diabetes and metabolic syndrome. He has over 150 publications shaping the understanding of complex genetic traits and the role of gene-environment interactions in South Asian populations. He has recently founded Lightening Lives LLP to translate genomics into healthcare solutions for underserved communities.",
      linkedin: "https://www.linkedin.com/in/giriraj-ratan-chandak-36334929/"
    },
    {
      name: "Dr. Rebecca Kuriyan Raj",
      title: "Professor and Head of the Division of Nutrition",
      image: "/people/advisory/Dr. Rebecca Kuriyan Raj ing.png",
      fullBio: "Dr. Rebecca Kuriyan Raj serves as Professor and Head of the Division of Nutrition at St. John’s Research Institute. She has over three decades of experience in clinical nutrition, public health research, and academia, with interests in infant and child health, clinical nutrition, body composition, obesity, and energy expenditure. She has led large-scale cohorts examining the double and triple burden of malnutrition, linking multi-factorial evidence to inform functional and health outcomes, and evaluation of government initiatives- take-home ration programs, informing program redesign and policy uptake. Dr. Kuriyan-Raj has played a central role in capacity building for over two decades as Course Director of the Bangalore Boston Nutrition Collaborative and, later, NURTURE (2024 onwards), that have trained over 600 professionals from India and other countries. Her work has received numerous awards, including the Radha Practicing Dietitian Award and the Dean Louis & May Monteiro Research Prize, and she was listed among the top 2% of scientists in Medical Research by Stanford University in 2024 and 2025. Recently, she was awarded the title of Fellow of the International Union of Nutritional Sciences (IUNS) at the International Congress of Nutrition (ICN) in August 2025.",
      linkedin: "https://www.linkedin.com/in/rebecca-raj/"
    },
    {
      name: "Dr. Sunita Taneja",
      title: "Senior Scientist and Executive Director",
      image: "/people/advisory/Dr. Sunita Taneja imf.png",
      fullBio: "Dr. Sunita Taneja is a Senior Scientist and Executive Director of the Society for Applied Studies (SAS), Delhi. SAS is a not-for-profit research organization whose contributions to research have found a place in Indian and developing-country public health programs. Her research interests are child health and nutrition, and the development and evaluation of single or packages of interventions to improve birth outcomes, survival, growth, and development during early childhood. With around 3 decades of experience, she is globally recognized as a leading public health researcher.",
      linkedin: "https://www.linkedin.com/in/sunita-taneja-5694a755/"
    },
    {
      name: "Dr. Suzanne Ozane",
      title: "Professor of Developmental Endocrinology",
      image: "/people/advisory/Dr. Suzanne Ozane img.png",
      fullBio: "Dr. Suzanne Ozane, professor of Developmental Endocrinology, Head of the Department of Clinical Biochemistry, and Director of the Institute of Metabolic Science-Metabolic Research Laboratories at the University of Cambridge. Her research interests focus on understanding the mechanistic basis of the relationship between suboptimal early nutrition and long-term cardiometabolic health, with the goal of using this information to improve the health of the next generation. Professor Ozanne is the author of over 300 peer-reviewed full papers on the early origins of health and disease. She is an elected member of the Council of the Society for the Developmental Origins of Health and Disease and was elected as a Fellow of the Academy of Medical Sciences in 2022.",
      linkedin: "https://www.linkedin.com/in/sue-ozanne-13616979/"
    },
    {
      name: "Dr. Sadhana Joshi",
      title: "Director Grade Scientist",
      image: "/people/advisory/Dr. Sadhana Joshi  img.png",
      fullBio: "Dr. Sadhana Joshi is currently a Director Grade Scientist and heads the Division of Mother and Child Health at IRSHA. She has been working in the field of maternal and child health for over 30 years. She is the Principal Investigator on an ICMR, Center for Advanced Research, as well as the ICMR Center for Collaborating Excellence. She is also the Principal Investigator on a DBT SAHAJ grant. Sadhana Joshi is a recipient of numerous national and international grants and has delivered critical orations in various scientific forums. She was awarded the 9th Dr. Rajammal P. Devadas Memorial Award of the Nutrition Society of India, 2018, and the Research Excellence Award for Developing Country Scientist at the 7th World Congress on Developmental Origins of Health and Disease, Portland, USA. She is a board member for the Preterm Birth International Collaborative PREBIC Australasian Branch (2017-2018).",
      linkedin: "https://www.bvuniversity.edu.in/irsha/staff-details/sadhana-joshi/1/4"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] overflow-hidden rounded-3xl mt-8">
          <div className="absolute inset-0">
            <Image
              src="/gloval-ind.png"
              alt="World map background"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground">
                Who We Are
              </h1>
              <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground font-medium leading-relaxed">
                Meet the dedicated team of researchers, clinicians, and advocates leading DOHaD India's mission to advance developmental origins of health and disease research across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Council Section */}
        <section className="py-8 md:py-10 xl:py-20 2xl:py-28">
          <div className="text-center mb-8 md:mb-12 xl:mb-16">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-4">
              Executive Council
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leadership team guiding DOHaD India's strategic initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCouncil.map((member, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 w-full p-6 text-center">
                  <p className="text-[11px] md:text-xs xl:text-sm 2xl:text-base font-medium text-emerald-400 mb-1">
                    {member.title}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-base xl:text-xl 2xl:text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Advisory Group Section */}
        <section className="py-8 md:py-10 xl:py-20 2xl:py-28">
          <div className="text-center mb-8 md:mb-12 xl:mb-16">
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-4">
              Advisory Group
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground max-w-2xl mx-auto">
              Distinguished advisors providing strategic guidance and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryCouncil.map((member, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-72 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 w-full p-4 text-center">
                      <p className="text-[9px] md:text-[10px] xl:text-xs 2xl:text-sm uppercase tracking-wider font-bold text-emerald-400 mb-1">
                        {member.title}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-sm xl:text-base 2xl:text-lg font-bold text-white leading-tight">
                          {member.name}
                        </h3>
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[9px] md:text-[10px] xl:text-xs 2xl:text-sm text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          Read Full Bio
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-md">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-secondary">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <DialogTitle className="text-lg xl:text-2xl 2xl:text-3xl font-bold text-foreground flex items-center gap-3">
                          {member.name}
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                        </DialogTitle>
                        <p className="text-xs xl:text-sm 2xl:text-base font-semibold text-emerald-500">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="mt-4 max-h-[60vh] overflow-y-auto">
                    <DialogDescription className="text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                      {member.fullBio}
                    </DialogDescription>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
