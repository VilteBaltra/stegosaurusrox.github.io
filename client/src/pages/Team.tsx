import estherPortrait from "@assets/esther-portrait2.jpg"; 
import marlenePortrait from "@assets/image_1773831955808.png";
import fayePortrait from "@assets/image_1773832067639.png";
import zoePortrait from "@assets/image_1773832538100.png";
import viltePortrait from "@assets/image_1773833409747.png";
import sallyPortrait from "@assets/image_1773834250244.png";

export default function Team() {
  const alumni = [
    { name: "Katherine Sawyer", role: "PhD Student (2021-2025)", now: "Postdoc at KCL" },
    { name: "Constantinos Constantinides", role: "PhD Student (2019-2023)", now: "LCP Health Analytics" },
    { name: "Lucy W?, Sophie T?", role: "PhD Student (20??)", now: "Postdoc at xx" }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are a diverse group of researchers united by a fascination with the human mind.
          </p>
        </div>

        {/* PI Section */}
        <section className="mb-24">
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img src={estherPortrait} alt="Dr. Esther" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <div>
                  <h2 className="text-3xl font-serif mb-1">Prof. Esther Walton</h2>
                  <p className="text-secondary-foreground font-medium">Principal Investigator / Professor of Biological Psychology</p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Professor Walton leads research focusing on genetics, epigenetics, and brain imaging to understand mental health and healthy aging.
                  </p>
                  <p>
                    She leads the €1.5 million EU-funded BrainHealth project on brain aging and mental health, while also serving as principal investigator for a £3.5 million Wellcome-funded study on psychosis. Alongside these roles, she co-directs the international MIND consortium. Her multidisciplinary approach integrates genetic, epigenetic, and neuroimaging methods to investigate health across the lifespan.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:e.walton@bath.ac.uk" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Contact Esther
                  </a>
                  <a href="https://scholar.google.com/citations?user=XgUThnUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
		
		{/* Current Members */}
		<section className="mb-24">
		  <h3 className="text-2xl font-serif mb-8 border-b pb-4">Current Members</h3>
		  {/* Changed grid-cols-3 to grid-cols-1 and increased vertical gap */}
		  <div className="grid grid-cols-1 gap-12">
			{[
			  { 
				name: "Dr. Marlene Staginnus", 
				role: "Research Associate", 
				focus: "Biological Psychology", 
				image: marlenePortrait,
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Dr. Vilte Baltramonaityte", 
				role: "Research Associate", 
				focus: "Genetic Psychology", 
				image: viltePortrait,
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Dr. Emily Taylor", 
				role: "Lab Manager", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Faye Sanders", 
				role: "PhD Student", 
				focus: "Mental Health & Environments", 
				image: fayePortrait,
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Zoe Hart", 
				role: "PhD Student", 
				focus: "Cognitive Aging", 
				image: zoePortrait,
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Sally Turner", 
				role: "PhD Student", 
				focus: "xx", 
				image: sallyPortrait,
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Chris Townend", 
				role: "PhD Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Katarina Koziell", 
				role: "PhD Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Rosalyn Acevedo", 
				role: "PhD Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Sorcha Hamilton", 
				role: "PhD Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "xx", 
				role: "PhD Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Zeynep Bicakci", 
				role: "BSc Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  },
			  { 
				name: "Isla Wallace", 
				role: "BSc Student", 
				focus: "xx", 
				bio: "Insert bio here..." 
			  }
			].map((member) => (
			  <div key={member.name} className="group flex flex-col md:flex-row gap-8 items-start">
				{/* Image Container: Fixed size on larger screens */}
				<div className="w-full md:w-48 shrink-0">
				  <div className="aspect-square bg-muted rounded-xl overflow-hidden relative shadow-sm">
					{member.image ? (
					  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
					) : (
					  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/20 text-4xl font-serif font-light">
						{member.name.charAt(0)}
					  </div>
					)}
				  </div>
				</div>

				{/* Text Content */}
				<div className="flex-1">
				  <h4 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">{member.name}</h4>
				  <p className="text-md font-medium text-primary/80">{member.role}</p>
				  <p className="text-sm text-muted-foreground mb-3 italic">Focus: {member.focus}</p>
				  <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
					{member.bio}
				  </p>
				</div>
			  </div>
			))}
		  </div>
		</section>

        {/* Current Members */}
        <section className="mb-24">
          <h3 className="text-2xl font-serif mb-8 border-b pb-4">Current Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Marlene Staginnus", role: "Research Associate", focus: "Biological Psychology", image: marlenePortrait },
			  { name: "Vilte Baltramonaityte", role: "Research Associate", focus: "Genetic Psychology", image: viltePortrait },
              { name: "Faye Sanders", role: "PhD Student", focus: "Mental Health & Environments", image: fayePortrait },
              { name: "Zoe Hart", role: "PhD Student", focus: "Cognitive Aging", image: zoePortrait },
              { name: "Sally Turner", role: "PhD Student", focus: "Cognitive Psychology", image: sallyPortrait }
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/20 text-4xl font-serif font-light">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-serif font-medium group-hover:text-secondary-foreground transition-colors">{member.name}</h4>
                <p className="text-sm font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">Focus: {member.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section>
          <h3 className="text-2xl font-serif mb-8 border-b pb-4">Lab Alumni</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alum) => (
              <div key={alum.name} className="p-6 bg-card border rounded-xl shadow-sm">
                <h4 className="font-serif font-medium mb-1">{alum.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{alum.role}</p>
                <p className="text-xs font-medium text-primary">Now: {alum.now}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
