const search = profileName => {
  const data = [{
    description: 'An absolutely sexy component',
    name: 'make-love-no-war1',
    forks: '127',
    language: 'JavaScript',
    stars: '7'
  }, {
    description: 'An absolutely sexy component that most of you would like to know about more!',
    name: 'make-love-no-war2',
    forks: '127',
    language: 'JavaScript',
    stars: '7'
  }, {
    description: 'An absolutely sexy component',
    name: 'make-love-no-war3',
    forks: '127',
    language: 'JavaScript',
    stars: '7'
  }, {
    description: 'An absolutely sexy component',
    name: 'make-love-no-war4',
    forks: '127',
    language: 'JavaScript',
    stars: '7'
  }];
  if (profileName === 'lampropoi') {
    return data;
  } else {
    return [];
  }
};

export default search;
