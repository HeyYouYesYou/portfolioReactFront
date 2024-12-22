export const restApiPath = {
  sidebar: "http://localhost:1337/api/side-bar?populate[0]=photo",
  homepage:
    "http://localhost:1337/api/home-page?populate[0]=coverImages.media&populate[1]=DownloadCV.DocForDownload",
  education: "http://localhost:1337/api/educations",
  experience: "http://localhost:1337/api/experiences?populate[0]=coverImages",
  skills:
    "http://localhost:1337/api/skills?populate[0]=logo&populate[1]=Workflows",
  contact:
    "http://localhost:1337/api/contact?populate[1]=address.googleMaps&populate[0]=socialLinks.logo",
};
