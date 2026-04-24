// src/types.ts

// Define TypeScript types used in the Auto DJ Application

type Track = {
    id: string;
    title: string;
    artist: string;
    duration: number;
};

type Playlist = {
    name: string;
    tracks: Track[];
};

export { Track, Playlist };