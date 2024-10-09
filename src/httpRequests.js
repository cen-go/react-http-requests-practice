export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      "Couldn't load available places at the moment please try again later."
    );
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-placess", {
    method: "PUT",
    body: JSON.stringify({ places }), // { places } is short form of { places: places }
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Couldn't update user places");
  }

  return resData.message;
}