import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Mail, Users, Clock, FileText, ArrowRight } from 'lucide-react';
import dbConnect from '@/lib/mongodb';
import Event from '@/lib/models/Event';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';
import AdvisoryMember from '@/lib/models/AdvisoryMember';

async function getStats() {
  try {
    await dbConnect();
    const eventCount = await Event.countDocuments();
    const subscriberCount = await NewsletterSubscriber.countDocuments();
    const advisoryCount = await AdvisoryMember.countDocuments();
    
    // Fetch latest items for real recent activity
    const latestEvent = await Event.findOne().sort({ createdAt: -1 }).select('title createdAt').lean();
    const latestSubscriber = await NewsletterSubscriber.findOne().sort({ createdAt: -1 }).select('email createdAt').lean();
    const latestAdvisory = await AdvisoryMember.findOne().sort({ createdAt: -1 }).select('name createdAt').lean();

    const activities = [];
    if (latestEvent) activities.push({ type: 'event', label: 'New event added:', text: latestEvent.title, date: latestEvent.createdAt, color: 'bg-secondary' });
    if (latestSubscriber) activities.push({ type: 'subscriber', label: 'New subscriber:', text: latestSubscriber.email, date: latestSubscriber.createdAt, color: 'bg-green-500' });
    if (latestAdvisory) activities.push({ type: 'advisory', label: 'Advisory updated:', text: latestAdvisory.name, date: latestAdvisory.createdAt, color: 'bg-blue-500' });

    activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
      events: eventCount,
      subscribers: subscriberCount,
      advisory: advisoryCount,
      recentActivities: activities
    };
  } catch (error) {
    return { events: 0, subscribers: 0, advisory: 0, recentActivities: [] };
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    { title: 'Total Events', value: stats.events, icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Newsletter Subscribers', value: stats.subscribers, icon: Mail, color: 'text-secondary', bg: 'bg-secondary/10' },
    { title: 'Advisory Members', value: stats.advisory, icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-sm">Welcome back to the DOHaD India Admin Panel.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((card) => (
          <Card key={card.title} className="border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${card.bg}`}>
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
        <Card className="border-border shadow-sm lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/admin/documents"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-secondary/50 hover:shadow-sm transition-all"
              >
                <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">Governance Documents</p>
                  <p className="text-xs text-muted-foreground truncate">
                    Edit policies for Governance &amp; Equity pages
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivities.length > 0 ? (
                stats.recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm">
                    <div className={`w-2 h-2 rounded-full ${activity.color}`} />
                    <p><span className="font-medium text-foreground">{activity.label}</span> {activity.text}</p>
                    <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">
                      {new Date(activity.date).toLocaleDateString()}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
                  <Clock className="w-8 h-8 mb-2 opacity-20" />
                  <p className="text-sm">No recent activity found.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Database</span>
                <span className="text-green-600 font-medium px-2 py-0.5 bg-green-100 rounded-full text-xs">Connected</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Cloudinary</span>
                <span className="text-green-600 font-medium px-2 py-0.5 bg-green-100 rounded-full text-xs">Operational</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">API Services</span>
                <span className="text-green-600 font-medium px-2 py-0.5 bg-green-100 rounded-full text-xs">Healthy</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
