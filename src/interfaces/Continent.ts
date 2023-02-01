export interface ContinentData {
  id: string;
  title: string;
  summary: string;
  slider_image_url: string;
  banner_image_url: string;
  description: string;
  countries: number;
  languages: number;
  cities_info: number;
  most_famous_cities: string;
  cities_list: {
    name: string;
    country: string;
    thumbnail: string;
    flag_image_url: string;
  }[]
}