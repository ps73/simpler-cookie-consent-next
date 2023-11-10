"use client";
import { reopen } from 'simpler-cookie-consent';
import { Button } from './Button';

export function ChangeCookieConsent() {
  return (
    <Button onClick={() => reopen()}>
      Change Cookie Consent
    </Button>
  );
}