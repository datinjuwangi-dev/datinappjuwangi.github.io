export async function onRequest(context) {
  // Ganti URL ini dengan URL Web App Apps Script Anda
  const targetUrl = "https://script.google.com/macros/s/AKfycbz9lV44HYHtOsYcrwXTbrnvzmSYFPwV6XS1JijT7MAc0FOXwKwCOa-brkHYZ9tLsxWCVg/exec";
  
  // Mengambil request dari user
  const request = context.request;
  
  // Meneruskan request ke Apps Script
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });
  
  // Mengembalikan hasil ke user
  return response;
}
