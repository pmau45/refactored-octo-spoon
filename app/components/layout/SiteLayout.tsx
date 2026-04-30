'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import IntakeModal from '../forms/IntakeModal';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-intake-modal', handleOpenModal);
    return () => window.removeEventListener('open-intake-modal', handleOpenModal);
  }, []);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main className="pt-20 min-h-screen" id="main-content">
        {children}
      </main>
      <Footer />
      <IntakeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
