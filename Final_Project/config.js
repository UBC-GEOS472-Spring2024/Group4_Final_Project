let topTitleDiv = "<h4>UBC GEOS 472 | April 2024</h4>";

let titleDiv =
  "<h1>Mapping Police Violence:</h1><h1>Unveiling Patterns and Disparities in Policing Practices Across Canada.</h1>";

let bylineDiv = "<p>By Sabrina B M Y, Kiana M, Diego M T & Summer S</p>";

let introDiv =
  "<p><i>If information on police-involved deaths is emotionally challenging to read, Tracking (In)Justice Canada has offered <a href='https://trackinginjustice.ca/resources/ '>these</a> resources for support.</i></p>" +
    
  "<p>In recent years, police violence has been increasingly publicized, reigniting discussions about accountability, transparency and changes to police practices. In Canada, this discourse is supported by the fact that fatal encounters with police have steadily increased since the year 2000 (Tracking (In)Justice, 2023). This remains true even when researchers have accounted for population growth and improvements to reporting practices on the use of force (Wortley et al., 2021).</p>" +
    
  '<div style="text-align:center;"><img width="750" src="https://trackinginjustice.ca/wp-content/uploads/Post-1-2-1.jpg" alt="Police Involved Deaths When Force is Used per 100,000 people"><div>' +
    
  "<p>Figure 1.Police Involved Deaths When Force is Used, per 100,000 People in Canada. From Tracking (in)Justice, 2023.(https://trackinginjustice.ca/analysis-increase-in-deaths-and-racial-disparities/).</p>" +
    
  "<p>At the same time, Canadian municipalities have continuously invested in policing services, with up to 26% of total expenditures going to police budgets and per capita funding rising in the last decades (Seabrook et al., 2023). Even though general crime rates have decreased across Canada and de-escalation training has become a standard practice (Wortley et al.), this persistent rise in fatal encounters prompts questions about the efficacy and ethics of current police conduct.</p>" +
    
  "<p>Given Canada’s history of colonialism and codified racial discrimination (Kwak, 2020), it may also come as no surprise that racial disparities are pronounced in this trend. Black and Indigenous peoples are over-represented, with these populations comprising around 8.7% of Canada's total population, yet accounting for 27.2% of all police-involved shooting deaths where race is reported (Tracking (In)Justice).  Furthermore, a significant amount of incidents involve people in mental health crisis or distress, with Statistics Canada reporting an increase in non-criminal police calls during the COVID-19 pandemic, involving general wellbeing checks, domestic disturbances, and mental health-related crises (Government of Canada, 2020). A key criticism of policing is that resources would be better allocated to mental health specialists, while police forces themselves have cited increased substance use disorder distress calls and mental health problems as reasons the use of force may have increased (Wortley et al., p. 43).</p>" +
    
  "<p>The emerging body of research on the use of force in Canadian policing (from both academic, municipal and community voices), underscores the urgency of understanding and addressing patterns of police violence. This is particularly important in light of increasing scrutiny and public demand for accountability in law enforcement institutions. This project aims to build on data compiled by UBC researcher June Skeeter (2021), to explore spatial and temporal patterns of fatal encounters across Canada, with a focus on elucidating disparities in policing practices.</p>" +
    
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let divChapter1 =
  "<h3>Fatal Encounters With Police in Canada</h3>" +
  
  "<p>This map shows all recorded police-involved deaths across Canada, from 1971 to 2023. You can interact by moving the map, zooming and clicking on points for details.</p>" + 

  '<img width="200" src="data/GEOS_police_legend.png">' +

  "<p>Police Killing: A death directly resulting from police use of force. Including but not limited to: shooting, tazing and other uses of force.</p>" +  
  
  "<p>Police-Involved Deaths: Any civilian death at the hands of police or in the custody of police. Includes police killings deaths resulting from police negligence/inaction: suicide, overdoses, medical emergencies, etc. This is a broader term that is more difficult to refute on the grounds of semantics.</p>" +
  
  "<p>Off Duty/ Retired: Any civilian deaths resulting from off-duty or retired former police.</p>";

let divChapter2 = 
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Temporal Patterns</h3>" + 

  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>From our data, we can observe an overall increase in police-involved incidents over the years from 1971 to 2023. In comparing 2011-2022 with previous ten-year periods, there has been a 66.5% increase in deaths from police violence across Canada (CCLA, 2023). We can visualize this change by using the slider on our map to compare the number of police-involved incidents per year, over the last six decades. Many socio-economic factors can be responsible for this change, including increase in population, increase in data visibility, and perhaps the rise of certain social movements or circumstances.</p>" +

  "<p style='max-width:600px; margin-left:auto; margin-right:auto'><b>Temporal patterns of police-involved incidents across Canada from between 1971-2023:</b></p>" +

  '<div style="text-align:center;"><iframe src="data/time_slider.html" style="border:none; height:500px; width:800px;title="Police Violence in Canada by Date"></iframe></div>' +
      
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>There is a clear difference between the 1980s and 90s and 2010s. A large explanation for this is availability of data. Over the recent years, with the incorporation of body cams, more data is available on police activity. Even though there is still a lack of transparency and gaps in data, there are organizations and research teams, such as Tracking(In)Justice and June Skeeter, working to build a comprehensive dataset showcasing all police activity patterns. Furthermore, between 2019-2022, we experienced COVID-19 and the global resurgence of Black Lives Matter movement; consequently, these years correspond to a surge in police-involved incidents across Canada, and we investigated this relation.</p>" +

  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>The pandemic and its mandates required police departments to change their operating policies (Nielson et al., 2022), and adapt to new challenges for an unprecedented crisis. In addition, there was an increase in mental health stressors which escalated tensions between the general public and authority figures. A report by Amnesty International, published in 2020, highlighted how police used excessive and unnecessary force to enforce lockdowns and curfews, and suppress protests. The pandemic was also used to introduce laws and policies by law forces, which were not thoroughly reviewed or questioned as we were in a sensitive and crucial time. As previously mentioned, the COVID-19 pandemic disrupted routines and changed social behaviours, which immensely impacts our mental health. Studies showed that mental health-related calls-for-service were increased during the pandemic, and police officers were the first responders to such calls without being properly trained to provide the right type of care in such cases, which increased use of force (Wortley, 2021).</p>";

let divChapter3 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Racial Disparities</h3>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>While police violence can affect anyone, there are clear populations and racialised groups who experience greater levels of discrimination, which can be seen throughout the data. Although a sizable portion of the data regarding police incidents are those who identify as White, equalling about 50% of all our incident data (not including those that remained ‘unspecified’), these events are most likely a function of the overall demographic of Canada, where 70% of Canada’s national population identified as White as of the 2021 census (Government of Canada, 2022). By representing the leading demographic group, there would naturally be a larger presentation of that race within the data. </p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>What is, however, a notable finding within the data, is the over representation of Indigenous identifying individuals, which made up roughly 31% of our incident data (not including unspecified values). While this alone isn’t too remarkable, when looking at population statistics we find Indigenous peoples only making up about 6.1% of Canada’s total population (Government of Canada, 2022), which shows a highly skewed preference to targeting Indigenous peoples by police. Furthermore, as explored by June Skeeter in their work, having calculated police-involved deaths rates by ethnic census data, those of Indigenous identity see the highest rates of death by police action than any other ethnic or racialized population within Canada (Skeeter, 2021), where those of Indigenous identity are 7X more likely to be killed by police than most other racial groups in Canada.</p>" +
    
  '<div style="text-align:center;"><img width="600" src="https://june-skeeter.github.io/Police_Involved_Deaths_Canada/Content/CA_Race_Normalized.png" alt="Police Involved Deaths by race, per million people per year"><div>' +
  
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Figure 2. Death by race, per million people per year. From June Skeeter, 2021. (https://juneskeeter.github.io/Police_Involved_Deaths_Canada/Content/Looking_At_the_Data.html).</p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Additional analysis done by the Government of Canada (2019) highlights the greater disparities that Indigenous peoples and First Nations communities face, where Indigenous peoples: represent 30% of Canada’s custody admissions, are more likely to be homicide victims, and more likely to have re-contact with the criminal justice system compared to non Indigenous peoples.</p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>To further explore this phenomenon, we chose to visualize our data utilizing two heatmaps, the one on the left representing locations and hotspots of all police incidents, and the one on the right displaying a heat map which filtered for Indigenous only events. </p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'><b>Comparison of The Distribution of Police Violence Across Canada and on Indigenous Peoples:</b></p>" +
    
  '<div style="text-align:center; margin-left:auto; margin-right:auto;"><iframe src="data/slider_ethnicity.html" style="border:none; height:500px; width:800px;title="Police Violence in Canada by Race"></iframe></div>' +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>By moving the slider back and forth, we are able to see the distribution of data across the nation, where major cities will have the greatest prevalence for incidents. Interestingly, hotspots of incidents involving Indigenous peoples are focused predominantly West of Ontario, happening to coincide with the RCMP’s main jurisdictions. Furthermore, we can see a distinct rural urban-divide with regards to racialized groups, where locations outside of major cities, especially moving North within the Western provinces, as well as northern Territories, are almost entirely represented by police incidents with Indigenous peoples. </p>";

  let divChapter4 =
  "<h3>Income Disparity and Police Use of Force</h3>" +
  
  '<img width="600" src="https://live.staticflickr.com/2805/9856368246_9ca90c630d_z.jpg">' +

  "<p>Figure 3. Map legend to show the prevalence of low income in 2020 (LIM-AT) (%) by province. From Statistics Canada Census Program Data Viewer dashboard, 2021. (https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/dv-vd/cpdv-vdpr/index-eng.cfm)</p>" +
  
  "<p>Among the provinces, Saskatchewan and Manitoba have consistently recorded the highest rate of police reported crime, including rates of violence against women that are nearly double the national average (Statistics Canada, 2013). Indigenous women are also more likely than non-Indigenous women to be murdered and displaced by casual acquaintances, or strangers (RCMP National Overview, 2014).</p>" +

  "<p><b>Saskatchewan (in yellow) at 13.4% of low income rate in comparison with the rest of Canada on average at 11.1%:</b></p>" +

  '<img width="600" src="https://live.staticflickr.com/2805/9856368246_9ca90c630d_z.jpg">' +

  "<p>Figure 4. Chart on prevalence of low income in 2020 (LIM-AT) (%) by province. From Statistics Canada Census Program Data Viewer dashboard, 2021. (https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/dv-vd/cpdv-vdpr/index-eng.cfm)</p>" +

  "<p>Here, we look at the relationship between low income populations in Canada, specifically in Saskatchewan, and the prevalence of police force inflicted on Indigenous communities.</p>" +

  "<p>Low-income neighborhoods often experience higher levels of police presence and enforcement activities. This can result in an increased likelihood of interactions between law enforcement and residents, potentially leading to more incidents of violence or abuse, especially if these interactions are characterized by racial bias or prejudice. According to The Conversation (2023), the deaths of Indigenous men involving law enforcement and custody in Saskatchewan “are often ignored or dismissed by broader society based on the presumption that these men endangered themselves due to their lifestyles”.</p>" +

  "<p>The Saskatoon freezing deaths involved Indigenous Canadians in and immediately outside Saskatoon, Saskatchewan, in the 1990s and early 2000s, and are suspected of being linked to actions by the members of the Saskatoon Police Service. The police officers would arrest Indigenous people, who were usually male, for alleged drunkenness and/or disorderly behaviour, sometimes without cause (The Guardian, 2023). The officers would then drive them to the outskirts of the city at night in the winter, and abandon them, leaving them stranded in sub-zero temperatures (Report of the Commission of Inquiry into Matters Relating to the Death of Neil Stonechild, 2003).</p>" +

  "<p>The practice is known as taking Indigenous people for “starlight tours” (The Wayback Machine, 2007) and dates back to at least 1976. As of 2021, despite convictions for related offences, no police officer has been convicted specifically for having caused freezing deaths. June Skeeter’s 2021 research starkly reveals a harrowing truth: a mere 3% of officers involved in killings faced charges. This egregious lack of accountability demands immediate action. We unequivocally call for accountability and demand that blame be attributed where it is due.</p>" +

  '<img width="600" src="https://live.staticflickr.com/2805/9856368246_9ca90c630d_z.jpg">' +

  "<p>Figure 5. Chart of Police-Involved Deaths by Departments. From June Skeeter, 2021.(https://juneskeeter.github.io/Police_Involved_Deaths_Canada/Content/Looking_At_the_Data.html)</p>";

let divChapter5 =
  "<h3>Looking Closer: Those who take us away</h3>" +
  
  '<img width="600" src="https://live.staticflickr.com/2805/9856368246_9ca90c630d_z.jpg">' +

  "<p>Figure 6. Tachie Reserve, a Dakelh village in Northern British Columbia. By Samer Muscati, 2012.(https://www.flickr.com/photos/sultan/9856368246/in/photostream/).</p>" +
  
  "<p>Tachie Reserve, seen in Figure 3, is a Dakelh village in Northern British Columbia. In Dakelh, the Indigenous language of the community, the word for ‘police’ translates to ‘those who take us away.’ An RCMP report examining the historical role of police in Canada’s residential school system revealed that they were seen less as sources of assistance and more as figures of authority who removed community members from the reserve or made arrests for perceived wrongdoing (Human Rights Watch, 2013).</p>" +
  
  "<p>This speaks to the experience of those who have been taken away.</p>";

let divChapter6 =
  "<h3>Looking Closer: Missing and Murdered Indigenous Women</h3>" +
  
  '<img width="600" src="https://b1867527.smushcdn.com/1867527/wp-content/uploads/2021/05/Highway-of-Tears.jpg?lossy=1&strip=1&webp=1">' +

  "<p>Figure 7. In northern British Columbia, a highway sign warns girls of the dangers of hitchhiking along the Highway of Tears. From Lee Wilson/APTN, 2021. (https://www.aptnnews.ca/national-news/it-took-15-years-of-advocacy-to-get-cell-coverage-on-highway-of-tears-and-families-say-there-is-still-much-work-to-do/)</p>" +

  "<p>In Saskatchewan, Human Rights Watch found evidence of a fractured relationship between law enforcement and Indigenous communities.</p>" +

  "<p>The failure of law enforcement authorities to deal effectively with the problem of missing and murdered indigenous women and girls in Canada is just one element of the dysfunctional relationship between the Canadian police and Indigenous communities (Human Rights Watch, 2013).</p>" +

  "<p>The Highway of Tears is a 719-kilometre (447 mi) corridor of Highway 16 between Prince George and Prince Rupert in British Columbia, Canada, which has been the location of crimes against many Missing and Murdered Indigenous Women (MMIW) beginning in 1970.</p>";

let divChapter7 =
  "<h3>Looking Closer: Resistance to Police Brutality Amongst Indigenous Communities in 2020</h3>" + 

  "<p>*insert video*</p>" +

  "<p>Here, we focus on a province with the highest percentage of the population with Indigenous identity, Nunavut, and one of their acts of resistance towards police brutality which is protesting.</p>" +

  "<p>On June 5, 2020, hundreds of protesters in Iqaluit gathered to express their frustration with police brutality and racism.</p>";

let footerDiv =
  "<p>Overall, this project has aimed to contribute to the vital discourse on the topic of police violence in Canada, by highlighting temporal and socio-economic patterns in police-involved deaths. Despite the increased investment in police departments, we have observed a dynamic increase in victims over the past several decades; through interactive visualizations, we sought to explore the disproportionate representation of marginalized demographics in this trend. </p>" +

  "<p>In Canada, Indigenous communities experience disproportionate risks of police-involved violence—a pattern that can be traced to systemic injustice rooted in colonial history. These communities have been described as “both over-policed and under-policed, in that they are often targeted by police but often neglected when assistance is needed” (Government of Canada, 2019). Moreover, our data draws attention to the implications of increasing rates of mental health related calls and emphasizes the inadequacy of law enforcement agents in responding to such crises. These findings suggest an urgent need for more equitable and context appropriate policing practices, that promote de-escalation without the excessive use of force.</p>" +

  "<p>As discussed by June Skeeter (2021), there is also a significant amount of work still required to improve our collective understanding of police violence in Canada. Due to major regional differences between police departments (in regards to tracking their use of force and data transparency), researchers have found it challenging to draw comprehensive conclusions or make recommendations about the relationship between certain police practices, budgets and police-involved deaths (Wortley, 2021). While this issue has hindered the precision of our research, it has also highlighted the clear disconnect and gap in knowledge that needs to be addressed nation-wide to answer critical questions about how police can, or perhaps cannot, better serve all communities.</p>" +
  
  "<h3>References</h3>" +
  
  "<p><i>Amnesty International. (2020, December 17). COVID-19 crackdowns: Police abuse and the global pandemic. Amnesty International Ltd. <a href='https://www.amnesty.org/en/documents/act30/3443/2020/en/ '>https://www.amnesty.org/en/documents/act30/3443/2020/en/ </a></i></p>" +

  "<p>Canadian Civil Liberties Association. (2023, February 23). Press Release: Police-involved deaths on the rise across Canada. CCLA. https://ccla.org/press-release/press-release-police-involved-deaths-on-the-rise-across-canada/ </p>" +

  "<p>Government of Canada, D. of J. (2019, September 9). Indigenous overrepresentation in the criminal justice system—JustFacts. https://www.justice.gc.ca/eng/rp-pr/jr/jf-pf/2019/may01.html </p>" +

  "<p>Government of Canada, S. C. (2020, September 1). Police-reported crime incidents down during the early months of the pandemic, while domestic disturbance calls increase. https://www150.statcan.gc.ca/n1/daily-quotidien/200901/dq200901a-eng.htm </p>" +

  "<p>Government of Canada, S. C. (2022, October 26). The Canadian census: A rich portrait of the country’s religious and ethnocultural diversity. https://www150.statcan.gc.ca/n1/daily-quotidien/221026/dq221026b-eng.htm </p>" +

  "<p>Human Rights Watch. (2013, February 13). Those Who Take Us Away. Abusive policing and failures in protection of indigenous women and girls in northern British Columbia, Canada. Human Rights Watch. https://www.hrw.org/report/2013/02/13/those-who-take-us-away/abusive-policing-and-failures-protection-indigenous-women </p>" +

  "<p>Kim, P. (2019, March 28). 17 years of police violence in Canada. Pivot Legal Society. https://www.pivotlegal.org/17_years_of_police_violence_in_canada </p>" +

  "<p>Kwak, A. J. (2020, July 5). The Depth of Our Denial: The History of Discriminatory Policing in Canada. MIR. https://www.mironline.ca/the-depth-of-our-denial-the-history-of-discriminatory-policing-in-canada/ </p>" +

  "<p>M, H. (2012). Tachie Reserve in BC [Photo]. https://www.flickr.com/photos/sultan/9856368246/ </p>" +

  "<p>Nielsen, K., Zhang, Y., & Ingram, J. (2022). The Impact of COVID-19 on police officer activities. Journal of Criminal Justice, 82, 101943. 10.1016/j.jcrimjus.2022.101943 </p>" +

  "<p>Seabrook, M. S. S., Luscombe, A., Balian, N., Lofters, A., Matheson, F. I., O’Neill, B. G., Owusu-Bempah, A., Persaud, N., & Pinto, A. D. (2023). Police Funding and Crime Rates in 20 of Canada’s Largest Municipalities: A Longitudinal Study. Canadian Public Policy, 49(4), 383–398. https://doi.org/10.3138/cpp.2022-050 </p>" +

  "<p>Skeeter, J. (2021, June). Introduction. Systemic Racism & Canadian Police. https://june-skeeter.github.io/Police_Involved_Deaths_Canada/ </p>" +

  "<p>Tracking (In)Justice. (2023, February 10). Police-involved Deaths are on the Rise, as are Racial Disparities in Canada. Tracking (In)Justice. https://trackinginjustice.ca/analysis-increase-in-deaths-and-racial-disparities/ </p>" +

  "<p>Wortley, S., Owusu-Bempah, A., Laming, E., & Henry, C. (2021). POLICE USE OF FORCE IN CANADA: A REVIEW OF DATA, EXPERT OPINION, AND THE INTERNATIONAL RESEARCH LITERATURE. Canadian Criminal Justice Association (CCJA). https://www.ccja-acjp.ca/pub/en/wp-content/uploads/sites/8/2021/08/Full-Report-PUF.pdf </p>" +

  "<h4>Data Sources Used:</h4>" + 

  "<p>https://github.com/June-Skeeter/Police_Involved_Deaths_Canada/blob/main/Inputs/DataSets/Compiled/Combined_Data.csv *we used this and geocoded it, but removed all values that had no ‘city-town’ value* </p>" +

  '<h4><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a></h4>';

var config = {
  style: "mapbox://styles/mapbox/dark-v11",
  accessToken:
    "pk.eyJ1Ijoic3VtbWVyLWgtcyIsImEiOiJjbHN3b21reGQydmNlMmxwcHh0OWw4cTgwIn0.MpcHLXkWUYWUOBqfMlCZVw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: introDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "ch1-intro",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "enableFreetime",
      image: "",

      onChapterEnter: [
        {
          layer: "pviolenceData",
          opacity: 0.9,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "pviolenceData",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "ch2-temporal",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ch3-race",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ch4-Income",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "pviolenceData",
          opacity: 0.9,
          duration: 300,
        },
        {
            layer: "income",
            opacity: 0.7,
            duration: 300,
          },
      ],
      onChapterExit: [
        {
          layer: "pviolenceData",
          opacity: 0,
          duration: 300,
        },
        {
            layer: "income",
            opacity: 0,
            duration: 300,
          },
      ],
    },
    {
      id: "ch5-Tachi",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-125.02283, 54.65375],
        zoom: 8.21,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
        {
          layer: "pviolenceData",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "pviolenceData",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "ch6-highway",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-128.36834, 54.09203],
        zoom: 5.92,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "pviolenceData",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "pviolenceData",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
        id: "ch7-resistance",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter7,
        location: {
          center: [-128.36834, 54.09203],
          zoom: 5.92,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          {
            layer: "pviolenceData",
            opacity: 0.8,
            duration: 300,
          },
        ],
        onChapterExit: [
          {
            layer: "pviolenceData",
            opacity: 0,
            duration: 300,
          },
        ],
      },
  ],
};
