const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") { // If password is hidden
                password.type = "text"; // Show password
                eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
                return;
            }
            password.type = "password"; // Hide password
            eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
        });

    });
});

// Add click event listener to each link to toggle between forms
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Prevent default link behavior
        forms.classList.toggle("show-signup");
    });
});

// ---------------------------------Imporrt items

import {
    auth, getAuth, initializeApp, firebaseConfig,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    provider,
    getFirestore,
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    setDoc,
    updateDoc, serverTimestamp, arrayUnion, arrayRemove, deleteDoc
} from "./fireConfig.js";

let signUp = () => {
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    let Cpassword = document.getElementById("Cpassword").value;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    let Username = document.getElementById("Username").value;
    let Number = document.getElementById("Number").value;
    let userData = { Username, Number, Email, Password };
    console.log(userData);
  
    if (emailRegex.test(Email) && passwordRegex.test(Password)) {
      console.log("test");
      createUserWithEmailAndPassword(auth, Email, Password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          alert("Account created successfully");
          
          //Set Doc
          try {
            await setDoc(doc(db, "users", user.uid), {
              ...userData,
              uId: user.uid,
            });
            console.log("Document written with ID: ", user.uid);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.code);
        });
    } else {
      alert("Invalid email or Password");
    }
    if (Password !== Cpassword) {
      alert("Passwords should be identical");
    }
  };




//   // if (window.location.pathname == "/loginSignup/index.html") {
    let signUp_btn = document.getElementById("signup");
    signUp_btn.addEventListener("click", signUp);
  // }
//   let logIn = () => {
//     let Email = document.getElementById("Email").value;
//     let Password = document.getElementById("pass").value;
//     signInWithEmailAndPassword(auth, Email, Password)
//       .then((userCredential) => {
//         alert("Login Successful");
//         window.location.href = "./class27/index.html";
//       })
//       .catch((error) => {
//         alert(error.code);
//       });
//   };
//   if (window.location.pathname == "/loginSignup/login.html") {
//     let login_btn = document.getElementById("login_btn");
//     login_btn.addEventListener("click", logIn);
//   }
//   let googleSignup = () => {
//     signInWithPopup(auth, provider)
//       .then(async(result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         console.log(user);
        
//         try {
//           await setDoc(doc(db, "users", user.uid), {
//             uid:user.uid,
//             Username : user.displayName,
//             Email : user.Email,
//             image : user.photoURL,
//             Number : user.phoneNumber
    
//           });
//             console.log("Document written with ID: ", user.uid);
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
    

//       })
//       .catch((error) => {
//         const Email = error.customData.Email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         console.log(Email, credential);
//       });
//   };
//   if (window.location.pathname == "/loginSignup/index.html") {
//     let googleBtn = document.getElementById("googleBtn");
//     googleBtn.addEventListener("click", googleSignup);
//   }

  
//   //Getting user data from firestore
//   let getAllUsers = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => `, doc.data());
//     });
//   };
//   getAllUsers();
  
//   let updateProfile = async () => {
//     // console.log("test");
//     let name = document.getElementById("name").value;
//     let number = document.getElementById("number").value;
//     console.log(auth.currentUser.uid);
//     let id = auth.currentUser.uid;
//     try {
//       const washingtonRef = doc(db, "users", id);
//       await updateDoc(washingtonRef, 
//         {name,
//         number,
//         timestamp: serverTimestamp(), 
//         class:"10th",
//         subjects: ["Eng", "Math", "Sci"],
//         subjects: arrayUnion("Urdu"),
//         subjects:arrayRemove("Math")
//       }
//       );
//       console.log("Updated");
      
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   let update_btn = document.querySelector("#update_btn");
//   update_btn.addEventListener("click", updateProfile);
  
  
//   let deleteAccount=async()=>{
//     let id = auth.currentUser.uid
//     console.log(id);
//     await deleteDoc(doc(db, "users", id));
//     console.log("Account Deleted");
//   }
//   let delete_btn = document.getElementById("delete_btn")
//   delete_btn.addEventListener("click", deleteAccount)


