
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile'; 
import ResolverHeader from '@/components/layout/ResolverHeader';
import ResolverFooter from '@/components/layout/ResolverFooter';
import ResolverHero from '@/components/sections/ResolverHero';
import ResolverAbout from '@/components/sections/ResolverAbout';
import ResolverServices from '@/components/sections/ResolverServices';
import ResolverTestimonials from '@/components/sections/ResolverTestimonials';
import ResolverLocation from '@/components/sections/ResolverLocation';
import ResolverContact from '@/components/sections/ResolverContact';
import ResolverWhatsApp from '@/components/ui/ResolverWhatsApp';
import { motion } from 'framer-motion';

const Resolver = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Resolver - Soluções Elétricas Inteligentes | Toledo-PR';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Resolver oferece soluções elétricas inteligentes em Toledo-PR. Instalações residenciais e prediais, sistemas de segurança, CFTV, alarmes e iluminação LED.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Resolver - Soluções Elétricas Inteligentes",
      "description": "Empresa especializada em instalações elétricas residenciais e prediais, sistemas de segurança, CFTV e automação",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Almerico Angelo Sartori, 649",
        "addressRegion": "São Francisco",
        "addressLocality": "Toledo",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "telephone": "+5545999187722",
      "email": "rsolver2023@gmail.com",
      "url": window.location.href,
      "sameAs": ["https://www.instagram.com/eletricaresolver"],
      "foundingDate": "2023-05",
      "serviceArea": "Toledo-PR"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Smooth scroll function for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offset = isMobile ? 70 : 80;
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - offset,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
      // Remove structured data script
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <ResolverHeader />
      <main className="space-y-0">
        <ResolverHero />
        <ResolverAbout />
        <ResolverServices />
        <ResolverTestimonials />
        <ResolverLocation />
        <ResolverContact />
      </main>
      <ResolverWhatsApp />
      <ResolverFooter />
    </motion.div>
  );
};

export default Resolver;
