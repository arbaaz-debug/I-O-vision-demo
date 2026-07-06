import { SceneId } from '../data/model';

const SCENES: Record<string, JSX.Element> = {
  lab: (
    <g>
      <rect width="100" height="75" fill="#E7EDF3" />
      <rect x="6" y="40" width="34" height="20" rx="2" fill="#C7D2DE" />
      <rect x="60" y="40" width="34" height="20" rx="2" fill="#C7D2DE" />
      <rect x="0" y="60" width="100" height="15" fill="#B8C4D2" />
      <circle cx="23" cy="36" r="5" fill="#94A3B8" />
      <circle cx="77" cy="36" r="5" fill="#94A3B8" />
    </g>
  ),
  cooling_tower: (
    <g>
      <rect width="100" height="75" fill="#DBE4EC" />
      <rect x="0" y="55" width="100" height="20" fill="#9AA8B5" />
      <rect x="10" y="18" width="26" height="40" fill="#B6C2CE" />
      <rect x="64" y="22" width="24" height="36" fill="#B6C2CE" />
      <rect x="30" y="50" width="40" height="6" fill="#EF4444" opacity="0.8" />
      <circle cx="50" cy="44" r="4" fill="#64748B" />
    </g>
  ),
  factory: (
    <g>
      <rect width="100" height="75" fill="#E4E9EF" />
      <rect x="0" y="58" width="100" height="17" fill="#AEB9C6" />
      <rect x="8" y="30" width="84" height="6" fill="#9AA8B5" />
      <circle cx="30" cy="50" r="5" fill="#64748B" />
      <circle cx="58" cy="50" r="5" fill="#64748B" />
      <rect x="74" y="38" width="16" height="20" fill="#C7D2DE" />
    </g>
  ),
  road: (
    <g>
      <rect width="100" height="75" fill="#DDE3EA" />
      <rect x="0" y="50" width="100" height="25" fill="#7E8B99" />
      <rect x="20" y="61" width="12" height="2" fill="#FACC15" />
      <rect x="46" y="61" width="12" height="2" fill="#FACC15" />
      <rect x="72" y="61" width="12" height="2" fill="#FACC15" />
      <rect x="40" y="40" width="22" height="12" rx="2" fill="#475569" />
    </g>
  ),
  loading_bay: (
    <g>
      <rect width="100" height="75" fill="#E2E8F0" />
      <rect x="0" y="55" width="100" height="20" fill="#A3AEBC" />
      <rect x="10" y="20" width="30" height="35" fill="#C7D2DE" />
      <rect x="55" y="26" width="35" height="29" fill="#B6C2CE" />
      <rect x="55" y="40" width="35" height="3" fill="#94A3B8" />
    </g>
  ),
  gate: (
    <g>
      <rect width="100" height="75" fill="#DCE3EB" />
      <rect x="0" y="58" width="100" height="17" fill="#9AA8B5" />
      <rect x="14" y="22" width="6" height="36" fill="#64748B" />
      <rect x="80" y="22" width="6" height="36" fill="#64748B" />
      <rect x="20" y="34" width="60" height="4" fill="#EF4444" />
      <circle cx="50" cy="48" r="4" fill="#475569" />
    </g>
  ),
};

export function SceneThumb({
  scene,
  bbox,
  color,
  showPlay = false,
  width = 80,
  height = 60,
}: {
  scene: SceneId;
  bbox: { x: number; y: number; w: number; h: number };
  color: string;
  showPlay?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 75"
      className="rounded-[6px] ring-1 ring-black/5"
      preserveAspectRatio="xMidYMid slice"
    >
      {SCENES[scene] ?? <rect width="100" height="75" fill="#CBD5E1" />}
      <rect x={bbox.x} y={bbox.y * 0.75} width={bbox.w} height={bbox.h * 0.75} fill="none" stroke={color} strokeWidth="1.5" />
      <rect x={bbox.x} y={bbox.y * 0.75} width={bbox.w} height={bbox.h * 0.75} fill={color} opacity="0.18" />
      {showPlay && (
        <g>
          <circle cx="50" cy="37" r="11" fill="#0F172A" opacity="0.55" />
          <path d="M46 31 L58 37 L46 43 Z" fill="#FFFFFF" />
        </g>
      )}
    </svg>
  );
}
