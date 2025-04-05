// helpers.js

export const formatDayTime = (dateString : string) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  export const fahrenheitToCelsius = (f: number) => Math.round((f - 32) * 5 / 9);


  export const getBackgroundColor = (temp : number) => {
    const fTemp = fahrenheitToCelsius(temp);
    if (fTemp) return '#B0E0E6';
    if (fTemp < 10) return '#ADD8E6';
    if (fTemp < 20) return '#90EE90';
    if (fTemp < 30) return '#FFD700';
    return '#FF8C00';
  };
  