"use client";
import { useCallback, useEffect, useState } from "react";
import { hasConsent, setConsent } from "simpler-cookie-consent"; 
import { Button } from "./Button";

export function useHasConsent(name: string) {
  const [consent, updateConsent] = useState(false);

  useEffect(() => {
    const unsubscribe = hasConsent(name).subscribe((hasConsent) => {
      if (consent !== hasConsent) updateConsent(hasConsent);
    });
    return unsubscribe;
  }, []);

  return { consent };
}

export function HasConsent({ name, children, fallback }: {
  name: string,
  children: React.ReactNode,
  fallback?: React.ReactNode,
}) {
  const { consent } = useHasConsent(name);

  const activate = () => {};

  return consent ? children : fallback;
}

export function SetConsent({ name }: {
  name: string
}) {

  const activate = () => {
    setConsent(name);
  };

  return <Button onClick={activate}>Allow {name}</Button>;
}