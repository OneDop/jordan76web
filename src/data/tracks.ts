import type { HackathonTrack } from '../types';
import ammanImg from '../assets/amman-evidence.jpg';
import irbidImg from '../assets/irbid-evidence.jpg';
import petraImg from '../assets/petra-evidence.jpg';

export const HACKATHON_TRACKS: HackathonTrack[] = [
  {
    id: 'track-amman',
    number: '01',
    site: 'Amman',
    title: 'Autonomous Urban Grid & Mobility',
    tagline: 'Smart energy · Zero-emission transit',
    image: ammanImg,
    focus: '50% 55%',
    signalCode: 'SIG-AMM-2076-01',
    coordinates: '31.9539° N, 35.9106° E',
    status: 'DECODED',
    briefing:
      'The intercept shows cascading grid overload across the seven hills, peaking during the evening transit surge. Build present-day systems that keep it from happening: AI micro-grid balancing, and dispatch that routes zero-emission fleets around demand instead of into it.',
    deliverables: [
      'Micro-grid load-balancing simulation with a public API',
      'Autonomous route optimisation engine for mixed fleets',
      'Operator dashboard for decentralised energy telemetry',
    ],
    prize: '20,000 JOD + incubation pass',
  },
  {
    id: 'track-irbid',
    number: '02',
    site: 'Irbid',
    title: 'Bio-Agritech & Water Security',
    tagline: 'Hydro-modelling · Sensor networks',
    image: irbidImg,
    focus: '50% 50%',
    signalCode: 'SIG-IRB-2076-02',
    coordinates: '32.5568° N, 35.8469° E',
    status: 'PARTIAL',
    briefing:
      'Telemetry from the northern farms indicates severe hydro-stress well before 2060, with yield collapse following roughly a decade behind. Teams build the early-warning layer: low-cost sensing at the plant, predictive modelling above it, and distribution logic that acts on both.',
    deliverables: [
      'Predictive hydro-stress model trained on open climate data',
      'Edge firmware for low-power soil and canopy sensors',
      'Water allocation matrix balancing yield against reserve',
    ],
    prize: '15,000 JOD + research grant',
  },
  {
    id: 'track-petra',
    number: '03',
    site: 'Petra',
    title: 'Quantum Energy & Heritage Ledger',
    tagline: 'Post-quantum crypto · Spatial capture',
    image: petraImg,
    focus: '50% 38%',
    signalCode: 'SIG-PET-2076-03',
    coordinates: '30.3285° N, 35.4444° E',
    status: 'ENCRYPTED',
    briefing:
      'Anomalous signatures read out of the Treasury bedrock, carrying what appears to be an archival payload. The task is preservation under adversarial conditions: storage that survives a quantum-capable attacker, and a spatial record accurate enough to rebuild from.',
    deliverables: [
      'Post-quantum encrypted archive with verifiable integrity',
      'Photogrammetry pipeline producing a 3D heritage record',
      'Distributed node protocol for tamper-evident custody',
    ],
    prize: '15,000 JOD + global accelerator entry',
  },
];
