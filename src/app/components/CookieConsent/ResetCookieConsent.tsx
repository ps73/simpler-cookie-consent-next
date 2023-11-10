"use client";
import { reset } from 'simpler-cookie-consent';
import { Button } from './Button';

export function ResetCookieConsent() {
  return (
    <Button onClick={() => reset()}>
      Reset Cookie Consent
    </Button>
  );
}