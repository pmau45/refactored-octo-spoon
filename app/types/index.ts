/**
 * Shared TypeScript types and interfaces
 * Used across the application
 */

// Form-related types
export interface ClientIntakeFormData {
  dogName?: string;
  clientName: string;
  email: string;
  phone: string;
  trainingProgram: string;
  message?: string;
}

// Page metadata
export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
}

// Training program
export interface TrainingProgram {
  id: string;
  name: string;
  description: string;
  slug: string;
}

// Component props types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NavbarProps {
  onOpenModal?: () => void;
}

export interface FooterProps {
  className?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Event types for modal communication
export interface ModalEvent {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload?: Record<string, unknown>;
}
