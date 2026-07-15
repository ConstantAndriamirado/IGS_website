export interface PortalClientSettings {
  buttonLabel: string;
  url: string;
  openInNewTab: boolean;
  enabled: boolean;
  infoMessage: string;
  buttonColor: string;
}

export const defaultPortalClientSettings: PortalClientSettings = {
  buttonLabel: 'Portail Client',
  url: 'https://portail.igs-guinee.com',
  openInNewTab: true,
  enabled: true,
  infoMessage: 'Accédez à votre espace sécurisé IGS pour suivre vos expéditions.',
  buttonColor: 'bg-[#E85E27]'
};

const STORAGE_KEY = 'igs_portal_client_settings';
export const PORTAL_SETTINGS_EVENT = 'igs-portal-settings-updated';

export function loadPortalClientSettings(): PortalClientSettings {
  if (typeof window === 'undefined') {
    return defaultPortalClientSettings;
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) {
      return defaultPortalClientSettings;
    }

    const parsed = JSON.parse(storedValue) as Partial<PortalClientSettings>;
    return {
      ...defaultPortalClientSettings,
      ...parsed
    };
  } catch {
    return defaultPortalClientSettings;
  }
}

export function savePortalClientSettings(settings: PortalClientSettings): PortalClientSettings {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    window.dispatchEvent(new Event(PORTAL_SETTINGS_EVENT));
  }

  return settings;
}

export function resetPortalClientSettings(): PortalClientSettings {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(PORTAL_SETTINGS_EVENT));
  }

  return { ...defaultPortalClientSettings };
}

export function subscribePortalClientSettings(listener: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener(PORTAL_SETTINGS_EVENT, listener);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener(PORTAL_SETTINGS_EVENT, listener);
    window.removeEventListener('storage', handleStorage);
  };
}

export function getPortalClientButtonLabel(language: string, settings: PortalClientSettings): string {
  if (settings.buttonLabel?.trim()) {
    return settings.buttonLabel;
  }

  return language === 'fr' ? 'Portail Client' : 'Client Portal';
}
