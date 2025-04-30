let button=document.querySelector("#button") 
let content=document.querySelector("#content") 
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours()
//     if(hours>=0 && hours <12){
//         speak("Good Morning Sir")
//     }
//     else if(hours>=12 && hours <16){
//         speak("Good Afternoon Sir")
//     }
//     else{
//         speak("Good Evening Sir")
//     }
// }

window.addEventListener('load',()=>{
    wishMe()
})

let speechRecogniton= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecogniton()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript

    takeCommand(transcript.toLowerCase())
}

button.addEventListener("click",()=>{
    recognition.start()
    button.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    button.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") 
        || message.includes("hey")
    || message.includes("hello icampus")
    || message.includes("hey icampus")
    || message.includes("hello campus")
    || message.includes("hey campus")
    || message.includes("icampus")
    || message.includes("campus")
    || message.includes("hello navigator")
    || message.includes("hey navigator")
    || message.includes("navigator")){
        speak("hello sir,what can i help you?")
    } 



    else if(message.includes("who are you")){
        speak("i am campus navigator, created by Mayank Sir")
    }



    else if(message.includes("academic vice principal")){
        speak("academic vice principal are on the first floor in room number 21")
    }



    else if(message.includes("account section") 
        || message.includes("where is account section")
        || message.includes("where can i find account section")
        || message.includes("where's the account section")
        || message.includes("im looking for the account section")
        || message.includes("account section area")
        || message.includes("account section kahaan hai")
        || message.includes("mujhe account section kahaan milega")
        || message.includes("kya app bata sakte hain account section kidhar hai")
        || message.includes("kya yha account section hai")
        || message.includes("main apna account kha dekh sakta hoon")
        || message.includes("account details kahan milengi")){
        speak("account section located on ground floor")
    }



    else if(message.includes("student section") 
        || message.includes("where is student section")
        || message.includes("where can i find student section")
        || message.includes("where's the student section")
        || message.includes("im looking for the student section")
        || message.includes("student section area")
        || message.includes("student section kahaan hai")
        || message.includes("mujhe student section kahaan milega")
        || message.includes("kya app bata sakte hain student section kidhar hai")
        || message.includes("kya yha student section hai")
        || message.includes("main apna student kha dekh sakta hoon")
        || message.includes("student details kahan milengi")){
        speak("student section located on ground floor")
    }



    else if(message.includes("admission cell") 
        || message.includes("where is admission cell")
        || message.includes("where can i find admission cell")
        || message.includes("where's the admission cell")
        || message.includes("im looking for the admission cell")
        || message.includes("admission cell area")
        || message.includes("admission cell kahaan hai")
        || message.includes("mujhe admission cell kahaan milega")
        || message.includes("kya app bata sakte hain admission cell kidhar hai")
        || message.includes("kya yha admission cell hai")
        || message.includes("main apna admission kha dekh sakta hoon")
        || message.includes("admission details kahan milengi")){
        speak("admission cell located on ground floor")
    }



    else if(message.includes("office") 
        || message.includes("where is office")
        || message.includes("where can i find office")
        || message.includes("where's the office")
        || message.includes("im looking for the office")
        || message.includes("office area")
        || message.includes("office kahaan hai")
        || message.includes("mujhe office kahaan milega")
        || message.includes("kya app bata sakte hain office kidhar hai")
        || message.includes("kya yha office hai")
        || message.includes("main office kha dekh sakta hoon")
        || message.includes("office kahan milengi")){
        speak("office located on ground floor")
    }



    else if(message.includes("computer lab") 
        || message.includes("where is computer lab")
        // || message.includes("computer")
        || message.includes("computer lab 5")
        || message.includes("computer lab 9")
        || message.includes("computer lab 7")
        || message.includes("where can i find computer lab")
        || message.includes("where's the computer lab")
        || message.includes("im looking for the computer lab")
        || message.includes("computer lab area")
        || message.includes("computer lab kahaan hai")
        || message.includes("mujhe computer lab kahaan milegi")
        || message.includes("kya app bata sakte hain computer lab kidhar hai")
        || message.includes("kya yha computer lab hai")
        || message.includes("main computer lab kha dekh sakta hoon")
        || message.includes("computer lab kahan milengi")){
        speak("computer lab located on ground floor")
    }



    else if(message.includes("director") 
        || message.includes("where is director room")
        || message.includes("director sir")
        || message.includes("where can i find director room")
        || message.includes("where's the director room")
        || message.includes("im looking for the director room")
        || message.includes("director room area")
        || message.includes("director room kahaan hai")
        || message.includes("mujhe director room kahaan milega")
        || message.includes("kya app bata sakte hain director room kidhar hai")
        || message.includes("kya yha director room hai")
        || message.includes("director room kha dekh sakta hoon")
        || message.includes("director room kahan milenga")){
        speak("director room located on ground floor")
    }



    else if(message.includes("principal sir") 
        || message.includes("where is principal sir")
        || message.includes("principal sir room")
        || message.includes("principal")
        || message.includes("where can i find principal sir")
        || message.includes("where's the principal sir")
        || message.includes("im looking for the principal sir")
        || message.includes("principal")
        || message.includes("principal sir kahaan hai")
        || message.includes("mujhe principal sir kahaan milege")
        || message.includes("kya app bata sakte hain principal sir kidhar hai")
        || message.includes("kya yha principal sir hai")
        || message.includes("main principalsir ko kha dekh sakta hoon")
        || message.includes("principal sir kahan milenge")){
        speak("principal sir is on the ground floor, in front of the office")
    }



    else if(message.includes("hod sir") 
        || message.includes("where is hod sir")
        || message.includes("hod room")
        || message.includes("where can i find hod sir")
        || message.includes("where's the hod sir")
        || message.includes("im looking for the hod sir")
        || message.includes("hod sir room")
        || message.includes("hod sir kahaan hai")
        || message.includes("mujhe hod sir kahaan milege")
        || message.includes("kya app bata sakte hain hod sir kidhar hai")
        || message.includes("kya yha hod sir hai")
        || message.includes("main hod sir ko kha dekh sakta hoon")
        || message.includes("hod sir kahan milenge")){
        speak("there are 4 hod here the first is the hod of the computer science department, which is on the ground floor. the second is the hod of the electrical department, located on the first floor. the third is the hod of the mechanical department, which is also on the first floor. the fourth is the hod of the mining department, situated on the third floor")}




    else if(message.includes("cs hod sir") 
        || message.includes("where is amit sir")
        || message.includes("hod of computer science")
        || message.includes("cs hod")
        || message.includes("cse hod")
        || message.includes("hod cse")
        || message.includes("amit sir")
        || message.includes("where can i find amit sir")
        || message.includes("where's the amit sir")
        || message.includes("im looking for the amit sir")
        || message.includes("amit sir room")
        || message.includes("amit sir kahaan hai")
        || message.includes("mujhe amit sir kahaan milege")
        || message.includes("kya app bata sakte hain amit sir kidhar hai")
        || message.includes("kya yha amit sir hai")
        || message.includes("main amit sir ko kha dekh sakta hoon")
        || message.includes("amit sir kahan milenge")){
        speak("amit sir is on the ground floor, in front of the principal office")
    }



    else if(message.includes("electrical hod sir") 
        || message.includes("where is electrical hod")
        || message.includes("electrical hod")
        || message.includes("hod of electrical")
        || message.includes("where can i find hod of electircal")
        || message.includes("where's the electrical hod")
        || message.includes("im looking for the electrical hod")
        || message.includes("electrical hod room")
        || message.includes("electrical hod kahaan hai")
        || message.includes("mujhe electrical hod kahaan milege")
        || message.includes("kya app bata sakte hain electrical hod kidhar hai")
        || message.includes("kya yha electrical hod hai")
        || message.includes("main electrical hod ko kha dekh sakta hoon")
        || message.includes("electrical hod kahan milenge")){
        speak("hod of electrical is on the first floor room number 21")
    }



    else if(message.includes("mechanical hod sir") 
        || message.includes("where is mechanical hod")
        || message.includes("mechanical hod")
        || message.includes("hod of mechanical")
        || message.includes("where can i find hod of mechanical")
        || message.includes("where's the mechanical hod")
        || message.includes("im looking for the mechanical hod")
        || message.includes("mechanical hod room")
        || message.includes("mechanical hod kahaan hai")
        || message.includes("mujhe mechanical hod kahaan milege")
        || message.includes("kya app bata sakte hain mechanical hod kidhar hai")
        || message.includes("kya yha mechanical hod hai")
        || message.includes("main mechanical hod ko kha dekh sakta hoon")
        || message.includes("mechanical hod kahan milenge")){
        speak("hod of mechanical is on the first floor room number 22")
    }



    else if(message.includes("mining hod sir") 
        || message.includes("where is mining hod")
        || message.includes("mining hod")
        || message.includes("hod of mining")
        || message.includes("where can i find hod of mining")
        || message.includes("where's the mining hod")
        || message.includes("im looking for the mining hod")
        || message.includes("mining hod room")
        || message.includes("mining hod kahaan hai")
        || message.includes("mujhe mining hod kahaan milege")
        || message.includes("kya app bata sakte hain mining hod kidhar hai")
        || message.includes("kya yha mining hod hai")
        || message.includes("main mining hod ko kha dekh sakta hoon")
        || message.includes("mining hod kahan milenge")){
        speak("hod of mining is on the third floor")
    }



    else if(message.includes("hydraulic lab") 
        || message.includes("where is hydraulic lab")
        || message.includes("hydraulic")
        || message.includes("where can i find hydraulic lab")
        || message.includes("where's the hydraulic lab")
        || message.includes("im looking for the hydraulic lab")
        || message.includes("hydraulic lab area")
        || message.includes("hydraulic lab kahaan hai")
        || message.includes("mujhe hydraulic lab kahaan milega")
        || message.includes("kya app bata sakte hain hydraulic lab kidhar hai")
        || message.includes("kya yha hydraulic lab hai")
        || message.includes("main hydraulic lab kha dekh sakta hoon")
        || message.includes("hydraulic details kahan milengi")){
        speak("hydraulic lab located on ground floor")
    }





    else if(message.includes("chemistry lab") 
        || message.includes("public healt engineering lab")
        || message.includes("environmental engineering lab")
        || message.includes("safety lab")
        || message.includes("where is chemistry lab")
        || message.includes("where is chemistry lab")
        || message.includes("where is chemistry lab")
        || message.includes("where can i findchemistry labb")
        || message.includes("where's the chemistry lab")
        || message.includes("im looking for the chemistry lab")
        || message.includes("chemistry lab area")
        || message.includes("chemistry lab kahaan hai")
        || message.includes("mujhe chemistry lab kahaan milega")
        || message.includes("kya app bata sakte hain chemistry lab kidhar hai")
        || message.includes("kya yha chemistry lab hai")
        || message.includes("main chemistry lab kha dekh sakta hoon")
        || message.includes("chemistry details kahan milengi")){
        speak("chemistry lab located on ground floor")
    }




    else if(message.includes("btech 2nd year") 
        || message.includes("where is btech 2nd year")
        || message.includes("b.tech 2nd year")
        || message.includes("b.tech second year")
        || message.includes("btech second year")
        || message.includes("btech fourth semester")
        || message.includes("b.tech fourth semester")
        || message.includes("fourth semester")
        || message.includes("btech 4th semester")
        // || message.includes("4th semester")
        || message.includes("b.tech 4th semester")
        || message.includes("b.tech fourth semester")
        || message.includes("btech 4th semester")
        || message.includes("where can i find 2nd year")
        || message.includes("where's the btech 2nd year")
        || message.includes("im looking for the btech 2nd year")
        || message.includes("btech 2nd year area")
        || message.includes("btech 2nd year kahaan hai")
        || message.includes("b.tech 2nd year kahaan hai")
        || message.includes("mujhe btech 2nd year kahaan milega")
        || message.includes("kya app bata sakte hain btech 2nd year kidhar hai")
        || message.includes("kya yha btech 2nd  yearhai")
        || message.includes("main btech 2nd year kha dekh sakta hoon")
        || message.includes("btech 2nd yaer kahan milengi")){
        speak("btech 2nd year located on ground floor in lap number 9")
    }



    else if(message.includes("btech 3rd year") 
        || message.includes("where is btech 3rd year")
        || message.includes("btech sixth semester")
        || message.includes("b.tech 6th semester")
        || message.includes("btech 6th semester")
        || message.includes("b.tech 3rd year")
        || message.includes("b.tech third year")
        || message.includes("btech 3rd year")
        || message.includes("btech third year")
        || message.includes("where can i find 3rd year")
        || message.includes("where's the btech 3rd year")
        || message.includes("im looking for the btech 3rd year")
        || message.includes("btech 3rd year area")
        || message.includes("b.tech 3rd year area")
        || message.includes("btech 3rd year kahaan hai")
        || message.includes("mujhe btech 3rd year kahaan milega")
        || message.includes("kya app bata sakte hain btech 3rd year kidhar hai")
        || message.includes("kya yha btech 3rd yearhai")
        || message.includes("main btech 3rd year kha dekh sakta hoon")
        || message.includes("btech 3rd yaer kahan milengi")){
        speak("btech 3rd year located on ground floor in lab number 7")
    }



    else if(message.includes("btech first year") 
        || message.includes("where is btech first year")
        || message.includes("btech first semester")
        || message.includes("b.tech first year")
        || message.includes("btech first year")
        || message.includes("b.tech 1st year")
        || message.includes("btech 1st year")
        || message.includes("where can i find first year")
        || message.includes("where's the btech first year")
        || message.includes("im looking for the btech first year")
        || message.includes("btech first year area")
        || message.includes("btech first year kahaan hai")
        || message.includes("mujhe btech first year kahaan milega")
        || message.includes("kya app bata sakte hain btech first year kidhar hai")
        || message.includes("kya yha btech first  yearhai")
        || message.includes("main btech first year kha dekh sakta hoon")
        || message.includes("btech first yaer kahan milengi")){
        speak("btech first year located on ground floor in seminar hall")
    }



    else if(message.includes("power electronics lab") 
        || message.includes("application lab")
        || message.includes("electrical circuit lab")
        || message.includes("basic electronics lab")
        || message.includes("electronics lab")
        || message.includes("electronics lab")
        || message.includes("electrical lab room")
        || message.includes("electrical lab")
        || message.includes("electrical lab kahaan hai")
        || message.includes("electronic lab kahaan hai")
        || message.includes("electrical lab kahan milengi")
        || message.includes("electronics lab kahan milengi")){
        speak("electronics & electric lab are located on first floor in room number 19")
    }




    else if(message.includes("seminar hall") 
        || message.includes("where is seminar hall")
        || message.includes("where's the seminar hall")
        || message.includes("im looking for the seminar hall")
        || message.includes("seminar hall area")
        || message.includes("seminar hall kahaan hai")
        || message.includes("mujhe seminar hall kahaan milega")
        || message.includes("kya app bata sakte hain seminar hall kidhar hai")
        || message.includes("kya yha seminar hall hai")
        || message.includes("seminar hall kahan milenga")){
        speak("seminar holl are located on first floor room number 16")
    }



    else if(message.includes("applied mechanics lab") 
        || message.includes("where is applied mechanics lab")
        || message.includes("mechanics lab")
        || message.includes("where can i find applied mechanics lab")
        || message.includes("where's the applied mechanics lab")
        || message.includes("im looking for the applied mechanics lab")
        || message.includes("applied mechanics lab area")
        || message.includes("applied mechanics lab kahaan hai")
        || message.includes("mujhe applied mechanics lab kahaan milega")
        || message.includes("kya app bata sakte hain applied mechanics lab kidhar hai")
        || message.includes("kya yha applied mechanics lab hai")
        || message.includes("main applied mechanics lab kha dekh sakta hoon")
        || message.includes("mechanics details kahan milengi")){
        speak("applied mechanics lab are located on first floor room number 12")
    }



    else if(message.includes("basic mechanical lab") 
        || message.includes("where is basic mechanical lab")
        || message.includes("mechanical lab")
        || message.includes("where can i find basic mechanical lab")
        || message.includes("where's the basic mechanical lab")
        || message.includes("im looking for the basic mechanical lab")
        || message.includes("basic mechanical lab area")
        || message.includes("basic mechanical lab kahaan hai")
        || message.includes("mujhe basic mechanical lab kahaan milega")
        || message.includes("kya app bata sakte hain basic mechanical lab kidhar hai")
        || message.includes("kya yha basic mechanical lab hai")
        || message.includes("main basic mechanical lab kha dekh sakta hoon")
        || message.includes("mechanical details kahan milengi")){
        speak("basic mechanical lab are located on first floor room number 14")
    }



    else if(message.includes("gme lab") 
        || message.includes("where is gme lab")
        || message.includes("thermal lab")
        || message.includes("mechanical lab")
        || message.includes("where can i find gme lab")
        || message.includes("where's the gme lab")
        || message.includes("im looking for the gme lab")
        || message.includes("gme lab area")
        || message.includes("gme lab kahaan hai")
        || message.includes("thermal lab kahaan hai")
        || message.includes("mujhe gme lab kahaan milega")
        || message.includes("kya app bata sakte hain gme lab kidhar hai")
        || message.includes("kya yha gme lab hai")
        || message.includes("main gme lab kha dekh sakta hoon")
        || message.includes("mechanical details kahan milengi")){
        speak("gme lab & thermal are located on first floor")
    }



    else if(message.includes("machine lab") 
        || message.includes("where is machine lab")
        || message.includes("machine")
        || message.includes("where can i find machine lab")
        || message.includes("where's the machine lab")
        || message.includes("im looking for machine lab")
        || message.includes("machine lab area")
        || message.includes("machine lab kahaan hai")
        || message.includes("mujhe machine lab kahaan milega")
        || message.includes("kya app bata sakte hain machine lab kidhar hai")
        || message.includes("kya yha machine lab hai")
        || message.includes("main machine lab kha dekh sakta hoon")
        || message.includes("machine details kahan milengi")){
        speak("machine lab are located on first floor")
    }





    else if(message.includes("exam control room") 
        || message.includes("where is exam control room")
        || message.includes("where can i find exam control room")
        || message.includes("where's the exam control room")
        || message.includes("im looking for the exam control room")
        || message.includes("exam control room area")
        || message.includes("exam control room kahaan hai")
        || message.includes("mujhe exam control room kahaan milega")
        || message.includes("kya app bata sakte hain exam control room kidhar hai")
        || message.includes("kya yha exam control room hai")
        || message.includes("exam control room kha dekh sakta hooe")){
        speak("exam control room located on first floor")
    }




    else if(message.includes("library") 
        || message.includes("where is library")
        || message.includes("where can i find library")
        || message.includes("where's the library")
        || message.includes("im looking for the library")
        || message.includes("library area")
        || message.includes("library kahaan hai")
        || message.includes("mujhe library kahaan milega")
        || message.includes("kya app bata sakte hain library kidhar hai")
        || message.includes("kya yha library hai")
        || message.includes("main library kha dekh sakta hoon")
        || message.includes("library kahan milengi")){
        speak("library located are on second floor room number 32 ")
    }




    else if(message.includes("reading room") 
        || message.includes("where is reading room")
        || message.includes("where can i find reading room")
        || message.includes("where's the reading room")
        || message.includes("im looking for the account section")
        || message.includes("reading room area")
        || message.includes("reading room kahaan hai")
        || message.includes("mujhe reading room kahaan milega")
        || message.includes("kya app bata sakte hain reading room kidhar hai")
        || message.includes("kya yha reading room hai")
        || message.includes("reading room kha dekh sakta hoon")
        || message.includes("reading")){
        speak("reading room are located on second floor room number 31")
    }



    else if(message.includes("physics lab") 
        || message.includes("where is physics lab")
        || message.includes("physics")
        || message.includes("where can i find physics lab")
        || message.includes("where's the physics lab")
        || message.includes("im looking for physics lab")
        || message.includes("physics lab area")
        || message.includes("physics lab kahaan hai")
        || message.includes("mujhe physics lab kahaan milega")
        || message.includes("kya app bata sakte hain physics lab kidhar hai")
        || message.includes("kya yha physics lab hai")
        || message.includes("main physics lab kha dekh sakta hoon")
        || message.includes("physics details kahan milengi")){
        speak("physics lab are located on second floor room number 28")
    }




    else if(message.includes("posp lab") 
        || message.includes("where is posps lab")
        || message.includes("posp")
        || message.includes("where can i find posp lab")
        || message.includes("where's the posp lab")
        || message.includes("im looking for posp lab")
        || message.includes("posp lab area")
        || message.includes("posp lab kahaan hai")
        || message.includes("mujhe posp lab kahaan milega")
        || message.includes("kya app bata sakte hain posp lab kidhar hai")
        || message.includes("kya yha posp lab hai")
        || message.includes("main posp lab kha dekh sakta hoon")
        || message.includes("posp details kahan milengi")){
        speak("posp lab are located on second floor room number 28")
    }




    else if(message.includes("grd lab") 
        || message.includes("where is grd lab")
        || message.includes("grd")
        || message.includes("where can i find grd lab")
        || message.includes("where's the grd lab")
        || message.includes("im looking for grd lab")
        || message.includes("grd lab area")
        || message.includes("grd lab kahaan hai")
        || message.includes("mujhe grd lab kahaan milega")
        || message.includes("kya app bata sakte hain grd lab kidhar hai")
        || message.includes("kya yha grd lab hai")
        || message.includes("main grd lab kha dekh sakta hoon")
        || message.includes("grd details kahan milengi")){
        speak("grd lab are located on second floor room number 28")
    }



    else if(message.includes("renewable energy lab") 
        || message.includes("where is renewable energy lab")
        || message.includes("renewable energy")
        || message.includes("where can i find renewable energy lab")
        || message.includes("where's the renewable energy lab")
        || message.includes("im looking for renewable energy lab")
        || message.includes("renewable energy lab area")
        || message.includes("renewable energy lab kahaan hai")
        || message.includes("mujhe renewable energy lab kahaan milega")
        || message.includes("kya app bata sakte hain renewable energy lab kidhar hai")
        || message.includes("kya yha renewable energy lab hai")
        || message.includes("main renewable energy lab kha dekh sakta hoon")
        || message.includes("renewable energy details kahan milengi")){
        speak("renewable energy lab are located on second floor room number 28")
    }




    else if(message.includes("instrumentation lab") 
        || message.includes("where is instrumentation lab")
        || message.includes("instrumentation")
        || message.includes("where can i find instrumentation lab")
        || message.includes("where's the instrumentation lab")
        || message.includes("im looking for instrumentation lab")
        || message.includes("instrumentation lab area")
        || message.includes("instrumentation lab kahaan hai")
        || message.includes("mujhe instrumentation lab kahaan milega")
        || message.includes("kya app bata sakte hain instrumentation lab kidhar hai")
        || message.includes("kya yha instrumentation lab hai")
        || message.includes("main instrumentation lab kha dekh sakta hoon")
        || message.includes("instrumentation details kahan milengi")){
        speak("instrumentation lab are located on third floor")
    }




    else if(message.includes("itm lab") 
        || message.includes("where is itm lab")
        || message.includes("itm")
        || message.includes("where can i find itm lab")
        || message.includes("where's the itm lab")
        || message.includes("im looking for itm lab")
        || message.includes("itm lab area")
        || message.includes("itm lab kahaan hai")
        || message.includes("mujhe itm lab kahaan milega")
        || message.includes("kya app bata sakte hain itm lab kidhar hai")
        || message.includes("kya yha itm lab hai")
        || message.includes("main itm lab kha dekh sakta hoon")
        || message.includes("itm details kahan milengi")){
        speak("itm lab are located on third floor")
    }




    else if(message.includes("ventilation lab") 
        || message.includes("where is ventilation lab")
        || message.includes("ventilation")
        || message.includes("where can i find ventilation lab")
        || message.includes("where's the ventilation lab")
        || message.includes("im looking for ventilation lab")
        || message.includes("ventilation lab area")
        || message.includes("ventilation lab kahaan hai")
        || message.includes("mujhe ventilation lab kahaan milega")
        || message.includes("kya app bata sakte hain ventilation lab kidhar hai")
        || message.includes("kya yha ventilation lab hai")
        || message.includes("main ventilation lab kha dekh sakta hoon")
        || message.includes("ventilation details kahan milengi")){
        speak("ventilation lab are located on third floor")
    }




    else if(message.includes("advance geology") 
        || message.includes("where is advance geology")
        || message.includes("advance geology lab")
        || message.includes("where can i find advance geology")
        || message.includes("where's the advance geology")
        || message.includes("im looking for advance geology")
        || message.includes("advance geology area")
        || message.includes("advance geology kahaan hai")
        || message.includes("mujhe advance geology kahaan milega")
        || message.includes("kya app bata sakte hain advance geology kidhar hai")
        || message.includes("kya yha advance geology hai")
        || message.includes("main advance geology kha dekh sakta hoon")
        || message.includes("advance geology details kahan milengi")){
        speak("advance geology are located on third floor")
    }




    else if(message.includes("mwcm lab") 
        || message.includes("where is mwcm lab")
        || message.includes("mwcm")
        || message.includes("where can i find mwcm lab")
        || message.includes("where's the mwcm lab")
        || message.includes("im looking for mwcm lab")
        || message.includes("mwcm lab area")
        || message.includes("mwcm lab kahaan hai")
        || message.includes("mujhe mwcm lab kahaan milega")
        || message.includes("kya app bata sakte hain mwcm lab kidhar hai")
        || message.includes("kya yha mwcm lab hai")
        || message.includes("main mwcm lab kha dekh sakta hoon")
        || message.includes("mwcm lab details kahan milengi")){
        speak("mwcm lab are located on third floor")
    }





    else if(message.includes("smt lab") 
        || message.includes("where is smt lab")
        || message.includes("smt")
        || message.includes("where can i find smt lab")
        || message.includes("where's the smt lab")
        || message.includes("im looking for smt lab")
        || message.includes("smt lab area")
        || message.includes("smt lab kahaan hai")
        || message.includes("mujhe smt lab kahaan milega")
        || message.includes("kya app bata sakte hain smt lab kidhar hai")
        || message.includes("kya yha smt lab hai")
        || message.includes("main smt lab kha dekh sakta hoon")
        || message.includes("smt details kahan milengi")){
        speak("smt lab are located on third floor")
    }




    else if(message.includes("mine machinary lab") 
        || message.includes("where ismine machinary lab")
        || message.includes("mine machinary")
        || message.includes("where can i find mine machinary lab")
        || message.includes("where's the mine machinary lab")
        || message.includes("im looking for mine machinary lab")
        || message.includes("mine machinary lab area")
        || message.includes("mine machinary lab kahaan hai")
        || message.includes("mujhe mine machinary lab kahaan milega")
        || message.includes("kya app bata sakte hain mine machinary lab kidhar hai")
        || message.includes("kya yha mine machinary lab hai")
        || message.includes("main mine machinary lab kha dekh sakta hoon")
        || message.includes("mine machinary details kahan milengi")){
        speak("mine machinary lab are located on third floor")
    }




    else if(message.includes("time")){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"}) 
        speak(time)
    }




    else if(message.includes("date")){
        let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"}) 
        speak(date)
    }
  
}

// Seamless marquee duplication for infinite scroll
const marquee = document.querySelector(".marquee-content");
const clone = marquee.cloneNode(true);
document.getElementById("marquee").appendChild(clone);
