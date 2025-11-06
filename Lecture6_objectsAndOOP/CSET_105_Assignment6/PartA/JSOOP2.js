//Complex class 
class Ideas {
    constructor(topics, teacher, num_Of_Weekdays) {
        this.topics = topics;
        this.teacher = teacher;
        this.num_Of_Weekdays = num_Of_Weekdays;
    }

    message(){
        let tempString = ''
        if (typeof (this.topics) == Array) {
            for (let i = 0; i < (this.topics).length; i++) {
                tempString += this.topics[i] + ", ";
                
            }
        } else {//if they only enter 1 topic
            tempString = this.topics + ", ";
        }
        
        console.log(this.teacher + " is going to teach " + tempString + "on " + this.num_Of_Weekdays + " days of the week." );
        
    }
}

//this makes an object based on the arguments entered into the class function
let CSET = new Ideas(["CSET 105", "CSET 110", "CSET 115"], "Ashraful Hohammad", 5);

CSET.message();
// Ashraful Hohammad Is going to teach CSET 105,CSET 110,CSET 115, on 5 days of the week.

let pubSpeaking = new Ideas("Informational Speech", "Public Speaking Teacher", 2);

pubSpeaking.message();
//Public Speaking Teacher Is going to teach Informational Speech, on 2 days of the week.