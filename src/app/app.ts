import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppView, Incident } from './data/model';
import { UseCaseId } from './core/tokens';
import { Evidence } from './components/single-camera-view/single-camera-view.types';
import { SingleCameraViewComponent } from './components/single-camera-view/single-camera-view.component';
import { AppHeaderComponent } from './pages/app-header.component';
import { HomeComponent } from './pages/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { incidentToEvidence } from './data/evidence-adapter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SingleCameraViewComponent, AppHeaderComponent, HomeComponent, DashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header-bar
      *ngIf="view !== 'home'"
      [title]="'Vision Dashboard'"
      [showBack]="true"
      (back)="goHome()"
    ></app-header-bar>

    <app-home
      *ngIf="view === 'home'"
      (showDemo)="goDashboard()"
      (selectUseCase)="goDashboard($event)"
    ></app-home>
    <app-dashboard
      *ngIf="view === 'dashboard'"
      [initialUseCase]="dashboardUseCase"
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

  modalEvidences: Evidence[] = [];
  modalIndex: number | null = null;

  goHome(): void { this.view = 'home'; this.closeWidget(); }
  goDashboard(useCase: UseCaseId | 'all' = 'all'): void {
    this.dashboardUseCase = useCase;
    this.view = 'dashboard';
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
