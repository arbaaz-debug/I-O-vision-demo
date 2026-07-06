import { useState } from 'react';
import { AppHeader } from './pages/AppHeader';
import { Home } from './pages/Home';
import { PlantView } from './three/PlantView';
import { UseCaseMasterView } from './pages/UseCaseMasterView';
import { Dashboard } from './pages/Dashboard';
import { USE_CASE_BY_ID, UseCaseId } from './core/tokens';

type View = 'home' | 'plant' | 'usecase' | 'dashboard';

export function App() {
  const [view, setView] = useState<View>('home');
  const [currentUseCase, setCurrentUseCase] = useState<UseCaseId>('safety_gear');
  const [dashboardUseCase, setDashboardUseCase] = useState<UseCaseId | 'all'>('all');
  const [dashboardCamera, setDashboardCamera] = useState<string | null>(null);
  const [dashboardFocusList, setDashboardFocusList] = useState(false);
  const [ucFromPlant, setUcFromPlant] = useState(false);

  const headerTitle =
    view === 'plant' ? 'Plant Operations Map'
    : view === 'usecase' ? USE_CASE_BY_ID[currentUseCase].name
    : 'Vision Dashboard';

  const goHome = () => setView('home');
  const goPlant = () => setView('plant');
  const goUseCase = (uc: UseCaseId, fromPlant: boolean) => {
    setCurrentUseCase(uc); setUcFromPlant(fromPlant); setView('usecase');
  };
  const goDashboard = (uc: UseCaseId | 'all' = 'all') => {
    setDashboardUseCase(uc); setDashboardCamera(null); setDashboardFocusList(false); setView('dashboard');
  };
  const goDashboardViolations = (camera?: string) => {
    setDashboardUseCase(currentUseCase); setDashboardCamera(camera ?? null); setDashboardFocusList(true); setView('dashboard');
  };
  const onBack = () => {
    if (view === 'dashboard') goUseCase(currentUseCase, ucFromPlant);
    else if (view === 'usecase') (ucFromPlant ? goPlant() : goHome());
    else goHome();
  };

  return (
    <>
      {view !== 'home' && <AppHeader title={headerTitle} showBack onBack={onBack} />}

      {view === 'home' && <Home onShowDemo={goPlant} onSelectUseCase={(id) => goUseCase(id, false)} />}

      {view === 'plant' && (
        <div className="h-[calc(100vh-57px)] w-full">
          <PlantView onSelectUseCase={(id) => goUseCase(id, true)} />
        </div>
      )}

      {view === 'usecase' && (
        <div className="h-[calc(100vh-57px)] w-full">
          <UseCaseMasterView
            useCaseId={currentUseCase}
            onViewDashboard={() => goDashboard(currentUseCase)}
            onViewViolations={(cam) => goDashboardViolations(cam)}
          />
        </div>
      )}

      {view === 'dashboard' && (
        <Dashboard initialUseCase={dashboardUseCase} initialCamera={dashboardCamera} focusList={dashboardFocusList} />
      )}
    </>
  );
}
