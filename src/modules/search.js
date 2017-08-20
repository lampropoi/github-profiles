/**
 * Does the request to the API to get back the Github profile data
 * @param  {string}  profileName The Github username string
 * @return {array}               An array with the Github API results
 */
const search = async profileName => {
  let result;

  try {
    const response = await fetch(`http://localhost:9000/api/github-repos/${profileName}`, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    result = await response.json();
  } catch (error) {
    // handle error
  }

  return result;
};

export default search;
