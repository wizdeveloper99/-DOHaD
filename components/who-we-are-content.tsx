"use client";

import { LinkedInIcon } from "@/components/linkedin-icon";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { WhoWeAreMember, WhoWeArePageSettings } from "@/lib/who-we-are-defaults";
import { WHO_WE_ARE_SECTIONS } from "@/lib/who-we-are-defaults";

type WhoWeAreContentProps = {
  pageContent: WhoWeArePageSettings;
  members: WhoWeAreMember[];
};

export function WhoWeAreContent({ pageContent, members }: WhoWeAreContentProps) {
  const executiveCouncil = members.filter(
    (m) => m.section === WHO_WE_ARE_SECTIONS.EXECUTIVE_COUNCIL
  );
  const advisoryCouncil = members.filter(
    (m) => m.section === WHO_WE_ARE_SECTIONS.ADVISORY_GROUP
  );

  return (
    <main className="max-w-7xl mx-auto px-6">
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
              {pageContent.pageTitle}
            </h1>
            <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground font-medium leading-relaxed">
              {pageContent.pageDescription}
            </p>
            {pageContent.secretariatAddress && (
              <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground font-medium leading-relaxed">
                {pageContent.secretariatAddress}
              </p>
            )}
            {pageContent.organizationLinkedin && (
              <a
                href={pageContent.organizationLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-base text-primary hover:text-primary/80 font-medium"
              >
                <LinkedInIcon className="w-5 h-5" />
                DOHaD India Regional Society on LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      {executiveCouncil.length > 0 && (
        <section className="py-8 md:py-10 xl:py-20 2xl:py-28">
          <SectionHeader
            title={pageContent.executiveCouncil.title}
            description={pageContent.executiveCouncil.description}
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {executiveCouncil.map((member) => (
              <ExecutiveCard key={member._id} member={member} />
            ))}
          </div>
        </section>
      )}

      {advisoryCouncil.length > 0 && (
        <section className="py-8 md:py-10 xl:py-20 2xl:py-28">
          <SectionHeader
            title={pageContent.advisoryGroup.title}
            description={pageContent.advisoryGroup.description}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {advisoryCouncil.map((member) => (
              <AdvisoryCard key={member._id} member={member} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center mb-8 md:mb-12 xl:mb-16">
      <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
      <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

function ExecutiveCard({ member }: { member: WhoWeAreMember }) {
  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <MemberPhoto src={member.profileImage} alt={member.name} />

      <div className="flex flex-1 flex-col p-3 sm:p-6 text-center">
        <div className="flex items-start justify-center gap-1.5">
          <h3 className="text-xs sm:text-base xl:text-xl 2xl:text-2xl font-bold text-foreground leading-tight">
            {member.name}
          </h3>
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 sm:mt-1 text-[#0A66C2] hover:opacity-80 transition-opacity shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>
        <p className="mt-1.5 sm:mt-2 text-[11px] xl:text-sm 2xl:text-base font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
          {member.designation}
        </p>
        {member.additionalRole && (
          <p className="mt-1 text-[11px] xl:text-sm 2xl:text-base font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
            {member.additionalRole}
          </p>
        )}
        {(member.shortBio || member.fullBio) && (
          <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-muted-foreground leading-snug break-words">
            {member.shortBio || member.fullBio}
          </p>
        )}
      </div>
    </div>
  );
}

function AdvisoryCard({ member }: { member: WhoWeAreMember }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <MemberPhoto src={member.profileImage} alt={member.name} />

          <div className="flex flex-1 flex-col p-3 sm:p-5 text-center">
            <div className="flex items-start justify-center gap-1.5">
              <h3 className="text-xs sm:text-base xl:text-lg font-bold text-foreground leading-tight">
                {member.name}
              </h3>
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 text-[#0A66C2] hover:opacity-80 transition-opacity shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
            </div>
            <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
              {member.designation}
            </p>
            {member.additionalRole && (
              <p className="mt-1 text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 leading-snug">
                {member.additionalRole}
              </p>
            )}
            {member.organization && (
              <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-muted-foreground leading-snug break-words">
                {member.organization}
              </p>
            )}
            {member.fullBio && (
              <div className="mt-auto pt-3 sm:pt-4">
                <span className="inline-block text-[10px] sm:text-xs font-medium text-secondary group-hover:text-secondary/80 transition-colors">
                  Read Full Bio →
                </span>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-md">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-secondary bg-muted">
              {member.profileImage ? (
                <Image src={member.profileImage} alt={member.name} fill className="object-cover" />
              ) : null}
            </div>
            <div className="text-left">
              <DialogTitle className="text-lg xl:text-2xl 2xl:text-3xl font-bold text-foreground flex items-center gap-3">
                {member.name}
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                )}
              </DialogTitle>
              <p className="text-xs xl:text-sm 2xl:text-base font-semibold text-emerald-500">
                {member.designation}
              </p>
              {member.additionalRole && (
                <p className="text-xs xl:text-sm 2xl:text-base font-semibold text-emerald-500 mt-0.5">
                  {member.additionalRole}
                </p>
              )}
              {member.organization && (
                <p className="text-xs sm:text-sm xl:text-base text-muted-foreground mt-1 leading-snug">
                  {member.organization}
                </p>
              )}
            </div>
          </div>
        </DialogHeader>
        {member.fullBio && (
          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            <DialogDescription className="text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {member.fullBio}
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function MemberPhoto({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm font-medium px-4 text-center">
          {alt}
        </div>
      )}
    </div>
  );
}
