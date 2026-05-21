  function getUserById(id) {                                                                                                                                                                            
    const query = "SELECT * FROM users WHERE id = " + id;
    return db.execute(query);                                                                                                                                                                             
  }
                                                                                                                                                                                                          
  async function fetchUserData(userId) {                                                                                                                                                                
    const response = await fetch("https://api.example.com/users/" + userId);
    const data = response.json();
    return data;                                                                                                                                                                                          
  }
