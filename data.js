/* ==============================================================================
   RUET GIS CLUB — SITE DATA
   ------------------------------------------------------------------------------
   This file holds every piece of content that changes often: the Executive
   Committee, advisors, members, alumni, notices, activities, and resources.

   ARE YOU AN EC MEMBER EDITING YOUR OWN PROFILE?
   1. Go to the "CURRENT_EC" list below.
   2. Find the block with your name.
   3. Edit ONLY the text between the quotes " " — don't touch commas or braces.
   4. Add a photo: drop a square photo into the /Assets/ec/ folder and set
      photo: "Assets/ec/your-file-name.jpg"
   5. Save / commit on GitHub. The live site updates automatically in ~1 minute.

   Every EC member gets their own profile page automatically at:
   member.html?slug=your-slug  (the "slug" is the short id in each block).
   ============================================================================== */

const SITE = {
  name: "RUET GIS Club",
  fullName: "RUET Geographic Information Systems Club",
  tagline: "Unleashing the Power of Spatial Intelligence",
  university: "Rajshahi University of Engineering & Technology (RUET)",
  address: "Rajshahi - 6204, Bangladesh",
  email: "ruetgisclub@gmail.com",
  phone: "+880 1610686495",
  facebook: "https://facebook.com/ruetgisclub",
  linkedin: "https://linkedin.com/company/ruetgisclub",
  session: "2026 - 27",
  stats: [
    { num: "150+", label: "Current Members" },
    { num: "50+", label: "Living Alumni" },
    { num: "5+", label: "Hosted Events" },
    { num: "2+", label: "Achievements" }
  ]
};

/* ---------------------------- Advisory Board --------------------------- */
const ADVISORS = [
  {
    name: "Dr. Md. Mostafizur Rahman",
    title: "Professor",
    dept: "Department of Urban & Regional Planning, RUET",
    photo: "https://raw.githubusercontent.com/imtiajiqbalmahfuj/rgisclub/refs/heads/main/Assets/Advisors/photo302.jpg",
    speech: "As an advisor, I am thrilled to support our vibrant community exploring Geographic Information Systems (GIS). Our club offers hands-on experience through workshops, seminars, and projects, enhancing both academic and professional growth. GIS is essential for urban planning, environmental management, and more, enabling us to visualize and analyze spatial data for informed decision-making. Join us in this exciting journey to explore GIS's limitless possibilities and make a meaningful impact. Thank you for your interest and support."
  },
  {
    name: "Md. Sakib Zubayer",
    title: "Assistant Professor",
    dept: "Department of Urban & Regional Planning, RUET",
    photo: "https://raw.githubusercontent.com/imtiajiqbalmahfuj/rgisclub/refs/heads/main/Assets/Advisors/photo305.jpg",
    speech: "As the advisor, I extend a warm welcome to our community. With enthusiasm, we explore Geographic Information Systems (GIS) and its applications. GIS is vital in urban planning, disaster management, and beyond. Through workshops, seminars, and projects, we delve deeper into GIS's potential. Let's embark on a journey of innovation, addressing real-world challenges. Your involvement is crucial to our success. Thank you for choosing the RUET GIS Club. Together, we'll make a difference."
  },
  {
    name: "Muhaiminul Islam",
    title: "Assistant Professor",
    photo: "https://raw.githubusercontent.com/imtiajiqbalmahfuj/rgisclub/refs/heads/main/Assets/Advisors/photo27.jpg",
    dept: "Department of Urban & Regional Planning, RUET"
  },
  {
    name: "Jahid Hasan",
    title: "Assistant Professor",
    photo: "https://raw.githubusercontent.com/imtiajiqbalmahfuj/rgisclub/refs/heads/main/Assets/Advisors/photo932.jpg",
    dept: "Department of Urban & Regional Planning, RUET"
  }
];

/* ==============================================================================
   CURRENT EXECUTIVE COMMITTEE — SESSION 2026-27
   Selected by the advisory board, Ref: RGC/2026/0013.
   Each EC member: edit your own block only. "slug" builds your profile URL.
   ============================================================================== */
const CURRENT_EC = [
  { slug: "imtiaj-iqbal-mahfuj", name: "Imtiaj Iqbal Mahfuj", role: "President", batch: "URP'21 Series", studentId: "", photo: "https://raw.githubusercontent.com/imtiajiqbalmahfuj/imtiajiqbalmahfuj.github.io/refs/heads/main/Assets/Imtiaj%20Iqbal%20Formal%20Pic.jpg", email: "imtiajiqbal.ruet@gmail.com", linkedin: "https://www.linkedin.com/in/imtiajiqbalmahfuj/", website: "https://imtiajiqbalmahfuj.github.io/", bio: "I am Imtiaj Iqbal (Mahfuj) (He/Him), an undergraduate researcher and aspiring Geospatial Data Scientist pursuing a Bachelor of Urban & Regional Planning at Rajshahi University of Engineering & Technology (RUET), Bangladesh. My work sits at the intersection of GeoAI, Remote Sensing, and Disaster Risk Analysis, translating spatial intelligence into actionable insights for pressing environmental and climate challenges. I leverage tools including GIS, Google Earth Engine (GEE), Python, and Machine Learning to model complex environmental dynamics, from climate monitoring, assessing drought vulnerability and flash flood hazards to mapping land surface temperature anomalies and tracking urban environmental & ecological quality. My research philosophy centers on rigor, reproducibility, and real-world impact. On the professional front, I served as an intern at Nippon Koei Bangladesh Ltd. (ID&E Holdings), Japan's #1 international engineering consultancy operating in over 160 countries, where I supported the development of Transit-Oriented Development (TOD) policy guidelines through GIS-based spatial assessments for major mass transit corridors in Bangladesh, and currently contribute as an Undergraduate Research Assistant at RUET under the Director of Research and Extension (R&E) where I have supported technical initiatives and led multi-disciplinary teams in modeling hydro-climatic and urban safety risks, leveraging RS & Environmental Monitoring (GEE) and Climate Adaptation frameworks through advanced spatial analytics. My academic record features peer-reviewed research published in renowned international journals, complemented by multiple conference proceedings at prestigious global venues. Currently, I have multiple manuscripts under review in high-impact journals, with additional research in preparation focusing on environmental monitoring, disaster risk & geo-hazard modeling, climate change analysis and GeoAI-driven modeling. I have also received a national award from the Ministry of Housing and Public Works, Government of Bangladesh (2nd place, Youth's Thought in Sustainable Urban Planning, 2025). Beyond research, I serve as General Secretary of the RUET GIS Club, where I organized GEOPLAN 1.0, recognized by Esri as the nation's largest GIS-based event, and mentored 100+ students in geospatial technologies. I am also a member of the International Society for Photogrammetry and Remote Sensing (ISPRS) and Esri Young Professionals Network (YPN). I am actively seeking Master of Science (MS) by Research opportunities in Geography, Geoinformatics, or Environmental Science, where I can deepen my contributions to GeoAI-driven climate resilience. My portfolio, projects, and publications are available at imtiajiqbalmahfuj.github.io." },
  { slug: "md-habibullah-masbah", name: "Md Habibullah Masbah", role: "Vice President", batch: "URP'21 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "md-arifur-rahman-mulla", name: "Md. Arifur Rahman Mulla", role: "General Secretary", batch: "URP'22 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "amlan-datta", name: "Amlan Datta", role: "Joint Secretary", batch: "URP'22 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "nawreen-ferdous-tamim", name: "Nawreen Ferdous Tamim", role: "Treasurer", batch: "URP'21 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "md-ahosan-joardder-labib", name: "Md Ahosan Joardder Labib", role: "Office Secretary", batch: "URP'21 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "mst-afia-farzana-mithi", name: "Mst. Afia Farzana Mithi", role: "Assistant Office Secretary", batch: "URP'23 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "tanjila-tarannum-adita", name: "Tanjila Tarannum Adita", role: "Event Planning and Management Secretary", batch: "URP'21 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "dipta-saha", name: "Dipta Saha", role: "Asst. Event Planning and Management Secretary", batch: "URP'23 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "sabbir-ahmed", name: "Sabbir Ahmed", role: "Research and Workshop Secretary", batch: "URP'22 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "ridwan", name: "Ridwan", role: "Asst. Research and Workshop Secretary", batch: "URP'23 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "md-nabinur-rahman", name: "Md. Nabinur Rahman", role: "Media Secretary", batch: "URP'22 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "homyra-jabin", name: "Homyra Jabin", role: "Asst. Media Secretary", batch: "URP'23 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "sajia-nur", name: "Sajia Nur", role: "Graphics and Design Secretary", batch: "URP'22 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "dihan-islam-radin", name: "Dihan Islam Radin", role: "Asst. Graphics and Design Secretary", batch: "URP'23 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "md-omar-faruq", name: "Md. Omar Faruq", role: "GIS Resource Coordinator", batch: "URP'21 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" },
  { slug: "mst-ashfika-afrin-moonmoon", name: "Mst. Ashfika Afrin Moonmoon", role: "Volunteer Management Secretary", batch: "URP'21 Series", studentId: "", photo: "", email: "", linkedin: "", bio: "" }
];

/* ---------------------------- Past Committees --------------------------- */
const PAST_COMMITTEES = [
  {
    label: "Executive Committee 2025-2026",
    members: [
      { slug: "tasnim-mahmud-rifat", name: "Tasnim Mahmud Rifat", role: "President", series: "URP'19 Series", photo: "https://raw.githubusercontent.com/ruetgisclub/ruetgisclub.github.io/refs/heads/main/Assets/exe-mem-26/president.jpeg", email: "", linkedin: "", website: "", bio: "" },
      { slug: "towfiqur-rashid", name: "Towfiqur Rashid", role: "Vice President", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "imtiaj-iqbal-mahfuj", name: "Imtiaj Iqbal Mahfuj", role: "General Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "md-habibullah-masbah", name: "Md Habibullah Masbah", role: "Joint Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "rahat-raiyan-robin", name: "Rahat Raiyan Robin", role: "Treasurer", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "istiyak-mahmood-istiy", name: "Istiyak Mahmood Istiy", role: "Office Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "md-ahosan-joardder-labib", name: "Md Ahosan Joardder Labib", role: "Assistant Office Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "jannatul-ferdaus-aurin", name: "Jannatul Ferdaus Aurin", role: "Event Planning & Management Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "mrittik-bhowmik", name: "Mrittik Bhowmik", role: "Asst. Event Planning & Management Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "zannatul-adol-binte-abdul-aziz", name: "Zannatul Adol Binte Abdul Aziz", role: "Research & Workshop Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "rezwan-ahmed-efam", name: "Rezwan Ahmed Efam", role: "Asst. Research & Workshop Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "md-shahedin-alam-khan", name: "Md Shahedin Alam Khan", role: "Graphics & Design Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "muhammad-arifur-rahman", name: "Muhammad Arifur Rahman", role: "Asst. Graphics & Design Secretary", series: "URP'22 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "nafiz-al-mamun", name: "Nafiz Al Mamun", role: "Media Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "amlan-datta", name: "Amlan Datta", role: "Asst. Media Secretary", series: "URP'22 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "priyam-riddha-biswas", name: "Priyam Riddha Biswas", role: "GIS Resource Co-ordinator", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "nawreen-ferdous-tamim", name: "Nawreen Ferdous Tamim", role: "Volunteer Management Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" }
    ]
  },
  {
    label: "Executive Committee 2024-2025",
    members: [
      { slug: "rubayet-arafin-rimon", name: "Rubayet Arafin Rimon", role: "President", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "junaid-imam-adib", name: "Junaid Imam Adib", role: "Vice-president", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "tasnim-mahmud-rifat", name: "Tasnim Mahmud Rifat", role: "General Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "towfiqur-rashid", name: "Towfiqur Rashid", role: "Asst. General Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "mehjabin-jahangir-rafjin", name: "Mehjabin Jahangir Rafjin", role: "Treasurer", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "istiyak-mahmood-istiy", name: "Istiyak Mahmood Istiy", role: "Office Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "mahjabeen-masud", name: "Mahjabeen Masud", role: "Event Planning & Management Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "rahat-raiyan-robin", name: "Rahat Raiyan Robin", role: "Asst. Event Planning & Management Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "samiha-alam-ananya", name: "Samiha Alam Ananya", role: "Graphics and Design Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "imtiaj-iqbal-mahfuj", name: "Imtiaj Iqbal Mahfuj", role: "Asst. Graphics and Design Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "priyam-riddha-biswas", name: "Priyam Riddha Biswas", role: "Research and Publication Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "md-shahedin-alam-khan", name: "Md Shahedin Alam Khan", role: "Media Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "md-habibullah-masbah", name: "Md. Habibullah Masbah", role: "Media Secretary", series: "URP'21 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "istiak-ahmed-rifat", name: "Istiak Ahmed Rifat", role: "GIS Resource Coordinator", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "jannatul-ferdaus-aurin", name: "jannatul Ferdaus Aurin", role: "Volunteer Management Secretary", series: "URP'20 Series", photo: "", email: "", linkedin: "", website: "", bio: "" }
    ]
  },
  {
    label: "Executive Committee 2023-2024",
    members: [
      { slug: "yeasin-ahmed-babu", name: "Yeasin Ahmed Babu", role: "President", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "rowdra-dip-chakroborty", name: "Rowdra Dip Chakroborty", role: "Vice-president", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "rubayet-arafin-rimon", name: "Rubayet Arafin Rimon", role: "General Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "tasnim-mahmud-rifat", name: "Tasnim Mahmud Rifat", role: "Asst. General Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "shams-nur-islam-badhon", name: "Shams Nur Islam Badhon", role: "Treasurer", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "md-abdur-rahman", name: "Md. Abdur Rahman", role: "Office Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "junaid-imam-adib", name: "Junaid Imam Adib", role: "Event Planning & Management Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "sadia-islam-oishe", name: "Sadia Islam Oishe", role: "Asst. Event Planning & Management Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "mehjabin-jahangir-rafjin", name: "Mehjabin Jahangir Rafjin", role: "Graphics and Design Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "samiha-alam-ananya", name: "Samiha Alam Ananya", role: "Asst. Graphics and Design Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "shahed-mahmud-ayan", name: "Shahed Mahmud Ayan", role: "Research and Publication Secretary", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "mahjabeen-masud", name: "Mahjabeen Masud", role: "Media Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "bipasa-akhter", name: "Bipasa Akhter", role: "Volunteer Management Secretary", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" }
    ]
  },
  {
    label: "Founding Committee 2022-2023",
    members: [
      { slug: "abdullah-al-rakib", name: "Abdullah Al Rakib", role: "President", series: "URP'17 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "bisal-guha-neer", name: "Bisal Guha Neer", role: "Vice-President", series: "URP'17 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "abir-ornob", name: "Abir Ornob", role: "General Secretary", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "yeasin-ahmed-babu", name: "Yeasin Ahmed Babu", role: "Asst. General Secretary", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "khandokar-tanzim-ahmed", name: "Khandokar Tanzim Ahmed", role: "Treasurer", series: "URP'17 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "shams-nur-islam-badhon", name: "Shams Nur Islam Badhon", role: "Media Secretary", series: "URP'18 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "rubayet-arafin-rimon", name: "Rubayet Arafin Rimon", role: "Research & Publication Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "sudipto-arpi", name: "Sudipto Arpi", role: "Event Planning & Management Secretary", series: "URP'17 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "junaid-imam-adib", name: "Junaid Imam Adib", role: "Asst. Event Planning & Management Secretary", series: "URP'19 Series", photo: "", email: "", linkedin: "", website: "", bio: "" },
      { slug: "nabila-islam", name: "Nabila Islam", role: "Volunteer Management Secretary", series: "URP'17 Series", photo: "", email: "", linkedin: "", website: "", bio: "" }
    ]
  }
];

/* ------------------------------ General Members -------------------------- */
const GENERAL_MEMBERS = [
  ["Emon Molla","2007001"], ["Maliha Zahin Esha","2007003"], ["Md. Tarekh Hasan","2007006"],
  ["Mst. Kamrun Nahar","2007007"], ["Adiba Jahan Hitaishi","2007011"], ["Naeem","2007016"],
  ["Emon Chowdhury","2007019"], ["Istiyak Mahmood Istiy","2007023"], ["Rifat","2007026"],
  ["Shourov Pal","2007027"], ["Priyam Riddha","2007029"], ["Mushfique","2007030"],
  ["Shahoriar","2007031"], ["Rubel","2007032"], ["Pritam Chowdhury","2007034"],
  ["Jahrah","2007035"], ["Jannatul Ferdaus Aurin","2007036"], ["Sadia Afroze","2007037"],
  ["Zeenat Reza","2007039"], ["Jakia Ahmed","2007042"], ["Md Shahedin Alam Khan","2007043"],
  ["Chinmoy Debnath Abir","2007044"], ["Saqlain","2007046"], ["Gourab","2007050"],
  ["Rahat Raiyan Robin","2007051"], ["Towfiqur Rashid","2007053"], ["Rezwan Ahmed","2100123"],
  ["Borsha Chowdhury","2107001"], ["Ruhani","2107002"], ["Nafiz Al Mamun","2107003"],
  ["Masuma Mehejabin","2107005"], ["Noushin","2107007"], ["Zannatul Adol","2107008"],
  ["Sanjida Sunmoon","2107009"], ["Md Ahosan Joardder Labib","2107010"], ["Nadia Sultana","2107011"],
  ["Nawreen Ferdous","2107013"], ["Asif","2107016"], ["Nazmul Islam Nissan","2107017"],
  ["Borsha Ghosh","2107019"], ["Md Farhen Tanvir","2107020"], ["Lafiz","2107022"],
  ["Abdullah Al Amin","2107024"], ["Sabbir Hossain","2107025"], ["Hanan Ashrafi","2107026"],
  ["Mst. Ashfika Afrin Moonmoon","2107029"], ["Kauser Jaman","2107030"], ["Zubayer","2107031"],
  ["Md. Mehedi Hasan","2107033"], ["Tanjila Tarannum Adita","2107034"], ["Moshiur Rahman","2107040"],
  ["Ummay Suraika Soha","2107044"], ["Md Habibullah Masbah","2107046"], ["Imtiaj Iqbal","2107047"],
  ["Riadul Haque","2107048"], ["Mehedi Hasan","2107050"], ["Nafis Sadman","2107052"],
  ["Kaniz Fatema","2107056"], ["Most. Marushat Akter Methe","2107059"], ["Joy Costa","2207001"],
  ["Tasnia Tabassum","2207002"], ["Nabinur Rahman","2207004"], ["Nabid Ahammed Limon","2207005"],
  ["Md. Siam Soikat","2207006"], ["Md. Iftikhar Saqlain","2207007"], ["Isfat Sadman","2207008"],
  ["Fahim Bokhari","2207009"], ["Musfeqe Hasan Shomoy","2207010"], ["Abdur Rahim","2207011"],
  ["Mst. Sadia Afrin Lima","2207013"], ["Mst. Romana Yasmin Habiba","2207015"], ["Ahbab Hossain","2207016"],
  ["Afroza Jahan","2207017"], ["Mst. Taznim Sultana Nishat","2207019"], ["Talha Tanim Kabir","2207020"],
  ["Sabbir Ahmed","2207021"], ["Nazah Haque","2207022"], ["Md. Sajib Ali","2207023"],
  ["Md. Rafiul Islam","2207024"], ["Md. Mahinur Rahman Pothik","2207025"], ["Nayema Tajnim","2207028"],
  ["Md. Mahfuj Ahmed","2207031"], ["Salsabila Kabir","2207032"], ["Sameean Rahman Maheen","2207033"],
  ["Amlan Datta","2207034"], ["Md. Sabbir Islam","2207036"], ["Fatema Ahmed Muna","2207038"],
  ["Md. Ubaidullah","2207040"], ["Imtiaj Ahmed","2207041"], ["Al Shaharia","2207043"],
  ["Samhoo Tasnia","2207044"], ["Arghya Joddar","2207046"], ["Ali Hasan Muzahid","2207048"],
  ["Md. Galib Shahrier Tahsin","2207049"], ["Arpon Kumer Das","2207050"], ["Priasha Rani Sarker","2207051"],
  ["Ummay Rakaiah Ramisa","2207052"], ["Monika Akter Any","2207054"], ["Md. Mahfujur Rahman","2207055"],
  ["S.M. Iftikharul Islam Benin","2207056"], ["Hasib Abdullah","2207057"], ["Saad Mustakim","2207058"],
  ["Sajia Nur","2207059"], ["Saikat Biswas","2207060"]
];

/* ---------------------------------- Alumni -------------------------------- */
const ALUMNI = [
  { name: "Abdullah Al Rakib", series: "URP'17 Series", workingAt: "", photo: "" },
  { name: "Bisal Guha Neer", series: "URP'17 Series", workingAt: "", photo: ""  },
  { name: "Khandokar Tanzim Ahmed", series: "URP'17 Series", workingAt: "", photo: ""  },
  { name: "Sudipto Arpi", series: "URP'17 Series", workingAt: "", photo: ""  },
  { name: "Nabila Islam", series: "URP'17 Series", workingAt: "", photo: ""  },
  { name: "Abir Ornob", series: "URP'18 Series", workingAt: "", photo: ""  }
];

/* ---------------------------------- Notices ------------------------------- */
const NOTICES = [
  { title: "RUET GIS Club Executive Committee 2026-27 announced", date: "2026-07-16", href: "" },
  { title: "Annual General Meeting of RUET GIS Club announced", date: "2026-07-15", href: "" },
  { title: "A Session on Disaster Resilience in Urban Vs. Rural Environments", date: "2024-06-12", href: "" },
  { title: "GIS Map Making WEBINAR and Competition", date: "2024-06-07", href: "" },
  { title: "CONSTRUCT CUNIVAL 1.0 By BCR", date: "2024-05-22", href: "" },
  { title: "Member Recruitment 2024-2025", date: "2024-02-26", href: "" },
  { title: "'RUET GIS CLUB' officially approved by RUET", date: "2024-01-13", href: "" },
  { title: "'Workshop on Introduction to GIS' by Abdullah Al Rakib", date: "2024-01-07", href: "" },
  { title: "Career Talk with Radio RUET", date: "2023-12-26", href: "" },
  { title: "'Discount by BOHUBRIHI'", date: "2023-11-15", href: "" },
  { title: "Notice of GIS Based Competition in Planning Carnival-2023", date: "2023-11-14", href: "" },
  { title: "'Workshop on GIS and Mapping'", date: "2023-11-12", href: "" },
  { title: "MOU sign With BOHUBRIHI", date: "2023-07-18", href: "" }
];

/* --------------------------------- Activities ------------------------------ */
const ACTIVITIES = [
  { title: "GEOPLAN 1.0", when: "December 2025", where: "RUET Campus, Rajshahi", note: "Nation's largest GIS-based event, recognized by Esri; held to mark World Town Planning Day and GIS Day.", link: "https://www.tbsnews.net/economy/corporates/geoplan-10-ruet-celebrates-world-town-planning-day-and-gis-day-1304781" },
  { title: "Drone-Based Data Collection & Processing Workshop", when: "December 2024", where: "GIS Lab, URP Building, RUET", note: "Technical workshop with Tiller on drone-based data collection and processing.", link: "" },
  { title: "A Session on Disaster Resilience in Urban Vs. Rural Environments", when: "14 June 2024, 10:00 PM", where: "Google Meet", note: "", link: "" },
  { title: "Map Beautification", when: "Deadline: 11:59 PM, 14 June 2024", where: "Online Submission", note: "", link: "" },
  { title: "GIS Map Making WEBINAR", when: "09:00 PM, 7 June 2024", where: "Google Meet", note: "", link: "" },
  { title: "Workshop on Introduction to GIS", when: "07:00 AM, 9 January 2024", where: "Google Meet", note: "", link: "" },
  { title: "GIS Based Competition", when: "16 November 2023", where: "GIS Lab, URP Building, RUET", note: "", link: "" },
  { title: "Workshop on GIS and Mapping", when: "05:00–06:00 PM, 13 November 2023", where: "GIS Lab, URP Building, RUET", note: "", link: "" }
];

/* --------------------------------- Resources -------------------------------- */
const RESOURCES = {
  data: [
    { title: "BGD Database", href: "#" },
    { title: "Administration Boundary Shape Files", href: "#" },
    { title: "BD Municipalities Boundary", href: "#" },
    { title: "Practice Data Shape File", href: "#" },
    { title: "RCC Land Use 2021", href: "#" },
    { title: "Mouza Map (JPG)", href: "#" },
    { title: "Mouza Map of Mirsarai Upazila Development Plan", href: "#" }
  ],
  software: [
    { title: "ArcGIS 10.8", href: "#" },
    { title: "How to install ArcGIS? — by Shahed Mahmud Ayan", href: "https://drive.google.com/file/d/1GrvbpN0ZakXB9vQkHT5ZhMDIfV7x11sa/view?usp=sharing" }
  ],
  sessions: [
    { title: "GIS Map Making WEBINAR — by Rubayet Arafin Rimon", href: "https://drive.google.com/drive/folders/1lZwOgjc71N9dgNC7xr1iaNdMVLaIUaDS?fbclid=IwZXh0bgNhZW0CMTAAAR0d-Ffux2e_--jQi9PPWG7WqLBQrnnLiA6mQvgE0PXj5Fws3TLYU-566Nk_aem_AdoNVCcPaaNRbkLNbY3jjEBVjFzmZrNwmRQGhOQPni3tHAnSXc0fGnyeSL-q2lrOyC-_HJZTUVvqnGqVrPOjAlM7" }
  ]
};
