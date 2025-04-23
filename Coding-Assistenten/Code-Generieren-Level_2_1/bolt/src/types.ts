export interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  testimonial: string;
  gender: 'male' | 'female';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}