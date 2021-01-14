class Project {
    constructor(id, href, category, title, name, photo, client, desc, servicesArray, alt, imgArr, videoArr) {
        this.id = id;
        this.href = href;
        this.category = category;
        this.title = title;
        this.name = name;
        this.photo = photo;
        this.client = client;
        this.description = desc;
        this.services = servicesArray;
        this.alt = alt;
        this.imgArr = imgArr;
        this.videoArr = videoArr;
    }
}

const aJHref = "2020-general-election.html",
      aJCategory = ["election"],
      aJTitle = "AL JAZEERA USA ELECTION COVERAGE",
      aJName = "PACKAGE DESIGN CONCEPT",
      aJPhoto = "assets/IMG_3185.jpeg",
      aJClient = "AL JAZEERA",
      aJDesc = "Al Jazeera and Giant Octopus asked us to conceptualize the coverage of their 2020 US election. By using the landmarks of DC as our inspiration, we created a modern twist, using flat and 3D elements.",
      aJServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      aJAlt = "Al Jazeera Election Graphic",
      aJImages = ["assets/IMG_3185.jpeg", "assets/Generic Open 02.jpg", "assets/IMG_3187.jpeg", 
      "assets/IMG_3188.jpeg", "assets/IMG_3189.jpeg", "assets/IMG_3190.jpeg", "assets/IMG_3191.jpeg",
      "assets/IMG_3192.jpeg", "assets/IMG_3193.jpeg", "assets/IMG_3194.jpeg", "assets/IMG_3195.jpeg",
      "assets/IMG_3196.jpeg", "assets/IMG_3197.jpeg", "assets/IMG_3198.jpeg", "assets/IMG_3199.jpeg",
      "assets/IMG_3200.jpeg", "assets/IMG_3201.jpeg", "assets/IMG_3202.jpeg", "assets/IMG_3203.jpeg",
      "assets/IMG_3204.jpeg", "assets/IMG_3205.jpeg", "assets/IMG_3206.jpeg", "assets/IMG_3207.jpeg",
      "assets/IMG_3208.jpeg", "assets/IMG_3209.jpeg"],
      aJVideoArr = ["assets/Ajelection-1.m4v"];

export const aJElectionProject = new Project(1, aJHref, aJCategory, aJTitle, aJName, aJPhoto, aJClient, aJDesc, aJServices, aJAlt, aJImages, aJVideoArr);

const alArabHref = "al-arab.html",
      alArabCategory = ["branding"],
      alArabTitle = "AL ARAB",
      alArabName = "NETWORK PACKAGE",
      alArabPhoto = "assets/IMG_3450.jpeg",
      alArabClient = "AL ARAB/CAKE STUDIOS",
      alArabDesc = "",
      alArabServices = ["CONCEPT", "DESIGN"],
      alArabAlt = "Al Arab Network Graphic",
      alArabImages = ["assets/IMG_3442.jpeg", "assets/IMG_3443.jpeg", "assets/IMG_3444.jpeg",
      "assets/IMG_3445.jpeg", "assets/IMG_3446.jpeg", "assets/IMG_3447.jpeg", "assets/IMG_3448.jpeg",
      "assets/IMG_3449.jpeg", "assets/IMG_3450.jpeg", "assets/IMG_3451.jpeg", "assets/IMG_3452.jpeg", 
      "assets/IMG_3453.jpeg", "assets/IMG_3454.jpeg", "assets/IMG_3455.jpeg", "assets/IMG_3456.jpeg",
      "assets/IMG_3457.jpeg", "assets/IMG_3458.jpeg", "assets/IMG_3459.jpeg"],
      alArabVideos = [];

export const alArabProject = new Project(2, alArabHref, alArabCategory, alArabTitle, alArabName, alArabPhoto, alArabClient, alArabDesc, alArabServices, alArabAlt, alArabImages, alArabVideos);

const alWatanHref = "al-watan.html",
      alWatanCategory = ["news", "photography"],
      alWatanTitle = "AL WATAN",
      alWatanName = "NEWS PACKAGE",
      alWatanPhoto = "assets/XclJCAew.jpeg",
      alWatanClient = "AL WATAN / GIANT OCTOPUS",
      alWatanDesc = "While working at Giant Octopus we were asked to rebrand Al Watan's news package. We started by traveling to Kuait to shoot the landmarks of the area. The city is a contrast between old and new. By juxaposing images such as old saiking ships against modern glass building we were able to create a visually arresting package.",
      alWatanServices = ["CONCEPT", "DESIGN", "LOCATION", "PHOTOGRAPHY", "ANIMATION"],
      alWatanAlt = "Al Watan Graphic",
      alWatanImages = ["assets/IMG_3272.jpeg", "assets/IMG_3273.jpeg", "assets/IMG_3274.jpeg",
      "assets/IMG_3275.jpeg", "assets/IMG_3276.jpeg", "assets/IMG_3277.jpeg", "assets/IMG_3278.jpeg",
      "assets/IMG_3279.jpeg", "assets/IMG_3280.jpeg", "assets/IMG_3289.jpeg", "assets/IMG_3290.jpeg",
      "assets/IMG_3291.jpeg", "assets/IMG_3292.jpeg", "assets/IMG_3293.jpeg", "assets/IMG_3294.jpeg",
      "assets/IMG_3295.jpeg", "assets/IMG_3296.jpeg", "assets/IMG_3297.jpeg", "assets/IMG_3298.jpeg",
      "assets/IMG_3299.jpeg", "assets/IMG_3300.jpeg", "assets/IMG_3301.jpeg", "assets/IMG_3302.jpeg",
      "assets/IMG_3303.jpeg", "assets/IMG_3304.jpeg", "assets/IMG_3305.jpeg", "assets/IMG_3306.jpeg",
      "assets/IMG_3307.jpeg"],
      alWatanVideos = ["assets/v_AL_WATAN.mp4"];

export const alWatanProject = new Project(3, alWatanHref, alWatanCategory, alWatanTitle, alWatanName, alWatanPhoto, alWatanClient, alWatanDesc, alWatanServices, alWatanAlt, alWatanImages, alWatanVideos);

const alhuuraHref = "alhuura.html",
      alhuuraCategory = ["branding"],
      alhuuraTitle = "ALHUURA NETWORK",
      alhuuraName = "CONCEPT",
      alhuuraPhoto = "assets/IMG_3217.jpeg",
      alhuuraClient = "ALHUURA / GIANT OCTOPUS",
      alhuuraDesc = "Alhurra and Giant Octopus asked us to conceptualize the rebranding for Alhurra News. Our designs needed to feel Arabic as well as have a American sensibility.",
      alhuuraServices = ["CONCEPT", "DESIGN"],
      alhuuraAlt = "Alhuura Graphic",
      alhuuraImages = ["assets/IMG_3210.jpeg", "assets/IMG_3211.jpeg", "assets/IMG_5025.jpeg",
      "assets/IMG_3213.jpeg", "assets/IMG_3214.jpeg", "assets/IMG_3215.jpeg", "assets/IMG_3216.jpeg",
      "assets/IMG_3217.jpeg", "assets/IMG_3218.jpeg", "assets/IMG_3219.jpeg", "assets/IMG_3220.jpeg",
      "assets/IMG_3221.jpeg", "assets/IMG_3222.jpeg", "assets/IMG_3223.jpeg", "assets/IMG_3224.jpeg",
      "assets/IMG_3225.jpeg", "assets/IMG_3226.jpeg", "assets/IMG_3227.jpeg", "assets/IMG_3228.jpeg"],
      alhuuraVideos = [];

export const alhuuraProject = new Project(4, alhuuraHref, alhuuraCategory, alhuuraTitle, alhuuraName, alhuuraPhoto, alhuuraClient, alhuuraDesc, alhuuraServices, alhuuraAlt, alhuuraImages, alhuuraVideos);

const apHref = "ap.html",
      apCategory = ["news"],
      apTitle = "ASSOCIATED PRESS",
      apName = "ONLINE NEWS PACKAGE",
      apPhoto = "assets/download (4).png",
      apClient = "ASSOCIATED PRESS / GIANT OCTOPUS",
      apDesc = "Designed to be an online only package, the style was clean and bold, using flat and 3D elements together to create a dynamic look.",
      apServices =  ["CONCEPT", "DESIGN", "ANIMATION"],
      apAlt = "Associated Press News Graphic",
      apImages = ["assets/IMG_3380.jpeg", "assets/IMG_3381.jpeg", "assets/IMG_3382.jpeg",
      "assets/IMG_3383.jpeg", "assets/IMG_3384.jpeg", "assets/IMG_3385.jpeg", "assets/IMG_3386.jpeg",
      "assets/IMG_3387.jpeg"],
      apVideos = ["assets/Associated Press.mp4"];

export const apProject = new Project(5, apHref, apCategory, apTitle, apName, apPhoto, apClient, apDesc, apServices, apAlt, apImages, apVideos);

const arvrHref = "ar-vr.html",
      arvrCategory = ["ar-vr"],
      arvrTitle = "MISC. AR /VR",
      arvrName = "SET DESIGN",
      arvrPhoto = "assets/IMG_3589.jpeg",
      arvrClient = "VARIOUS",
      arvrDesc = "Working with various set companies, we created AR elements and VR sets.",
      arvrServices = ["CONCEPT", "AR DESIGN", "VR DESIGN"],
      arvrAlt = "Augmented and Virtural Set Design",
      arvrImages = ["assets/IMG_3574.jpeg", "assets/IMG_3575.jpeg", "assets/IMG_3576.jpeg",
      "assets/IMG_3577.jpeg", "assets/IMG_3578.jpeg", "assets/IMG_3579.jpeg", "assets/IMG_3580.jpeg",
      "assets/IMG_3581.jpeg", "assets/IMG_3582.jpeg", "assets/IMG_3583.jpeg", "assets/IMG_3584.jpeg",
      "assets/IMG_3585.jpeg", "assets/IMG_3586.jpeg", "assets/IMG_3587.jpeg", "assets/IMG_3588.jpeg",
      "assets/IMG_3589.jpeg", "assets/IMG_3590.jpeg", "assets/IMG_3591.jpeg", "assets/IMG_3592.jpeg",
      "assets/IMG_3593.jpeg", "assets/IMG_3594.jpeg", "assets/IMG_3595.jpeg", "assets/IMG_3596.jpeg",
      "assets/IMG_3597.jpeg", "assets/IMG_3598.jpeg", "assets/IMG_3599.jpeg", "assets/IMG_3600.jpeg",
      "assets/IMG_3601.jpeg", "assets/IMG_3602.jpeg", "assets/IMG_3603.jpeg", "assets/IMG_3604.jpeg"],
      arvrVideos = [];

export const arvrProject = new Project(6, arvrHref, arvrCategory, arvrTitle, arvrName, arvrPhoto, arvrClient, arvrDesc, arvrServices, arvrAlt, arvrImages, arvrVideos);

const atHref = "arab-telemedia.html",
      atCategory = ["branding"],
      atTitle = "ARAB TELEMEDIA",
      atName = "NETWORK DESIGN",
      atPhoto = "assets/download (9).png",
      atClient = "ARAB TELEMEDIA / GIANT OCTOPUS",
      atDesc = "Arab Telemedia was a new start-up network that asked Giant Octops and ourselves to create a brand for the network. This was a nine month project that included logo creation, news, sports and entertainment.",
      atServices = ["CONCEPT", "DESIGN", "ANIMATION", "LOGO DESIGN"],
      atAlt = "Arab Telemedia Network Graphic",
      atImages = ["assets/IMG_3632.jpeg", "assets/IMG_3633.jpeg", "assets/IMG_3634.jpeg",
      "assets/IMG_3635.jpeg", "assets/IMG_3636.jpeg", "assets/IMG_3637.jpeg", "assets/IMG_3638.jpeg",
      "assets/IMG_3638.jpeg", "assets/IMG_3639.jpeg", "assets/IMG_3640.jpeg", "assets/IMG_3641.jpeg",
      "assets/IMG_3642.jpeg", "assets/IMG_3643.jpeg", "assets/IMG_3644.jpeg", "assets/IMG_3645.jpeg",
      "assets/IMG_3646.jpeg", "assets/IMG_3647.jpeg", "assets/IMG_3648.jpeg", "assets/IMG_3649.jpeg",
      "assets/IMG_3650.jpeg", "assets/IMG_3651.jpeg", "assets/IMG_3652.jpeg", "assets/IMG_3653.jpeg",
      "assets/IMG_3654.jpeg", "assets/IMG_3655.jpeg", "assets/IMG_3656.jpeg", "assets/IMG_3657.jpeg",
      "assets/IMG_3658.jpeg", "assets/IMG_3659.jpeg", "assets/IMG_3660.jpeg", "assets/IMG_3661.jpeg",
      "assets/IMG_3662.jpeg", "assets/IMG_3663.jpeg", "assets/IMG_3664.jpeg", "assets/IMG_3665.jpeg",
      "assets/IMG_3666.jpeg", "assets/IMG_3667.jpeg", "assets/IMG_3668.jpeg", "assets/IMG_3669.jpeg",
      "assets/IMG_3670.jpeg", "assets/IMG_3671.jpeg", "assets/IMG_3672.jpeg", "assets/IMG_3673.jpeg",
      "assets/IMG_3674.jpeg", "assets/IMG_3675.jpeg", "assets/IMG_3676.jpeg", "assets/IMG_3677.jpeg",
      "assets/IMG_3678.jpeg", "assets/IMG_3679.jpeg", "assets/IMG_3680.jpeg", "assets/IMG_3690.jpeg",
      "assets/IMG_3691.jpeg", "assets/IMG_3692.jpeg", "assets/IMG_3693.jpeg"],
      atVideos = ["assets/Arab Telemedia.mp4"];

export const atProject = new Project(7, atHref, atCategory, atTitle, atName, atPhoto, atClient, atDesc, atServices, atAlt, atImages, atVideos);

const bonHref = "blue-ocean-network.html",
      bonCategory = ["branding", "news"],
      bonTitle = "BLUE OCEAN",
      bonName = "NETWORK PACKAGE",
      bonPhoto = "assets/download (6).png",
      bonClient = "GIANT OCTOPUS / BLUE OCEAN NETWORK",
      bonDesc = "While working at Giant Octopus BON asked us to design the new Chinese, Engkish speaking channel to be broadcast in the US. They wanted it to feel comfortable to the American sensibility while still feeling Chinese in origin.",
      bonServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      bonAlt = "Blue Ocean Network Graphic",
      bonImages = ["assets/IMG_3405.jpeg", "assets/IMG_3407.jpeg", "assets/IMG_3408.jpeg",
      "assets/IMG_3409.jpeg", "assets/IMG_3410.jpeg", "assets/IMG_3411.jpeg", "assets/IMG_3412.jpeg"],
      bonVideos = ["assets/Blue Ocean Network Package Design.mp4"];

export const bonProject = new Project(8, bonHref, bonCategory, bonTitle, bonName, bonPhoto, bonClient, bonDesc, bonServices, bonAlt, bonImages, bonVideos);

const buyHref = "byu-sports.html",
      buyCategory = ["sports"],
      buyTitle = "BYU",
      buyName = "FOOTBALL PACKAGE",
      buyPhoto = "assets/IMG_3404.jpeg",
      buyClient = "GIANT OCTOPUS / BYU",
      buyDesc = "BYU and Giant Octopus asked us to create a new brand for their football team. The open graphics reflect upon BYU’s historical past and is constantly building towards the future.",
      buyServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      buyAlt = "BYU Sports Graphic",
      buyImages = ["assets/IMG_3397.jpeg", "assets/IMG_3398.jpeg", "assets/IMG_3399.jpeg",
      "assets/IMG_3400.jpeg", "assets/IMG_3401.jpeg", "assets/IMG_3402.jpeg", "assets/IMG_3403.jpeg",
      "assets/IMG_3404.jpeg"],
      buyVideos = [];

export const buyProject = new Project(9, buyHref, buyCategory, buyTitle, buyName, buyPhoto, buyClient, buyDesc, buyServices, buyAlt, buyImages, buyVideos);

const expHref = "experimental.html",
      expCategory = ["none"],
      expTitle = "Experimental",
      expName = "Misc. DESIGN",
      expPhoto = "assets/scene 3323 test.jpg",
      expClient = "DESIGNHUB",
      expDesc = "",
      expServices = ["FORM AND TEXTURE EXPERIMENTATION"],
      expAlt = "Experimental Design",
      expImages = ["assets/scene 9 test.jpg", "assets/scene 25 test.jpg", "assets/scene 34 test 261.jpg",
      "assets/scene 51 test.jpg", "assets/scene 83 test.jpg", "assets/scene 94 test.jpg", "assets/scene 325 test.jpg",
      "assets/scene 331 test.jpg", "assets/scene 335 test.jpg", "assets/scene 337 test.jpg", "assets/scene 3312 test.jpg",
      "assets/scene 3323 test.jpg"],
      expVideos = [];

export const expProject = new Project(10, expHref, expCategory, expTitle, expName, expPhoto, expClient, expDesc, expServices, expAlt, expImages, expVideos);

const facadeHref = "facade-georgian-group.html",
      facadeCategory = ["corporate"],
      facadeTitle = "FACADE GEORGIAN GROUP",
      facadeName = "CORPORATE DESIGN",
      facadePhoto = "assets/FACADE_tgas (0-00-25-20).jpg",
      facadeClient = "FACADE GEORGIAN GROUP",
      facadeDesc = "",
      facadeServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      facadeAlt = "Facade Graphic",
      facadeImages = ["assets/FACADE_tgas (0-00-03-16).jpg", "assets/FACADE_tgas (0-00-09-22).jpg",
      "assets/FACADE_tgas (0-00-13-28).jpg", "assets/FACADE_tgas (0-00-19-01).jpg", "assets/FACADE_tgas (0-00-20-04).jpg",
      "assets/FACADE_tgas (0-00-21-01).jpg", "assets/FACADE_tgas (0-00-25-20).jpg"],
      facadeVideos = ["assets/Facade Tgas-1.m4v"];

export const facadeProject = new Project(11, facadeHref, facadeCategory, facadeTitle, facadeName, facadePhoto, facadeClient, facadeDesc, facadeServices, facadeAlt, facadeImages, facadeVideos);

const foxsocHref = "fox-major-league-soccer.html",
      foxsocCategory = ["sports"],
      foxsocTitle = "FOX MAJOR LEAGUE SOCCER",
      foxsocName = "SPORTS OPEN",
      foxsocPhoto = "assets/MLS14.jpg",
      foxsocClient = "CAKE STUDIOS / FOX",
      foxsocDesc = "",
      foxsocServices = ["CONCEPT", "DESIGN"],
      foxsocAlt = "Fox Major lequre Soccer Graphic",
      foxsocImages = ["assets/IMG_3239.jpeg", "assets/IMG_3240.jpeg", "assets/IMG_3241.jpeg",
      "assets/IMG_3242.jpeg", "assets/IMG_3243.jpeg", "assets/IMG_3244.jpeg", "assets/IMG_3245.jpeg",
      "assets/IMG_3246.jpeg", "assets/IMG_3247.jpeg", "assets/IMG_3248.jpeg", "assets/IMG_3249.jpeg",
      "assets/IMG_3250.jpeg", "assets/IMG_3251.jpeg", "assets/IMG_3252.jpeg"],
      foxsocVideos = [];

export const foxsocProject = new Project(12, foxsocHref, foxsocCategory, foxsocTitle, foxsocName, foxsocPhoto, foxsocClient, foxsocDesc, foxsocServices, foxsocAlt, foxsocImages, foxsocVideos);

const foxboxHref = "fox-premier-boxing.html",
      foxboxCategory = ["sports"],
      foxboxTitle = "FOX",
      foxboxName = "PREMIER BOXING",
      foxboxPhoto = "assets/download.png",
      foxboxClient = "CAKE STUDIOS / FOX",
      foxboxDesc = "",
      foxboxServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      foxboxAlt = "Fox Premier Boxing Graphic",
      foxboxImages = ["assets/IMG_3357.jpeg", "assets/IMG_3358.jpeg", "assets/IMG_3359.jpeg",
      "assets/IMG_3360.jpeg", "assets/IMG_3361.jpeg", "assets/IMG_3362.jpeg"],
      foxboxVideos = [];

export const foxboxProject = new Project(13, foxboxHref, foxboxCategory, foxboxTitle, foxboxName, foxboxPhoto, foxboxClient, foxboxDesc, foxboxServices, foxboxAlt, foxboxImages, foxboxVideos);

const foxHref = "fox-syndicated-package.html",
      foxCategory = ["news"],
      foxTitle = "FOX NEWS",
      foxName = "SYNDICATED PACKAGE",
      foxPhoto = "assets/FOX_STILL_4.jpg",
      foxClient = "DESIGNHUB",
      foxDesc = "We created a FOX syndicated package that can be customized to meet any FOX stations needs.",
      foxServices = ["CONCEPT", "DESIGN"],
      foxAlt = "Fox Graphic",
      foxImages = ["assets/IMG_3259.jpeg", "assets/IMG_3260.jpeg", "assets/IMG_3261.jpeg",
      "assets/IMG_3262.jpeg", "assets/IMG_3263.jpeg", "assets/IMG_3264.jpeg", "assets/IMG_3265.jpeg",
      "assets/IMG_3266.jpeg", "assets/IMG_3267.jpeg", "assets/IMG_3268.jpeg", "assets/IMG_3269.jpeg",
      "assets/IMG_3270.jpeg"],
      foxVideos = ["assets/FOX Syndicated Package.mp4"];

export const foxProject = new Project(14, foxHref, foxCategory, foxTitle, foxName, foxPhoto, foxClient, foxDesc, foxServices, foxAlt, foxImages, foxVideos);

const insightecHref = "insightec.html",
      insightecCategory = ["corporate"],
      insightecTitle = "INSIGHTEC",
      insightecName = "CORPORATE DESIGN",
      insightecPhoto = "assets/INSIGHTEC_STYLE_FRAME_WIP2_c.jpg",
      insightecClient = "INSIGHTEC",
      insightecDesc = "",
      insightecServices = ["CONCEPT", "PRINT DESIGN"],
      insightecAlt = "assets/INSIGHTEC_STYLE_FRAME_WIP2_c.jpg",
      insightecImages = ["assets/INSIGHTEC_4th_frame.jpg", "assets/INSIGHTEC_4th_frame_WIP3.jpg",
      "assets/INSIGHTEC_STYLE_FRAME_WIP2_c.jpg", "assets/INSIGHTEC_7th_frame_wip_1.jpg",
      "assets/INSIGHTEC_8th_frame_WIP19.jpg"],
      insightecVideos = [];

export const insightecProject = new Project(15, insightecHref, insightecCategory, insightecTitle, insightecName, insightecPhoto, insightecClient, insightecDesc, insightecServices, insightecAlt, insightecImages, insightecVideos);

const krgvHref = "krgv.html",
      krgvCategory = ["news"],
      krgvTitle = "KRGV PACKAGE",
      krgvName = "PACKAGE REDESIGN",
      krgvPhoto = "assets/frame_23.jpg",
      krgvClient = "KRGV",
      krgvDesc = "KRGV wanted us to refresh their graphics package with a newer, flat approach. Using dynamic wipes against the bold colors, we created a package that was vibrant and energetic.",
      krgvServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      krgvAlt = "KRGV Graphic",
      krgvImages = ["assets/frame_14.jpg", "assets/frame_23.jpg", "assets/frame_33.jpg",
      "assets/frame_43.jpg", "assets/frame_59.jpg", "assets/frame_72.jpg", "assets/frame_90.jpg",
      "assets/frame_106.jpg", "assets/frame_299.jpg", "assets/frame_335.jpg", "assets/frame_387.jpg",
      "assets/frame_260.jpg", "assets/frame_157.jpg", "assets/frame_202.jpg", "assets/frame_237.jpg",
      "assets/frame_329.jpg", "assets/frame_372.jpg", "assets/frame_100.jpg", "assets/frame_332.jpg",
      "assets/frame_0 (1).jpg"],
      krgvVideos = ["assets/News Open Morning.m4v", "assets/Anchor Open.m4v", "assets/Topical Open-1.m4v",
      "assets/Krgv Fullscreen)-1.m4v", "assets/Breaking News-1.m4v", "assets/Ots Example (1)-1.m4v"];

export const krgvProject = new Project(16, krgvHref, krgvCategory, krgvTitle, krgvName, krgvPhoto, krgvClient, krgvDesc, krgvServices, krgvAlt, krgvImages, krgvVideos);

const ktbsHref = "ktbs.html",
      ktbsCategory = ["news"],
      ktbsTitle = "KTBS NEWS",
      ktbsName = "PACKAGE DESIGN",
      ktbsPhoto = "assets/IMG_3271.jpeg",
      ktbsClient = "KTBS / GIANT OCTOPUS",
      ktbsDesc = "KTBS and Giant Octopus asked us to rebrand the news graphics for KTBS. Based on one of our syndicated packages, we created a strong, modern package with a Texas-centric coloe scheme.",
      ktbsServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      ktbsAlt = "KTBS Graphic",
      ktbsImages = ["assets/IMG_3253.jpeg", "assets/IMG_3254.jpeg", "assets/IMG_3255.jpeg",
      "assets/IMG_3256.jpeg", "assets/IMG_3257.jpeg", "assets/IMG_3258.jpeg"],
      ktbsVideos = ["assets/Ktbs Open-1.m4v", "assets/FIRST NEWS FRANCHISE REV.mp4",
      "assets/KTBS SPORT FRANCHISE (3).mp4"];

export const ktbsProject = new Project(17, ktbsHref, ktbsCategory, ktbsTitle, ktbsName, ktbsPhoto, ktbsClient, ktbsDesc, ktbsServices, ktbsAlt, ktbsImages, ktbsVideos);

const kxanHref = "kxan.html",
      kxanCategory = ["news"],
      kxanTitle = "KXAN",
      kxanName = "NEWS PACKAGE",
      kxanPhoto = "assets/download (3).png",
      kxanClient = "KXAN / GIANT OCTOPUS",
      kxanDesc = "Winner of a Silver Promax Award, this package created a new brand for KXAN. The choice of making the logo lowercase as unusual and stood out among their competition.",
      kxanServices = ["CONCEPT", "DESIGN", "ANIMATION", "LOGO DESIGN"],
      kxanAlt = "KXAN News Graphic",
      kxanImages = ["assets/IMG_3375.jpeg", "assets/IMG_3376.jpeg", "assets/IMG_3377.jpeg",
      "assets/IMG_3378.jpeg", "assets/IMG_3379.jpeg"],
      kxanVideos = ["assets/KXAN Package Design  Silver Promax Award.mp4"];

export const kxanProject = new Project(18, kxanHref, kxanCategory, kxanTitle, kxanName, kxanPhoto, kxanClient, kxanDesc, kxanServices, kxanAlt, kxanImages, kxanVideos);

const mhHref = "more-health.html",
      mhCategory = ["non-profit"],
      mhTitle = "MORE HEALTH",
      mhName = "SHORT FILM",
      mhPhoto = "assets/download (7).jpg",
      mhClient = "MORE HEALTH",
      mhDesc = "More health called upon us to create a short animated film to promote dental health and tooth sealing to school children. This movie was distributed free across the country for use in the dental health industry.",
      mhServices = ["CONCEPT", "DESIGN", "ANIMATION DIRECTION", "WRITING"],
      mhAlt = "More Health Short Film",
      mhImages = ["assets/IMG_3431.jpeg", "assets/IMG_3432.jpeg", "assets/IMG_3433.jpeg",
      "assets/IMG_3434.jpeg", "assets/IMG_3435.jpeg", ],
      mhVideos = ["assets/Magidragon Final Jan24-1.m4v"];

export const mhProject = new Project(19, mhHref, mhCategory, mhTitle, mhName, mhPhoto, mhClient, mhDesc, mhServices, mhAlt, mhImages, mhVideos);

const nflHref = "nfl.html",
      nflCategory = ["sports"],
      nflTitle = "THURSDAY NIGHT FOOTBALL",
      nflName = "NFL",
      nflPhoto = "assets/IMG_3441.jpeg",
      nflClient = "NFL / CAKE STUDIOS",
      nflDesc = "",
      nflServices = ["CONCEPT", "DESIGN"],
      nflAlt = "Thursday Night Football Graphic",
      nflImages = ["assets/IMG_3436.jpeg", "assets/IMG_3437.jpeg", "assets/IMG_3438.jpeg", 
      "assets/IMG_3439.jpeg", "assets/IMG_3440.jpeg", "assets/IMG_3441.jpeg"],
      nflVideos = [];

export const nflProject = new Project(20, nflHref, nflCategory, nflTitle, nflName, nflPhoto, nflClient, nflDesc, nflServices, nflAlt, nflImages, nflVideos);

const ocsHref = "orlando-city-soccer.html",
      ocsCategory = ["sports"],
      ocsTitle = "ORLANDO CITY SOCCER CLUB",
      ocsName = "SPORTS PACKAGE",
      ocsPhoto = "assets/IMG_3612.jpeg",
      ocsClient = "ORLANDO CITY SOCCER CLUB",
      ocsDesc = "When Orlando City Soccer Club asked us to rebrand their soccer team broadcast graphics, we were happy to say yes. This package is still going strong after 6 years.",
      ocsServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      ocsAlt = "Orlando City Soccer Graphic",
      ocsImages = ["assets/IMG_3609.jpeg", "assets/IMG_3610.jpeg", "assets/IMG_3611.jpeg",
      "assets/IMG_3612.jpeg", "assets/IMG_3613.jpeg", "assets/IMG_3614.jpeg", "assets/IMG_3615.jpeg",
      "assets/IMG_3616.jpeg", "assets/IMG_3617.jpeg", "assets/IMG_3618.jpeg", "assets/IMG_3619.jpeg",
      "assets/IMG_3620.jpeg", "assets/IMG_3621.jpeg", "assets/IMG_3622.jpeg", "assets/IMG_3623.jpeg",
      "assets/IMG_3624.jpeg", "assets/IMG_3625.jpeg", "assets/IMG_3626.jpeg", "assets/IMG_3627.jpeg",
      "assets/IMG_3628.jpeg", "assets/IMG_3629.jpeg", "assets/IMG_3630.jpeg", "assets/IMG_3625.jpeg"],
      ocsVideos = ["assets/Orlando City Soccer Package.mp4"];

export const ocsProject = new Project(21, ocsHref, ocsCategory, ocsTitle, ocsName, ocsPhoto, ocsClient, ocsDesc, ocsServices, ocsAlt, ocsImages, ocsVideos);

const pac12Href = "pac12-basketball.html",
      pac12Category = ["sports"],
      pac12Title = "PAC 12 BASKETBALL",
      pac12Name = "SPORTS PACKAGE",
      pac12Photo = "assets/IMG_3371.jpeg",
      pac12Client = "CAKE STUDIOS / PAC 12",
      pac12Desc = "",
      pac12Services = ["CONCEPT", "DESIGN"],
      pac12Alt = "PAC 12 BasketBall Graphic",
      pac12Images = ["assets/IMG_3371.jpeg", "assets/IMG_3372.jpeg", "assets/IMG_3373.jpeg",
      "assets/IMG_3374.jpeg"],
      pac12Videos = [];

export const pac12Project = new Project(22, pac12Href, pac12Category, pac12Title, pac12Name, pac12Photo, pac12Client, pac12Desc, pac12Services, pac12Alt, pac12Images, pac12Videos);

const rkHref = "regis-and-kelly.html",
      rkCategory = ["entertainment", "photography"],
      rkTitle = "REGIS AND KELLY",
      rkName = "SHOW OPEN",
      rkPhoto = "assets/IMG_3350.jpeg",
      rkClient = "CBS / GIANT OCTOPUS",
      rkDesc = "While working at Giant Octopus we were asked to create a new open for the Regis and Kelly Show. We headed to NY to shoot this talent driven show open in the city. We ficused on keeping the concept and graphics fun and whimsical to match the direction of the show.",
      rkServices = ["CONCEPT", "DESIGN", "ANIMATION", "PHOTOSHOOT", "LOGO UPDATE"],
      rkAlt = "Regis and Kelly Graphic",
      rkImages = ["assets/IMG_3344.jpeg", "assets/IMG_3345.jpeg", "assets/IMG_3346.jpeg",
      "assets/IMG_3347.jpeg", "assets/IMG_3348.jpeg", "assets/IMG_3349.jpeg", "assets/IMG_3350.jpeg"],
      rkVideos = ["assets/Regis and Kelly.mp4"];

export const rkProject = new Project(23, rkHref, rkCategory, rkTitle, rkName, rkPhoto, rkClient, rkDesc, rkServices, rkAlt, rkImages, rkVideos);

const snHref = "somos-noticias.html",
      snCategory = ["news"],
      snTitle = "SOMOS NOTICIAS",
      snName = "NEWS PACKAGE",
      snPhoto = "assets/doboKvtQ.jpeg",
      snClient = "KRGV / GIANT OCTOPUS",
      snDesc = "KRGV asked us to brand their Spainish speaking news station. Being a Texas border city, it was important to speak to both spainish speaking communities from both sides of the Rio Grande.",
      snServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      snAlt = "Somos Noticias Graphic",
      snImages = ["assets/IMG_3308.jpeg", "assets/IMG_3309.jpeg", "assets/IMG_3310.jpeg",
      "assets/IMG_3311.jpeg", "assets/IMG_3312.jpeg", "assets/IMG_3313.jpeg", "assets/IMG_3314.jpeg"],
      snVideos = ["assets/somos_open).mp4", "assets/Somos Short Open-1.m4v"];

export const snProject = new Project(24, snHref, snCategory, snTitle, snName, snPhoto, snClient, snDesc, snServices, snAlt, snImages, snVideos);

const sepHref = "syndicated-election-package.html",
      sepCategory = ["election"],
      sepTitle = "ELECTION PACKAGE",
      sepName = "SYNDICATED",
      sepPhoto = "assets/IMG_3231.jpeg",
      sepClient = "WFMJ",
      sepDesc = "We were delighted to provide WFMJ with an Election package that could be used from primaries through the general election. It is now available to be re-sold to any market.",
      sepServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      sepAlt = "WFMJ Election Package Graphic",
      sepImages = ["assets/IMG_3229.jpeg", "assets/IMG_3230.jpeg", "assets/IMG_3231.jpeg", 
      "assets/IMG_3232.jpeg", "assets/IMG_3233.jpeg", "assets/IMG_3234.jpeg", "assets/IMG_3235.jpeg",
      "assets/IMG_3236.jpeg", "assets/IMG_3237.jpeg", "assets/IMG_3238.jpeg"],
      sepVideos = ["assets/ELECTION 2018 OPEN KEYABLEw SOUND (Converted).mp4", 
      "assets/RESULTS LOWERTHIRD EXAMPLE (Converted).mp4", "assets/4 CANDIDATES EXAMPLE.mp4",
      "assets/3 CANDIDATE EXAMPLE.mp4", "assets/2 CANDIDATES EXAMPLE2.mp4", 
      "assets/2 BOX EXAMPLE.mp4", "assets/BACKGROUND CHYRON LOOP 2(Converted).mp4",
      "assets/OTS EXAMPLE (1).mp4", "assets/Lowerthird example.mp4"];

export const sepProject = new Project(25, sepHref, sepCategory, sepTitle, sepName, sepPhoto, sepClient, sepDesc, sepServices, sepAlt, sepImages, sepVideos);

const spHref = "syndicated-package.html.",
      spCategory = ["news"],
      spTitle = "ABC 6",
      spName = "NEWS PACKAGE CONCEPT",
      spPhoto = "assets/download (5).png",
      spClient = "ABC 6",
      spDesc = "ABC6 asked us to conceptualize a new style for their news package.",
      spServices = ["CONCEPT", "DESIGN"],
      spAlt = "ABC News Graphic",
      spImages = ["assets/IMG_3388.jpeg", "assets/IMG_3389.jpeg", "assets/IMG_3390.jpeg",
      "assets/IMG_3391.jpeg", "assets/IMG_3392.jpeg", "assets/IMG_3393.jpeg", "assets/IMG_3394.jpeg",
      "assets/IMG_3395.jpeg", "assets/IMG_3396.jpeg"],
      spVideos = [];

export const spProject = new Project(26, spHref, spCategory, spTitle, spName, spPhoto, spClient, spDesc, spServices, spAlt, spImages, spVideos);

const tpirHref = "the-price-is-right.html",
      tpirCategory = ["entertainment"],
      tpirTitle = "THE PRICE IS RIGHT",
      tpirName = "GAME SHOW OPEN",
      tpirPhoto = "assets/download (8).png",
      tpirClient = "THE PRICE IS RIGHT / CAKE STUDIOS",
      tpirDesc = "",
      tpirServices = ["CONCEPT", "DESIGN"],
      tpirAlt = "The Price Is Right Graphic",
      tpirImages = ["assets/IMG_3605.jpeg", "assets/IMG_3606.jpeg", "assets/IMG_3607.jpeg",
      "assets/IMG_3608.jpeg"],
      tpirVideos = [];

export const tpirProject = new Project(27, tpirHref, tpirCategory, tpirTitle, tpirName, tpirPhoto, tpirClient, tpirDesc, tpirServices, tpirAlt, tpirImages, tpirVideos);

const trtHref = "trt1.html",
      trtCategory = ["branding", "news"],
      trtTitle = "TRT 1",
      trtName = "NEWS PACKAGE",
      trtPhoto = "assets/IMG_3317.jpeg",
      trtClient = "TRT1/ GIANT OCTOPUS",
      trtDesc = "While working at Giant Octopus, TRT asked us to re-design their TRT1 channel.",
      trtServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      trtAlt = "TRT 1 Graphic",
      trtImages = ["assets/IMG_3315.jpeg", "assets/IMG_3316.jpeg", "assets/IMG_3317.jpeg",
      "assets/IMG_3318.jpeg", "assets/IMG_3319.jpeg", "assets/IMG_3320.jpeg", "assets/IMG_3321.jpeg",
      "assets/IMG_3322.jpeg", "assets/IMG_3323.jpeg", "assets/IMG_3324.gif", "assets/IMG_3325.jpeg",
      "assets/IMG_3326.jpeg", "assets/IMG_3327.jpeg", "assets/IMG_3328.jpeg", "assets/IMG_3329.jpeg", 
      "assets/IMG_3330.jpeg", "assets/IMG_3331.jpeg", "assets/IMG_3332.jpeg", "assets/IMG_3333.jpeg",
      "assets/IMG_3334.jpeg", "assets/IMG_3335.jpeg", "assets/IMG_3336.jpeg", "assets/IMG_3337.jpeg", 
      "assets/IMG_3338.jpeg", "assets/IMG_3339.jpeg", "assets/IMG_3340.jpeg", "assets/IMG_3341.jpeg", 
      "assets/IMG_3342.jpeg", "assets/IMG_3343.jpeg"],
      trtVideos = ["assets/TRT_open.m4v", "assets/TRT-Tease-002-HD.mp4", "assets/Trt-Tease-003-Hd-1.m4v", 
      "assets/TRT-ID-HD.mp4", "assets/NEWS L3rd two line HD.mp4", "assets/NEWS L3rd one line HD.mp4", 
      "assets/Lower 3rd Evening.mp4", "assets/evening_Trans.mp4", "assets/Evening Trio.mp4", 
      "assets/Evening Single Show.mp4", "assets/Evening Mortise.mp4", "assets/TRT-News Package.mp4", 
      "assets/TRT-NewsFranchise-HD.mp4"];

export const trtProject = new Project(28, trtHref, trtCategory, trtTitle, trtName, trtPhoto, trtClient, trtDesc, trtServices, trtAlt, trtImages, trtVideos);

const unHref = "univision-news.html",
      unCategory = ["news"],
      unTitle = "UNIVISION NEWS",
      unName = "NEWS PACKAGE CONCEPT",
      unPhoto = "assets/IMG_3419.jpeg",
      unClient = "GIANT OCTOPUS / UNIVISION",
      unDesc = "While working at Giant Octopus, Univision asked us to conceptualize a new style for their News Show that would be used by all the Univision Stations.",
      unServices = ["CONCEPT", "DESIGN"],
      unAlt = "Univision News Graphic",
      unImages = ["assets/IMG_3419.jpeg", "assets/IMG_3420.jpeg", "assets/IMG_3421.jpeg", 
      "assets/IMG_3422.jpeg", "assets/IMG_3423.jpeg", "assets/IMG_3424.jpeg", "assets/IMG_3425.jpeg", 
      "assets/IMG_3426.jpeg", "assets/IMG_3427.jpeg", "assets/IMG_3428.jpeg", "assets/IMG_3429.jpeg", 
      "assets/IMG_3430.jpeg"],
      unVideos = [];

export const unProject = new Project(29, unHref, unCategory, unTitle, unName, unPhoto, unClient, unDesc, unServices, unAlt, unImages, unVideos);

const usHref = "univision.html",
      usCategory = ["sports"],
      usTitle = "UNIVISION SPORTS",
      usName = "NEWS PACKAGE",
      usPhoto = "assets/IMG_3414.jpeg",
      usClient = "CAKE STUDIOS / UNIVISION",
      usDesc = "",
      usServices = ["CONCEPT", "DESIGN"],
      usAlt = "Univision Sports Graphic",
      usImages = ["assets/IMG_3413.jpeg", "assets/IMG_3414.jpeg", "assets/IMG_3415.jpeg", 
      "assets/IMG_3416.jpeg", "assets/IMG_3417.jpeg", "assets/IMG_3418.jpeg"],
      usVideos = [];

export const usProject = new Project(30, usHref, usCategory, usTitle, usName, usPhoto, usClient, usDesc, usServices, usAlt, usImages, usVideos);

const wfmjHref = "wfmj.html",
      wfmjCategory = ["news"],
      wfmjTitle = "WFMJ NEWS",
      wfmjName = "ANCHOR OPEN",
      wfmjPhoto = "assets/IMG_3356.jpeg",
      wfmjClient = "WFMJ",
      wfmjDesc = "WFMJ asked us to add an anchor open to their exhisting news package.",
      wfmjServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      wfmjAlt = "WFMJ news Graphic",
      wfmjImages = ["assets/IMG_3351.jpeg", "assets/IMG_3352.jpeg", "assets/IMG_3353.jpeg", 
      "assets/IMG_3354.jpeg", "assets/IMG_3355.jpeg", "assets/IMG_3356.jpeg"],
      wfmjVideos = ["assets/CHRISTA rejoin3.mp4"];

export const wfmjProject = new Project(31, wfmjHref, wfmjCategory, wfmjTitle, wfmjName, wfmjPhoto, wfmjClient, wfmjDesc, wfmjServices, wfmjAlt, wfmjImages, wfmjVideos);

const wlsHref = "wls.html",
      wlsCategory = ["news", "photography"],
      wlsTitle = "WLS NEWS",
      wlsName = "PHOTOSHOOT",
      wlsPhoto = "assets/download (1).png",
      wlsClient = "WLS",
      wlsDesc = "WLS gave us a problem to solve. How do we shoot all of our anchors outside which was a logistical nightmare of schedling. Our solution was to shoot the backdrops to the anchors seperately and feed the images into a 90 inch tv screen. We were able to shoot all of the anchors in a studio in front of this screen. By individualizing the studio lighting to match the images in the screen, the end product was a very convincing fake outdoor shoot.",
      wlsServices = ["CONCEPT", "DESIGN", "PHOTOSHOOT"],
      wlsAlt = "WLS News Graphic",
      wlsImages = ["assets/IMG_3363.jpeg", "assets/IMG_3364.jpeg", "assets/IMG_3365.jpeg", 
      "assets/IMG_3366.jpeg", "assets/IMG_3367.jpeg", "assets/IMG_3368.jpeg", "assets/IMG_3369.jpeg",
      "assets/IMG_3370.jpeg"],
      wlsVideos = [];

export const wlsProject = new Project(32, wlsHref, wlsCategory, wlsTitle, wlsName, wlsPhoto, wlsClient, wlsDesc, wlsServices, wlsAlt, wlsImages, wlsVideos);

export const projectArray = [krgvProject, insightecProject, alhuuraProject, facadeProject, foxsocProject,
    ktbsProject, arvrProject, foxProject, alWatanProject, snProject, trtProject, rkProject, 
    aJElectionProject, sepProject, wfmjProject, foxboxProject, wlsProject, pac12Project, 
    kxanProject, apProject, spProject, buyProject, bonProject, usProject, unProject, mhProject,
    nflProject, alArabProject, tpirProject, ocsProject, atProject, expProject];

const bloombergHref = "#project1",
      bloombergCategory = ["news", "branding"],
      bloombergTitle = "BLOOMBERG ASHARQ",
      bloombergName = "NETWORK PACKAGE",
      bloombergPhoto = "assets/IMG_3486.jpeg",
      bloombergClient = "ASTUCE MEDIA / BLOOMBERG",
      bloombergDesc = "",
      bloombergServices = ["CONCEPT", "DESIGN", "ANIMATION"],
      bloombergAlt = "Bloomberg Asharq Graphic",
      bloombergImages = ["assets/IMG_3460.jpeg", "assets/IMG_3461.jpeg", "assets/IMG_3462.jpeg", 
      "assets/IMG_3463.jpeg", "assets/IMG_3464.jpeg", "assets/IMG_3465.jpeg", "assets/IMG_3466.jpeg",
      "assets/IMG_3467.jpeg", "assets/IMG_3468.jpeg", "assets/IMG_3469.jpeg", "assets/IMG_3470.jpeg", 
      "assets/IMG_3471.jpeg", "assets/IMG_3472.jpeg", "assets/IMG_3473.jpeg", "assets/IMG_3474.jpeg", 
      "assets/IMG_3475.jpeg", "assets/IMG_3476.jpeg", "assets/IMG_3477.jpeg", "assets/IMG_3478.jpeg", 
      "assets/IMG_3479.jpeg", "assets/IMG_3480.jpeg", "assets/IMG_3481.jpeg", "assets/IMG_3482.jpeg", 
      "assets/IMG_3483.jpeg", "assets/IMG_3484.jpeg", "assets/IMG_3485.jpeg", "assets/IMG_3486.jpeg", 
      "assets/IMG_3487.jpeg", "assets/IMG_3488.jpeg", "assets/IMG_3489.jpeg", "assets/IMG_3490.jpeg", 
      "assets/IMG_3491.jpeg", "assets/IMG_3492.jpeg", "assets/IMG_3493.jpeg", "assets/IMG_3494.jpeg", 
      "assets/IMG_3495.jpeg", "assets/IMG_3496.jpeg", "assets/IMG_3497.jpeg", "assets/IMG_3498.jpeg", 
      "assets/IMG_3499.jpeg", "assets/IMG_3500.jpeg", "assets/IMG_3501.jpeg", "assets/IMG_3502.jpeg", 
      "assets/IMG_3503.jpeg", "assets/IMG_3504.jpeg", "assets/IMG_3505.jpeg", "assets/IMG_3506.jpeg", 
      "assets/IMG_3507.jpeg", "assets/IMG_3508.jpeg", "assets/IMG_3509.jpeg", "assets/IMG_3510.jpeg", 
      "assets/IMG_3511.jpeg", "assets/IMG_3512.jpeg", "assets/IMG_3513.jpeg", "assets/IMG_3514.jpeg", 
      "assets/IMG_3515.jpeg", "assets/IMG_3516.jpeg", "assets/IMG_3517.jpeg", "assets/IMG_3519.jpeg", 
      "assets/IMG_3520.jpeg", "assets/IMG_3523.jpeg", "assets/IMG_3524.jpeg", "assets/IMG_3525.jpeg", 
      "assets/IMG_3526.jpeg", "assets/IMG_3527.jpeg", "assets/IMG_3528.jpeg", "assets/IMG_3529.jpeg", 
      "assets/IMG_3530.jpeg", "assets/IMG_3531.jpeg", "assets/IMG_3532.jpeg", "assets/IMG_3533.jpeg", 
      "assets/IMG_3534.jpeg", "assets/IMG_3535.jpeg", "assets/IMG_3536.jpeg", "assets/IMG_3537.jpeg", 
      "assets/IMG_3538.jpeg", "assets/IMG_3539.jpeg", "assets/IMG_3540.jpeg", "assets/IMG_3541.jpeg", 
      "assets/IMG_3542.jpeg", "assets/IMG_3543.jpeg", "assets/IMG_3544.jpeg", "assets/IMG_3545.jpeg", 
      "assets/IMG_3546.jpeg", "assets/IMG_3547.jpeg", "assets/IMG_3548.jpeg", "assets/IMG_3550.jpeg"],
      bloombergVideos = ["assets/Bloomberg Channel Identity V1.mp4", "assets/Bloomberg Channel Identity V2.mp4", 
      "assets/Bloomberg News Opener.mp4", "assets/Bloomberg Business Opener (1).mp4", 
      "assets/Bloomberg Sports Opener.mp4", "assets/Bloomberg Morning Opener.mp4", 
      "assets/Bloomberg Weather Opener.mp4", "assets/Bloomberg Menu Board 3stories.mp4", 
      "assets/Bloomberg Business Bg Loop.mp4", "assets/Bloomberg Promo Board.mp4"];

export const bloombergProject = new Project(33, bloombergHref, bloombergCategory, bloombergTitle, bloombergName, bloombergPhoto, bloombergClient, bloombergDesc, bloombergServices, bloombergAlt, bloombergImages, bloombergVideos);

const ajnbHref = "#project2",
      ajnbCategory = ["news"],
      ajnbTitle = "AL JAZEERA NEWS BRIEF",
      ajnbName = "SHOW DESIGN", 
      ajnbPhoto = "assets/IMG_3554.jpeg",
      ajnbClient = "AL JAZEERA / GIANT OCTOPUS",
      ajnbDesc = "Al Jazeera and Giant Octopus asked us to conceptualize the upcomming news show News Brief that will air in November.",
      ajnbServices = ["CONCEPT", "DESIGN", "ANIMATION", "LOGO DESIGN"],
      ajnbAlt = "Al Jazeera News Design",
      ajnbImages = ["assets/IMG_3551.jpeg", "assets/IMG_3552.jpeg", "assets/IMG_3553.jpeg", 
      "assets/IMG_3554.jpeg", "assets/IMG_3555.jpeg", "assets/IMG_3556.jpeg", "assets/IMG_3557.jpeg", 
      "assets/IMG_3558.jpeg", "assets/IMG_3559.jpeg", "assets/IMG_3560.jpeg", "assets/IMG_3561.jpeg", 
      "assets/IMG_3562.jpeg", "assets/IMG_3563.jpeg", "assets/IMG_3564.jpeg", "assets/IMG_3565.jpeg", 
      "assets/IMG_3566.jpeg", "assets/IMG_3567.jpeg", "assets/IMG_3568.jpeg", "assets/IMG_3569.jpeg", 
      "assets/IMG_3570.jpeg", "assets/IMG_3571.jpeg", "assets/IMG_3572.jpeg", "assets/IMG_3573.jpeg"],
      ajnbVideos = ["assets/AJ NEWS OPEN.mp4", "assets/AJ News Bump set concept 1.mp4", 
      "assets/AJ News PHONER INFO to MAP.mp4.mp4", "assets/AJ News Inshow 3 BOX.mp4", 
      "assets/AJ News PHONER INFO.mp4", "assets/AJ News STINGER.mp4.mp4"];

export const aljazeeraProject = new Project(34, ajnbHref, ajnbCategory, ajnbTitle, ajnbName, ajnbPhoto, ajnbClient, ajnbDesc, ajnbServices, ajnbAlt, ajnbImages, ajnbVideos);

export const secretProjects = [bloombergProject, aljazeeraProject]


