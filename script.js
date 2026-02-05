const people = [
  {
    icon:"👩",
    name: "Dr. Sarah Chen",
    titleAndCompany: "Chief AI Researcher, TechVision Labs",
    biography:
      "Dr. Chen is a leading expert in machine learning with over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics.",
    topic: "The Future of Ethical AI Development",
    expertise: "Machine Learning & AI Ethics",
  },
  {
     icon:"🧔‍♂️",
    name: "Marcus Rodriguez",
    titleAndCompany: "Founder & CEO, GreenTech Innovations",
    biography:
      "Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three successful startups focused on clean energy solutions.",
    topic: "Building Sustainable Startups in a Digital Age",
    expertise: "Entrepreneurship & Sustainability",
  },
  {
     icon:"👩",
    name: "Dr. Amara Okafor",
    titleAndCompany: "Director of Cybersecurity, SecureNet Solutions",
    biography:
      "Dr. Okafor specializes in cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.",
    topic: "Protecting Your Digital Assets: Modern Cybersecurity Strategies",
    expertise: "Cybersecurity & Threat Intelligence",
  },
  {
     icon:"🧔‍♂️",
    name: "James Patterson",
    titleAndCompany: "Head of Product Design, DesignFirst Studio",
    biography:
      "James has led design teams at major tech companies for over a decade. His work has won multiple design awards and shaped user experiences for millions.",
    topic: "Human-Centered Design in the Age of AI",
    expertise: "UX Design & Product Strategy",
  },
  {
     icon:"👩",
    name: "Dr. Priya Sharma",
    titleAndCompany: "VP of Data Science, Analytics Corp",
    biography:
      "Dr. Sharma leads data science initiatives that drive business transformation. She is known for making complex data accessible and actionable.",
    topic: "Data-Driven Decision Making: From Insights to Impact",
    expertise: "Data Science & Business Analytics",
  },
  {
     icon:"🧔‍♂️",
    name: "Alex Thompson",
    titleAndCompany: "Blockchain Architect, CryptoChain Technologies",
    biography:
      "Alex is a pioneer in blockchain technology and decentralized systems. He has contributed to several major blockchain protocols and advises on Web3 strategies.",
    topic: "Blockchain Beyond Cryptocurrency: Real World Applications",
    expertise: "Blockchain & Web3",
  }
];



  const grid = document.getElementById("portGrid");
  let html = "";
  //loop through products array and create html for each
  for (let i = 0; i < people.length; i++) {
    const ppl = people[i];

    html += `
        <div class = "person-card">               
                <div class = "person-icon">${ppl.icon }</div>
                <div class = "person-name">${ppl.name }</div>
                <div class = "person-titleAndCompany">${ppl.titleAndCompany }</div>
                <div class = "person-biography">${ ppl.biography}</div>
                <div class = "person-topic"> Topic: ${ppl.topic }</div>
                <div class = "person-expertise"> <span class="expert">Experties: </span>${ppl.expertise }</div>
                

            <div class = "person-link">
               <a >Twitter</a>
              <a >Linkedin</a>
              <a >Website</a>
                
            </div>
        </div>
        `;
  }

  grid.innerHTML = html;
