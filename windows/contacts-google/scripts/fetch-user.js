const response = http.get("https://jsonplaceholder.typicode.com/users/1");
const data = json(response.body);
output.username = data.name;
