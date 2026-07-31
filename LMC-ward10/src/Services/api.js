const BASE_URL = "/api";

//ताजा सूचना
export async function getNotice() {

    const response = await fetch(
        `${BASE_URL}/notice?page=1&pageSize=50&status=active`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch notices");
    }

    const result = await response.json();

    return result.data;
}

//समाचार

export async function getNews(){
  const response = await fetch(`${BASE_URL}/newsArticle`);

  if(!response.ok){
    throw new Eroor("Failed To fetch news");
  }

  const result = await response.json();

  return result.data;

}

