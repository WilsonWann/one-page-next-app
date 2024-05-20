import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWUm-OFiSJ_rG1mX1uW6wz2fZeLPLVdAw",
  authDomain: "one-page-project.firebaseapp.com",
  projectId: "one-page-project",
  storageBucket: "one-page-project.appspot.com",
  messagingSenderId: "769926471487",
  appId: "1:769926471487:web:44d24d60b406e78b653d8a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: "select_account"
})

const facebookProvider = new FacebookAuthProvider()
facebookProvider.setCustomParameters({
  display: "popup"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider)
export const signInWithFacebookRedirect = () => signInWithRedirect(auth, facebookProvider)

// export const signInWithEmailAndPasswordRedirect = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const signInRedirect = async (provider) => {
  switch (provider) {
    case 'google':
      return signInWithGoogleRedirect()
    case 'facebook':
      return signInWithFacebookRedirect()
    default:
      break;
  }
}

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categories = querySnapshot.docs.reduceRight((acc, docSnapshot) => {
    const data = docSnapshot.data()
    return [...acc, data]
  }, [])
  // console.log('🚀 ~ getCategoriesAndDocuments ~ categories:', categories)

  return categories
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  console.log('🚀 ~ userSnapshot.exists():', userSnapshot.exists())
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}