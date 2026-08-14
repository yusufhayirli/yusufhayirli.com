const siteUrl = "https://yusufhayirli.com";
const personId = `${siteUrl}/#person`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Yusuf Hayırlı",
      alternateName: "Yusuf Hayirli",
      description:
        "Portfolio of Yusuf Hayırlı, a full-stack software engineer focused on commerce products, web platforms and delivery systems.",
      inLanguage: ["en", "tr"],
      publisher: { "@id": personId }
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Yusuf Hayırlı — Full-Stack Software Engineer",
      description:
        "Professional portfolio covering full-stack engineering, global commerce, product analytics and independent delivery.",
      inLanguage: ["en", "tr"],
      dateModified: "2026-08-14",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": personId }
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Yusuf Hayırlı",
      alternateName: "Yusuf Hayirli",
      url: siteUrl,
      jobTitle: "Full-Stack Software Engineer",
      description:
        "Full-stack software engineer building commerce products, web platforms and durable delivery systems.",
      homeLocation: {
        "@type": "Place",
        name: "Adana, Türkiye"
      },
      sameAs: [
        "https://www.linkedin.com/in/yusufhayirli/",
        "https://github.com/yusufhayirli"
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        ".NET",
        "C#",
        "Node.js",
        "REST APIs",
        "GraphQL",
        "Salesforce Commerce Cloud",
        "Google Tag Manager",
        "Google Analytics 4",
        "PostgreSQL",
        "Docker",
        "CI/CD",
        "Web accessibility"
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Salesforce Certified B2C Commerce Developer",
          credentialCategory: "Professional certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Salesforce",
            url: "https://www.salesforce.com"
          },
          url: `${siteUrl}/assets/documents/Cert2611483_B2CCommerceDeveloper_20221002.pdf`
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Salesforce Certified Associate",
          credentialCategory: "Professional certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Salesforce",
            url: "https://www.salesforce.com"
          },
          url: `${siteUrl}/assets/documents/Cert3368530_Associate_20230504.pdf`
        }
      ]
    }
  ]
};

export function StructuredData() {
  const serializedData = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedData }}
    />
  );
}
