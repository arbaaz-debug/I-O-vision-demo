import { Evidence } from '../components/single-camera-view/single-camera-view.types';
import { USE_CASE_BY_ID } from '../core/tokens';
import { CAMERA_BY_ID } from './reference';
import { Incident } from './model';

/** Maps a dashboard Incident onto the Evidence shape the widget consumes. */
export function incidentToEvidence(inc: Incident): Evidence {
  const camera = CAMERA_BY_ID[inc.cameraId];
  return {
    id: `ev-${inc.id}`,
    cameraName: camera.name,
    zone: camera.zone,
    useCase: USE_CASE_BY_ID[inc.useCaseId].name,
    severity: inc.severity,
    message: inc.message,
    timestamp: inc.timestamp,
    clipDurationSec: 6,
    windowMinutes: 5,
    plantName: 'Pune Plant 2',
  };
}
