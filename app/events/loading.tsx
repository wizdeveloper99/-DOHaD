import { Header } from "@/components/header"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto pb-12">
        <div className="text-center mb-12 px-6 max-w-6xl mx-auto pt-12">
          <div className="h-12 w-3/4 max-w-lg mx-auto bg-muted rounded-lg animate-pulse mb-6"></div>
          <div className="h-6 w-full max-w-2xl mx-auto bg-muted rounded-lg animate-pulse"></div>
          <div className="h-6 w-5/6 max-w-xl mx-auto bg-muted rounded-lg animate-pulse mt-2"></div>
        </div>

        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <div className="h-10 w-64 mx-auto bg-muted rounded-lg animate-pulse mb-3"></div>
            <div className="h-5 w-48 mx-auto bg-muted rounded-lg animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-[400px]">
                <div className="relative aspect-video w-full bg-muted animate-pulse"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4">
                    <div className="h-5 w-20 bg-muted rounded-full animate-pulse"></div>
                    <div className="h-5 w-24 bg-muted rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-7 w-full bg-muted rounded-md animate-pulse mb-3"></div>
                  <div className="h-7 w-2/3 bg-muted rounded-md animate-pulse mb-4"></div>
                  <div className="h-16 w-full bg-muted rounded-md animate-pulse mb-auto"></div>
                  <div className="pt-4 border-t flex justify-between mt-4">
                    <div className="h-4 w-24 bg-muted rounded-md animate-pulse"></div>
                    <div className="h-4 w-20 bg-muted rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
