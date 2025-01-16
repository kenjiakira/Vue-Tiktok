interface IPAPIResponse {
  countryCode: string;
  status: string;
}

const CACHE_KEY = 'user_country';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; 

export async function detectUserCountry(): Promise<string> {
 
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { country, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return country;
    }
  }

  try {

    const response = await fetch('http://ip-api.com/json/?fields=countryCode,status');
    const data: IPAPIResponse = await response.json();
    
    if (data.status === 'success') {
 
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        country: data.countryCode,
        timestamp: Date.now()
      }));
      
      return data.countryCode;
    }
    throw new Error('Failed to detect country');
  } catch (error) {
    console.error('Error detecting country:', error);
    return 'US'; 
  }
}
