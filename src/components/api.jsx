export async function submitForm(url, data) {
  const formData = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });

  const contentType = response.headers.get('content-type');
  console.log(contentType);
  if (!response.ok) throw new Error("Erreur lors de la requête");
  return await response.text(); // ou .json() selon le cas
}
