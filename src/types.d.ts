export interface FocusedDetails {
  blocked_pages: BlockedPage[];
  youtube_settings: YSettings;
  authenticated: boolean;
}

export interface BlockedPage {
  url: string;
  time_remaining: number;
  allocated_time: number;
}

export interface YSettings {
  show_comments: boolean;
  show_suggestions: boolean;
}
