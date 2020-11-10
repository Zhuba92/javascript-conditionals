var count = 0;
var taxRate = 0;
var taxAmount = 0;


$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the
		// number of button clicks
        count++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(count);

		// When the count gets to 10, reset it to 0
        if(count === 10)
        {
            count = 0;
        }

	}


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear
        var birthYear = parseInt($("#birthYear").val());
        var age = 2020 - birthYear;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if(age < 18)
        {
            $("#birthYearOutput").text("Child");
        }

        // If they are 18 or over, print "Adult" instead
        else
        {
            $("#birthYearOutput").text("Adult");
        }

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmount = $("#purchaseAmount").val();
        var purchaseAmountNum = parseFloat(purchaseAmount);

        // Get the state from the text box with ID "state"
        var state = $("#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        if(state === "WI")
        {
            taxAmount = purchaseAmountNum * 0.05;
            $("#salesTaxOutput").text(taxAmount.toFixed(2));
        }
        else if (state === "IL")
        {
            taxAmount = purchaseAmountNum * 0.8;
            $("#salesTaxOutput").text(taxAmount.toFixed(2));
        }
        else if (state === "MN")
        {
            taxAmount = purchaseAmountNum * 0.075;
            $("#salesTaxOutput").text(taxAmount.toFixed(2));
        }
        else if (state === "MI")
        {
            taxAmount = purchaseAmountNum * 0.055;
            $("#salesTaxOutput").text(taxAmount.toFixed(2));
        }
        else
        {
            $("#salesTaxOutput").text("Invalid entry");
        }

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"


        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        var catAge = parseInt($("#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (catAge < 2)
        {
            $("#catAgeOutput").text("Kitten chow");
        }
        else if (catAge >= 2 && catAge <= 10)
        {
            $("#catAgeOutput").text("adult chow");
        }
        else
        {
            $("#catAgeOutput").text("senior chow");
        }

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        var faceValueD = "";
        if (faceValue === 2)
        {
            faceValueD = "Two";
        }
        else if (faceValue === 3)
        {
            faceValueD = "Three";
        }
        else if (faceValue === 4)
        {
            faceValueD = "Four";
        }
        else if (faceValue === 5)
        {
            faceValueD = "Five";
        }
        else if (faceValue === 6)
        {
            faceValueD = "Six";
        }
        else if (faceValue === 7)
        {
            faceValueD = "Seven";
        }
        else if (faceValue === 8)
        {
            faceValueD = "Eight";
        }
        else if (faceValue === 9)
        {
            faceValueD = "Nine";
        }
        else if (faceValue === 10)
        {
            faceValueD = "Ten";
        }
        else if (faceValue === 1)
        {
            faceValueD = "Ace";
        }
        else if (faceValue === 11)
        {
            faceValueD = "Jack";
        }
        else if (faceValue === 12)
        {
            faceValueD = "Queen";
        }
        else if (faceValue === 13)
        {
            faceValueD = "King";
        }

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        var suitValue = "";
        if (suit === 1)
        {
            suitValue = "Clubs";
        }
        else if (suit === 2)
        {
            suitValue = "Spades";
        }
        else if (suit === 3)
        {
            suitValue = "Hearts";
        }
        else if (suit === 4)
        {
            suitValue = "Diamonds";
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(`${faceValueD} of ${suitValue}`);


    }

});