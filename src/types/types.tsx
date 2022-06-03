export interface IApart {
  id?: string;
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
}
export interface ICardProps {
    city: string;
    guests: number;
    kids: number;
  }



