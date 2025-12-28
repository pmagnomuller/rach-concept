export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-serif text-xl font-medium tracking-wide text-foreground">
            RachConcept
          </div>

          {/* Tagline */}
          <p className="font-serif text-muted italic">
            Just add a belt!
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} RachConcept. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

