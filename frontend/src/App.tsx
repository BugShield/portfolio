import { LanguageProvider } from './features/landing/i18n/LanguageContext';
import { LandingPage } from './features/landing/pages/LandingPage';

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

export default App;
