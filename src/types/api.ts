export interface BizCategory {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface AddressLocation {
  address1: string;
  address2: string | null;
  address3: string | null;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
  cross_streets?: string | null;
}

export interface Schedule {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

export interface DailyOpenHours {
  open: Schedule[];
  hours_type: string;
  is_open_now: boolean;
}

export interface BusinessSummary {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: BizCategory[];
  rating: number;
  coordinates: Coordinates;
  transactions: string[];
  price?: string;
  AddressLocation: AddressLocation;
  phone: string;
  display_phone: string;
  distance: number;
}

export interface BusinessSearchResponse {
  businesses: BusinessSummary[];
  total: number;
  region: {
    [x: string]: Coordinates;
  };
}

export interface BusinessDetails {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: BizCategory[];
  rating: number;
  location: AddressLocation;
  coordinates: Coordinates;
  photos: string[];
  price: string;
  hours: DailyOpenHours[];
  transactions: string[];
}
