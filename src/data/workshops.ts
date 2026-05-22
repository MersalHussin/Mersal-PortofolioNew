export interface Workshop {
  id: string;
  title: string;
  titleAr: string;
  attendees: number;
  recordingUrl?: string;
  reviewUrl?: string;
}

export const workshops: Workshop[] = [
  {
    id: "ui-ux-flare",
    title: "UI UX Flare",
    titleAr: "ولعة UI UX",
    attendees: 20,
    reviewUrl: "https://youtube.com/shorts/IVPkCDxblWo",
  },
  {
    id: "front-flare",
    title: "Front-end Flare",
    titleAr: "ولعة فرونت",
    attendees: 40,
    recordingUrl: "https://youtu.be/nIy8wMwSd_E",
    reviewUrl: "https://youtu.be/Sl481zvoYoc",
  },
];
