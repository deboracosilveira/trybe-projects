// Pegar o token de sessão da pessoa que está jogando
export async function getToken() {
  return fetch('https://opentdb.com/api_token.php?command=request').then((token) =>
    token.json().then((json) => (token.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
}

export const tokenToLocalStorage = () =>
  getToken().then((json) => localStorage.setItem('token', json.token));

// Pegar perguntas e respostas
export async function getQuestions(token) {
  return fetch(`https://opentdb.com/api.php?amount=5&encode=url3986&token=${token}`).then((questions) =>
    questions.json().then((json) => (questions.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
}
