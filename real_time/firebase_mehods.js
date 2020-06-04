//Write to the DB:

checkFireBase = () => {
    const db = fire.database();
    function writeUserData(name, email) {
      db.ref('/').set({
        username: name,
        email: email,
      });
    }
    writeUserData ("............", "!!!!!!!");
  };