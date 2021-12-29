

function clickElement(element) {
    try {
        element.trigger("click");
    } catch(err) {
        console.log("error: " + err);
        var event = new MouseEvent("click", {view: window, cancelable: true, bubbles: true});
        element.dispatchEvent(event);
    }
}

function rgb2hex(color) {
    var digits = /(.*?)rgba\((\d+), (\d+), (\d+), (\d+)\)/.exec(color);
    if (digits == null) {
        digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    }
    var red = parseInt(digits[2],10);
    var green = parseInt(digits[3],10);
    var blue = parseInt(digits[4],10);
    var rgb = blue | (green << 8) | (red << 16);
    if(red == 0){
        return digits[1] + '#00' + rgb.toString(16);
    }else{
        return digits[1] + '#' + rgb.toString(16);
    }
}


suite("HTML tests", function() {

    test("Check that the page title is 'Chat Room'", function() {
        chai.assert.equal($("title").text(), "Chat Room", "Page title is incorrect");
    }); 

    test("Have a div with the ID 'iptbtn' in the page", function() {
        chai.assert.equal($("#iptbtn").prop("tagName"), "DIV", "'div' element has the wrong type");
    });

    test("Have a div with the ID 'backinfo' in the page", function() {
        chai.assert.equal($("#backinfo").prop("tagName"), "DIV", "'div' element has the wrong type");
    });

    test("Have a button with the ID 'btn' in the page", function() {
        chai.assert.equal($("#btn").prop("tagName"), "BUTTON", "'btn' element has the wrong type");
    });

    test("Have a button with the ID 'setname' in the page", function() {
        chai.assert.equal($("#setname").prop("tagName"), "BUTTON", "'btn' element has the wrong type");
    });

    test("Have a text box with the ID 'name' in the page", function() {
        chai.assert.equal($("#name").prop("tagName"), "INPUT", "'input' element has the wrong type");
    });

    test("Have a text box with the ID 'text' in the page", function() {
        chai.assert.equal($("#text").prop("tagName"), "INPUT", "'input' element has the wrong type");
    });
});


suite("CSS tests", function() {
    test("Check that the body background colour is correct", function() {
        chai.assert.equal(rgb2hex($("body").css("background-color")), "#fff8c5", "'body' element has wrong background colour");
    });

    test("Check that the body font is correct", function() {
        chai.assert.equal($("body").css("font-family").toLowerCase(), "verdana", "'body' element has wrong font");
    });

    test("Check that the level one heading text is the correct size", function() {
        chai.assert.equal($("h1").last().css("font-size").toLowerCase(), "20px", "'h1' element has wrong font size");
    });

    test("Check that the tit class has the correct color attributes", function() {
        chai.assert.equal(rgb2hex($(".tit").css("color")), "#2600d1", "The tit class has the wrong border style");
    });

    test("Check that the mess class background color,border,width,padding is correctly", function() {
        chai.assert.equal($(".mess").css("background-color"), "rgb(255, 255, 255)", "The mess class background color is correctly");
        chai.assert.equal($(".mess").css("border"), "1px solid rgb(0, 0, 0)", "The mess class border color is correctly");
        chai.assert.equal($(".mess").css("width"), "700px", "The mess class width color is correctly");
        chai.assert.equal($(".mess").css("padding"), "20px", "The mess class padding color is correctly");
    });

    test("Check that the btn class attributes is correctly", function() {
        chai.assert.equal($(".btn").css("background-color"), "rgb(0, 200, 250)", "The btn class background color is correctly");
        chai.assert.equal($(".btn").css("padding"), "15px 32px", "The btn class padding is correctly");
        chai.assert.equal($(".btn").css("text-align"), "center", "The btn class text-align is correctly");
        chai.assert.equal($(".btn").css("-webkit-transition-duration"), "0.4s", "The btn class text-align is correctly");
    });

    test("Check that the btn2 class attributes is correctly", function() {
        chai.assert.equal($(".btn2").css("color"), "rgb(255, 255, 255)", "The btn2 class color is correctly");
        chai.assert.equal($(".btn2").css("display"), "inline-block", "The btn2 class display is correctly");
        chai.assert.equal($(".btn2").css("font-size"), "16px", "The btn2 class font-size is correctly");
        chai.assert.equal($(".btn2").css("box-shadow"), "rgba(0, 0, 0, 0.2) 0px 8px 16px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px", "The btn2 class box-shadow is correctly");
    });

    test("Check that the ipt class backgroundcolor,border-radius,height is correctly", function() {
        chai.assert.equal($(".ipt").css("background-color"), "rgb(250, 250, 250)", "The ipt class background color is correctly");
        chai.assert.equal($(".ipt").css("border-radius"), "8px", "The ipt class border-radius is correctly");
        chai.assert.equal($(".ipt").css("height"), "30px", "The ipt class height is correctly");
    });

    // test("Check that the span-1 class font-size and color is correctly", function() {
    //     chai.assert.equal($(".span-2").css("font-size"), "15px", "The span-1 class font size is correctly");
    //     chai.assert.equal($(".span-1").css("color"), "15px", "The span-1 class color is correctly");
    // });

    test("Check that the user class margin and text-align is correctly", function() {
        chai.assert.equal($(".user").css("margin"), "50px", "The user class margin is correctly");
        chai.assert.equal($(".user").css("text-align"), "center", "The user class text align is correctly");
    });

});

suite("JavaScript tests", function() {

    test("Check name text box function", function() {
        $('#name').val('a');
        chai.assert.equal(document.getElementById('name').value, "a", "Wrong message for chat");
    });

    test("Check message text box function", function() {
        $('#text').val('hi');
       chai.assert.equal(document.getElementById('text').value, "hi", "Wrong message for chat");
    });
    
    // test("Check Server function", function() {
    //     clickElement($("#setname"));

    // });

    // test("Check Server function", function() {
    //     ws.onmessage = function(e){   
    //         var con = document.getElementById('backinfo');
   
    //        con.insertBefore(createChatPanel(JSON.parse(e.data)),con.children[0]);
    //        clickElement($("#btn"));
    //      }
        
    // });


//     test("Check name text box", function() {
//         $('#name').val('a');
//        //chai.assert.equal(document.getElementById('name').value, "a", "Wrong message for chat");
// clickElement($("#setname"));
//        ws.onmessage = function(e){   
//         var con = document.getElementById('backinfo');
//        con.insertBefore(createChatPanel(JSON.parse(e.data)),con.children[0]);
//        chai.assert.equal(document.getElementById('2span').val(),"a", "Wrong message for chat");
//      }
//       //chai.assert.equal(document.getElementById('a加入了房间').val(),"a", "Wrong message for chat");
//        //chai.assert.equal(document.getElementById('a加入了房间').value,"a", "Wrong message for chat");
 
//     });




    test("Check the function of the server to obtain the user name and return information", function() {
        

        clickElement($("#setname"));
        var timeout1;
        timeout1=setTimeout(clickset,0);
        function clickset(){
            chai.assert.equal(document.getElementById('2span').value,"a join into chat", "Wrong message for chat");
        };
     

    });








    test("Check the function of the server to obtain the message sent by the user and return the information", function() {
        $('#text').val('hi');
       var timeout2,timeout3;
       timeout2=setTimeout(clickbtn,0);
       function clickbtn(){
           clickElement($("#btn"));
       }
       timeout3=setTimeout(clickbtn,60);
    });



    // setup(function() {
    //     this.sessionData = [
    //         ["COMP3006 Lecture", new Date(2021, 8, 28, 9), "David Walker"],//0
    //         ["COMP3005 Lecture", new Date(2021, 8, 28, 11), "Shirley Atkinson"],
    //         ["COMP3006 Lab 1", new Date(2021, 8, 28, 14), "James Hayter"],//2
    //         ["COMP3005 Seminar", new Date(2021, 8, 28, 16), "Shirley Atkinson"],
    //         ["COMP3000 Lecture", new Date(2021, 8, 29, 9), "Amir Aly"],
    //         ["COMP3006 Lab 2", new Date(2021, 9, 1, 11), "James Hayter"],//3
    //         ["COMP3016 Lecture", new Date(2021, 8, 28, 9), "Swen Gaudl"],
    //         ["COMP3016 Lecture", new Date(2021, 9, 10, 9), "Swen Gaudl"]
    //     ];

    //     this.sessions = [
    //         new Session(this.sessionData[0][0], this.sessionData[0][1], this.sessionData[0][2]),//0
    //         new Session(this.sessionData[1][0], this.sessionData[1][1], this.sessionData[1][2]),
    //         new Session(this.sessionData[2][0], this.sessionData[2][1], this.sessionData[2][2]),//2
    //         new Session(this.sessionData[5][0], this.sessionData[5][1], this.sessionData[5][2]),//3
    //         new Session(this.sessionData[6][0], this.sessionData[6][1], this.sessionData[6][2]),
    //         new Session(this.sessionData[7][0], this.sessionData[7][1], this.sessionData[7][2])
    //     ]

    //     this.timetable = new Timetable()
    //     this.timetable.sessions.push(this.sessions[0]);
    //     this.timetable.sessions.push(this.sessions[2]);
        

    //     this.dayKeys = ["mon", "tue", "wed", "thu", "fri"];
    //     this.hourKeys = ["9", "11", "14", "16"];
    // });

    // teardown(function() {
    //     for (let i=0; i<this.dayKeys.length; i++) {
    //         for (let j=0; j<this.hourKeys.length; j++) {
    //             let key = "#" + this.dayKeys[i] + "_" + this.hourKeys[j];
    //             $(key).removeClass("active");
    //             $(key + "_title").remove();
    //             $(key + "_staff").remove();
    //         }
    //     }

    //     $("#errors").empty();
    // });

    // test("Check that the Session class works correctly", function() {
    //     // Initialise a new session object.
    //     let session = new Session(this.sessionData[0][0], this.sessionData[0][1], this.sessionData[0][2]);

    //     // Confirm that the object properties are stored correctly.
    //     chai.assert.equal(session.title, this.sessionData[0][0], "Session has wrong title");
    //     chai.assert.equal(session.sessionTime, this.sessionData[0][1], "Session has wrong sessionTime");
    //     chai.assert.equal(session.staff, this.sessionData[0][2], "Session has wrong staff");
    // });

    // test("Check that the Timetable class works correctly", function() {
    //     // Initialise a pair of session objects.
    //     let session1 = new Session(this.sessionData[0][0], this.sessionData[0][1], this.sessionData[0][2]);
    //     let session2 = new Session(this.sessionData[1][0], this.sessionData[1][1], this.sessionData[1][2]);

    //     // Use the session objects to initialise a timetable.
    //     let timetable = new Timetable();
    //     timetable.sessions.push(session1);
    //     timetable.sessions.push(session2);
        

    //     // Confirm that the timetable has been set up correctly.
    //     chai.assert.equal(timetable.sessions.length, 2, "Timetable has the wrong number of sessions");
    //     for (let i=0; i<2; i++) {
    //         chai.assert.equal(timetable.sessions[i].title, this.sessionData[i][0], "Session has wrong title");
    //         chai.assert.equal(timetable.sessions[i].sessionTime, this.sessionData[i][1], "Session has wrong sessionTime");
    //         chai.assert.equal(timetable.sessions[i].staff, this.sessionData[i][2], "Session has wrong staff");
    //     }
    // });

    // test("Check that the correct session ID is generated", function() {
    //     // Initialise a pair of session objects.
    //     let session1 = new Session(this.sessionData[0][0], this.sessionData[0][1], this.sessionData[0][2]);
    //     let session2 = new Session(this.sessionData[2][0], this.sessionData[2][1], this.sessionData[2][2]);

    //     // Confirm that the correct session ID was generated.
    //     chai.assert.equal("tue_9", session1.getSessionId(), "Session object generates incorrect ID");
    //     chai.assert.equal("tue_14", session2.getSessionId(), "Session object generates incorrect ID");
    // });

    // test("Check that displaying a single session works correctly", function() {
    //     // Initialise a session object.
    //     let session = new Session(this.sessionData[0][0], this.sessionData[0][1], this.sessionData[0][2]);
    //     let key = "#" + session.getSessionId();

    //     // Check that the session is not currently active.
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");

    //     // Render the session.
    //     session.renderSession();

    //     // Check that the session was rendered correctly.
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");
    //     chai.assert.equal($(key + "_title").text(), this.sessionData[0][0], "Rendered title is incorrect");
    //     chai.assert.equal($(key + "_staff").text(), this.sessionData[0][2], "Rendered staff is incorrect");
    // });

    // test("Check that clearing a single session works correctly", function() {
    //     // Get the session key and check that the session is not currently active.
    //     let key = "#" + this.sessions[0].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");

    //     // Render the session.
    //     this.sessions[0].renderSession();

    //     // Check that the session was rendered correctly.
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");

    //     // Remove the session.
    //     this.sessions[0].clearSession();

    //     // Check that the session has been removed.
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should be inactive");
    // });

    // test("Check that displaying the full timetable works correctly", function() {
    //     // Check that the sessions are not currently active.
    //     let key = "#" + this.timetable.sessions[0].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");
    //     key = "#" + this.timetable.sessions[1].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");
        

    //     // Render the timetable.
    //     this.timetable.displayTimetable();

    //     // Check that the sessions are currently active.
    //     key = "#" + this.timetable.sessions[0].getSessionId();
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");
    //     key = "#" + this.timetable.sessions[1].getSessionId();
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");
    // });

    // test("Check that clearing the timetable works correctly", function() {
    //     // Check that the sessions are not currently active.
    //     let key = "#" + this.timetable.sessions[0].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");
    //     key = "#" + this.timetable.sessions[1].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");

    //     // Render the timetable.
    //     this.timetable.displayTimetable();

    //     // Check that the sessions are now currently active.
    //     key = key = "#" + this.timetable.sessions[0].getSessionId();
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");
    //     key = "#" + this.timetable.sessions[1].getSessionId();
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");

    //     // Clear the timetable.
    //     this.timetable.clearTimetable();

    //     // Check that the sessions have been made inactive.
    //     key = "#" + this.timetable.sessions[0].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should be inactive");
    //     key = "#" + this.timetable.sessions[1].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should be inactive");
    // });

    // test("Check that the buildTimetable function works correctly", function() {
    //     let timetable = buildTimetable(sampleTimetable);
    //     chai.assert.equal(timetable.sessions.length, 3, "Wrong number of sessions");
    //     chai.assert.equal(timetable.sessions[0].title, "COMP3006 Lecture");
    //     chai.assert.equal(timetable.sessions[1].title, "COMP3006 Lab 1");
    //     chai.assert.equal(timetable.sessions[2].title, "COMP3006 Lab 2");
    // });

    // test("Check that the Display Timetable and Clear Timetable buttons work correctly", function() {
    //     // Check that the sessions are not currently active.
    //     let key = "#" + this.sessions[0].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");
    //     key = "#" + this.sessions[2].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");
    //     key = "#" + this.sessions[3].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should not be active until it's rendered");

    //     // Click the display button.
    //     console.log($("#display"));
    //     clickElement($("#display"));
    //     //document.getElementById("mon_9").innerHTML=this.sessions[4].getSessionId();
    //     // Check that the sessions are now currently active.
    //     key = key = "#" + this.sessions[0].getSessionId();
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");
    //     key = "#" + this.sessions[2].getSessionId();
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");
    //     key = "#" + this.sessions[3].getSessionId();
    //     console.log("key: " + key);
    //     chai.assert.isTrue($(key).hasClass("active"), "This session has been rendered and should active");

    //     // Click the clear button.
    //     clickElement($("#clear"));

    //     // Check that the sessions are not currently active.
    //     key = "#" + this.sessions[0].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should have been deactivated");
    //     key = "#" + this.sessions[2].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should have been deactivated");
    //     key = "#" + this.sessions[3].getSessionId();
    //     chai.assert.isFalse($(key).hasClass("active"), "This session should have been deactivated");
    // });

    // test("Check that errors are dealt with correctly", function() {
    //     // Check that there are no errors displayed.
    //     chai.assert.equal($("#errors li").length, 0, "Wrong number of errors displayed");

    //     // Set up a timetable with some errors.
    //     let timetable = new Timetable();
    //     timetable.sessions.push(this.sessions[0]);
    //     timetable.sessions.push(this.sessions[4]);
    //     timetable.sessions.push(this.sessions[5]);

    //     // Render the timetable.
    //     timetable.displayTimetable();

    //     // Check that the two errors are displayed.
    //     chai.assert.equal($("#errors li").length, 2 , "Wrong number of errors displayed");

    //     let lis = [];
    //     $("#errors li").each(function() {
    //         lis.push($(this).text());
    //     });
    //     chai.assert.equal(lis[0], "COMP3016 Lecture clashes with COMP3006 Lecture", "Wrong error message for module clash");
    //     chai.assert.equal(lis[1], "COMP3016 Lecture is scheduled at an invalid time", "Wrong message for invalid session time");
    // });

    
});