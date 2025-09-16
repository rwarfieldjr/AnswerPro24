import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogType = "website",
  ogImage = "/api/placeholder/1200/630",
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "description", description);
    
    if (keywords.length > 0) {
      updateMetaTag("name", "keywords", keywords.join(", "));
    }

    // Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:type", ogType);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:url", canonicalUrl || window.location.href);
    updateMetaTag("property", "og:site_name", "AnswerPro 24");

    // Twitter Card tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      updateCanonicalTag(canonicalUrl);
    }

    // Structured Data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
}

function updateMetaTag(attributeType: string, attribute: string, content: string) {
  let element = document.querySelector(`meta[${attributeType}="${attribute}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeType, attribute);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
}

function updateCanonicalTag(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  
  element.setAttribute("href", url);
}

function updateStructuredData(data: object) {
  const id = "structured-data";
  let element = document.getElementById(id) as HTMLScriptElement;
  
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("id", id);
    element.setAttribute("type", "application/ld+json");
    document.head.appendChild(element);
  }
  
  element.textContent = JSON.stringify(data);
}