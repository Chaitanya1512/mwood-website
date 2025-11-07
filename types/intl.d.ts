import en from '@/messages/en.json';

type Messages = typeof en;

// Extend the global IntlMessages type with the shape of our default (en) messages.
// Using a type alias instead of an empty interface extension to satisfy lint rule.
declare global {
  // Provide the merged key space for next-intl type safety.
  type IntlMessages = Messages;
}

export {};
