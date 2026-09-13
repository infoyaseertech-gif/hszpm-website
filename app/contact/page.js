import PageHero from "@/components/UI/PageHero";

export const metadata = {
  title: "Contact — HSZPM",
  description: "Get in touch with HSZPM.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question, want to partner with us, or want to bring a programme to your community? Reach out."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-xl text-ink">
                Contact details
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-ink/50">Address</dt>
                  <dd className="mt-0.5 text-ink/80">
                    12 Unity Crescent, Central District
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/50">Phone</dt>
                  <dd className="mt-0.5 text-ink/80">+234 800 000 0000</dd>
                </div>
                <div>
                  <dt className="text-ink/50">Email</dt>
                  <dd className="mt-0.5 text-ink/80">info@hszpm.org</dd>
                </div>
                <div>
                  <dt className="text-ink/50">Office hours</dt>
                  <dd className="mt-0.5 text-ink/80">
                    Monday to Friday, 9am to 4pm
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-ink">Find us</h2>
              <div className="mt-4 aspect-[4/3] w-full rounded-md border border-line bg-green-light/60 flex flex-col items-center justify-center text-green-dark/70 text-sm">
                <svg viewBox="0 0 40 40" className="h-8 w-8 mb-2" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M20 36s12-10.6 12-19a12 12 0 10-24 0c0 8.4 12 19 12 19z" />
                  <circle cx="20" cy="17" r="4.2" />
                </svg>
                Map placeholder — embed will go here
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border border-line rounded-md bg-white p-6 sm:p-8">
              <h2 className="font-display font-bold text-xl text-ink">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-ink/60">
                This form is a preview only for now — sending isn't connected yet.
              </p>

              <form className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink/80 mb-1.5">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm placeholder:text-ink/40 focus:border-green outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-1.5">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm placeholder:text-ink/40 focus:border-green outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm placeholder:text-ink/40 focus:border-green outline-none resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-green px-6 py-3 text-[15px] font-medium text-white hover:bg-green-dark transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
