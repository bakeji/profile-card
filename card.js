const currentUtcTime = document.querySelector('[data-testid="test-user-time"]');
const currentDate =new  Date();
const currentTime = currentDate.getUTCMilliseconds()

currentUtcTime.textContent = currentTime;