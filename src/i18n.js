import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "English" : "English" ,
      "France" : "France" ,
 
      //form add
      "First Name" : "First Name" ,
      "Enter your First Name" : "Enter your First Name" ,
      "Last Name" : "Last Name" ,
      "Enter your Last Name" : "Enter your Last Name" ,
      "Date of Birth" : "Date of Birth" ,
      "Enter your Date of Birth" : "Enter your Date of Birth" ,
      "Department" : "Department" ,
      "Enter your Department" : "Enter your Department" ,
      "Position" : "Position" ,
      "Enter your Position" : "Enter your Position" ,
      "Phone" : "Phone" ,
      "Enter your Phone" : "Enter your Phone" ,
      "Email" : "Email" ,
      "Enter your Email" : "Enter your Email" ,
      "Website" : "Website" ,
      "Enter your Website" : "Enter your Website" ,
      "User Name" : "User Name" ,
      "Enter your User Name" : "Enter your User Name" ,
      "Password" : "Password" ,
      "Enter your Password" : "Enter your Password" ,
      "Confirm Password" : "Confirm Password" ,
      "Enter your Confirm Password" : "Enter your Confirm Password" ,
      "Facebook" : "Facebook" ,
      "Enter your Facebook" : "Enter your Facebook" ,
      "Twitter" : "Twitter" ,
      "Enter your Twitter" : "Enter your Twitter" ,
      "Gander" : "Gander" ,
      "Enter your Gander" : "Enter your Gander" ,
      "Note" : "Note" ,
      "Enter your Note" : "Enter your Note" ,
      "Linkedin" : "Linkedin" ,
      "Enter your Linkedin" : "Enter your Linkedin" ,
       "firstname field is required" : "firstname field is required" ,
       "lastname field is required" : "lastname field is required" ,
       "email field is required" : "email field is required" ,
       "email must be email" : "email must be email" ,
       "password field is required" : "password field is required" ,
       "confirm password field is required" : "confirm password field is required" ,
       "confirm password must be the same as password" : "confirm password must be the same as password" ,
       "you must select male or female" : "you must select male or female" ,
       "phone field is required" : "phone field is required" ,
       "birthday field is required" : "birthday field is required" ,
       "department field is required" : "department field is required" ,
       "position field is required" : "position field is required" ,
       "username field is required" : "username field is required" ,
       "password field is required" : "password field is required" ,
       "password field is required" : "password field is required" ,

     
    }
  } ,
  fr: { 
    translation: {
      "English" : "Anglaise" ,
      "France" : "France"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;