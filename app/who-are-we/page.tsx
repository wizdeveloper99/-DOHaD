export const revalidate = 60;

import { Header } from "@/components/header";
import { WhoWeAreContent } from "@/components/who-we-are-content";
import dbConnect from "@/lib/mongodb";
import AdvisoryMember from "@/lib/models/AdvisoryMember";
import SiteSettings from "@/lib/models/SiteSettings";
import { normalizeWhoWeArePageSettings } from "@/lib/who-we-are-defaults";

async function getPageData() {
  try {
    await dbConnect();
    const [members, settings] = await Promise.all([
      AdvisoryMember.find().sort({ displayOrder: 1 }).lean(),
      SiteSettings.findOne({}).lean(),
    ]);
    return {
      members: JSON.parse(JSON.stringify(members)),
      pageContent: normalizeWhoWeArePageSettings(settings?.whoWeArePage),
    };
  } catch (error) {
    console.error("Failed to fetch who-we-are page data:", error);
    return {
      members: [],
      pageContent: normalizeWhoWeArePageSettings(null),
    };
  }
}

export default async function WhoAreWePage() {
  const { members, pageContent } = await getPageData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhoWeAreContent pageContent={pageContent} members={members} />
    </div>
  );
}
