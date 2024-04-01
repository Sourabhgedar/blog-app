
export const getSourceData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sources?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
      const data = await res.json();
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; 
    }
  }
  