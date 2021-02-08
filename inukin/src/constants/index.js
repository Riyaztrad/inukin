const CONSTANT = {
    App: {
        appVersion: '1.0.0',
        delayTime: 300,
        fonts: {
            DMSANSREGULAR: 'DMSans-Regular',
            DMSANSBOLD: 'DMSans-Bold',
            DMSANSMEDIUM: 'DMSans-Medium',
        },
        dimen: {
            buttonPadding: 15,
        },
        colors: {
            backgroundColor: '#fff',
            themeColor: '#e15e3e',
            placeholderColor: '#a6a6a6',
            inputBackground: '#f9fafc',

            logoColor: '#c03b2b',
            buttonColor: '#e15e3e',
            textColor: '#6e6e6e',
            whiteColor: 'white',
            blue: '#4684cf',
            fadedThemeColor: '#fca488',
            blackColor: 'black',
            coalColor: '#2D3034',

            yellow: '#FFBC36',
            green: '#007C00',
            darkGrey: '#4B4B4B',
            lightGrey: '#9C9C9C',
            superlightGrey: '#F4F4F4',
            navBarColor: '#FF572226',
            midGrey: '#7f8387',
            borderColor: '#707070',
            mealTitleColor: '#212121',

            //inukin color
            i_red: '#F15223',
            i_black: '#000000',
            i_background: '#FFFFFF',
            i_lightBlack: '#3B3B3B',
            i_grey: '#F7F8FA',
            i_lightGrey: '#A3A3A3',
            i_superGrey: '#BFBFBF',
            i_nanogrey: '#A1A1A1',
            i_ultraLight: '#E8E9EB',
            i_yellow: '#FEAF18',
            i_white: '#FFFFFF',
            i_solidblue: '#172B4D',
            i_backgroundAccount: '#F9FAFC',
            i_textGrey: '#B2B2B2',
            i_textEdit: '#172B4D'
        },
        staticImages: {
            avatar: require('../assets/icons/avatar.png'),
            edit: require('../assets/icons/edit.png'),
            star: require('../assets/icons/star.png'),
            rahul: require('../assets/icons/rahul.png'),
            maud: require('../assets/icons/maud.png'),
            rachma: require('../assets/icons/rachma.png'),
            annabelle: require('../assets/icons/annabelle.png'),
            rightArrow: require('../assets/icons/rightarrow.png'),
            message: require('../assets/icons/Message.png')
        },
        fontSize: {
            xSmall: 10,
            small: 12,
            smallMedium: 14,
            medium: 16,
            largeMedium: 18,
            large: 20,
            xLarge: 22,
            xxLarge: 24,
            xxxLarge: 26,
            superLarge: 32,
            extremeLarge: 42,
        },
        stackNames: {
            DrawerStack: 'DrawerStack',
        },
        staticImages: {
            profile: require('../utility/images/profilepic.png'),
            camera:require('../utility/images/camera.png'),
            banana:require('../utility/images/banana.png'),
            book:require('../utility/images/book.png'),
            donut:require('../utility/images/donut.png'),
            glass:require('../utility/images/glass.png'),
            orange:require('../utility/images/orange.png'),
            speakar:require('../utility/images/speakar.png'),
            invitefriend:require('../utility/images/invitefriend.png')

           // camera: require('../../../assets/camera.png'),
           // appIcon: require('../../../assets/appIcon.png'),
       },

        drawerMenu: {
            Home: 'Home',
            Dashboard: 'Dashboard',
            Deliveries: 'Deliveries',
            DeliveryDetails: 'Delivery Details',
            MyRatings: 'My Ratings',
            Map: 'Map',
            Settings: 'Settings',
            Notification: 'Notifications',
            Message: 'Messages',
            AboutUs: 'About Us',
            Logout: 'Log Out',
        },
        screenNames: {
            splash: 'splash',
            login: 'login',
            signup: 'signup',
            otp: 'otp',
            forgot: 'forgot',
            home: 'home',
            profile: 'profile',
            profileAccount: 'profileAccount',
            profileFollow: 'profileFollow',
            addList:'addList',
            friendInvite:'friendInvite'
        },

    },
    Api: {
        BaseUrl: 'http://65.1.62.192:4000/v1/',
        googleAuthKey: 'AIzaSyDQrCOcJGqu7GE-e8qabpXqrAbKj-inv9g', //Nabedish Client
        googleMapApi: 'AIzaSyCqQ-iTU8jkoO2YESZjJy0XDBTcImCoRm4',
        asynckeys: 'LocoLogicLocalStorage',
        userCredentials: 'savedUserCredentials',
        TOKEN: 'zLOqRQinUK',
        endPoints: {
            login: 'auth/signin',
            signup: 'auth/signup',
            forgotPassword: 'api/forgot/password',
            changePassword: 'api/change/password?token=',
            logout: 'api/logout?token=',
            getUserInfo: 'api/userdata?token=',
            editProfile: 'api/update/profile',
            editImage: 'api/update/profile/image',
            getDeliveries: 'api/deliveries?token=',
            locationDetail:
                'https://maps.googleapis.com/maps/api/place/details/json?placeid=',
            searchLocation:
                'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&key=',
            geocoding: 'https://maps.google.com/maps/api/geocode/json?key=',
            updateLocation: 'api/update/location',
            updateDeliveryStatus: 'api/delivery/status',
            endDuty: 'api/driver/endduty',
            dashboadapi: 'api/driver/dashboard',
            devliveryResponse: 'api/driver/response'
        },
    },
};

export default CONSTANT;