// 	Gerben Pellekaan
// Software Developer

	var aantalFris = 0;  // Begin aantal fris. Hij is 0 omdat de gebruiker nog niks besteld heeft.
	var aantalBier = 0;  // Begin aantal bier. Hij is 0 omdat de gebruiker nog niks besteld heeft.
	var aantalWijn = 0;  // Begin aantal wijn. Hij is 0 omdat de gebruiker nog niks besteld heeft.

	var bitterbal;
	var schalen8 = 0;
	var schalen16 = 0;

	var totaalFris;
	var totaalBier;
	var totaalWijn;
	var totaalBitterbal8;
	var totaalBitterbal16;
	var totaalBedrag;

	var bestelling;
	var aantal;

		while (bestelling != "stop") { // Als de gebruiker stop invoert dan stopt de while loop en print hij de kassabon naar het scherm.

			bestelling = prompt ("Welke bestelling wilt u toevoegen?") .toLowerCase();

			// Fris-------------------------------------------------------------------
			if (bestelling == "fris") {
				aantal = parseInt(prompt ("Hoeveel fris wilt u toevoegen?"));

				aantalFris = aantalFris + aantal;

				alert (aantalFris+ "x fris in totaal.");
			}		

			// Bier-------------------------------------------------------------------
				if (bestelling == "bier") {
					aantal = parseInt(prompt ("Hoeveel bier wilt u toevoegen?"));

					aantalBier = aantalBier + aantal;

					alert (aantalBier+ "x bier in totaal.");
				}

			// Wijn-------------------------------------------------------------------
					if (bestelling == "wijn") {
						aantal = parseInt(prompt ("Hoeveel wijn wilt u toevoegen?"));

						aantalWijn = aantalWijn + aantal;

						alert (aantalWijn+ "x wijn in totaal.");
					}

			// Snack-------------------------------------------------------------------
						if (bestelling == "snack") {
							bitterbal = parseInt(prompt("Hoeveel bitterballen wilt u toevoegen? (8 of 16)"));

							if (bitterbal == "8") {
								aantal = parseInt(prompt("Hoeveel schalen van 8 bitterballen wilt u?"));

								schalen8 = (schalen8 + aantal);

								alert (schalen8+ " schalen van 8 bitterballen in totaal.");
							}

								if (bitterbal == "16") {
									aantal = parseInt(prompt("Hoeveel schalen van 16 bitterballen wilt u?"));

									schalen16 = (schalen16 + aantal);

									alert (schalen16+ " schalen van 16 bitterballen in totaal.");
								}

							if (bitterbal != "8" && bitterbal != "16") {
								alert ("'U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
							}
						}

			if (bestelling != "fris" && bestelling != "bier" && bestelling != "wijn" && bestelling != "stop" && bestelling != "snack") {
				alert ("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
			}
		}

		function kassabon (euroFris, euroBier, euroWijn, euroBitterbal8, euroBitterbal16) {

			document.write ("<h2>Menu</h2>");
			document.write ("<li>Fris: €" +euroFris+ " per stuk. </li><br>");
			document.write ("<li>Bier: €" +euroBier+ " per stuk. </li><br>");
			document.write ("<li>Wijn: €" +euroWijn+ " per stuk. </li><br>");
			document.write ("<li>Bitterballen: €" +euroBitterbal8+ " per 8. </li><br>");
			document.write ("<li>Bitterballen: €" +euroBitterbal16+ " per 16. </li><br><br>");
			document.write ("<h3>Kassabon</h3>");

			if (aantalFris > 0) {
				document.write ("U heeft " +aantalFris+ "x fris besteld. <br>");
			}
				if (aantalBier > 0) {
					document.write ("U heeft " +aantalBier+ "x bier besteld. <br>");
				}
					if (aantalWijn > 0) {
						document.write ("U heeft " +aantalWijn+ "x wijn besteld. <br>");
					}
						if (schalen8 > 0) {
							document.write ("U heeft " +schalen8+ "x schaal van 8 bitterballen besteld. <br>");
						}
							if (schalen16 > 0) {
								document.write ("U heeft " +schalen16+ "x schaal van 16 bitterballen besteld. <br>");
							}	

			totaalFris = (aantalFris * euroFris);
			totaalBier = (aantalBier * euroBier);
			totaalWijn = (aantalWijn * euroWijn);
			totaalBitterbal8 = (schalen8 * euroBitterbal8);
			totaalBitterbal16 = (schalen16 * euroBitterbal16);

			if (aantalFris > 0) {
				document.write ("<br>" +aantalFris+ "x fris = €" +totaalFris);
			}
				if (aantalBier > 0) {
					document.write ("<br>" +aantalBier+ "x bier = €" +totaalBier);
				}
					if (aantalWijn > 0) {
						document.write ("<br>" +aantalWijn+ "x wijn = €" +totaalWijn);
					}
						if (schalen8 > 0) {
							document.write ("<br>" +schalen8+ "x schaal van 8 bitterballen = €" +totaalBitterbal8);
						}
							if (schalen16 > 0) {
								document.write ("<br>" +schalen16+ "x schaal van 16 bitterballen = €" +totaalBitterbal16);
							}	

			totaalBedrag = (totaalFris + totaalBier + totaalWijn + totaalBitterbal8 + totaalBitterbal16);

			document.write("<br><h4>TOTAAL: €" +totaalBedrag+ "</h4>");
		}

		kassabon(1.89, 2.80, 3.50, 4.00, 8.00); // Hier kan je het bedrag van de drankjes veranderen.
