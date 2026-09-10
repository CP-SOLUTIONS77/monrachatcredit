import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-heading font-semibold text-navy">Mon Rachat Crédit</p>
          <p className="mt-2 text-sm text-neutral-900/70">
            Un service de courtage porté par{" "}
            <a href="https://cpsolutions77.com" className="underline hover:text-navy">
              CP Solutions
            </a>
            , cabinet de courtage en assurances et en crédits à
            Montereau-Fault-Yonne.
          </p>
          <a href="https://cpsolutions77.com" aria-label="CP Solutions">
            <Image
              src="/photos/logo.png"
              alt="CP Solutions"
              width={608}
              height={220}
              className="mt-4 h-8 w-auto"
            />
          </a>
        </div>

        <div className="text-sm text-neutral-900/70">
          <p className="font-heading font-semibold text-neutral-900">Le cabinet</p>
          <p className="mt-2">35 rue Jean Jaurès</p>
          <p>77130 Montereau-Fault-Yonne</p>
          <a href="tel:+33164248345" className="mt-2 block text-navy">
            01 64 24 83 45
          </a>
          <a href="mailto:contact@cpsolutions77.com" className="text-navy">
            contact@cpsolutions77.com
          </a>
        </div>

        <div className="text-sm text-neutral-900/70">
          <p className="font-heading font-semibold text-neutral-900">Informations</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="https://monpretassure.fr" className="hover:text-navy">
                Assurance emprunteur
              </a>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-navy">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-navy">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-navy">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-100 px-6 py-4 text-center text-xs text-neutral-900/50">
        © {new Date().getFullYear()} CP Solutions — Courtier en opérations de banque
        et services de paiement (IOBSP), immatriculé ORIAS.
      </div>
    </footer>
  );
}
