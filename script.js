/* =====================================================
   CAMPUS CONNECT
   CLUB + INTEREST INTERACTION
===================================================== */


/* ================= CLUB DATA ================= */

const clubs = {

    "Words Worth Club": {
        icon: "✍️",

        description:
            "A space for students who enjoy words, writing and creative expression.",

        activities: {

            "Writing": {
                icon: "✍️",
                quote: "Words have the power to turn thoughts into stories.",
                description:
                    "Explore creative writing, articles, poems, storytelling and campus writing."
            },

            "Creative Expression": {
                icon: "🎨",
                quote: "Creativity begins when you give your ideas a voice.",
                description:
                    "Express your ideas through creative writing, storytelling and original content."
            },

            "Communication": {
                icon: "💬",
                quote: "Good communication turns ideas into connections.",
                description:
                    "Build confidence in written and creative communication."
            }

        }
    },


    "Make in BVB": {
        icon: "💡",

        description:
            "A multidisciplinary student space where creativity, technology and communication come together.",

        activities: {

            "Software": {
                icon: "💻",
                quote: "Ideas become powerful when you build them.",
                description:
                    "Explore software development, problem solving and technology-based projects."
            },

            "Public Speaking": {
                icon: "🎤",
                quote: "Your voice can be the beginning of an idea.",
                description:
                    "Develop confidence in speaking, presenting and communicating ideas."
            },

            "Content Creation": {
                icon: "📱",
                quote: "Create something that people remember.",
                description:
                    "Explore social media content, creative ideas, storytelling and digital content."
            },

            "Designing": {
                icon: "🎨",
                quote: "Design is where creativity meets purpose.",
                description:
                    "Create posters, graphics, visual content and creative digital designs."
            },

            "Media": {
                icon: "📸",
                quote: "Every idea deserves to be seen and heard.",
                description:
                    "Work on publishing, documentation, photography and media-related activities."
            }

        }
    },


    "Music Club": {
        icon: "🎵",

        description:
            "A creative space for singers, instrumentalists and students who love music.",

        activities: {

            "Singing": {
                icon: "🎤",
                quote: "Music is the language that needs no translation.",
                description:
                    "Explore singing, vocal performance and musical collaborations."
            },

            "Instruments": {
                icon: "🎸",
                quote: "Every instrument has a story waiting to be played.",
                description:
                    "Connect with students who play different musical instruments."
            },

            "Music Media": {
                icon: "🎧",
                quote: "Capture the sound. Share the moment.",
                description:
                    "Explore music recording, promotion, publishing and media."
            }

        }
    },


    "Drama Club": {
        icon: "🎭",

        description:
            "A space for acting, performance, public speaking and creative storytelling.",

        activities: {

            "Acting": {
                icon: "🎭",
                quote: "Every character is a new story waiting to be lived.",
                description:
                    "Explore acting, stage performance, theatre and character building."
            },

            "Public Speaking": {
                icon: "🎤",
                quote: "Confidence begins when you find your voice.",
                description:
                    "Develop stage confidence, dialogue delivery and presentation skills."
            },

            "Drama Media": {
                icon: "📹",
                quote: "A performance deserves to be remembered.",
                description:
                    "Document, publish and promote performances and drama activities."
            }

        }
    },


    "Dance Club": {
        icon: "💃",

        description:
            "A space where students express themselves through movement, rhythm and performance.",

        activities: {

            "Dance": {
                icon: "💃",
                quote: "Let your movement tell the story.",
                description:
                    "Explore different dance styles, performances and campus activities."
            },

            "Choreography": {
                icon: "🕺",
                quote: "Great performances begin with great ideas.",
                description:
                    "Create routines, coordinate performances and explore choreography."
            },

            "Performance": {
                icon: "✨",
                quote: "The stage is where preparation becomes expression.",
                description:
                    "Participate in dance performances and collaborative events."
            }

        }
    },


    "Heritage Club": {
        icon: "🏛️",

        description:
            "A student community celebrating culture, traditions, heritage and history.",

        activities: {

            "Culture": {
                icon: "🌏",
                quote: "Knowing our roots helps us understand where we are going.",
                description:
                    "Explore cultures, traditions and meaningful campus activities."
            },

            "Heritage": {
                icon: "🏛️",
                quote: "Heritage is the story we carry forward.",
                description:
                    "Discover and document cultural and historical heritage."
            },

            "Events": {
                icon: "🎉",
                quote: "Culture comes alive when we celebrate together.",
                description:
                    "Participate in cultural celebrations and heritage activities."
            }

        }
    },


    "IUCEE Club": {
        icon: "⚙️",

        description:
            "A space for students interested in engineering, innovation and collaborative learning.",

        activities: {

            "Innovation": {
                icon: "💡",
                quote: "Innovation begins with curiosity.",
                description:
                    "Explore innovative ideas, engineering concepts and creative solutions."
            },

            "Engineering": {
                icon: "⚙️",
                quote: "Engineering turns ideas into possibilities.",
                description:
                    "Learn, collaborate and explore engineering-related activities."
            },

            "Activities": {
                icon: "🚀",
                quote: "Learning becomes meaningful when you build and participate.",
                description:
                    "Take part in student activities, discussions and collaborative initiatives."
            }

        }
    },


    "Code Club": {
        icon: "💻",

        description:
            "A community for students interested in programming, technology and problem solving.",

        activities: {

            "Coding": {
                icon: "💻",
                quote: "Every great program starts with a simple idea.",
                description:
                    "Practice programming, logic building and problem solving."
            },

            "Web Development": {
                icon: "🌐",
                quote: "Build something people can experience.",
                description:
                    "Explore websites, frontend development and interactive web projects."
            },

            "Programming": {
                icon: "👨‍💻",
                quote: "Code is a tool for turning ideas into reality.",
                description:
                    "Explore programming languages, projects and technical skills."
            }

        }
    },


    "Space Club": {
        icon: "🚀",

        description:
            "A space for students fascinated by astronomy, science and the universe.",

        activities: {

            "Astronomy": {
                icon: "🔭",
                quote: "The universe is full of questions waiting to be explored.",
                description:
                    "Explore stars, planets, galaxies and astronomical observations."
            },

            "Space": {
                icon: "🚀",
                quote: "Look beyond the horizon.",
                description:
                    "Learn and discuss space exploration, missions and discoveries."
            },

            "Science": {
                icon: "🪐",
                quote: "Curiosity is where discovery begins.",
                description:
                    "Explore scientific ideas connected to astronomy and space."
            }

        }
    },


    "Media Club": {
        icon: "📸",

        description:
            "A creative media community covering photography, videography, publishing and campus communication.",

        activities: {

            "VJ / Public Speaking": {
                icon: "🎤",
                quote: "Be the voice that brings the campus to life.",
                description:
                    "Explore video jockeying, anchoring, public speaking and event presentation."
            },

            "Photography": {
                icon: "📸",
                quote: "A photograph can preserve a moment forever.",
                description:
                    "Capture campus moments, events, people and stories through photography."
            },

            "Videography": {
                icon: "🎥",
                quote: "Turn moments into stories.",
                description:
                    "Explore video recording, event coverage and visual storytelling."
            },

            "Video Editing": {
                icon: "🎬",
                quote: "Great stories are shaped in the edit.",
                description:
                    "Learn creative video editing and create engaging visual content."
            },

            "Publishing": {
                icon: "📰",
                quote: "Every story deserves a platform.",
                description:
                    "Work on publishing campus updates, event coverage and student content."
            }

        }
    }

};


/* =====================================================
   CLUB PAGE
===================================================== */

const clubNameElement = document.getElementById("clubName");

if (clubNameElement) {

    const params = new URLSearchParams(window.location.search);

    const selectedClub =
        params.get("club") || "Words Worth Club";

    const club = clubs[selectedClub] || clubs["Words Worth Club"];

    document.getElementById("clubIcon").textContent = club.icon;

    document.getElementById("clubName").textContent =
        selectedClub;

    document.getElementById("clubDescription").textContent =
        club.description;


    const activityGrid =
        document.getElementById("activityGrid");

    activityGrid.innerHTML = "";


    let count = 1;

    Object.keys(club.activities).forEach(activity => {

        const data = club.activities[activity];

        const card = document.createElement("div");

        card.className = "activity-card";

        card.innerHTML = `

            <div class="activity-number">
                ${String(count).padStart(2, "0")}
            </div>

            <h3>
                ${data.icon} ${activity}
            </h3>

            <p>
                ${data.description}
            </p>

            <div class="click-note">
                Click to explore →
            </div>

        `;

        card.addEventListener("click", function() {

            openInterest(
                selectedClub,
                activity,
                data
            );

        });

        activityGrid.appendChild(card);

        count++;

    });

}


/* =====================================================
   OPEN POPUP
===================================================== */

function openInterest(club, activity, data) {

    document.getElementById("modalIcon").textContent =
        data.icon;

    document.getElementById("modalTitle").textContent =
        activity;

    document.getElementById("modalQuote").textContent =
        `"${data.quote}"`;

    document.getElementById("modalDescription").textContent =
        data.description;


    const button =
        document.getElementById("interestButton");

    button.href =
        `interest.html?club=${encodeURIComponent(club)}&interest=${encodeURIComponent(activity)}`;


    document.getElementById("interestModal")
        .classList.add("show");

}


/* =====================================================
   CLOSE POPUP
===================================================== */

function closeInterest() {

    document.getElementById("interestModal")
        .classList.remove("show");

}


/* Close when clicking outside popup */

const modal =
    document.getElementById("interestModal");

if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeInterest();
        }

    });

}


/* =====================================================
   OLD HOME INTEREST FUNCTION
===================================================== */

function searchInterest(interest) {

    window.location.href =
        `clubs.html?interest=${encodeURIComponent(interest)}`;

}
