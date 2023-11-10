"use client";
import { useEffect } from 'react';
import { mount, setSettings } from 'simpler-cookie-consent';

import 'simpler-cookie-consent/style.css';

export function CookieConsent() {
  useEffect(() => {
    setSettings({
      "id": "c81723892",
      "categories": {
        "Functional": "Essenziell",
        "Analytics": "Statistiken",
        "Marketing": "Marketing"
      },
      "content": {
        "title": "Cookie Einstellungen",
        "paragraph": "Diese Seite nutzt Website-Technologien von Dritten, um ihre Dienste anzubieten und diese stetig zu verbessern.",
        "categories": "Kategorien",
        "services": "Services",
        "links": [["Impressum", "/impressum"], ["Datenschutzerklärung", "/datenschutz"]],
        "more": "Mehr anzeigen",
        "moreShort": "Mehr",
        "less": "Weniger anzeigen",
        "save": "Einstellungen speichern",
        "disallow": "Ablehnen",
        "allow": "Alles akzeptieren",
        "cookies": {
          "name": "Cookie",
          "description": "Beschreibung",
          "retention": "Speicherdauer",
          "dataController": "Verarbeitendes Unternehmen",
          "domain": "Domain",
          "privacySettings": "Datenschutz",
          "notAvailable": "Keine Angabe",
          "yes": "Ja",
          "no": "Nein",
          "multiple": "Verwendet mehrere Cookies"
        }
      },
      "style": {
        "position": "tl",
        "hideScroll": true,
        "sameButtonColor": true
      },
      "cookies": [
        {
          "id": "custom1",
          "name": "Cookie Consent Settings",
          "category": "Functional",
          "cookieName": "_cc_s, _cc_i, _cc_acoo, _cc_aall",
          "domain": "Diese Website",
          "description": "Settings to inject cookies automatically after revisit until cookies were changed",
          "retentionPeriod": "1 year",
          "dataController": "Diese Website",
          "wildcardMatch": false
        },
        {
          "id": "256c18e8-d881-11e9-8a34-2a2ae2dbcce4",
          "name": "Google Analytics",
          "category": "Analytics",
          "cookieName": "_ga",
          "domain": "google-analytics.com (3rd party) or advertiser's website domain (1st party)",
          "description": "ID used to identify users",
          "retentionPeriod": "2 years",
          "dataController": "Google",
          "privacy": "https://privacy.google.com/take-control.html",
          "wildcardMatch": false
        },
        {
          "id": "256c1ae6-d881-11e9-8a34-2a2ae2dbcce4",
          "name": "Google Analytics",
          "category": "Analytics",
          "cookieName": "_gid",
          "domain": "google-analytics.com (3rd party) or advertiser's website domain (1st party)",
          "description": "ID used to identify users for 24 hours after last activity",
          "retentionPeriod": "24 hours",
          "dataController": "Google",
          "privacy": "https://privacy.google.com/take-control.html",
          "wildcardMatch": false
        },
        {
          "id": "0d249cd5-ae35-4dbb-ad00-d5ca46948619",
          "name": "Facebook",
          "category": "Marketing",
          "cookieName": "_fbp",
          "domain": "facebook.com (3rd party)",
          "description": "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers",
          "retentionPeriod": "4 months",
          "dataController": "Facebook",
          "privacy": "https://www.facebook.com/about/privacy/",
          "wildcardMatch": false
        },
        {
          "id": "f6f65358-15e8-4dcc-9014-13ae87d0e880",
          "name": "Google reCAPTCHA",
          "category": "Functional",
          "cookieName": "_GRECAPTCHA",
          "domain": "google.com",
          "description": "Google reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when executed for the purpose of providing its risk analysis.",
          "retentionPeriod": "179 days",
          "dataController": "Google",
          "privacy": "https://privacy.google.com/take-control.html",
          "wildcardMatch": false
        }
      ],
      "updatedAt": 1637138348746,
    });
    mount();
  }, []);
  
  return <div id="cc" />
}