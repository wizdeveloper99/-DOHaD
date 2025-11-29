'use client'

import { Header } from "@/components/header"
import Image from "next/image"

export default function WhoAreWePage() {
  const executiveCouncil = [
    {
      title: "President",
      name: "Prof. Debarati Mukherjee",
      affiliation: "[Institution]",
      description:
        "Leading DOHaD research initiatives and strategic direction for the organization.",
      image: "/people/Debaratinew.jpg",
    },
    {
      title: "Secretary and Strategic Partnerships Lead",
      name: "Eunice Lobo",
      affiliation: "[Institution]",
      description:
        "Managing organizational operations and member communications.",
      image: "/people/Eunice.jpg",
    },
    {
      title: "Research Lead",
      name: "Dr. Deepa Ravi",
      affiliation: "[Institution]",
      description:
        "Coordinating research activities and collaborative projects across India.",
      image: "/people/Deepa.jpg",
    },
    {
      title: "Education Lead",
      name: "Dr. Prafulla Shriyan",
      affiliation: "[Institution]",
      description:
        "Developing educational programs and capacity building initiatives.",
      image: "/people/Prafulla.jpeg",
    },
    {
      title: "Communications Lead",
      name: "Dr. Kiruthika Selvaraj",
      affiliation: "[Institution]",
      description:
        "Managing external communications and knowledge dissemination.",
      image: "/people/Kiruthika.jpeg",
    },
    {
      title: "Treasurer",
      name: "Suganya Rajendran",
      affiliation: "[Institution]",
      description:
        "Overseeing financial management and resource allocation.",
      image: "/people/Suganya.jpg",
    },
  ]

  const advisoryGroup = [
    {
      title: "ADVISOR",
      name: "Prof Giridhara R. Babu",
      description: "Professor, College of Medicine, Qatar University - Providing strategic oversight and guidance to DOHaD research initiatives.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "Prof Kalyanaraman Kumaran",
      description: "Professor, University of Southampton, UK - Expert in developmental origins research and policy.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "Prof Stephen Mathew",
      description: "Professor, University of Toronto & Director of Research at the Alliance for Human Development, Lunenfeld-Tanenbaum Research Institute, Canada - Leading research in human development.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "Prof Sadhana Joshi",
      description: "Professor, Bharati Vidyapeeth, Pune, India - Guiding research and educational initiatives.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "Dr Prof. Sue Ozanne",
      description: "University of Cambridge, United Kingdom - Expert in developmental programming and metabolism.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "SAS",
      description: "Advisor providing specialized expertise.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "Advisor to be confirmed",
      description: "Position available for confirmation.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
    {
      title: "ADVISOR",
      name: "Advisor to be confirmed",
      description: "Position available for confirmation.",
      image: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2201.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-max mx-auto px-6 pb-16">
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/gloval-ind.png"
              alt="World map background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Who We Are
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-semibold leading-relaxed">
                Meet the dedicated team of researchers, clinicians, and advocates leading DOHaD India's mission to advance developmental origins of health and disease research across the country.
              </p>

              {/* Scrolling Tags */}
              <div className="overflow-hidden relative py-4">
                <div className="flex animate-scroll gap-4">
                  <span className="whitespace-nowrap px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-border text-foreground bg-background/40 backdrop-blur-sm">
                    Research for a Healthier Future
                  </span>
                  <span className="whitespace-nowrap px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-muted text-foreground">
                    Empowering Early-Life Health
                  </span>
                  <span className="whitespace-nowrap px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-muted text-foreground">
                    Building Stronger Communities
                  </span>
                  {/* Duplicates for seamless loop */}
                  <span className="whitespace-nowrap px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-border text-foreground bg-background/40 backdrop-blur-sm">
                    Research for a Healthier Future
                  </span>
                  <span className="whitespace-nowrap px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-muted text-foreground">
                    Empowering Early-Life Health
                  </span>
                  <span className="whitespace-nowrap px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-muted text-foreground">
                    Building Stronger Communities
                  </span>
                </div>
                
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent dark:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent dark:hidden" />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Council Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Executive Council
            </h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team guiding DOHaD India's strategic initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCouncil.map((member, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Full image */}
                <div className="relative w-full h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Floating pill */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg px-6 py-3 text-center">
                  <h3 className="text-sm font-medium text-gray-200">{member.title}</h3>
                  <p className="text-lg font-semibold text-white">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Group Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advisory Group
            </h2>
            <p className="text-muted-foreground text-lg">
              Distinguished advisors providing strategic guidance and expertise
            </p>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {advisoryGroup.map((member, index) => (
             <div
               key={index}
               className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
             >
               {/* Full image */}
               <div className="relative w-full h-80">
                 <Image
                   src={member.image}
                   alt={member.name}
                   fill
                   className="object-cover"
                 />
               </div>

               {/* Gradient overlay */}
               <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

               {/* Floating pill */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg px-6 py-3 text-center">
                 <h3 className="text-sm font-medium text-gray-200">{member.title}</h3>
                 <p className="text-lg font-semibold text-white">
                   {member.name}
                 </p>
               </div>
             </div>
           ))}
         </div>

        </section>
       
      </main>
    </div>
  )
}
