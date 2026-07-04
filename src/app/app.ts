import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppView, Incident } from './data/model';
import { UseCaseId } from './core/tokens';
import { Evidence } from './components/single-camera-view/single-camera-view.types';
import { SingleCameraViewComponent } from './components/single-camera-view/single-camera-view.component';
import { AppHeaderComponent } from './pages/app-header.component';
import { HomeComponent } from './pages/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { PlantViewComponent } from './three/plant-view.component';
import { UseCaseMasterViewComponent } from './pages/usecase-master-view.component';
import { USE_CASE_BY_ID } from './core/tokens';
import { incidentToEvidence } from './data/evidence-adapter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SingleCameraViewComponent, AppHeaderComponent, HomeComponent, DashboardComponent, PlantViewComponent, UseCaseMasterViewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header-bar
      *ngIf="view !== 'home'"
      [title]="headerTitle"
      [showBack]="true"
      (back)="onBack()"
    ></app-header-bar>

    <app-home
      *ngIf="view === 'home'"
      (showDemo)="goPlant()"
      (selectUseCase)="goUseCase($event, false)"
    ></app-home>
    <div *ngIf="view === 'plant'" class="h-[calc(100vh-57px)] w-full">
      <app-plant-view (selectUseCase)="goUseCase($event, true)"></app-plant-view>
    </div>
    <div *ngIf="view === 'usecase'" class="h-[calc(100vh-57px)] w-full">
      <app-usecase-master-view
        [useCaseId]="currentUseCase"
        (viewDashboard)="goDashboard(currentUseCase)"
        (viewViolations)="goDashboardViolations($event)"
      ></app-usecase-master-view>
    </div>
    <app-dashboard
      *ngIf="view === 'dashboard'"
      [initialUseCase]="dashboardUseCase"
      [initialCamera]="dashboardCamera"
      [focusList]="dashboardFocusList"
      (openIncident)="openWidget($event)"
    ></app-dashboard>

    <app-single-camera-view
      *ngIf="modalEvidences.length && modalIndex !== null"
      [evidence]="modalEvidences[modalIndex]"
      [currentIndex]="modalIndex"
      [totalEvidences]="modalEvidences.length"
      (close)="closeWidget()"
      (next)="modalNext()"
      (previous)="modalPrev()"
      (goLive)="noop('goLive')"
      (snapshot)="noop('snapshot')"
      (exportClip)="noop('exportClip')"
    ></app-single-camera-view>
  `,
})
export class App {
  view: AppView = 'home';
  dashboardUseCase: UseCaseId | 'all' = 'all';
  dashboardCamera: string | null = null;
  dashboardFocusList = false;
  currentUseCase: UseCaseId = 'safety_gear';

  modalEvidences: Evidence[] = [];
  modalIndex: number | null = null;

  /** whether the current use-case view was reached from the 3D plant map */
  private ucFromPlant = false;

  get headerTitle(): string {
    if (this.view === 'plant') return 'Plant Operations Map';
    if (this.view === 'usecase') return USE_CASE_BY_ID[this.currentUseCase].name;
    return 'Vision Dashboard';
  }

  goHome(): void { this.view = 'home'; this.closeWidget(); }
  goPlant(): void { this.view = 'plant'; this.closeWidget(); }
  goUseCase(useCase: UseCaseId, fromPlant: boolean): void {
    this.currentUseCase = useCase;
    this.ucFromPlant = fromPlant;
    this.view = 'usecase';
    this.closeWidget();
  }
  goDashboard(useCase: UseCaseId | 'all' = 'all'): void {
    this.dashboardUseCase = useCase;
    this.dashboardCamera = null;
    this.dashboardFocusList = false;
    this.view = 'dashboard';
  }
  /** Deep-link into the dashboard's non-compliance list (optionally camera-filtered). */
  goDashboardViolations(camera?: string): void {
    this.dashboardUseCase = this.currentUseCase;
    this.dashboardCamera = camera ?? null;
    this.dashboardFocusList = true;
    this.view = 'dashboard';
  }
  onBack(): void {
    if (this.view === 'dashboard') this.goUseCase(this.currentUseCase, this.ucFromPlant);
    else if (this.view === 'usecase') this.ucFromPlant ? this.goPlant() : this.goHome();
    else this.goHome();
  }

  openWidget(payload: { incident: Incident; scoped: Incident[] }): void {
    // build the camera-scoped evidence list so widget prev/next walks this camera's incidents
    const sorted = [...payload.scoped].sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    this.modalEvidences = sorted.map(incidentToEvidence);
    this.modalIndex = Math.max(0, sorted.findIndex((i) => i.id === payload.incident.id));
  }
  closeWidget(): void { this.modalEvidences = []; this.modalIndex = null; }
  modalNext(): void { if (this.modalIndex !== null && this.modalIndex < this.modalEvidences.length - 1) this.modalIndex++; }
  modalPrev(): void { if (this.modalIndex !== null && this.modalIndex > 0) this.modalIndex--; }

  noop(which: string): void { console.log(`[demo] ${which} — placeholder`); }
}
