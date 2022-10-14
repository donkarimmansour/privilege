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
      "Teach" : "Teach" ,
      "Enter your Teach" : "Enter your Teach" ,
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
       "Basic Information" : "Basic Information" ,
       "-- Gender --" : "-- Gender --" ,
       "Male" : "Male" ,
       "Female" : "Female" ,
       "Account Information" : "Account Information" ,
       "Submit" : "Submit" ,
       "Cancel" : "Cancel" ,

       //gidview
       "Read More" : "Read More" ,

       //user add
       "Profile Picture" : "Profile Picture" ,
       "Class" : "Class" ,
       "Select..." : "Select..." ,
       "Registration Date" : "Registration Date" ,
       "Enter your Registration Date" : "Enter your Registration Date" ,
       "password" : "password" ,
       "class field is required" : "class field is required" ,
       "level field is required" : "level field is required" ,
       "group field is required" : "group field is required" ,
       "cin field is required" : "cin field is required" ,
       "session field is required" : "session field is required" ,
       "option field is required" : "option field is required" ,
       "Group" : "Group" ,
       "Level" : "Level" ,
       "Option" : "Option" ,
       "Session" : "Session" ,
       "Normale" : "Normale" ,
       "Accelerated" : "Accelerated" ,
       "Super Accelerated" : "Session" ,
       "Day" : "Day" ,
       "Evening" : "Evening" ,
       "Weekend" : "Weekend" ,
       "Enter your Hours" : "Enter your Hours" ,
       "Hours" : "Hours" ,
       "Cin" : "Cin" ,
       "Enter your Cin" : "Enter your Cin" ,
       "gender field is required" : "gender field is required" ,

       //student list
       "Name" : "Name" ,
       "Admission Date" : "Admission Date" ,
       "Action" : "Action" ,
       "Search" : "Search" ,
       "Generate" : "Generate" ,

       //payment add 
       "Add Library" : "Add Library" ,
       "Payment Details" : "Payment Details" ,
       "Payment Reference" : "Payment Reference" ,
       "Payment Status" : "Payment Status" ,
       "Payment Method" : "Payment Method" ,
       "Amount" : "Amount" ,
       "Collection Date" : "Collection Date" ,
       "Payment Duration" : "Payment Duration" ,
       "Monthly" : "Monthly" ,
       "Formation" : "Formation" ,
       "Fees Type" : "Fees Type" ,
       "Student Name" : "Student Name" ,
       "Please type what you want..." : "Please type what you want..." ,
       "Student Name field is required" : "Student Name field is required" ,
       "Payment Status field is required" : "Payment Status field is required" ,
       "Payment Method field is required" : "Payment Method field is required" ,
       "pending Duration field is required" : "pending Duration field is required" ,
       "Payment Duration field is required" : "Payment Duration field is required" ,
       "Amount field is required" : "Amount field is required" ,
       "Date" : "Date" ,
       "Duration" : "Duration" ,
       "Method" : "Method" ,
       "Paid" : "Paid" ,
       "Pending" : "Pending" ,
       "Cash" : "Cash" ,
       "Cheque" : "Cheque" ,
       "Card" : "Card" ,
       "Other" : "Other" ,

       //department
       "Department Basic Info" : "Department Basic Info" ,
       "Head of Department" : "Head of Department" ,
       "Brief" : "Brief" ,
       "Department Name" : "Department Name" ,
       "Department Name field is required" : "Department Name field is required" ,
       "Head of Department field is required" : "Head of Department field is required" ,
       "Brief field is required" : "Brief field is required" ,

       //coures
       "Teachers" : "Teachers" ,
       "Fees" : "Fees" ,
       "Students" : "Students" ,
       "Image" : "Image" ,
       "Name" : "Name" ,
       "Description" : "Description" ,
       "name field is required" : "name field is required" ,
       "description field is required" : "description field is required" ,
       "durtion field is required" : "durtion field is required" ,
       "Details" : "Details" ,
       "Date" : "Date" ,

       //library
       "Title" : "Title" ,
       "Subject" : "Subject" ,
       "Language" : "Language" ,
       "language field is required" : "language field is required" ,
       "status field is required" : "status field is required" ,
       "title field is required" : "title field is required" ,

       //smtp
       "SAVE" : "SAVE" ,
       "SSL" : "SSL" ,
       "TLS" : "TLS" ,
       "SMTP Security" : "SMTP Security" ,
       "SMTP HOST" : "SMTP HOST" ,
       "SMTP USER" : "SMTP USER" ,
       "SMTP PASSWORD" : "SMTP PASSWORD" ,
       "SMTP PORT" : "SMTP PORT" ,
       "Email From Name" : "Email From Name" ,
       "Email From Address" : "Email From Address" ,
       "host field is required" : "host field is required" ,
       "username field is required" : "username field is required" ,
       "port field is required" : "port field is required" ,
       "name field is required" : "name field is required" ,
       "security field is required" : "security field is required" ,
       "password field is required" : "password field is required" ,
       "SMTP Email Settings" : "SMTP Email Settings" ,
       //settings
       "Notifications Settings" : "Notifications Settings" ,
       //profile
       "Update Profile" : "Update Profile" ,
       "Edit Profile" : "Edit Profile" ,


       //auth
       "Forgot password" : "Forgot password" ,
       "Enter your email address or username and your password will be reset and emailed to you." : "Enter your email address or username and your password will be reset and emailed to you." ,
       "Email address" : "Email address" ,
       "Send me new password" : "Send me new password" ,
       "Forget it," : "Forget it," ,
       "Send me Back" : "Send me Back" ,
       "to the Sign in screen." : "to the Sign in screen." ,
       "Login to your account" : "Login to your account" ,
       "Sign in" : "Sign in" ,
       "I forgot password" : "I forgot password" ,
       "Enter email or Username" : "Enter email or Username" ,
       

       //header
       "left sidebar" : "left sidebar" ,
       "Dashboard" : "Dashboard" ,
       "Professors" : "Professors" ,
       "Teachers" : "Teachers" ,
       "Departments" : "Departments" ,
       "Classes" : "Classes" ,
       "Books" : "Books" ,
       "Chat App" : "Chat App" ,
       "Payments" : "Payments" ,
       "Exam" : "Exam" ,
       "Levels" : "Levels" ,
       "Groups" : "Groups" ,
       "Settings" : "Settings" ,
       "Privilege" : "Privilege" ,

       //Quick Menus 
       "Total Revenue" : "Total Revenue" ,
       "Total Student" : "Total Student" ,
       "Total Teacher" : "Total Teacher" ,
       "Department" : "Department" ,
       "Total Classes" : "Total Classes" ,

       //header
       "Sign out" : "Sign out" ,
       "Settings" : "Settings" ,
       "Profile" : "Profile" ,
       "Inbox" : "Inbox" ,

       //Right Sidebar
       "Theme Color" : "Theme Color" ,
       "Font Style" : "Font Style" ,
       "Muli Google Font" : "Muli Google Font" ,
       "Montserrat Google Font" : "Montserrat Google Font" ,
       "Poppins Google Font" : "Poppins Google Font" ,
       "General Settings" : "General Settings" ,
       "Night Mode" : "Night Mode" ,
       "Fix Navbar top" : "Fix Navbar top" ,
       "Header Dark" : "Header Dark" ,
       "Min Sidebar Dark" : "Min Sidebar Dark" ,
       "Sidebar Dark" : "Sidebar Dark" ,
       "Icon Color" : "Icon Color" ,
       "Gradient Color" : "Gradient Color" ,
       "Box Shadow" : "Box Shadow" ,
       "RTL Support" : "RTL Support" ,
       "Box Layout" : "Box Layout" ,

       //Notifications
       "message field is required" : "message field is required" ,
       "Message" : "Message" ,
       "Enter your Message" : "Enter your Message" ,
       "Send" : "Send" ,
       "All" : "All" ,

       //alers
       "Added" : "Added" ,
       "Not Added" : "Not Added" ,
       "Removed" : "Removed" ,
       "Updated" : "Updated" ,
       "Not Updated" : "Not Updated" ,
       "Uploaded" : "Uploaded" ,
       "Deleted" : "Deleted" ,
       "Created" : "Created" ,
       "Error" : "Error" ,
       "Success" : "Success" ,

       //alerts
       "You will not be able to recover this data" : "You will not be able to recover this data" ,
       "Are you sure?" : "Are you sure?" ,
       "password" : "password" ,
       "password" : "password" ,
       "password" : "password" ,
       "password" : "password" ,

     
    }
  } ,
  fr: { 
    translation: {
      "English" : "Anglaise" ,
      "France" : "France" ,

      "First Name" : "jjj" ,
      "Enter your First Name" : "ttt" ,
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;