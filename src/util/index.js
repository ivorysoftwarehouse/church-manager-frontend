
const getTimeDisplay = (timeString) => {
  return new Date('1970-01-01T' + timeString + 'Z')
    .toLocaleTimeString('en-US',
      {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
}

export {
  getTimeDisplay,
}
