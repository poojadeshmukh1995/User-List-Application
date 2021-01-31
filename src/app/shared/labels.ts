export class Labels {
   public static userLoginLabels = {
      userLoginHeading: 'User Login',
      userId: 'User id',
      password: 'Password',
      buttonLabel: 'Let me in',
      idValidationMsg: 'Please enter valid id(1-10)',
      passwordValidationMsg: 'Please enter valid password'
   };
   public static userListLabels = {
      tableHeading: ['Id', 'Email', 'First name', 'Last name'],
      userListHeading: 'User List'

   };
   public static userProfileLabels = {
      name: 'Name',
      id: 'Id',
      email: 'Email'
   };
   public static navbarLabels = {
      navBarLabelsArray: [{
         label: 'User List',
         link: 'user-list'
      },
      {
         label: 'Profile',
         link: 'user-profile'
      },
      {
         label: 'Setting',
         link: 'setting'
      },
      {
         label: 'Log Out',
         link: ''
      }]
   };
   public static commonLabels = {
      errorMsg: 'Page not found!!!',
      apiErrorMsg: 'Something went wrong',
      warningMsg: 'This page is under construction!!!'
   };
}
