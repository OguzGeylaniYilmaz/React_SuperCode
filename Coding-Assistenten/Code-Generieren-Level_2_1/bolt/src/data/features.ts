import { Feature } from '../types';
import { HeartHandshake, Zap, Music, Map } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Radical Matching',
    description: 'Our totally tubular algorithm finds your perfect match based on your awesome vibes and bodacious interests!',
    icon: HeartHandshake
  },
  {
    id: 2,
    title: 'Flash Chat',
    description: 'Communicate with lightning speed! Our neon-powered messaging system keeps conversations fresh and exciting!',
    icon: Zap
  },
  {
    id: 3,
    title: 'Mixtape Match',
    description: 'Share your favorite tracks and find someone who digs your musical taste. Like, music is the universal language!',
    icon: Music
  },
  {
    id: 4,
    title: 'Local Hotspots',
    description: 'Discover gnarly date locations near you with our radical map feature. Find the perfect spot to hang out!',
    icon: Map
  }
];