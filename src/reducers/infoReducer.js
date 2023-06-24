const initialState = {
    content: {
      context: "https://schema.org",
      type: "Person",
      name: "Yusuf HAYIRLI",
      additionalName: "PensarNada",
      url: "https://yusufhayirli.github.io",
      gender: "http://schema.org/Male",
      nationality: "Turkey",
      birthDate: "1993",
      birthPlace: "Adana, Turkey",
      workLocation: "İzmir, Turkey",
      country: "Turkey",
      image: "https://yusufhayirli.github.io/images/itisMe.jpg",
      currentCompanyName: "OSF Digital",
      currentCompanyUrl: "https://osf.digital/",
      title: "Computer Engineer",
      jobTitle: "Full-Stack Developer",
      universityName: "Izmir Institude of Technology (IZTECH)",
      universityUrl: "https://iyte.edu.tr/",
      socialUrls: {
        instagram: "https://www.instagram.com/pensarnada/",
        twitter: "https://twitter.com/pensarnada",
        linkedin: "https://www.linkedin.com/in/yusufhayirli/",
        mail: "mailto:contact@yusufhayirli.com",
        github: "https://github.com/yusufhayirli",
        spotify: "https://open.spotify.com/user/pensarnada?si=d00b6de8403d48da&nd=1"
      }
    },
    likeToBuild:[
      "Environments", "Software Integrations", "Software Integrations"
    ]
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default infoReducer;