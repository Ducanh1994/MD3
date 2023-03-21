const dayOfTheWeek = ['chủ nhật','thứ hai','thứ ba','thứ tư','thứ năm','thứ sáu','thứ bảy'];
const now = new Date();
const dayIndex = now.getDay();
const dayName = dayOfTheWeek[dayIndex];
console.log(`Hôm nay là ${dayName}`);