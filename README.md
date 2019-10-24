# Credit Card Form with Validation 

Project is designed using redux ducks structure. Also used containers for components(dumb/smart components).
Added server simulation for submit. After you click on submit(setTimeout 5s), your data will be validated.

### Rules
If something is entered wrong, than you'll get an error message in 2 seconds after loader.
If everything is entered right, than you'll get 4 last digits of card, owner details and card type(visa/mastercard).

#### Requirements

- All fields are required
- 16 digits credit card number
- 3/4 digits cvv
- MM/YY data type
- At least 3 characters at first and last name
- At least 3 characters at secret question and answer

#### Technologies used in project
- React Native
- Redux
- Thunk
- Flow
 
```javascript

/* In order to use */
npm install

/* for IOS */ 

react-native run-ios 

/* or for Android*/

react-native run-android

```

