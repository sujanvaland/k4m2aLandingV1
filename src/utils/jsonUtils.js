// Utility to safely parse a JSON string into a JS object
export function parseJsonString(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON string:", error);
    return null;
  }
}

// Converts '06/03/2025 20:02:28' into '08:02 PM . March 06, 2025'
export function formatCustomDateTime(dateTimeStr) {
  if (!dateTimeStr) return "";
  // Split date and time
  const [datePart, timePart] = dateTimeStr.split(" ");
  if (!datePart || !timePart) return "";
  const [month, day, year] = datePart.split("/").map(Number);
  let [hour, minute] = timePart.split(":");
  hour = Number(hour);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const formattedTime = `${hour12.toString().padStart(2, "0")}:${minute} ${ampm}`;
  const dateObj = new Date(year, month - 1, day);
  const monthName = dateObj.toLocaleString("default", { month: "long" });
  const formattedDate = `${monthName} ${day.toString().padStart(2, "0")}, ${year}`;
  return `${formattedTime} . ${formattedDate}`;
}

// Decodes a base64-encoded string and returns the decoded string
export function decodeBase64(base64String) {
  try {
    return atob(base64String);
  } catch (error) {
    console.error("Failed to decode base64 string:", error);
    return null;
  }
}
