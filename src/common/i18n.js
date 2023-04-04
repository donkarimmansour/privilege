import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {

      "English": "Anglais",
      "France": "France",
      "Arabic": "Arabic",

      //Languages
      "Select...": "Select...",
      "Name": "Name",
      "Description": "Description",
      "Session": "Session",
      "Normale": "Normale",
      "Accelerated": "Accelerated",
      "Super Accelerated": "Super Accelerated",
      "Details": "Details",
      "name field is required": "name field is required",
      "description field is required": "description field is required",
      "session field is required": "session field is required",

      //Modal
      "Actions": "Actions",
      "Action": "Action",
      "Close": "Close",
      "Role": "Role",
      "Date": "Date",
      "FullName": "Normale",

      //Breadcrumb
      "Privilege": "Privilege",
      "Admins": "Admins",
      "List": "List",
      "Add": "Add",
      "Grid": "Grid",
      "Bills": "Bills",
      "Departments": "Departments",
      "Exam": "Exam",
      "Groups": "Groups",
      "Dashboard": "Dashboard",
      "Languages": "Languages",
      "Levels": "Levels",
      "Library": "Library",
      "Notifications": "Notifications",
      "Fees": "Fees",
      "Students": "Students",
      "Teachers": "Teachers",
      "My Profile": "My Profile",
      "Profile": "Profile",
      "Calendar": "Calendar",
      "Cancelations": "Cancelations",
      "Promotions": "Promotions",

      //Promotions
      "normale field is required": "normale field is required",
      "accelerated field is required": "accelerated field is required",
      "super Accelerated field is required": "super Accelerated field is required",



      //library
      "Books": "Books",
      "Title": "Title",
      "Language": "Language",
      "Book Type": "Book Type",
      "Status": "Status",
      "Quantity": "Quantity",
      "Black And White Price": "Black And White Price",
      "Color Price": "Color Price",
      "book Type field is required": "book Type field is required",
      "language field is required": "language field is required",
      "quantity field is required": "quantity field is required",
      "title field is required": "title field is required",
      "level field is required": "level field is required",
      "actions field is required": "actions field is required",
      "black And White Price field is required": "black And White Price field is required",
      "color Price field is required": "color Price field is required",


      //department
      "Department Basic Info": "Department Basic Info",
      "Class": "Class",
      "Brief": "Brief",
      "Floor": "Floor",
      "floor Name field is required": "floor Name field is required",
      "class Name field is required": "class Name field is required",
      "Brief field is required": "Brief field is required",

      //level
      //level
      //level
      "languages field is required": "languages field is required",

      //group
      "Option": "Option",
      "Group": "Group",
      "Department": "Department",
      "option field is required": "option field is required",
      "calindar field is required": "calindar field is required",
      "Teacher": "Teacher",

      //group
      "Invice": "Invice",
      "Print Invoice": "Print Invoice",
      "Student": "Student",
      "Reference": "Reference",
      "Subtotal": "Subtotal",
      "Vat Rate": "Vat Rate",
      "Total Due": "Total Due",
      "Thank you very much for doing business with us. We look forward to working with you again!": "Thank you very much for doing business with us. We look forward to working with you again!",



      //Cancelation
      "Monday": "Monday",
      "Tuesday": "Tuesday",
      "Wednesday": "Wednesday",
      "Thursday": "Thursday",
      "Friday": "Friday",
      "Saturday": "Saturday",
      "Sunday": "Sunday",
      "day field is required": "day field is required",


      //student add
      "Basic Information": "Basic Information",
      "Edit Profile": "Edit Profile",
      "Account Information": "Account Information",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Day": "Day",
      "Evening": "Evening",
      "Weekend": "Weekend",
      "Email": "Email",
      "Cin": "Cin",
      "Level": "Level",
      "Hours": "Hours",
      "Amount": "Amount",
      "Gender": "Gender",
      "Password": "Password",
      "Confirm Password": "Confirm Password",
      "-- Gender --": "-- Gender --",
      "Male": "Male",
      "Female": "Female",
      "Phone": "Phone",
      "Date of Birth": "Date of Birth",
      "is Account Activated": "is Account Activated",
      "Yes": "Yes",
      "No": "No",
      "Tested": "Tested",
      "Profile Picture": "Profile Picture",
      "User Name": "User Name",
      "Generate": "Generate",
      "Facebook": "Facebook",
      "Twitter": "Twitter",
      "Linkedin": "Linkedin",
      "Submit": "Submit",
      "Cancel": "Cancel",
      "firstname field is required": "firstname field is required",
      "lastname field is required": "lastname field is required",
      "email field is required": "email field is required",
      "email must be email": "email must be email",
      "password field is required": "password field is required",
      "confirm password field is required": "confirm password field is required",
      "confirm password must be the same as password": "confirm password must be the same as password",
      "gender field is required": "gender field is required",
      "phone field is required": "phone field is required",
      "birthday field is required": "birthday field is required",
      "username field is required": "username field is required",
      "cin field is required": "cin field is required",
      "type field is required": "type field is required",


      //teacher add
      "Website": "Website",
      "Note": "Note",

      //teacher list
      "Read More": "Read More",

      //admin add
      "Super Admin": "Super Admin",
      "Admin": "Admin",
      "role field is required": "role field is required",


      //exam list
      "Question": "Question",
      "Replay": "Replay",
      "Type": "Type",
      "Export": "Export",
      "Activated": "Activated",
      "Rate": "Rate",


      //exam add
      "please reply": "please reply",
      "your dagre is": "your dagre is",
      "Prev": "Prev",
      "Next": "Next",
      "Questions": "Questions",

      //notification add
      "Message": "Message",
      "Send": "Send",
      "message field is required": "message field is required",
      "students field is required": "students field is required",


      //notification list
      "Seen": "Seen",

      //notification view
      "Back": "Back",
      "From": "From",
      "To": "To",
      "Me": "Me",


      //pages
      "Oops.. You just found an error page..": "Oops.. You just found an error page..",
      "Go back": "Go back",
      "We are sorry but your request contains bad syntax and cannot be fulfilled…": "We are sorry but your request contains bad syntax and cannot be fulfilled…",
      "We are sorry but our service is currently not available…": "We are sorry but our service is currently not available…",





      //payment add 
      "Student Name": "Student Name",
      "Payments": "Payments",
      "Method": "Method",
      "Payment Details": "Payment Details",
      "Payment Reference": "Payment Reference",
      "Payment Method": "Payment Method",
      "Fees Type": "Fees Type",
      "Please type what you want...": "Please type what you want...",
      "Student Name field is required": "Student Name field is required",
      "Payment Method field is required": "Payment Method field is required",
      "Amount field is required": "Amount field is required",
      "fees Type field is required": "fees Type field is required",
      "book field is required": "book field is required",

      "Book": "Book",
      "Cash": "Cash",
      "Cheque": "Cheque",
      "Card": "Card",
      "Other": "Other",



      //alers
      "Added": "Added",
      "Not Added": "Not Added",
      "Removed": "Removed",
      "Updated": "Updated",
      "Not Updated": "Not Updated",
      "Uploaded": "Uploaded",
      "Deleted": "Deleted",
      "deleted": "deleted",
      "Modified": "Modified",
      "modified": "modified",
      "Created": "Created",
      "Error": "Error",
      "Success": "Success",

      //alerts
      "You will not be able to recover this data": "You will not be able to recover this data",
      "Are you sure?": "Are you sure?",



      //smtp
      "SAVE": "SAVE",
      "SSL": "SSL",
      "TLS": "TLS",
      "None": "None",
      "SMTP Security": "SMTP Security",
      "SMTP HOST": "SMTP HOST",
      "SMTP USER": "SMTP USER",
      "SMTP PASSWORD": "SMTP PASSWORD",
      "SMTP PORT": "SMTP PORT",
      "Email From Name": "Email From Name",
      "Email From Address": "Email From Address",
      "host field is required": "host field is required",
      "port field is required": "port field is required",
      "security field is required": "security field is required",
      "SMTP Email Settings": "SMTP Email Settings",

      //auth
      "Forgot password": "Forgot password",
      "Enter your email address or username and your password will be reset and emailed to you.": "Enter your email address or username and your password will be reset and emailed to you.",
      "Enter your email address or username and your password.": "Enter your email address or username and your password.",
      "Email address": "Email address",
      "Send me new password": "Send me new password",
      "Forget it,": "Forget it,",
      "Send me Back": "Send me Back",
      "to the Sign in screen.": "to the Sign in screen.",
      "Login to your account": "Login to your account",
      "Sign in": "Sign in",
      "I forgot password": "I forgot password",
      "Enter email or Username": "Enter email or Username",

      //header
      "Sign out": "Sign out",
      "Settings": "Settings",

      //Right Sidebar
      "Theme Color": "Theme Color",
      "Font Style": "Font Style",
      "Muli Google Font": "Muli Google Font",
      "Montserrat Google Font": "Montserrat Google Font",
      "Poppins Google Font": "Poppins Google Font",
      "General Settings": "General Settings",
      "Night Mode": "Night Mode",
      "Fix Navbar top": "Fix Navbar top",
      "Header Dark": "Header Dark",
      "Min Sidebar Dark": "Min Sidebar Dark",
      "Sidebar Dark": "Sidebar Dark",
      "Icon Color": "Icon Color",
      "Gradient Color": "Gradient Color",
      "Box Shadow": "Box Shadow",
      "RTL Support": "RTL Support",
      "Box Layout": "Box Layout",

      //backend
      "something went wrong": "something went wrong",
      "there are no Admins": "there are no Admins",
      "the email or username already exists": "the email or username already exists",
      "id not exist": "id not exist",
      "your email or username is not defined": "your email or username is not defined",
      "email or username or password is incorrect": "email or username or password is incorrect",
      "your account is not activated": "your account is not activated",
      "new password sent": "new password sent",
      "there are no Bills": "there are no Bills",
      "there are no Books": "there are no Books",
      "there are no departments": "there are no departments",
      "there are no Exams": "there are no Exams",
      "there are no Groups": "there are no Groups",
      "there are no Languages": "there are no Languages",
      "there are no Levels": "there are no Levels",
      "there are no notifications": "there are no notifications",
      "there are no Payments": "there are no Payments",
      "there is no Bill": "there is no Bill",
      "amount can't be greater then bill cost": "amount can't be greater then bill cost",
      "there are no students": "there are no students",
      "there are no Teachers": "there are no Teachers",
      "there are no Cancelations": "there are no Cancelations",
      "there are no Promotions": "there are no Promotions",

      
      //roles
      "superAdmin permission denied": "superAdmin permission denied",
      "admin permission denied": "admin permission denied",
      "teacher permission denied": "teacher permission denied",
      "student Or admin permission denied": "student Or admin permission denied",
      "teacher Or student Or admin Or superAdmin permission denied": "teacher Or student Or admin Or superAdmin permission denied",
      "student Or admin Or superAdmin permission denied": "student Or admin Or superAdmin permission denied",
      "teacher Or admin Or superAdmin permission denied": "teacher Or admin Or superAdmin permission denied",
      "student Or teacher permission denied": "student Or teacher permission denied",
      "admin Or superAdmin permission denied": "admin Or superAdmin permission denied",
      "student Or superAdmin permission denied": "student Or superAdmin permission denied",

      //footer
      "Copyright": "Copyright",
      "Beta": "Beta",

      //pagination
      "previous": "previous",
      "next": "next",
      "Search": "Search",

      //home
      "New Student List": "New Student List",

    }
  },

 
  fr: {
    translation: {
      "English": "Anglais",
      "France": "France",
      "Arabic": "arabe",
      "Select...": "Sélectionner...",
      "Name": "Nom",
      "Description": "Description",
      "Session": "Session",
      "Normale": "Normale",
      "Accelerated": "Accéléré",
      "Super Accelerated": "Super accéléré",
      "Details": "Détails",
      "name field is required": "Le champ de nom est requis",
      "description field is required": "Le champ de description est requis",
      "session field is required": "Le champ de session est requis",
      "Actions": "Actions",
      "Action": "Action",
      "Close": "Fermer",
      "Role": "Rôle",
      "Date": "Date",
      "FullName": "Normale",
      "Privilege": "Privilège",
      "Admins": "Administratrices",
      "List": "Liste",
      "Add": "Ajouter",
      "Grid": "Grille",
      "Bills": "Factures",
      "Departments": "Départements",
      "Exam": "Examen",
      "Groups": "Groupes",
      "Dashboard": "Tableau de bord",
      "Languages": "Langues",
      "Levels": "Les niveaux",
      "Library": "Bibliothèque",
      "Notifications": "Notifications",
      "Fees": "Frais",
      "Students": "Étudiantes",
      "Teachers": "Enseignantes",
      "My Profile": "Mon profil",
      "Profile": "Profil",
      "Calendar": "Calendrier",
      "Cancelations": "Annulation",
      "Promotions": "Promotions",
      "normale field is required": "Le champ Normale est requis",
      "accelerated field is required": "Le champ accéléré est requis",
      "super Accelerated field is required": "Un champ super accéléré est requis",
      "Books": "Livres",
      "Title": "Titre",
      "Language": "Langue",
      "Book Type": "Type de livre",
      "Status": "Statut",
      "Quantity": "Quantité",
      "Black And White Price": "Prix noir et blanc",
      "Color Price": "Prix de couleur",
      "book Type field is required": "Le champ de type de livre est requis",
      "language field is required": "Le champ de langue est requis",
      "quantity field is required": "Le champ de quantité est requis",
      "title field is required": "Le champ de titre est requis",
      "level field is required": "Le champ de niveau est requis",
      "actions field is required": "Le champ d'actions est requis",
      "black And White Price field is required": "Le champ de prix noir et blanc est requis",
      "color Price field is required": "Le champ de prix de la couleur est requis",
      "Department Basic Info": "Informations de base du département",
      "Class": "Classe",
      "Brief": "Brève",
      "Floor": "Sol",
      "floor Name field is required": "Le champ de nom d'étage est requis",
      "class Name field is required": "Le champ de nom de classe est requis",
      "Brief field is required": "Un bref champ est requis",
      "languages field is required": "Le champ de langues est requis",
      "Option": "Option",
      "Group": "Groupe",
      "Department": "Département",
      "option field is required": "Le champ d'option est requis",
      "calindar field is required": "Le champ de calindar est requis",
      "Teacher": "Professeure",
      "Invice": "Inviter",
      "Print Invoice": "La facture d'impression",
      "Student": "Étudiante",
      "Reference": "Référence",
      "Subtotal": "Total",
      "Vat Rate": "Taux de cuve",
      "Total Due": "Total dû",
      "Thank you very much for doing business with us. We look forward to working with you again!": "Merci beaucoup d'avoir fait affaire avec nous. Nous sommes impatients de travailler à nouveau avec vous!",
      "Monday": "Lundi",
      "Tuesday": "Mardi",
      "Wednesday": "Mercredi",
      "Thursday": "Jeudi",
      "Friday": "Vendredi",
      "Saturday": "Samedi",
      "Sunday": "Dimanche",
      "day field is required": "Le champ de jour est requis",
      "Basic Information": "Informations de base",
      "Edit Profile": "Editer le profil",
      "Account Information": "Information sur le compte",
      "First Name": "Prénom",
      "Last Name": "Nom de famille",
      "Day": "Jour",
      "Evening": "Soirée",
      "Weekend": "Fin de semaine",
      "Email": "E-mail",
      "Cin": "Cin",
      "Level": "Niveau",
      "Hours": "Heures",
      "Amount": "Montante",
      "Gender": "Genre",
      "Password": "Mot de passe",
      "Confirm Password": "Confirmez le mot de passe",
      "-- Gender --": "-- Genre --",
      "Male": "Femelle",
      "Female": "Femme",
      "Phone": "Téléphone",
      "Date of Birth": "Date de naissance",
      "is Account Activated": "est activé le compte",
      "Yes": "Oui",
      "No": "Non",
      "Tested": "Testé",
      "Profile Picture": "Image de profil",
      "User Name": "Nom d'utilisateur",
      "Generate": "Générer",
      "Facebook": "Facebook",
      "Twitter": "Twitter",
      "Linkedin": "Liendin",
      "Submit": "Soumettre",
      "Cancel": "Annuler",
      "firstname field is required": "Le champ FirstName est requis",
      "lastname field is required": "LastName Field est requis",
      "email field is required": "Le champ de messagerie est requis",
      "email must be email": "Le courrier électronique doit être un e-mail",
      "password field is required": "Le champ de mot de passe est requis",
      "confirm password field is required": "Confirmer le champ de mot de passe est requis",
      "confirm password must be the same as password": "confirmer le mot de passe doit être le même que le mot de passe",
      "gender field is required": "Le champ de genre est requis",
      "phone field is required": "Le champ téléphonique est requis",
      "birthday field is required": "Le champ d'anniversaire est requis",
      "username field is required": "Le champ de nom d'utilisateur est requis",
      "cin field is required": "Le champ CIN est requis",
      "type field is required": "Le champ de type est requis",
      "Website": "Site Internet",
      "Note": "Note",
      "Read More": "En savoir plus",
      "Super Admin": "Super administrateur",
      "Admin": "Administrer",
      "role field is required": "Le champ de rôle est requis",
      "Question": "Question",
      "Replay": "Rejouer",
      "Type": "Taper",
      "Export": "Exporter",
      "Activated": "Activé",
      "Rate": "Taux",
      "please reply": "Répondez, s'il vous plaît",
      "your dagre is": "Votre dagre est",
      "Prev": "Crévuré",
      "Next": "Suivante",
      "Questions": "Des questions",
      "Message": "Message",
      "Send": "Envoyer",
      "message field is required": "Le champ de message est requis",
      "students field is required": "Le terrain des étudiants est requis",
      "Seen": "Vue",
      "Back": "Dos",
      "From": "Depuis",
      "To": "Pour",
      "Me": "Moi",
      "Oops.. You just found an error page..": "Oups .. vous venez de trouver une page d'erreur.",
      "Go back": "Retourner",
      "We are sorry but your request contains bad syntax and cannot be fulfilled…": "Nous sommes désolés mais votre demande contient une mauvaise syntaxe et ne peut pas être remplie…",
      "We are sorry but our service is currently not available…": "Nous sommes désolés mais notre service n'est actuellement pas disponible…",
      "Student Name": "Nom d'étudiant",
      "Payments": "Paiements",
      "Method": "Méthode",
      "Payment Details": "Détails de paiement",
      "Payment Reference": "Référence de paiement",
      "Payment Method": "Mode de paiement",
      "Fees Type": "Type de frais",
      "Please type what you want...": "Veuillez taper ce que vous voulez ...",
      "Student Name field is required": "Le champ de nom d'étudiant est requis",
      "Payment Method field is required": "Le champ de méthode de paiement est requis",
      "Amount field is required": "Le champ de montant est requis",
      "fees Type field is required": "Le champ de type de frais est requis",
      "book field is required": "Le champ de livre est requis",
      "Book": "Livre",
      "Cash": "Espèces",
      "Cheque": "Vérifier",
      "Card": "Carte",
      "Other": "Autre",
      "Added": "Ajoutée",
      "Not Added": "Pas ajouté",
      "Removed": "Supprimé",
      "Updated": "Mis à jour",
      "Not Updated": "Pas à jour",
      "Uploaded": "Téléchargé",
      "Deleted": "Supprimé",
      "deleted": "supprimé",
      "Modified": "Modifié",
      "modified": "modifié",
      "Created": "Créé",
      "Error": "Erreur",
      "Success": "Succès",
      "You will not be able to recover this data": "Vous ne pourrez pas récupérer ces données",
      "Are you sure?": "Es-tu sûr?",
      "SAVE": "SAUVEGARDER",
      "SSL": "SSL",
      "TLS": "TLS",
      "None": "Aucune",
      "SMTP Security": "Sécurité SMTP",
      "SMTP HOST": "Hôte SMTP",
      "SMTP USER": "Utilisateur SMTP",
      "SMTP PASSWORD": "Mot de passe SMTP",
      "SMTP PORT": "Port SMTP",
      "Email From Name": "E-mail de nom",
      "Email From Address": "E-mail de l'adresse",
      "host field is required": "Le champ hôte est requis",
      "port field is required": "Le champ de port est requis",
      "security field is required": "Le champ de sécurité est requis",
      "SMTP Email Settings": "Paramètres de messagerie SMTP",
      "Forgot password": "Mot de passe oublié",
      "Enter your email address or username and your password will be reset and emailed to you.": "Entrez votre adresse e-mail ou votre nom d'utilisateur et votre mot de passe sera réinitialisé et envoyé par e-mail.",
      "Enter your email address or username and your password.": "Entrez votre adresse e-mail ou votre nom d'utilisateur et votre mot de passe.",
      "Email address": "Adresse e-mail",
      "Send me new password": "Envoyez-moi un nouveau mot de passe",
      "Forget it,": "Oublie,",
      "Send me Back": "Renvoyez-moi",
      "to the Sign in screen.": "à l'écran de connexion.",
      "Login to your account": "Connectez-vous à votre compte",
      "Sign in": "S'identifier",
      "I forgot password": "J'ai oublié le mot de passe",
      "Enter email or Username": "Entrez le courrier électronique ou le nom d'utilisateur",
      "Sign out": "se déconnecter",
      "Settings": "Paramètres",
      "Theme Color": "Couleur du thème",
      "Font Style": "Le style de police",
      "Muli Google Font": "Muli Google Font",
      "Montserrat Google Font": "Font Montserrat Google",
      "Poppins Google Font": "Poppins Google Font",
      "General Settings": "réglages généraux",
      "Night Mode": "Mode nuit",
      "Fix Navbar top": "Fix Navbar Top",
      "Header Dark": "Tête sombre",
      "Min Sidebar Dark": "Min Sidebar Dark",
      "Sidebar Dark": "Barre latérale sombre",
      "Icon Color": "Couleur icône",
      "Gradient Color": "Dégradé de couleur",
      "Box Shadow": "Boîte ombre",
      "RTL Support": "Support RTL",
      "Box Layout": "Disposition de la boîte",
      "something went wrong": "Quelque chose s'est mal passé",
      "there are no Admins": "Il n'y a pas d'administrateurs",
      "the email or username already exists": "l'e-mail ou le nom d'utilisateur existe déjà",
      "id not exist": "Je n'existe pas",
      "your email or username is not defined": "Votre e-mail ou nom d'utilisateur n'est pas défini",
      "email or username or password is incorrect": "e-mail ou nom d'utilisateur ou mot de passe est incorrect",
      "your account is not activated": "Votre compte n'est pas activé",
      "new password sent": "Nouveau mot de passe envoyé",
      "there are no Bills": "Il n'y a pas de factures",
      "there are no Books": "Il n'y a pas de livres",
      "there are no departments": "Il n'y a pas de départements",
      "there are no Exams": "Il n'y a pas d'examen",
      "there are no Groups": "Il n'y a pas de groupes",
      "there are no Languages": "Il n'y a pas de langues",
      "there are no Levels": "Il n'y a pas de niveaux",
      "there are no notifications": "Il n'y a pas de notifications",
      "there are no Payments": "Il n'y a pas de paiement",
      "there is no Bill": "Il n'y a pas de facture",
      "amount can't be greater then bill cost": "Le montant ne peut pas être plus élevé que le coût de la facture",
      "there are no students": "Il n'y a pas d'étudiants",
      "there are no Teachers": "Il n'y a pas de professeurs",
      "there are no Cancelations": "Il n'y a pas d'annulation",
      "there are no Promotions": "Il n'y a pas de promotions",
      "superAdmin permission denied": "Permission de Superadmin refusée",
      "admin permission denied": "Autorisation de l'administration refusé",
      "teacher permission denied": "Autorisation des enseignants refusée",
      "student Or admin permission denied": "Permission des étudiants ou de l'administration refusé",
      "teacher Or student Or admin Or superAdmin permission denied": "Permission enseignante ou élève ou administrateur ou superadmin refusé",
      "student Or admin Or superAdmin permission denied": "Permission d'étudiant ou d'administrateur ou de superadmin refusé",
      "teacher Or admin Or superAdmin permission denied": "Permission enseignant ou administrateur ou de superadmin refusé",
      "student Or teacher permission denied": "Autorisation des élèves ou des enseignants refusée",
      "admin Or superAdmin permission denied": "Permission administrative ou superadmin refusée",
      "student Or superAdmin permission denied": "Permission des étudiants ou de la superadmin refusés",
      "Copyright": "droits d'auteur",
      "Beta": "Bêta",
      "previous": "précédente",
      "next": "suivante",
      "Search": "Recherche",
      "New Student List": "Nouvelle liste d'étudiants"
  }
  },


  ar: {
    translation: {
      "English": "Anglais",
      "France": "فرنسا",
      "Arabic": "عربي",
      "Select...": "يختار...",
      "Name": "اسم",
      "Description": "وصف",
      "Session": "حصة",
      "Normale": "نورم",
      "Accelerated": "معجل",
      "Super Accelerated": "تسارع سوبر",
      "Details": "تفاصيل",
      "name field is required": "حقل الاسم مطلوب",
      "description field is required": "حقل الوصف مطلوب",
      "session field is required": "حقل الجلسة مطلوب",
      "Actions": "أجراءات",
      "Action": "فعل",
      "Close": "يغلق",
      "Role": "دور",
      "Date": "تاريخ",
      "FullName": "نورم",
      "Privilege": "امتياز",
      "Admins": "مسؤولون",
      "List": "قائمة",
      "Add": "يضيف",
      "Grid": "شبكة",
      "Bills": "فواتير",
      "Departments": "الإدارات",
      "Exam": "امتحان",
      "Groups": "مجموعات",
      "Dashboard": "لوحة القيادة",
      "Languages": "اللغات",
      "Levels": "مستويات",
      "Library": "مكتبة",
      "Notifications": "إشعارات",
      "Fees": "مصاريف",
      "Students": "طلاب",
      "Teachers": "معلمون",
      "My Profile": "ملفي",
      "Profile": "حساب تعريفي",
      "Calendar": "تقويم",
      "Cancelations": "الإلغاء",
      "Promotions": "الترقيات",
      "normale field is required": "حقل Normale مطلوب",
      "accelerated field is required": "الحقل المتسارع مطلوب",
      "super Accelerated field is required": "الحقل المتسارع الفائق مطلوب",
      "Books": "كتب",
      "Title": "عنوان",
      "Language": "لغة",
      "Book Type": "نوع الكتاب",
      "Status": "حالة",
      "Quantity": "كمية",
      "Black And White Price": "السعر الأسود والأبيض",
      "Color Price": "سعر اللون",
      "book Type field is required": "حقل نوع الكتاب مطلوب",
      "language field is required": "مجال اللغة مطلوب",
      "quantity field is required": "حقل الكمية مطلوب",
      "title field is required": "حقل العنوان مطلوب",
      "level field is required": "حقل المستوى مطلوب",
      "actions field is required": "حقل الإجراءات مطلوب",
      "black And White Price field is required": "حقل الأسعار الأسود والأبيض مطلوب",
      "color Price field is required": "حقل سعر اللون مطلوب",
      "Department Basic Info": "قسم المعلومات الأساسية",
      "Class": "فصل",
      "Brief": "مختصر",
      "Floor": "أرضية",
      "floor Name field is required": "حقل اسم الأرض مطلوب",
      "class Name field is required": "حقل اسم الفصل مطلوب",
      "Brief field is required": "حقل موجز مطلوب",
      "languages field is required": "مجال اللغات مطلوب",
      "Option": "خيار",
      "Group": "مجموعة",
      "Department": "قسم",
      "option field is required": "حقل الخيار مطلوب",
      "calindar field is required": "حقل كاليندار مطلوب",
      "Teacher": "مدرس",
      "Invice": "دعوة",
      "Print Invoice": "فاتورة طباعة",
      "Student": "طالب",
      "Reference": "مرجع",
      "Subtotal": "نطاق فرعي",
      "Vat Rate": "قيمة الضريبة",
      "Total Due": "الاجمالي المستحق",
      "Thank you very much for doing business with us. We look forward to working with you again!": "شكرا جزيلا لك على ممارسة الأعمال التجارية معنا. نحن نتطلع قدما للعمل معك مرة أخرى!",
      "Monday": "الاثنين",
      "Tuesday": "يوم الثلاثاء",
      "Wednesday": "الأربعاء",
      "Thursday": "يوم الخميس",
      "Friday": "جمعة",
      "Saturday": "السبت",
      "Sunday": "الأحد",
      "day field is required": "حقل اليوم مطلوب",
      "Basic Information": "معلومات اساسية",
      "Edit Profile": "تعديل الملف الشخصي",
      "Account Information": "معلومات الحساب",
      "First Name": "الاسم الأول",
      "Last Name": "اسم العائلة",
      "Day": "يوم",
      "Evening": "مساء",
      "Weekend": "عطلة نهاية الاسبوع",
      "Email": "بريد إلكتروني",
      "Cin": "سين",
      "Level": "مستوى",
      "Hours": "ساعات",
      "Amount": "كمية",
      "Gender": "جنس",
      "Password": "كلمة المرور",
      "Confirm Password": "تأكيد كلمة المرور",
      "-- Gender --": "-- جنس --",
      "Male": "ذكر",
      "Female": "أنثى",
      "Phone": "هاتف",
      "Date of Birth": "تاريخ الميلاد",
      "is Account Activated": "يتم تنشيط الحساب",
      "Yes": "نعم",
      "No": "لا",
      "Tested": "تم اختباره",
      "Profile Picture": "الصوره الشخصيه",
      "User Name": "اسم المستخدم",
      "Generate": "يولد",
      "Facebook": "فيسبوك",
      "Twitter": "تويتر",
      "Linkedin": "LinkedIn",
      "Submit": "يُقدِّم",
      "Cancel": "يلغي",
      "firstname field is required": "مطلوب FirstName Field",
      "lastname field is required": "حقل اسم العائلة مطلوب",
      "email field is required": "حقل البريد الإلكتروني مطلوب",
      "email must be email": "يجب أن يكون البريد الإلكتروني البريد الإلكتروني",
      "password field is required": "حقل كلمة المرور مطلوب",
      "confirm password field is required": "تأكيد حقل كلمة المرور مطلوب",
      "confirm password must be the same as password": "تأكيد كلمة المرور يجب أن تكون هي نفس كلمة المرور",
      "gender field is required": "مجال الجنس مطلوب",
      "phone field is required": "حقل الهاتف مطلوب",
      "birthday field is required": "مجال عيد الميلاد مطلوب",
      "username field is required": "حقل اسم المستخدم مطلوب",
      "cin field is required": "حقل CIN مطلوب",
      "type field is required": "حقل الكتابة مطلوب",
      "Website": "موقع إلكتروني",
      "Note": "ملحوظة",
      "Read More": "اقرأ أكثر",
      "Super Admin": "المشرف سوبر",
      "Admin": "مسؤل",
      "role field is required": "مجال الدور مطلوب",
      "Question": "سؤال",
      "Replay": "إعادة",
      "Type": "يكتب",
      "Export": "يصدّر",
      "Activated": "مفعل",
      "Rate": "معدل",
      "please reply": "يرجى الرد",
      "your dagre is": "دافير الخاص بك هو",
      "Prev": "السابق",
      "Next": "التالي",
      "Questions": "أسئلة",
      "Message": "رسالة",
      "Send": "يرسل",
      "message field is required": "حقل الرسالة مطلوب",
      "students field is required": "حقل الطلاب مطلوب",
      "Seen": "مرئي",
      "Back": "خلف",
      "From": "من",
      "To": "ل",
      "Me": "أنا",
      "Oops.. You just found an error page..": "عفوًا .. لقد وجدت للتو صفحة خطأ ..",
      "Go back": "عُد",
      "We are sorry but your request contains bad syntax and cannot be fulfilled…": "نأسف لكن طلبك يحتوي على بناء جملة سيئ ولا يمكن الوفاء به ...",
      "We are sorry but our service is currently not available…": "نحن آسفون لكن خدمتنا غير متوفرة حاليًا ...",
      "Student Name": "أسم الطالب",
      "Payments": "المدفوعات",
      "Method": "طريقة",
      "Payment Details": "بيانات الدفع",
      "Payment Reference": "إشارة دفع",
      "Payment Method": "طريقة الدفع او السداد",
      "Fees Type": "نوع الرسوم",
      "Please type what you want...": "الرجاء كتابة ما تريد ...",
      "Student Name field is required": "حقل اسم الطالب مطلوب",
      "Payment Method field is required": "حقل طريقة الدفع مطلوب",
      "Amount field is required": "حقل المبلغ مطلوب",
      "fees Type field is required": "حقل نوع الرسوم مطلوب",
      "book field is required": "حقل الكتاب مطلوب",
      "Book": "كتاب",
      "Cash": "نقدي",
      "Cheque": "يفحص",
      "Card": "بطاقة",
      "Other": "آخر",
      "Added": "وأضاف",
      "Not Added": "غير مضافة",
      "Removed": "إزالة",
      "Updated": "محدث",
      "Not Updated": "غير محدث",
      "Uploaded": "تم الرفع",
      "Deleted": "تم الحذف",
      "deleted": "تم الحذف",
      "Modified": "معدل",
      "modified": "معدل",
      "Created": "مخلوق",
      "Error": "خطأ",
      "Success": "نجاح",
      "You will not be able to recover this data": "لن تكون قادرًا على استرداد هذه البيانات",
      "Are you sure?": "هل أنت متأكد؟",
      "SAVE": "يحفظ",
      "SSL": "SSL",
      "TLS": "TLS",
      "None": "لا أحد",
      "SMTP Security": "أمن SMTP",
      "SMTP HOST": "مضيف SMTP",
      "SMTP USER": "مستخدم SMTP",
      "SMTP PASSWORD": "كلمة مرور SMTP",
      "SMTP PORT": "منفذ SMTP",
      "Email From Name": "البريد الإلكتروني من الاسم",
      "Email From Address": "البريد الإلكتروني من العنوان",
      "host field is required": "الحقل المضيف مطلوب",
      "port field is required": "حقل المنفذ مطلوب",
      "security field is required": "مجال الأمن مطلوب",
      "SMTP Email Settings": "إعدادات البريد الإلكتروني SMTP",
      "Forgot password": "هل نسيت كلمة السر",
      "Enter your email address or username and your password will be reset and emailed to you.": "أدخل عنوان بريدك الإلكتروني أو اسم المستخدم وسيتم إعادة تعيين كلمة المرور الخاصة بك وإرسالها عبر البريد الإلكتروني.",
      "Enter your email address or username and your password.": "أدخل عنوان بريدك الإلكتروني أو اسم المستخدم وكلمة المرور الخاصة بك.",
      "Email address": "عنوان البريد الإلكتروني",
      "Send me new password": "أرسل لي كلمة مرور جديدة",
      "Forget it,": "انسى ذلك،",
      "Send me Back": "أرسلني",
      "to the Sign in screen.": "إلى الشاشة في علامة.",
      "Login to your account": "تسجيل الدخول إلى حسابك",
      "Sign in": "تسجيل الدخول",
      "I forgot password": "لقد نسيت كلمة المرور",
      "Enter email or Username": "أدخل البريد الإلكتروني أو اسم المستخدم",
      "Sign out": "خروج",
      "Settings": "إعدادات",
      "Theme Color": "لون الموضوع",
      "Font Style": "نوع الخط",
      "Muli Google Font": "Muli Google Font",
      "Montserrat Google Font": "Montserrat Google Font",
      "Poppins Google Font": "Poppins Google Font",
      "General Settings": "الاعدادات العامة",
      "Night Mode": "الوضع الليلي",
      "Fix Navbar top": "إصلاح قمة Navbar",
      "Header Dark": "رأس الظلام",
      "Min Sidebar Dark": "مين الشريط الجانبي الظلام",
      "Sidebar Dark": "الشريط الجانبي الظلام",
      "Icon Color": "رمز لون",
      "Gradient Color": "التدرج اللوني",
      "Box Shadow": "مربع الظل",
      "RTL Support": "دعم RTL",
      "Box Layout": "تصميم مربع",
      "something went wrong": "هناك خطأ ما",
      "there are no Admins": "لا يوجد مدراء",
      "the email or username already exists": "البريد الإلكتروني أو اسم المستخدم موجود بالفعل",
      "id not exist": "معرف غير موجود",
      "your email or username is not defined": "لم يتم تعريف بريدك الإلكتروني أو اسم المستخدم الخاص بك",
      "email or username or password is incorrect": "البريد الإلكتروني أو اسم المستخدم أو كلمة المرور غير صحيح",
      "your account is not activated": "حسابك غير مفعل",
      "new password sent": "تم إرسال كلمة مرور جديدة",
      "there are no Bills": "لا توجد فواتير",
      "there are no Books": "لا توجد كتب",
      "there are no departments": "لا توجد أقسام",
      "there are no Exams": "لا توجد امتحانات",
      "there are no Groups": "لا توجد مجموعات",
      "there are no Languages": "لا توجد لغات",
      "there are no Levels": "لا توجد مستويات",
      "there are no notifications": "لا توجد إشعارات",
      "there are no Payments": "لا توجد مدفوعات",
      "there is no Bill": "لا يوجد فاتورة",
      "amount can't be greater then bill cost": "لا يمكن أن يكون المبلغ أكبر ثم تكلفة الفاتورة",
      "there are no students": "لا يوجد طلاب",
      "there are no Teachers": "لا يوجد مدرسون",
      "there are no Cancelations": "لا توجد إلغاء",
      "there are no Promotions": "لا توجد عروض ترويجية",
      "superAdmin permission denied": "تم رفض إذن Superadmin",
      "admin permission denied": "تم رفض إذن المسؤول",
      "teacher permission denied": "تم رفض إذن المعلم",
      "student Or admin permission denied": "تم رفض إذن الطالب أو المسؤول",
      "teacher Or student Or admin Or superAdmin permission denied": "تم رفض إذن المعلم أو الطالب أو المشرف أو الفائق",
      "student Or admin Or superAdmin permission denied": "تم رفض إذن الطالب أو المشرف أو الفائق",
      "teacher Or admin Or superAdmin permission denied": "تم رفض إذن المعلم أو المشرف أو الفائق",
      "student Or teacher permission denied": "رفض إذن الطالب أو المعلم",
      "admin Or superAdmin permission denied": "تم رفض إذن المشرف أو الفائق",
      "student Or superAdmin permission denied": "تم رفض إذن الطالب أو الفائق",
      "Copyright": "حقوق النشر",
      "Beta": "بيتا",
      "previous": "سابق",
      "next": "التالي",
      "Search": "يبحث",
      "New Student List": "قائمة الطلاب الجديدة"
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