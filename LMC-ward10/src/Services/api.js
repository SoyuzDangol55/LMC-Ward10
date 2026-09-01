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


//upcomming event
export async function getUpcommingEvent(){
const response = await fetch(`${BASE_URL}/event?page=1&pageSize=50`);

if(!response.ok){
  throw new Error("Failed to fetch Upcomming event");  
}

const result = await response.json();

return result.data;
}


//Employees category
export async function getEmployeeType(){
  const response = await fetch(`${BASE_URL}/staff-management/categories`);

  if(!response.ok){
    throw new Error("Failed to fetch Employee Type");
  }

  const result = await response.json();

  return result.data;
}

//employee

export async function getEmployees(){
  const response = await fetch(`${BASE_URL}/staff-management/staff`);

  if(!response.ok){
    throw new Error("Failed to fetch Employee");
  }
  const result = await response.json();

  return result.data;

}



//Active Doctor
export async function getActiveDoc(){
  const response = await fetch(`${BASE_URL}/doctor/active-doctor`);

  if(!response.ok){
    throw new Error("Failed to fetch Active Doctors");
  } 
  const result = await response.json();

  return result.doctorList || [];
}