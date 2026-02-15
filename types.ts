
export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'Men' | 'Women' | 'Trending';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface InspirationPin {
  id: string;
  pinUrl: string;
  imageUrl: string;
  category: 'Men Fashion' | 'Women Fashion' | 'Streetwear' | 'Minimal Style';
}
