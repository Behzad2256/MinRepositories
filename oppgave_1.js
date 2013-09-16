

var id = "1"; // id er variabel som har vedi 1. 

function endrefarge() //function for å endre farge på alle språktyper som er listet etter førstebokstaven
	{

		for(id<=23;id++;)//en for løkke som endrer verdien til id, slik at fuctionen kan hente verdien av de forskjellige form/select-ene
		{
			var li = document.getElementById(id).innerHTML; // henter tekst fra form/select etter id

			if(li.charAt(0)=="A"||li.charAt(0)=="G"||li.charAt(0)=="L"||li.charAt(0)=="F")
// tar førstebokstave i stringen li og sammenlikner det med den bokstaven som er gitt og gir stringen farge etter det osv... og hvis førstebokstaven er lik det som er gitt 
			{
				document.getElementById(id).innerHTML=(li.fontcolor("blue")); //fargen blå
			}
			if(li.charAt(0)=="B"||li.charAt(0)=="G"||li.charAt(0)=="P")
			{
				document.getElementById(id).innerHTML=(li.fontcolor("green"));
			}
	
			if(li.charAt(0)=="C"||li.charAt(0)=="H"||li.charAt(0)=="R")
			{
				document.getElementById(id).innerHTML=(li.fontcolor("yellow"));
			}
			if(li.charAt(0)=="E"||li.charAt(0)=="J"||li.charAt(0)=="S")
			{
				document.getElementById(id).innerHTML=(li.fontcolor("red"));
			}
	
		}

	}


function visTxt()
	{
		var språktype="";
 //En variabel som seinere får verdien av det språket som blir valgt i dropdown menyen. idielt for å skrive ut navnet på det språket som blir valgt. 

		språktype = document.getElementById("select_id").value; 
//Henter språk/verdien fra dropdown menyen

		if(språktype=="")
		{
			document.getElementById("melding").innerHTML="Velg et språk ";}//Hvis det ikke er noe verdi valgt, et tomt felt, skal denne if setningen skriv velg et språk

		else{document.getElementById("melding").innerHTML="Du har valgt programeringsspråk " +språktype; //Når det er valgt en verdi skal denne else setningen skrive "Du har valgt programeringsspråk" + språktype. språktype er variablen med verdi valgt språk.

		}

		}
		
 
function hei()
{
	alert(språkliste);
}


