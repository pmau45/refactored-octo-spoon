'use client';

import { useEffect, useState } from 'react';

interface OpenModalButtonProps {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

/**
 * Button that opens the global intake modal.
 * Communicates with SiteLayout via a custom event.
 */
export default function OpenModalButton({
  className = '',
  children,
  ariaLabel,
}: OpenModalButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    // Dispatch a custom event that SiteLayout listens for
    window.dispatchEvent(new CustomEvent('open-intake-modal'));
  };

  if (!mounted) {
    // SSR placeholder to avoid hydration mismatch
    return (
      <button className={className} aria-label={ariaLabel} disabled>
        {children}
      </button>
    );
  }

  return (
    <button className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
