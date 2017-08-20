require('isomorphic-fetch');

const getGithubRepos = (request, response) => {
  const {username} = request.params;
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
    mode: 'cors',
    cache: 'default',
  };
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => {
      res.json().then(body => {
        if (res.status === 200) {
          response.status = 200;
          response.json(body);
        } else if (res.status === 404) {
          response.status = 400;
          response.json({error: 'User could not be found'});
        } else {
          response.status = 500;
          response.json({error: 'Whoops! An error occured'});
        }
        response.end();
      });
    });
};

module.exports = router => {
  router.get(
    '/github-repos/:username',
    getGithubRepos
  );
};
