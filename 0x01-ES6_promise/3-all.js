import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  let firstName; let lastName; let body;

  const p = uploadPhoto();
  const u = createUser();

  return Promise.all([p, u]).then((data) => {
    body = data[0].body;
    firstName = data[1].firstName;
    lastName = data[1].lastName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}

/**
 *the function handles photo upload and creates a user
 uses promise.all() to handle both async operations simulteneously and logs results
 */
