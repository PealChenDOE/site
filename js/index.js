let ScrollYPositon = 0
let ScrollXPositon = 0

function tweenInOutQuint(Start, End, Duration, Callback) {
    const StartTime = performance.now()

    function animate(Time) {
        const TimeElapsed = Time - StartTime
        const Value = InOutQuint(TimeElapsed / Duration)
        const CurrentValue = Start + (End - Start) * Value

        Callback(CurrentValue)

        if (TimeElapsed < Duration) {
            requestAnimationFrame(animate)
        } else {
            Callback(End) // Ensure the final value is set at the end
        }
    }

    requestAnimationFrame(animate)
}

function InOutQuint(n) {
    return --n * n * n * n * n + 1;
  }

function BlurFade(element) {
    element.animate([{opacity: 1}], {duration: 500, iterations: 1, fill: "forwards", easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
    tweenInOutQuint(16, 0, 1000, (blur) => {
        element.style.filter = `blur(${blur}px)`
    })
}

function ScrollBackground(Direction) {
    if (Direction == "Down") {
        tweenInOutQuint(
            0, 10, 800, (increment) => {
                ScrollYPositon -= (increment)

                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        setTimeout(() => {
        tweenInOutQuint(
            10, 0, 800, (increment) => {
                ScrollYPositon -= (increment)

                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        }, 800);
    } else if (Direction == "Right") {
        tweenInOutQuint(
            0, 10, 800, (increment) => {
                ScrollXPositon -= (increment)

                document.body.style.backgroundPositionX = `${ScrollXPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 800, (increment) => {
                    ScrollXPositon -= (increment)

                    document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                }
            )
        }, 800);
    } else if (Direction == "Up") {
        tweenInOutQuint(
            0, 10, 1699, (increment) => {
                ScrollYPositon += (increment)

                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 1699, (increment) => {
                    ScrollYPositon += (increment)
    
                    document.body.style.backgroundPositionY = `${ScrollYPositon}px`
                }
            )
        }, 800);
    } else if (Direction == "Left") {
        tweenInOutQuint(
            0, 10, 1699, (increment) => {
                ScrollXPositon += (increment)

                document.body.style.backgroundPositionX = `${ScrollXPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 1699, (increment) => {
                    ScrollXPositon += (increment)
    
                    document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                }
            )
        }, 800);
    } else if (Direction == "DownRight") {
        tweenInOutQuint(
            0, 10, 1699, (increment) => {
                ScrollXPositon -= (increment)
                ScrollYPositon -= (increment)

                document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 1699, (increment) => {
                    ScrollXPositon -= (increment)
                    ScrollYPositon -= (increment)
    
                    document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                    document.body.style.backgroundPositionY = `${ScrollYPositon}px`
                }
            )
        }, 800);
    } else if (Direction == "DownLeft") {
        tweenInOutQuint(
            0, 10, 1699, (increment) => {
                ScrollXPositon += (increment)
                ScrollYPositon -= (increment)

                document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 1699, (increment) => {
                    ScrollXPositon += (increment)
                    ScrollYPositon -= (increment)
    
                    document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                    document.body.style.backgroundPositionY = `${ScrollYPositon}px`
                }
            )
        }, 800);
    } else if (Direction == "UpRight") {
        tweenInOutQuint(
            0, 10, 1699, (increment) => {
                ScrollXPositon -= (increment)
                ScrollYPositon += (increment)

                document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 1699, (increment) => {
                    ScrollXPositon -= (increment)
                    ScrollYPositon += (increment)
    
                    document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                    document.body.style.backgroundPositionY = `${ScrollYPositon}px`
                }
            )
        }, 800);
    } else if (Direction == "UpLeft") {
        tweenInOutQuint(
            0, 10, 1699, (increment) => {
                ScrollXPositon += (increment)
                ScrollYPositon += (increment)

                document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                document.body.style.backgroundPositionY = `${ScrollYPositon}px`
            }
        )
        setTimeout(() => {
            tweenInOutQuint(
                10, 0, 1699, (increment) => {
                    ScrollXPositon += (increment)
                    ScrollYPositon += (increment)
    
                    document.body.style.backgroundPositionX = `${ScrollXPositon}px`
                    document.body.style.backgroundPositionY = `${ScrollYPositon}px`
                }
            )
        }, 800);
    }
}

function FadeLanding() {
    landingcontainer.animate([{opacity: 0}], {duration: 250, iterations: 1, fill: "forwards",easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
}

function UnFadeLanding() {
    setTimeout(() => {
        landingcontainer.animate([{opacity: 1}], {duration: 250, iterations: 1, fill: "forwards", easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
    }, Timeout+250);
}

function ScrollAfter(Direction ,Time) {
    setTimeout(() => {
        ScrollBackground(Direction)
    }, Time )
}

let blob = document.body.querySelector("#blob")
let blobvid = blob.querySelector("video")

var CurrentLayoutDisplayed = "None"
var Timeout = 0
function NewSlide(Layout, Direction, Time, Title, Content, Images, UseContain) {
    let layoutstr = `#layout-${Layout}`
    let layout = document.body.querySelector(layoutstr)
    let title = layout.querySelector("h3")
    let content = layout.querySelector("p")
    let images = layout.querySelector("img")

    setTimeout(() => {
        title.textContent = Title
        content.textContent = Content
        images.src = Images

        layout.style.filter = "blur(16px)"

        if (title.textContent === "SEXISM") {
            title.style.fontFamily = "Trade Winds"
        }

        if (UseContain) {
            images.style.objectFit = "contain"
        } else {
            images.style.objectFit = "fill"
        }
        
    }, Timeout + 250)

    ScrollAfter(Direction, Timeout + 200)

    setTimeout(() => {
        BlurFade(layout)
    }, Timeout + 1800)

    setTimeout(() => {
        layout.animate([{opacity: 0}], {duration: 350, iterations: 1, fill: "forwards", easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
    }, Timeout + (2300 + Time))

    Timeout += (2300 + Time)
}

let enterbutton = document.body.querySelector("#navajo")
let enterbutton1 = document.body.querySelector("#african")
let enterbutton2 = document.body.querySelector("#women")
let enterbutton3 = document.body.querySelector("#latino")
let enterbutton4 = document.body.querySelector("#jewish")
let enterbutton5 = document.body.querySelector("#conclusion")
let enterbutton6 = document.body.querySelector("#bibliography")

let landingcontainer = document.body.querySelector("#landing-container")

enterbutton.addEventListener("click", () => {
    FadeLanding()
    NewSlide(
        2,
        "Up",
        20000,
        "Navajo Code Talkers",
        "In WW2, the Americans employed many people from the Navajo tribe to use their language as a code. This was more effective then normal codes, as it couldn't be solved without knowing the language. It was also sort of ironic, because the american colonists had tried to force Navajo children to forget their language earlier.",
        "media/ct1.png"
    )
    NewSlide(
        1,
        "Down",
        20000,
        "Origins",
        "America had used the Choctaw language against the Germans in WW1. However afterwards the germans and the Japanese learned many Native American languages in case the U.S. did it again, so this time the U.S. used the Navajo language as it was not studied.",
        "media/ct2.png"
    )
    NewSlide(
        4,
        "Down",
        16000,
        '“All the services, like the army, and divisions and companies, and battalions, regiments . . . we just gave them clan names. Airplanes are named after birds . . . like the buzzard is a bomber, and the hawk is a dive bomber, and the patrol plane is a crow, and the hummingbird is the fighter.”',
        "- William McCabe, a Navajo man who worked in the army.",
        ""
    )
    NewSlide(
        2,
        "Down",
        15000,
        "Importance Unoticed",
        "Even though the Navajo were vital in world war 2, they had to keep their role in the war a secret in case they were needed again. It was only in 1968 that people learned of how important they were.",
        "media/ct3.png"
    )
    NewSlide(
        1,
        "Down",
        10000,
        "Back Home To Racism",
        "Despite being vital in the war, when the Navajo returned to America they still faced racism. They could not eat at certain places and were not able to vote in  certain elections.",
        ""
    )
    NewSlide(
        4,
        "Down",
        20000,
        '"After I came back, back home. Still no job, no work, so, back to the railroad again. I worked on the railroad and I found out they were only short-time jobs. Went to Haskell Institute in Lawrence, Kansas. Took a course in refrigeration and electrical wiring, house wiring."',
        "- Sam Tso, Navajo Code Talker",
        ""
    )
    UnFadeLanding()
})

enterbutton1.addEventListener("click", () => {
    FadeLanding()
    NewSlide(
        1,
        "UpRight",
        30000,
        "Dorie Miller and Pearl Harbor",
        `Doris “Dorie” Miller wasn’t supposed to be fighting. He was a steward on the USS West Virginia during the attack on Pearl Harbor. He didn't know how to use the ships weapons, but he shot down a plane (potentially more than one plane) with a machine gun during the attack and carried many people to safety. He was the first Black American to get the Navy Cross.`,
        "media/aa1.png",
        false
    )
    NewSlide(
        2,
        "Down",
        17000,
        "Black Americans join WW2",
        "In 1941, Roosevelt issued Executive Order 8802, which banned racial discrimination in the defense industry, allowing Black people to serve in WW2. Many Black Americans joined World War 2 because they wondered if they would get more rights after World War 2.",
        "media/aa2.png"
    )
    NewSlide(
        1,
        "Down",
        25000,
        "Segregation Followed Them",
        `Even though they were no longer in America, African Americans were still segregated from the white units by the racist white military owners. Also they were sometimes led by southern white people.`,
        "media/aa3.png"
    )
    NewSlide(
        2,
        "Down",
        17000,
        "Double Victory",
        `Many African Americans were fighting for the “Double Victory”; they were fighting facism in Germany and racism at home.`,
        ""
    )
    NewSlide(
        1,
        "Down",
        20000,
        "Disappointment when returning home",
        `When they got back, Black Americans thought that it might have been the end of segregation and they might stop being second class citizens. Unfortunately, they stayed in a similar position as before.`,
        "media/aa4.png"
    )

    UnFadeLanding()
})

enterbutton2.addEventListener("click", () => {
    FadeLanding()

    NewSlide(
        1,
        "Right",
        30000,
        "Women Do Work Related Stuff",
        `During WW2, America used everyone they had to do stuff. While men fought in the war, women worked in defense plants and other war related things, as well was doing office jobs and other jobs the men weren’t there to do. Most women were apparently very upbeat about being able to do all of this as it beat being a housewife.`,
        "media/fa1.png"
    )
    NewSlide(
        2,
        "Down",
        15000,
        "Women do War Related Stuff",
        `A lot of women served in uniform, in many parts of the ary, navy, and airforce. They also did other war related things that didn’t require being there. Many of them repaired airplanes, made parachutes, flew military planes, and tested out anti-aircraft guns by seeing if the guns could shoot them.`,
        "media/fa2.png"
    )
    NewSlide(
        1,
        "Down",
        10000,
        "SEXISM",
        `After the men got back, sexism took back over. The women wanted to keep their jobs, but they in fact could not because men forced them out. The men took back over the jobs and everything went back to the sexist normal.`,
        "media/fa3.png"
    )
    NewSlide(
        2,
        "Down",
        12000,
        "Women protest against a proxy war",
        `During 1939, in America, Mother in Law protests down the street in California. Stating that “We don’t want our son to die for another country.” This movement was calculated to be around 5 to 6 million people. Delaying U.S action.`,
        "media/fa4.png"
    )


    UnFadeLanding()
})

enterbutton3.addEventListener("click", () => {
    FadeLanding()

    NewSlide(
        1,
        "DownRight",
        10000,
        "Macario Garcia gets to business",
        `Marcario Garcia, a Mexican American sergeant in the army, single handedly destroyed German machine guns and captured 4 German soldiers. He was the first mexican immigrant to receive a medal of honor.`,
        "media/la1.png"
    )
    NewSlide(
        2,
        "Down",
        15000,
        "Into war",
        "Mexican women worked in the defense and food production industries to support the war effort and provide for their families while husbands and sons served overseas. They often also worked jobs that men traditionally worked.",
        "media/la2.png"
    )
    NewSlide(
        1,
        "Down",
        15000,
        "SEXISM",
        "Before WW2, Mexican Americans were second class citizens. After WW2, after they all served their country, they were STILL second class citizens. This made them pretty mad. Many had died and yet they were still not first class citizens.",
        "media/la3.png"
    )

    UnFadeLanding()
})

enterbutton4.addEventListener("click", () => {
    FadeLanding()

    NewSlide(
        2,
        "DownLeft",
        10000,
        "Major General Maurice Rose",
        "He was the highest ranking Jewish American during WW2. He end up dying while leading the 3rd Armored Division into Germany. Overall he contributed much into defeating Germany.",
        "media/ja1.png",
        true
    )

    NewSlide(
        1,
        "Down",
        18000,
        "Jewish Tags",
        "Some of the Jewish Americans actually fighting in the war were totally freaked out, because they were all given tags that said their religion and they were worried that the Nazis would single them out because they were Jewish. Others made a big deal of how Jewish they were as to basically say “screw you” to the Nazis",
        "media/ja2.png"
    )

    NewSlide(
        2,
        "Down",
        12000,
        "Jewish Americans and Nazis",
        "Many Jewish people in America felt rage seeing how the Jews in Germany were being treated. This led to over 500,000 thousand Jewish Americans joining the war.",
        "media/ja3.png"
    )

    UnFadeLanding()
})

enterbutton5.addEventListener("click", () => {
    FadeLanding()

    NewSlide(
        4,
        "Down",
        50000,
        "CONCLISION",
        "When history is taught about world war 2, it is almost always about the main events, such as the holocaust and atom bomb. However, even though these events were very important to many people, world war 2 also had a huge effect on many underrepresented groups in the U.S. In World War 2, many underrepresented groups such as Black Americans, Hispanic Americans, women (generally), Jewish Americans, and the entire Navajo nation managed to play important roles in stopping the war. Many of them did this with a hope of getting more rights after the war was over, but once the war ended they had to go back to facing discrimination.",
        ""
    )

    UnFadeLanding()
})

enterbutton6.addEventListener("click", () => {
    window.location.href = ("Bibliography.txt")
})